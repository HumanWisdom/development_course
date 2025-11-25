import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ProgramType } from '../models/program-model';
import { SharedService } from '../services/shared.service';

/**
 * Chat Message Interface
 */
export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
  suggestions?: string[]; // Array of suggested questions
  hideAvatar?: boolean;
  hideSender?: boolean;
}

/**
 * Chat State Interface
 */
export interface ChatState {
  messages: ChatMessage[];
  sessionId: string | null;
  isTyping: boolean;
  lastUpdated: Date;
  activeSuggestions: string[]; // Currently active suggestions
  programType: ProgramType | null; // Track which program (Adults/Teenagers) the chat belongs to
}

/**
 * Initial Chat State
 */
const initialState: ChatState = {
  messages: [],
  sessionId: null,
  isTyping: false,
  lastUpdated: new Date(),
  activeSuggestions: [],
  programType: null
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

  /**
   * Select currently active suggestions
   */
  readonly activeSuggestions$: Observable<string[]> = this.select(
    state => state.activeSuggestions
  );

  /**
   * Select program type
   */
  readonly programType$: Observable<ProgramType | null> = this.select(
    state => state.programType
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
   * Prepend history messages to the beginning of the chat
   * Filters out duplicate messages that already exist in the current chat
   */
  readonly prependHistoryMessages = this.updater((state, historyMessages: Array<{
    content: string;
    sender: 'user' | 'bot';
    timestamp: string;
  }>) => {
    // Convert history messages to ChatMessage format
    const convertedMessages: ChatMessage[] = historyMessages.map(msg => ({
      id: this.generateMessageId(),
      content: msg.content,
      sender: msg.sender,
      timestamp: new Date(msg.timestamp)
    }));

    // Filter out duplicate messages that already exist in current messages
    // Check for duplicates based on content, sender, and timestamp (within 5 minutes tolerance)
    const existingMessages = state.messages.filter(msg => !msg.isTyping);
    const uniqueHistoryMessages = convertedMessages.filter(historyMsg => {
      // Check if a similar message already exists
      const isDuplicate = existingMessages.some(existingMsg => {
        const contentMatch = existingMsg.content.trim() === historyMsg.content.trim();
        const senderMatch = existingMsg.sender === historyMsg.sender;
        
        // Check timestamp within 5 minutes tolerance (to account for slight time differences)
        const timeDiff = Math.abs(existingMsg.timestamp.getTime() - historyMsg.timestamp.getTime());
        const timeMatch = timeDiff < 5 * 60 * 1000; // 5 minutes in milliseconds
        
        return contentMatch && senderMatch && timeMatch;
      });
      
      return !isDuplicate;
    });

    const newState = {
      ...state,
      messages: [...uniqueHistoryMessages, ...state.messages],
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
   * Set program type
   */
  readonly setProgramType = this.updater((state, programType: ProgramType) => {
    const newState = {
      ...state,
      programType,
      lastUpdated: new Date()
    };
    this.persistToStorage(newState);
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

  /**
   * Set active suggestions
   */
  readonly setActiveSuggestions = this.updater((state, suggestions: string[]) => ({
    ...state,
    activeSuggestions: suggestions,
    lastUpdated: new Date()
  }));

  /**
   * Clear active suggestions
   */
  readonly clearActiveSuggestions = this.updater((state) => ({
    ...state,
    activeSuggestions: [],
    lastUpdated: new Date()
  }));

  // ========================================
  // EFFECTS - Async operations with side effects
  // ========================================

  /**
   * Add user message effect
   */
  readonly addUserMessage = this.effect((message$: Observable<string>) =>
    message$.pipe(
      tap((content: string) => {
        console.log('Adding user message:', content);
        console.log('Current active suggestions before user message:', this.get().activeSuggestions);
        
        const userMessage: ChatMessage = {
          id: this.generateMessageId(),
          content: content,
          sender: 'user',
          timestamp: new Date()
        };
        this.addMessage(userMessage);
        
        console.log('Current active suggestions after user message:', this.get().activeSuggestions);
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

        // Extract suggestions from bot message if it contains numbered list
        const suggestions = this.extractSuggestions(content);

        console.log('Extracted suggestions from bot message:', suggestions);

        // Update active suggestions if new suggestions are found
        if (suggestions.length > 0) {
          console.log('Setting new active suggestions:', suggestions);
          this.setActiveSuggestions(suggestions);
        }

        // Format content - remove numbered list if suggestions are shown as buttons
        let formattedContent = content.replace(/\n/g, '<br>');
        
        if (suggestions.length > 0) {
          // Remove the numbered list from the message text since we're showing it as buttons
          formattedContent = this.removeNumberedListFromContent(formattedContent);
        }

        const botMessage: ChatMessage = {
          id: this.generateMessageId(),
          content: formattedContent,
          sender: 'bot',
          timestamp: new Date(),
          suggestions: suggestions.length > 0 ? suggestions : undefined
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
   * Get current program type synchronously
   */
  getCurrentProgramType(): ProgramType | null {
    return this.get().programType;
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

      // Check if program type has changed
      const storedProgramType = parsed.programType !== undefined ? parsed.programType : null;
      const currentProgramType = SharedService.ProgramId;
      
      // If program type changed, clear the chat
      if (storedProgramType !== null && storedProgramType !== currentProgramType) {
        console.log('Program type changed from', storedProgramType, 'to', currentProgramType, '- clearing chat');
        this.clearStorage();
        return;
      }

      // Restore state - if programType is missing (legacy data), set it to current
      const programTypeToRestore = storedProgramType !== null ? storedProgramType : currentProgramType;
      this.setState({
        messages,
        sessionId: parsed.sessionId,
        isTyping: false,
        lastUpdated,
        activeSuggestions: parsed.activeSuggestions || [],
        programType: programTypeToRestore
      });
      
      // If programType was missing, persist it
      if (storedProgramType === null) {
        this.persistToStorage(this.get());
      }
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
    const currentProgramType = SharedService.ProgramId;
    const storedProgramType = this.get().programType;
    
    // If program type changed, clear and reinitialize
    if (storedProgramType !== null && storedProgramType !== currentProgramType) {
      console.log('Program type changed - clearing chat and reinitializing');
      this.clearChat();
      this.setProgramType(currentProgramType);
      this.setMessages(messages);
      return;
    }
    
    // Set program type if not set
    if (storedProgramType === null) {
      this.setProgramType(currentProgramType);
    }
    
    const currentMessages = this.get().messages;
    if (currentMessages.length === 0) {
      this.setMessages(messages);
      return;
    }

    // Split legacy combined intro into two separate welcome messages
    if (this.hasCombinedWelcomeMessage(currentMessages)) {
      const remainingMessages = currentMessages.slice(1);
      this.setMessages([...messages, ...remainingMessages]);
    }
  }

  /**
   * Detect older welcome-message state so it can be replaced/migrated
   */
  private hasCombinedWelcomeMessage(messages: ChatMessage[]): boolean {
    if (messages.length === 0) {
      return false;
    }

    const first = messages[0];
    if (first.sender !== 'bot') {
      return false;
    }

    const content = first.content || '';
    const contentLower = content.toLowerCase();
    const hasIntro = contentLower.includes('ask me a question');
    const hasForum = contentLower.includes('community forum');
    const hasLineBreak = content.includes('<br><br>');

    return hasIntro && hasForum && hasLineBreak;
  }

  /**
   * Extract numbered suggestions from bot message content
   */
  private extractSuggestions(content: string): string[] {
    const suggestions: string[] = [];
    
    console.log('Extracting suggestions from content:', content);
    
    // Only extract suggestions if the message contains the pattern that indicates it's a suggestions message
    // Look for phrases like "Please choose a number" or "Which of these" to identify suggestion messages
    const isSuggestionsMessage = content.includes('Please choose a number') || 
                                 content.includes('Which of these') ||
                                 content.includes('choose a number');
    
    if (!isSuggestionsMessage) {
      console.log('Not a suggestions message, skipping extraction');
      return suggestions;
    }
    
    // Look for numbered list patterns like "1. Why do I feel stressed"
    const numberedListRegex = /(\d+)\.\s*([^\n\r]+)/g;
    let match;
    
    while ((match = numberedListRegex.exec(content)) !== null) {
      const suggestion = match[2].trim();
      console.log('Found suggestion:', suggestion);
      if (suggestion) {
        suggestions.push(suggestion);
      }
    }
    
    console.log('Final extracted suggestions:', suggestions);
    return suggestions;
  }

  /**
   * Remove numbered list from message content when suggestions are shown as buttons
   */
  private removeNumberedListFromContent(content: string): string {
    // Remove numbered list lines like "1. Why do I feel stressed<br>2. Why do I feel anxious<br>3. How to manage stress<br>"
    // Keep the introductory text and the closing instruction
    const lines = content.split('<br>');
    const filteredLines = lines.filter(line => {
      // Keep lines that don't match the numbered list pattern
      return !line.match(/^\d+\.\s*.+$/);
    });
    
    return filteredLines.join('<br>');
  }

  /**
   * Get the full question text for a numbered input
   */
  getFullQuestionForNumber(input: string): string {
    const trimmedInput = input.trim();
    const numberMatch = trimmedInput.match(/^(\d+)$/);
    
    if (!numberMatch) {
      return input; // Not a number, return as-is
    }
    
    const selectedNumber = parseInt(numberMatch[1], 10);
    
    // Find the most recent bot message with suggestions
    const messages = this.get().messages;
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].sender === 'bot' && messages[i].suggestions) {
        const suggestions = messages[i].suggestions;
        console.log('Found suggestions in message:', suggestions);
        console.log('Selected number:', selectedNumber);
        
        if (selectedNumber >= 1 && selectedNumber <= suggestions.length) {
          const fullQuestion = suggestions[selectedNumber - 1];
          console.log('Expanding to:', fullQuestion);
          return fullQuestion;
        }
        break;
      }
    }
    
    console.log('No valid suggestion found, returning original input');
    return input; // No valid suggestion found
  }
}

