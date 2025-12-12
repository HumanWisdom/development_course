import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SharedService } from './shared.service';
import { ProgramType } from '../models/program-model';

export interface HomeState {
  expandedSections: { [sectionId: string]: boolean };
  showAllCards: { [sectionId: string]: boolean };
  cachedContent: { [preferenceId: string]: any };
  lastActivePreference: string | null;
  seenCards: { [cardId: string]: boolean }; // Track which cards have been seen/read
}

@Injectable({
  providedIn: 'root'
})
export class HomeStateService {
  private initialState: HomeState = {
    expandedSections: {},
    showAllCards: {},
    cachedContent: {},
    lastActivePreference: null,
    seenCards: {}
  };

  private currentProgramId: number | null = null;
  private stateSubject = new BehaviorSubject<HomeState>(this.loadStateFromStorage());
  public state$ = this.stateSubject.asObservable();

  constructor() {
    // Initialize with current program ID
    this.currentProgramId = SharedService.ProgramId;
    // Load state from localStorage on initialization
    this.loadStateFromStorage();
  }

  /**
   * Get storage key based on current ProgramId
   */
  private getStorageKey(): string {
    const programId = SharedService.ProgramId || this.currentProgramId;
    return `homeState_${programId}`;
  }

  /**
   * Get storage key for a specific program
   */
  private getStorageKeyForProgram(programId: number): string {
    return `homeState_${programId}`;
  }

  /**
   * Check if program has changed and clear other program's data if needed
   */
  private checkAndClearOtherProgramData(): void {
    const currentProgramId = SharedService.ProgramId;
    
    // If program has changed, clear the other program's data
    if (this.currentProgramId !== null && this.currentProgramId !== currentProgramId) {
      console.log(`Program changed from ${this.currentProgramId} to ${currentProgramId}, clearing other program's data`);
      
      // Clear the previous program's data
      const previousProgramKey = this.getStorageKeyForProgram(this.currentProgramId);
      try {
        localStorage.removeItem(previousProgramKey);
        console.log(`Cleared data for program ${this.currentProgramId}`);
      } catch (error) {
        console.warn(`Failed to clear data for program ${this.currentProgramId}:`, error);
      }
    }
    
    // Update current program ID
    this.currentProgramId = currentProgramId;
  }

  private loadStateFromStorage(): HomeState {
    try {
      // Check and clear other program's data if program has changed
      this.checkAndClearOtherProgramData();
      
      const storageKey = this.getStorageKey();
      const savedState = localStorage.getItem(storageKey);
      if (savedState) {
        const parsed = JSON.parse(savedState);
        return { ...this.initialState, ...parsed };
      }
    } catch (error) {
      console.warn('Failed to load state from localStorage:', error);
    }
    return { ...this.initialState };
  }

  private saveStateToStorage(state: HomeState): void {
    try {
      // Check and clear other program's data if program has changed
      this.checkAndClearOtherProgramData();
      
      const storageKey = this.getStorageKey();
      localStorage.setItem(storageKey, JSON.stringify(state));
    } catch (error) {
      console.warn('Failed to save state to localStorage:', error);
    }
  }

  private updateState(partialState: Partial<HomeState>): void {
    const currentState = this.stateSubject.value;
    const newState = { ...currentState, ...partialState };
    this.stateSubject.next(newState);
    this.saveStateToStorage(newState);
  }

  // Section expansion state
  setSectionExpanded(sectionId: string, isExpanded: boolean): void {
    const currentState = this.stateSubject.value;
    const expandedSections = { ...currentState.expandedSections };
    expandedSections[sectionId] = isExpanded;
    this.updateState({ expandedSections });
  }

  getSectionExpanded(sectionId: string): boolean {
    return this.stateSubject.value.expandedSections[sectionId] || false;
  }

  // Show all cards state
  setShowAllCards(sectionId: string, showAll: boolean): void {
    const currentState = this.stateSubject.value;
    const showAllCards = { ...currentState.showAllCards };
    showAllCards[sectionId] = showAll;
    this.updateState({ showAllCards });
  }

  getShowAllCards(sectionId: string): boolean {
    return this.stateSubject.value.showAllCards[sectionId] || false;
  }

  // Content caching
  setCachedContent(preferenceId: string, content: any): void {
    const currentState = this.stateSubject.value;
    const cachedContent = { ...currentState.cachedContent };
    cachedContent[preferenceId] = {
      content,
      timestamp: Date.now()
    };
    this.updateState({ cachedContent });
  }

  getCachedContent(preferenceId: string): any | null {
    const cached = this.stateSubject.value.cachedContent[preferenceId];
    if (cached && this.isCacheValid(cached.timestamp)) {
      return cached.content;
    }
    return null;
  }

  private isCacheValid(timestamp: number): boolean {
    // Cache valid for 5 minutes
    const CACHE_DURATION = 5 * 60 * 1000;
    return (Date.now() - timestamp) < CACHE_DURATION;
  }

  // Active preference tracking
  setActivePreference(preferenceId: string): void {
    this.updateState({ lastActivePreference: preferenceId });
  }

  getActivePreference(): string | null {
    return this.stateSubject.value.lastActivePreference;
  }

  // Get current state snapshot
  getCurrentState(): HomeState {
    return this.stateSubject.value;
  }

  // Reset state for clean navigation (current program only)
  resetState(): void {
    this.checkAndClearOtherProgramData();
    this.stateSubject.next({ ...this.initialState });
    this.saveStateToStorage(this.initialState);
  }

  // Clear cache only (current program only)
  clearCache(): void {
    this.checkAndClearOtherProgramData();
    const currentState = this.stateSubject.value;
    this.updateState({ cachedContent: {} });
  }

  /**
   * Clear all data for a specific program
   */
  clearProgramData(programId: number): void {
    try {
      const storageKey = this.getStorageKeyForProgram(programId);
      localStorage.removeItem(storageKey);
      console.log(`Cleared all data for program ${programId}`);
    } catch (error) {
      console.warn(`Failed to clear data for program ${programId}:`, error);
    }
  }

  /**
   * Clear data for the other program (not the current one)
   * This is called when switching programs to ensure only one program's data exists
   */
  clearOtherProgramData(): void {
    const currentProgramId = SharedService.ProgramId;
    
    // Clear Adults data if current is Teenagers
    if (currentProgramId === ProgramType.Teenagers) {
      this.clearProgramData(ProgramType.Adults);
    }
    // Clear Teenagers data if current is Adults
    else if (currentProgramId === ProgramType.Adults) {
      this.clearProgramData(ProgramType.Teenagers);
    }
    
    // Update current program ID
    this.currentProgramId = currentProgramId;
  }

  // Mark card as seen/read
  markCardAsSeen(cardId: string): void {
    const currentState = this.stateSubject.value;
    const seenCards = { ...currentState.seenCards };
    seenCards[cardId] = true;
    this.updateState({ seenCards });
  }

  // Check if card has been seen/read
  isCardSeen(cardId: string): boolean {
    return this.stateSubject.value.seenCards[cardId] || false;
  }

  // Get all seen cards
  getSeenCards(): { [cardId: string]: boolean } {
    return { ...this.stateSubject.value.seenCards };
  }
}
