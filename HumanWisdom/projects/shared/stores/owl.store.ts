import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

/**
 * Owl Component State Interface
 */
export interface OwlState {
  isEnabled: boolean;
  isInitialized: boolean;
  lastUpdated: Date;
}

/**
 * Initial Owl State
 */
const initialState: OwlState = {
  isEnabled: true,
  isInitialized: false,
  lastUpdated: new Date()
};

/**
 * Owl Store - NgRx Component Store for managing owl component state
 * 
 * Features:
 * - Centralized state management for owl component visibility
 * - Prevents re-rendering once initialized
 * - Session persistence with localStorage
 * - Immutable state updates
 */
@Injectable({
  providedIn: 'root'
})
export class OwlStore extends ComponentStore<OwlState> {
  private readonly STORAGE_KEY = 'owl_component_state';

  constructor() {
    super(initialState);
    this.loadStateFromStorage();
  }

  // ========================================
  // SELECTORS - Read state reactively
  // ========================================

  /**
   * Select whether owl component is enabled
   */
  readonly isEnabled$: Observable<boolean> = this.select(
    state => state.isEnabled
  );

  /**
   * Select whether owl component has been initialized
   */
  readonly isInitialized$: Observable<boolean> = this.select(
    state => state.isInitialized
  );

  /**
   * Select last updated timestamp
   */
  readonly lastUpdated$: Observable<Date> = this.select(
    state => state.lastUpdated
  );

  /**
   * Select combined state - shows owl only if enabled and not initialized
   * This ensures it loads only once
   */
  readonly shouldShow$: Observable<boolean> = this.select(
    state => state.isEnabled && !state.isInitialized
  );

  // ========================================
  // UPDATERS - Synchronous state updates
  // ========================================

  /**
   * Mark owl component as initialized (called after first render)
   */
  readonly markAsInitialized = this.updater((state) => {
    const newState = {
      ...state,
      isInitialized: true,
      lastUpdated: new Date()
    };
    this.persistToStorage(newState);
    return newState;
  });

  /**
   * Enable owl component
   */
  readonly enable = this.updater((state) => {
    const newState = {
      ...state,
      isEnabled: true,
      lastUpdated: new Date()
    };
    this.persistToStorage(newState);
    return newState;
  });

  /**
   * Disable owl component
   */
  readonly disable = this.updater((state) => {
    const newState = {
      ...state,
      isEnabled: false,
      lastUpdated: new Date()
    };
    this.persistToStorage(newState);
    return newState;
  });

  /**
   * Reset owl state (e.g., for testing or when user logs out)
   */
  readonly reset = this.updater(() => {
    this.clearStorage();
    return { ...initialState };
  });

  /**
   * Update partial state
   */
  readonly updateState = this.updater((state, newState: Partial<OwlState>) => {
    const updatedState = {
      ...state,
      ...newState,
      lastUpdated: new Date()
    };
    this.persistToStorage(updatedState);
    return updatedState;
  });

  // ========================================
  // UTILITY METHODS
  // ========================================

  /**
   * Get current enabled status synchronously
   */
  getIsEnabled(): boolean {
    return this.get().isEnabled;
  }

  /**
   * Get current initialized status synchronously
   */
  getIsInitialized(): boolean {
    return this.get().isInitialized;
  }

  /**
   * Check if owl should be shown (enabled and not initialized)
   */
  getShouldShow(): boolean {
    const state = this.get();
    return state.isEnabled && !state.isInitialized;
  }

  // ========================================
  // PERSISTENCE METHODS
  // ========================================

  /**
   * Save state to localStorage
   */
  private persistToStorage(state: OwlState): void {
    try {
      const serialized = JSON.stringify({
        ...state,
        lastUpdated: state.lastUpdated.toISOString()
      });
      localStorage.setItem(this.STORAGE_KEY, serialized);
    } catch (error) {
      console.error('Error saving owl state to localStorage:', error);
    }
  }

  /**
   * Load state from localStorage
   */
  private loadStateFromStorage(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) {
        return;
      }

      const parsed = JSON.parse(stored);
      const lastUpdated = new Date(parsed.lastUpdated);

      // Restore state
      this.patchState({
        isEnabled: parsed.isEnabled,
        isInitialized: parsed.isInitialized,
        lastUpdated
      });
    } catch (error) {
      console.error('Error loading owl state from localStorage:', error);
      this.clearStorage();
    }
  }

  /**
   * Clear localStorage
   */
  private clearStorage(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing owl state from localStorage:', error);
    }
  }
}

