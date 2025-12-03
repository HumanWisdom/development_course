import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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

  private stateSubject = new BehaviorSubject<HomeState>(this.loadStateFromStorage());
  public state$ = this.stateSubject.asObservable();

  constructor() {
    // Load state from localStorage on initialization
    this.loadStateFromStorage();
  }

  private loadStateFromStorage(): HomeState {
    try {
      const savedState = localStorage.getItem('homeState');
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
      localStorage.setItem('homeState', JSON.stringify(state));
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

  // Reset state for clean navigation
  resetState(): void {
    this.stateSubject.next({ ...this.initialState });
    this.saveStateToStorage(this.initialState);
  }

  // Clear cache only
  clearCache(): void {
    const currentState = this.stateSubject.value;
    this.updateState({ cachedContent: {} });
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
