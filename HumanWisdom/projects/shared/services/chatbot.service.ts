import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { SharedService } from './shared.service';
import { ProgramType } from '../models/program-model';

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
}

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

  private messagesSubject = new BehaviorSubject<ChatMessage[]>([]);
  public messages$ = this.messagesSubject.asObservable();

  private sessionId: string | null = null;
  private isTypingSubject = new BehaviorSubject<boolean>(false);
  public isTyping$ = this.isTypingSubject.asObservable();

  constructor(private http: HttpClient) {
    this.initializeWelcomeMessage();
  }

  private initializeWelcomeMessage(): void {
    const welcomeMessages: ChatMessage[] = [
      {
        id: '1',
        content: "Hi. I'm Olly. Ask me a question.",
        sender: 'bot',
        timestamp: new Date()
      },
      {
        id: '2',
        content: "You can also ask a question in the community forum, where one of our coaches will answer your question.",
        sender: 'bot',
        timestamp: new Date()
      }
    ];
    this.messagesSubject.next(welcomeMessages);
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
      session_id: this.sessionId || undefined
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
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: content,
      sender: 'user',
      timestamp: new Date()
    };

    const currentMessages = this.messagesSubject.value;
    this.messagesSubject.next([...currentMessages, userMessage]);
  }

  addBotMessage(content: string, sessionId?: string): void {
    if (sessionId) {
      this.sessionId = sessionId;
    }

    const botMessage: ChatMessage = {
      id: Date.now().toString(),
      content: content,
      sender: 'bot',
      timestamp: new Date()
    };

    const currentMessages = this.messagesSubject.value;
    this.messagesSubject.next([...currentMessages, botMessage]);
  }

  addTypingIndicator(): void {
    const typingMessage: ChatMessage = {
      id: 'typing-' + Date.now(),
      content: '',
      sender: 'bot',
      timestamp: new Date(),
      isTyping: true
    };

    const currentMessages = this.messagesSubject.value;
    this.messagesSubject.next([...currentMessages, typingMessage]);
  }

  removeTypingIndicator(): void {
    const currentMessages = this.messagesSubject.value;
    const filteredMessages = currentMessages.filter(msg => !msg.isTyping);
    this.messagesSubject.next(filteredMessages);
  }

  setTyping(isTyping: boolean): void {
    this.isTypingSubject.next(isTyping);
  }

  clearMessages(): void {
    this.messagesSubject.next([]);
    this.sessionId = null;
    this.initializeWelcomeMessage();
  }

  getCurrentSessionId(): string | null {
    return this.sessionId;
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
}
