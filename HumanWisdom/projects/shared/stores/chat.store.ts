import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * Chat Message Interface
 */
export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
}

/**
 * Chat State Interface
 */
export interface ChatState {
  messages: ChatMessage[];
  sessionId: string | null;
  isTyping: boolean;
  lastUpdated: Date;
}

/**
 * Initial Chat State
 */
const initialState: ChatState = {
  messages: [],
  sessionId: null,
  isTyping: false,
  lastUpdated: new Date()
};

/**
 * Chat Store - NgRx Component Store for managing chat session state
 * 
 * Features:
 * - Centralized state management for chat messages
 * - Session persistence with localStorage
 * - Immutable state updates
 * - Reactive selectors for components
 */
@Injectable({
  providedIn: 'root'
})
export class ChatStore extends ComponentStore<ChatState> {
  private readonly STORAGE_KEY = 'chatbot_session';
  private readonly SESSION_EXPIRY_HOURS = 24;

  constructor() {
    super(initialState);
    this.loadSessionFromStorage();
  }

  // ========================================
  // SELECTORS - Read state reactively
  // ========================================

  /**
   * Select all messages
   */
  readonly messages$: Observable<ChatMessage[]> = this.select(
    state => state.messages
  );

  /**
   * Select session ID
   */
  readonly sessionId$: Observable<string | null> = this.select(
    state => state.sessionId
  );

  /**
   * Select typing indicator status
   */
  readonly isTyping$: Observable<boolean> = this.select(
    state => state.isTyping
  );

  /**
   * Select last updated timestamp
   */
  readonly lastUpdated$: Observable<Date> = this.select(
    state => state.lastUpdated
  );

  /**
   * Select message count
   */
  readonly messageCount$: Observable<number> = this.select(
    state => state.messages.filter(msg => !msg.isTyping).length
  );

  /**
   * Select user messages only
   */
  readonly userMessages$: Observable<ChatMessage[]> = this.select(
    state => state.messages.filter(msg => msg.sender === 'user')
  );

  /**
   * Select bot messages only
   */
  readonly botMessages$: Observable<ChatMessage[]> = this.select(
    state => state.messages.filter(msg => msg.sender === 'bot' && !msg.isTyping)
  );

  // ========================================
  // UPDATERS - Synchronous state updates
  // ========================================

  /**
   * Add a new message to the chat
   */
  readonly addMessage = this.updater((state, message: ChatMessage) => {
    const newState = {
      ...state,
      messages: [...state.messages, message],
      lastUpdated: new Date()
    };
    this.persistToStorage(newState);
    return newState;
  });

  /**
   * Add multiple messages at once (useful for initialization)
   */
  readonly addMessages = this.updater((state, messages: ChatMessage[]) => {
    const newState = {
      ...state,
      messages: [...state.messages, ...messages],
      lastUpdated: new Date()
    };
    this.persistToStorage(newState);
    return newState;
  });

  /**
   * Set all messages (replace existing)
   */
  readonly setMessages = this.updater((state, messages: ChatMessage[]) => {
    const newState = {
      ...state,
      messages: [...messages],
      lastUpdated: new Date()
    };
    this.persistToStorage(newState);
    return newState;
  });

  /**
   * Remove a specific message by ID
   */
  readonly removeMessage = this.updater((state, messageId: string) => {
    const newState = {
      ...state,
      messages: state.messages.filter(msg => msg.id !== messageId),
      lastUpdated: new Date()
    };
    this.persistToStorage(newState);
    return newState;
  });

  /**
   * Remove typing indicator messages
   */
  readonly removeTypingIndicators = this.updater((state) => {
    const newState = {
      ...state,
      messages: state.messages.filter(msg => !msg.isTyping),
      lastUpdated: new Date()
    };
    this.persistToStorage(newState);
    return newState;
  });

  /**
   * Update session ID
   */
  readonly setSessionId = this.updater((state, sessionId: string) => {
    const newState = {
      ...state,
      sessionId,
      lastUpdated: new Date()
    };
    this.persistToStorage(newState);
    return newState;
  });

  /**
   * Set typing indicator status
   */
  readonly setTyping = this.updater((state, isTyping: boolean) => ({
    ...state,
    isTyping
  }));

  /**
   * Clear all messages and reset session
   */
  readonly clearChat = this.updater((state) => {
    const newState = {
      ...initialState,
      lastUpdated: new Date()
    };
    this.clearStorage();
    return newState;
  });

