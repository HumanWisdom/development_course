import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
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

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private readonly ADULT_CHATBOT_URL = 'https://adults-staging.happierme.app/chat';
  private readonly TEEN_CHATBOT_URL = 'https://teenagers-staging.happierme.app/api/chat';
  private readonly HEALTH_CHECK_URL_ADULT = 'https://adults-staging.happierme.app/api/health';
  private readonly HEALTH_CHECK_URL_TEEN = 'https://teenagers-staging.happierme.app/api/health';

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
    // Array of welcome messages to randomly choose from
    const welcomeMessageOptions = [
      "Hi 👋 I'm Olly — how are you today? Can I help?",
      "Welcome! 🦉 I'm Olly, here to help you find what you need.",
      "Hi 👋 I'm Olly — your friendly guide to HappierMe.",
      "Hi 👋 I'm Olly — here to make your journey easier. What do you need today?",
      "Welcome! 🦉 I'm Olly, here to help you find clarity and calm"
    ];

    // Randomly select one welcome message
    const randomIndex = Math.floor(Math.random() * welcomeMessageOptions.length);
    const selectedWelcomeMessage = welcomeMessageOptions[randomIndex];

    // Get the program name for the community forum link
    const programName = SharedService.getprogramName();
    const communityForumUrl = `/${programName}/forum`;

    const welcomeMessages: ChatMessage[] = [
      {
        id: '1',
        content: selectedWelcomeMessage,
        sender: 'bot',
        timestamp: new Date()
      },
      {
        id: '2',
        content: `You can also ask a question in the <a href="${communityForumUrl}" onclick="window.open('${communityForumUrl}', '_self'); return false;">community forum</a>, where one of our coaches will answer your question.`,
        sender: 'bot',
        timestamp: new Date()
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
}
