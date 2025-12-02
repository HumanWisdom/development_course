import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';
import { ProgramType } from '../models/program-model';
import { ChatStore, ChatMessage } from '../stores/chat.store';

export interface ChatbotRequest {
  message: string;
  session_id?: string;
}

export interface ChatbotResponse {
  status: 'success' | 'error';
  response: string;
  is_followup: boolean;
  session_id: string;
}

export interface HistoryMessage {
  user_message: string;
  bot_response: string;
  created_at: string;
  is_followup: number;
}

export interface HistoryResponse {
  status: 'success' | 'error';
  history: HistoryMessage[];
  user_id: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private readonly ADULT_CHATBOT_URL = 'https://adults-staging.happierme.app/chat';
  private readonly TEEN_CHATBOT_URL = 'https://teenagers-staging.happierme.app/api/chat';
  private readonly HEALTH_CHECK_URL_ADULT = 'https://adults-staging.happierme.app/api/health';
  private readonly HEALTH_CHECK_URL_TEEN = 'https://teenagers-staging.happierme.app/api/health';
  private readonly HISTORY_URL_ADULT = 'https://adults-staging.happierme.app/api/history';
  private readonly HISTORY_URL_TEEN = 'https://teenagers-staging.happierme.app/api/history';

  // Expose store observables
  public messages$: Observable<ChatMessage[]>;
  public isTyping$: Observable<boolean>;
  public sessionId$: Observable<string | null>;
  public messageCount$: Observable<number>;

  constructor(
    private http: HttpClient,
    private chatStore: ChatStore,
    private router: Router
  ) {
    // Initialize observables from store after injection
    this.messages$ = this.chatStore.messages$;
    this.isTyping$ = this.chatStore.isTyping$;
    this.sessionId$ = this.chatStore.sessionId$;
    this.messageCount$ = this.chatStore.messageCount$;
    
    this.initializeWelcomeMessage();
  }

  private initializeWelcomeMessage(): void {
    // Get the program name for the community forum link
    const programName = SharedService.getprogramName();
    const communityForumUrl = `/${programName}/forum`;

    const introMessages = [
      `Hi 👋 I’m Olly — how are you today? Can I help?`,
      `Welcome! 🦉 I’m Olly, here to help you find what you need.`,
      `Hi 👋 I’m Olly — your friendly guide to HappierMe.`,
      `Hi 👋 I’m Olly — here to make your journey easier. What do you need today?`,
      `Welcome! 🦉 I’m Olly, here to help you find clarity and calm`
    ];

    const randomIntro = introMessages[Math.floor(Math.random() * introMessages.length)];

    const welcomeMessages: ChatMessage[] = [
      {
        id: 'welcome-intro-1',
        content: randomIntro,
        sender: 'bot',
        timestamp: new Date()
      },
      {
        id: 'welcome-intro-2',
        content: `You can also ask a question in the <a href="${communityForumUrl}" onclick="window.open('${communityForumUrl}', '_self'); return false;">community forum</a>, where one of our coaches will answer your question.`,
        sender: 'bot',
        timestamp: new Date(),
        hideAvatar: true,
        hideSender: true
      }
    ];
    this.chatStore.initializeWelcomeMessages(welcomeMessages);
  }

  private getChatbotUrl(): string {
    return SharedService.ProgramId === ProgramType.Adults 
      ? this.ADULT_CHATBOT_URL 
      : this.TEEN_CHATBOT_URL;
  }

  private getHealthCheckUrl(): string {
    return SharedService.ProgramId === ProgramType.Adults 
      ? this.HEALTH_CHECK_URL_ADULT 
      : this.HEALTH_CHECK_URL_TEEN;
  }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    let authToken = '';
    