  /**
   * Update a specific message
   */
  readonly updateMessage = this.updater((state, { id, updates }: { id: string, updates: Partial<ChatMessage> }) => {
    const newState = {
      ...state,
      messages: state.messages.map(msg => 
        msg.id === id ? { ...msg, ...updates } : msg
      ),
      lastUpdated: new Date()
    };
    this.persistToStorage(newState);
    return newState;
  });

  // ========================================
  // EFFECTS - Async operations with side effects
  // ========================================

  /**
   * Add user message effect
   */
  readonly addUserMessage = this.effect((message$: Observable<string>) =>
    message$.pipe(
      tap((content: string) => {
        const userMessage: ChatMessage = {
          id: this.generateMessageId(),
          content: content,
          sender: 'user',
          timestamp: new Date()
        };
        this.addMessage(userMessage);
      })
    )
  );

  /**
   * Add bot message effect
   */
  readonly addBotMessage = this.effect((payload$: Observable<{ content: string, sessionId?: string }>) =>
    payload$.pipe(
      tap((payload: { content: string, sessionId?: string }) => {
        const { content, sessionId } = payload;
        
        if (sessionId) {
          this.setSessionId(sessionId);
        }

        // Convert \n to <br> for proper HTML line breaks
        const formattedContent = content.replace(/\n/g, '<br>');

        const botMessage: ChatMessage = {
          id: this.generateMessageId(),
          content: formattedContent,
          sender: 'bot',
          timestamp: new Date()
        };
        this.addMessage(botMessage);
      })
    )
  );

  /**
   * Add typing indicator effect
   */
  readonly addTypingIndicator = this.effect((trigger$: Observable<void>) =>
    trigger$.pipe(
      tap(() => {
        const typingMessage: ChatMessage = {
          id: 'typing-' + Date.now(),
          content: '',
          sender: 'bot',
          timestamp: new Date(),
          isTyping: true
        };
        this.addMessage(typingMessage);
        this.setTyping(true);
      })
    )
  );

  /**
   * Remove typing indicator effect
   */
  readonly removeTypingIndicator = this.effect((trigger$: Observable<void>) =>
    trigger$.pipe(
      tap(() => {
        this.removeTypingIndicators();
        this.setTyping(false);
      })
    )
  );

  // ========================================
  // UTILITY METHODS
  // ========================================

  /**
   * Get current session ID synchronously
   */
  getCurrentSessionId(): string | null {
    return this.get().sessionId;
  }

  /**
   * Get all messages synchronously
   */
  getAllMessages(): ChatMessage[] {
    return this.get().messages;
  }

  /**
   * Check if session is expired
   */
  private isSessionExpired(lastUpdated: Date): boolean {
    const now = new Date();
    const diffInHours = (now.getTime() - lastUpdated.getTime()) / (1000 * 60 * 60);
    return diffInHours > this.SESSION_EXPIRY_HOURS;
  }

  /**
   * Generate unique message ID
   */
  private generateMessageId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  // ========================================
  // PERSISTENCE METHODS
  // ========================================

  /**
   * Save state to localStorage
   */
  private persistToStorage(state: ChatState): void {
    try {
      const serialized = JSON.stringify({
        ...state,
        messages: state.messages.map(msg => ({
          ...msg,
          timestamp: msg.timestamp.toISOString()
        })),
        lastUpdated: state.lastUpdated.toISOString()
      });
      localStorage.setItem(this.STORAGE_KEY, serialized);
    } catch (error) {
      console.error('Error saving chat session to localStorage:', error);
    }
  }

  /**
   * Load state from localStorage
   */
  private loadSessionFromStorage(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) {
        return;
      }

      const parsed = JSON.parse(stored);
      const lastUpdated = new Date(parsed.lastUpdated);

      // Check if session is expired
      if (this.isSessionExpired(lastUpdated)) {
        this.clearStorage();
        return;
      }

      // Restore messages with Date objects
      const messages = parsed.messages.map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      }));

      // Restore state
      this.setState({
        messages,
        sessionId: parsed.sessionId,
        isTyping: false,
        lastUpdated
      });
    } catch (error) {
      console.error('Error loading chat session from localStorage:', error);
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
      console.error('Error clearing chat session from localStorage:', error);
    }
  }

  /**
   * Initialize with welcome messages
   */
  initializeWelcomeMessages(messages: ChatMessage[]): void {
    // Only add welcome messages if there are no existing messages
    const currentMessages = this.get().messages;
    if (currentMessages.length === 0) {
      this.setMessages(messages);
    }
  }
}

