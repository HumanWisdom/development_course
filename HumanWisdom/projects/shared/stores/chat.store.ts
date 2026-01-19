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
  allow_feedback?: boolean; // Whether thumbs up/down should be shown
  offer_related?: boolean; // Whether to offer related content
  is_followup?: boolean; // Whether this is a followup question
  feedback_given?: 'positive' | 'negative' | null; // Track user feedback
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
  userId: number | null; // Track which user the chat belongs to (guest vs logged-in)
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
  programType: null,
  userId: null
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

  /**
   * Select current user id
   */
  readonly userId$: Observable<number | null> = this.select(
    state => state.userId
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
   * Set user ID
   */
  readonly setUserId = this.updater((state, userId: number | null) => {
    const newState = {
      ...state,
      userId,
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
  readonly addBotMessage = this.effect((payload$: Observable<{ 
    content: string, 
    sessionId?: string,
    allow_feedback?: boolean,
    offer_related?: boolean,
    is_followup?: boolean
  }>) =>
    payload$.pipe(
      tap((payload: { 
        content: string, 
        sessionId?: string,
        allow_feedback?: boolean,
        offer_related?: boolean,
        is_followup?: boolean
      }) => {
        const { content, sessionId, allow_feedback, offer_related, is_followup } = payload;
        
        if (sessionId) {
          this.setSessionId(sessionId);
        }

        console.log('🔵 ADD BOT MESSAGE - Raw content received:', content);
        console.log('🔵 Content type:', typeof content);
        console.log('🔵 Has <li> tags:', content.includes('<li>'));
        console.log('🔵 Has <ol> tags:', content.includes('<ol>'));
        
        // Extract suggestions from bot message if it contains numbered list
        const suggestions = this.extractSuggestions(content);

        console.log('🔵 Extracted suggestions from bot message:', suggestions);

        // Update active suggestions if new suggestions are found
        if (suggestions.length > 0) {
          console.log('🔵 Setting new active suggestions:', suggestions);
          this.setActiveSuggestions(suggestions);
        } else {
          console.log('🔵 No suggestions found, clearing active suggestions');
        }

        // Format content - remove numbered list if suggestions are shown as buttons
        let formattedContent = content.replace(/\n/g, '<br>');
        
        if (suggestions.length > 0) {
          // Remove the numbered list from the message text since we're showing it as buttons
          formattedContent = this.removeNumberedListFromContent(formattedContent);
          console.log('🔵 Content after removing list:', formattedContent);
        }

        const botMessage: ChatMessage = {
          id: this.generateMessageId(),
          content: formattedContent,
          sender: 'bot',
          timestamp: new Date(),
          suggestions: suggestions.length > 0 ? suggestions : undefined,
          allow_feedback,
          offer_related,
          is_followup,
          feedback_given: null
        };
        console.log('🔵 Created bot message with suggestions:', botMessage.suggestions);
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
   * Get current user ID synchronously
   */
  getCurrentUserId(): number | null {
    return this.get().userId;
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
        // If no stored session, welcome messages will be initialized by ChatbotService
        return;
      }

      const parsed = JSON.parse(stored);
      const lastUpdated = new Date(parsed.lastUpdated);

      // Check if session is expired
      if (this.isSessionExpired(lastUpdated)) {
        this.clearStorage();
        // Welcome messages will be initialized by ChatbotService
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

      // Check if user has changed (guest vs logged-in)
      const storedUserId: number | null =
        typeof parsed.userId === 'number' ? parsed.userId : null;
      const currentUserId = SharedService.getUserId();

      // If we now have a logged-in user and the stored session either belongs to a different
      // user or has no user information (legacy/guest), clear the chat so guest history
      // is not shown to the logged-in user
      if (currentUserId && currentUserId > 0) {
        if (storedUserId === null || storedUserId !== currentUserId) {
          console.log(
            'User changed or missing in stored chat session. Clearing chat for userId:',
            currentUserId
          );
          this.clearStorage();
          // Welcome messages will be initialized by ChatbotService
          return;
        }
      }

      // If program type changed, clear the chat
      if (storedProgramType !== null && storedProgramType !== currentProgramType) {
        console.log('Program type changed from', storedProgramType, 'to', currentProgramType, '- clearing chat');
        this.clearStorage();
        // Welcome messages will be initialized by ChatbotService
        return;
      }

      // Restore state - if programType or userId are missing (legacy data), set them to current
      const programTypeToRestore = storedProgramType !== null ? storedProgramType : currentProgramType;
      const userIdToRestore =
        storedUserId !== null
          ? storedUserId
          : (currentUserId && currentUserId > 0 ? currentUserId : null);

      this.setState({
        messages,
        sessionId: parsed.sessionId,
        isTyping: false,
        lastUpdated,
        activeSuggestions: parsed.activeSuggestions || [],
        programType: programTypeToRestore,
        userId: userIdToRestore
      });
      
      // If programType or userId were missing, persist updated state
      if (storedProgramType === null || storedUserId === null) {
        this.persistToStorage(this.get());
      }
    } catch (error) {
      console.error('Error loading chat session from localStorage:', error);
      this.clearStorage();
    }
    
    // After loading, if messages are empty, the service will initialize welcome messages
    // This is handled by ChatbotService.ensureWelcomeMessages() when component loads
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
    const currentUserId = SharedService.getUserId();
    const storedProgramType = this.get().programType;
    const storedUserId = this.get().userId;
    
    // If program type changed, clear and reinitialize
    if (storedProgramType !== null && storedProgramType !== currentProgramType) {
      console.log('Program type changed - clearing chat and reinitializing');
      this.clearChat();
      this.setProgramType(currentProgramType);
      this.setUserId(currentUserId && currentUserId > 0 ? currentUserId : null);
      this.setMessages(messages);
      return;
    }
    
    // Set program type if not set
    if (storedProgramType === null) {
      this.setProgramType(currentProgramType);
    }

    // Set userId if not set
    if (storedUserId === null) {
      this.setUserId(currentUserId && currentUserId > 0 ? currentUserId : null);
    }
    
    const currentMessages = this.get().messages;
    // Filter out typing indicators when checking if messages are empty
    const nonTypingMessages = currentMessages.filter(msg => !msg.isTyping);
    
    if (nonTypingMessages.length === 0) {
      console.log('Store is empty - setting welcome messages');
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
    
    console.log('===== EXTRACTING SUGGESTIONS =====');
    console.log('Raw content:', content);
    console.log('Content length:', content.length);
    
    const tempSuggestions: string[] = [];
    
    // Method 1: Extract from HTML ordered list (<li> tags)
    // Handle both regular newlines and escaped \n characters
    const liRegex = /<li>([^<]+)<\/li>/gi;
    let liMatch;
    const matches = content.match(liRegex);
    console.log('Regex matches found:', matches);
    
    if (matches) {
      for (const match of matches) {
        const suggestion = match.replace(/<\/?li>/gi, '').trim();
        console.log('Found suggestion in <li> tag:', suggestion);
        if (suggestion) {
          tempSuggestions.push(suggestion);
        }
      }
    }
    
    // Method 2: If no <li> tags found, try plain numbered list format "1. Text"
    if (tempSuggestions.length === 0) {
      console.log('No <li> tags found, trying numbered list format');
      const lines = content.split(/[\n\r<]/);
      for (const line of lines) {
        const match = line.match(/^(\d+)\.\s*(.+)$/);
        if (match && match[2]) {
          const suggestion = match[2].trim();
          console.log('Found suggestion in numbered list:', suggestion);
          if (suggestion) {
            tempSuggestions.push(suggestion);
          }
        }
      }
    }
    
    console.log('Total temp suggestions found:', tempSuggestions.length, tempSuggestions);
    
    // Only treat as suggestions if:
    // 1. We found at least 2 numbered items (likely a list of options)
    // 2. AND the message contains suggestion-related phrases
    const hasSuggestionPhrases = 
      content.includes('choose a number') ||
      content.includes('Please choose a number') ||
      content.includes('Which of these') ||
      content.includes('closest to what you need') ||
      content.includes('related topics') ||
      content.includes('select a number') ||
      content.includes('pick a number') ||
      content.includes('type a number') ||
      content.includes('type the number');
    
    console.log('Has suggestion phrases:', hasSuggestionPhrases);
    
    // If we have multiple numbered items AND suggestion phrases, treat as suggestions
    if (tempSuggestions.length >= 2 && hasSuggestionPhrases) {
      suggestions.push(...tempSuggestions);
      console.log('✅ DETECTED SUGGESTIONS LIST with', suggestions.length, 'options:', suggestions);
    } else {
      console.log('❌ NOT a suggestions message - found', tempSuggestions.length, 'numbered items, hasSuggestionPhrases:', hasSuggestionPhrases);
    }
    
    console.log('===== END EXTRACTION =====');
    return suggestions;
  }

  /**
   * Remove numbered list from message content when suggestions are shown as buttons
   */
  private removeNumberedListFromContent(content: string): string {
    // Remove HTML ordered lists (<ol>...</ol>) since we're showing them as buttons
    let cleanedContent = content;
    
    // Find and remove <ol>...</ol> blocks by finding the opening and closing tags
    const olStartIndex = cleanedContent.indexOf('<ol>');
    if (olStartIndex !== -1) {
      const olEndIndex = cleanedContent.indexOf('</ol>', olStartIndex);
      if (olEndIndex !== -1) {
        // Remove everything from <ol> to </ol> inclusive
        cleanedContent = cleanedContent.substring(0, olStartIndex) + 
                        cleanedContent.substring(olEndIndex + 5);
      }
    }
    
    // Also remove plain numbered list lines like "1. Why do I feel stressed<br>"
    // Keep the introductory text and the closing instruction
    const lines = cleanedContent.split('<br>');
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