    try {
      authToken = JSON.parse(token || '');
    } catch (e) {
      authToken = token || '';
    }

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    });
  }

  private getHistoryUrl(): string {
    return SharedService.ProgramId === ProgramType.Adults
      ? this.HISTORY_URL_ADULT
      : this.HISTORY_URL_TEEN;
  }

  checkHealth(): Observable<any> {
    return this.http.get(this.getHealthCheckUrl(), {
      headers: this.getAuthHeaders(),
      withCredentials: true
    });
  }

  sendMessage(message: string): Observable<ChatbotResponse> {
    const request: ChatbotRequest = {
      message: message,
      session_id: this.chatStore.getCurrentSessionId() || undefined
    };

    return this.http.post<ChatbotResponse>(
      this.getChatbotUrl(),
      request,
      { 
        headers: this.getAuthHeaders(),
        withCredentials: true
      }
    );
  }

  addUserMessage(content: string): void {
    this.chatStore.addUserMessage(content);
  }

  addBotMessage(content: string, sessionId?: string): void {
    this.chatStore.addBotMessage({ content, sessionId });
  }

  addTypingIndicator(): void {
    this.chatStore.addTypingIndicator();
  }

  removeTypingIndicator(): void {
    this.chatStore.removeTypingIndicator();
  }

  setTyping(isTyping: boolean): void {
    this.chatStore.setTyping(isTyping);
  }

  clearMessages(): void {
    this.chatStore.clearChat();
    this.initializeWelcomeMessage();
  }

  /**
   * Ensure welcome messages are present in the chat
   * If messages are empty, initialize with welcome messages
   * This is useful after logout or when the store is empty
   */
  ensureWelcomeMessages(): void {
    const currentMessages = this.chatStore.getAllMessages();
    // Filter out typing indicators when checking if messages are empty
    const nonTypingMessages = currentMessages.filter(msg => !msg.isTyping);
    
    if (nonTypingMessages.length === 0) {
      console.log('Store is empty - initializing welcome messages');
      this.initializeWelcomeMessage();
    } else {
      console.log('Store has messages, count:', nonTypingMessages.length);
    }
  }

  getCurrentSessionId(): string | null {
    return this.chatStore.getCurrentSessionId();
  }

  formatTimestamp(date: Date): string {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) {
      return 'Just Now';
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes} min ago`;
    } else {
      return date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      });
    }
  }

  /**
   * Get the full question text for display when user types a number
   */
  getFullQuestionForNumber(input: string): string {
    return this.chatStore.getFullQuestionForNumber(input);
  }

  /**
   * Load conversation history from the API
   * Filters by current user ID to ensure only the authenticated user's history is returned
   * Guest users (userId = 563) should not see old conversation history
   */
  loadHistory(): Observable<HistoryResponse> {
    const currentUserId = SharedService.getUserId();
    const GUEST_USER_ID = 563;
    
    // Don't load history for guest users
    if (currentUserId === GUEST_USER_ID) {
      console.log('Guest user detected. Skipping history load.');
      return new Observable<HistoryResponse>(observer => {
        observer.next({
          status: 'success',
          history: [],
          user_id: currentUserId.toString()
        });
        observer.complete();
      });
    }
    
    // Add user_id as query parameter if available
    let params = new HttpParams();
    if (currentUserId && currentUserId > 0) {
      params = params.set('user_id', currentUserId.toString());
    }

    return this.http.get<HistoryResponse>(this.getHistoryUrl(), {
      headers: this.getAuthHeaders(),
      params: params,
      withCredentials: true
    }).pipe(
      map((response: HistoryResponse) => {
        // Additional frontend filtering: ensure response user_id matches current user
        if (currentUserId && currentUserId > 0 && response.user_id) {
          const responseUserId = parseInt(response.user_id, 10);
          if (responseUserId !== currentUserId) {
            // If user_id doesn't match, return empty history
            console.warn('History response user_id does not match current user. Filtering out history.');
            return {
              ...response,
              history: []
            };
          }
        }
        return response;
      })
    );
  }

  /**
   * Prepend history messages to the current chat
   */
  prependHistoryMessages(historyMessages: HistoryMessage[]): void {
    // Convert API format to internal format
    const convertedMessages: Array<{
      content: string;
      sender: 'user' | 'bot';
      timestamp: string;
    }> = [];

    historyMessages.forEach(historyItem => {
      // Add user message
      convertedMessages.push({
        content: historyItem.user_message,
        sender: 'user',
        timestamp: historyItem.created_at
      });

      // Add bot response
      convertedMessages.push({
        content: historyItem.bot_response,
        sender: 'bot',
        timestamp: historyItem.created_at
      });
    });

    this.chatStore.prependHistoryMessages(convertedMessages);
  }
}
