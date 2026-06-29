import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';
import { ProgramType } from '../models/program-model';
import { ChatStore, ChatMessage } from '../stores/chat.store';
import { environment } from '../../../../HumanWisdom/projects/environments/environment';
import { renderChatMarkdown } from '../utils/chat-markdown.util';

export interface ChatbotRequest {
  message: string;
  session_id?: string;
}

export interface ChatbotResponse {
  status: 'success' | 'error';
  response: string;
  is_followup: boolean;
  session_id: string;
  allow_feedback?: boolean;
  offer_related?: boolean;
  has_more?: boolean;
}

export interface ChatStreamTokenEvent {
  type: 'token';
  token: string;
  rawContent: string;
  htmlContent: string;
}

export interface ChatStreamDoneEvent {
  type: 'done';
  rawContent: string;
  htmlContent: string;
  session_id: string;
  allow_feedback?: boolean;
  offer_related?: boolean;
  is_followup?: boolean;
  has_more?: boolean;
}

export type ChatStreamEvent = ChatStreamTokenEvent | ChatStreamDoneEvent;

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
  greeting?: string;
  response?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private readonly ADULT_CHATBOT_URL = environment.ADULT_CHATBOT_URL;
  private readonly TEEN_CHATBOT_URL = environment.TEEN_CHATBOT_URL
  private readonly HEALTH_CHECK_URL_ADULT = environment.HEALTH_CHECK_URL_ADULT
  private readonly HEALTH_CHECK_URL_TEEN = environment.HEALTH_CHECK_URL_TEEN
  private readonly HISTORY_URL_ADULT = environment.HISTORY_URL_ADULT
  private readonly HISTORY_URL_TEEN = environment.HISTORY_URL_TEEN
  private readonly RELATED_CONTENT_URL_ADULT = environment.RELATED_CONTENT_URL_ADULT
  private readonly RELATED_CONTENT_URL_TEEN = environment.RELATED_CONTENT_URL_TEEN
  private readonly FEEDBACK_URL_ADULT = environment.FEEDBACK_URL_ADULT
  private readonly FEEDBACK_URL_TEEN = environment.FEEDBACK_URL_TEEN
  private readonly TRACK_CLICK_URL_ADULT = environment.TRACK_CLICK_URL_ADULT
  private readonly TRACK_CLICK_URL_TEEN = environment.TRACK_CLICK_URL_TEEN

  public messages$: Observable<ChatMessage[]>;
  public isTyping$: Observable<boolean>;
  public sessionId$: Observable<string | null>;
  public messageCount$: Observable<number>;

  constructor(
    private http: HttpClient,
    private chatStore: ChatStore,
    private router: Router
  ) {
    this.messages$ = this.chatStore.messages$;
    this.isTyping$ = this.chatStore.isTyping$;
    this.sessionId$ = this.chatStore.sessionId$;
    this.messageCount$ = this.chatStore.messageCount$;
  }

  /**
   * Fetch personalized greeting from /api/history and initialize welcome messages.
   */
  initializeChatGreeting(): Observable<void> {
    this.ensureWelcomeMessages();

    return this.http.get<HistoryResponse>(this.getHistoryUrl(), {
      headers: this.getAuthHeaders(),
      withCredentials: true
    }).pipe(
      tap((response) => {
        if (response.status === 'success' && response.greeting) {
          const hasUserMessages = this.chatStore.getAllMessages()
            .some(msg => msg.sender === 'user');

          if (!hasUserMessages) {
            this.initializeWelcomeMessage(response.greeting);
          }
        }
      }),
      map(() => void 0),
      catchError((error) => {
        console.error('Error loading chat greeting:', error);
        return of(void 0);
      })
    );
  }

  private initializeWelcomeMessage(greeting?: string): void {
    const programName = SharedService.getprogramName();
    const communityForumUrl = `/${programName}/forum`;

    const introText = greeting
      ? this.formatGreeting(greeting)
      : `Hi! I'm Olly — how are you today? Can I help?`;

    const welcomeMessages: ChatMessage[] = [
      {
        id: 'welcome-intro-1',
        content: introText,
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

  private formatGreeting(greeting: string): string {
    const name = this.getUserDisplayName();
    if (name) {
      return greeting.replace('{name}', name);
    }
    return greeting.replace('{name}', '').replace(/\s{2,}/g, ' ').trim();
  }

  private getUserDisplayName(): string {
    let userNameVal = SharedService.FnName();

    if (!userNameVal || userNameVal === 'null' || userNameVal === 'undefined' || userNameVal.toLowerCase() === 'guest') {
      userNameVal = SharedService.getUserName();
    }
    if (!userNameVal || userNameVal === 'null' || userNameVal === 'undefined' || userNameVal.toLowerCase() === 'guest') {
      const fullName = SharedService.getDataFromLocalStorage('name');
      if (fullName && fullName !== 'null' && fullName !== 'undefined') {
        userNameVal = fullName.split(' ')[0];
      }
    }
    if (!userNameVal || userNameVal === 'null' || userNameVal === 'undefined' || userNameVal === '' || userNameVal.toLowerCase() === 'guest') {
      return '';
    }

    try {
      userNameVal = JSON.parse(userNameVal);
    } catch {
      // keep as-is
    }

    return userNameVal.charAt(0).toUpperCase() + userNameVal.slice(1).toLowerCase();
  }

  private getChatbotUrl(): string {
    return SharedService.ProgramId == ProgramType.Adults
      ? this.ADULT_CHATBOT_URL
      : this.TEEN_CHATBOT_URL;
  }

  private getHealthCheckUrl(): string {
    return SharedService.ProgramId == ProgramType.Adults
      ? this.HEALTH_CHECK_URL_ADULT
      : this.HEALTH_CHECK_URL_TEEN;
  }

  private getAuthToken(): string {
    const token = localStorage.getItem('token');
    try {
      return JSON.parse(token || '');
    } catch {
      return token || '';
    }
  }

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getAuthToken()}`
    });
  }

  private getHistoryUrl(): string {
    return SharedService.ProgramId == ProgramType.Adults
      ? this.HISTORY_URL_ADULT
      : this.HISTORY_URL_TEEN;
  }

  private getRelatedContentUrl(): string {
    return SharedService.ProgramId == ProgramType.Adults
      ? this.RELATED_CONTENT_URL_ADULT
      : this.RELATED_CONTENT_URL_TEEN;
  }

  private getFeedbackUrl(): string {
    return SharedService.ProgramId == ProgramType.Adults
      ? this.FEEDBACK_URL_ADULT
      : this.FEEDBACK_URL_TEEN;
  }

  private getTrackClickUrl(): string {
    return SharedService.ProgramId == ProgramType.Adults
      ? this.TRACK_CLICK_URL_ADULT
      : this.TRACK_CLICK_URL_TEEN;
  }

  checkHealth(): Observable<any> {
    return this.http.get(this.getHealthCheckUrl(), {
      headers: this.getAuthHeaders(),
      withCredentials: true
    });
  }

  /**
   * Stream chat response via SSE from POST /chat with URL-encoded form body.
   */
  sendMessageStream(message: string): Observable<ChatStreamEvent> {
    return new Observable((observer: Observer<ChatStreamEvent>) => {
      const abortController = new AbortController();
      let rawContent = '';

      const body = new URLSearchParams();
      body.set('message', message);

      const sessionId = this.chatStore.getCurrentSessionId();
      if (sessionId) {
        body.set('session_id', sessionId);
      }

      const headers: Record<string, string> = {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Accept': '*/*'
      };
      const authToken = this.getAuthToken();
      if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
      }

      fetch(this.getChatbotUrl(), {
        method: 'POST',
        body: body.toString(),
        credentials: 'include',
        headers,
        signal: abortController.signal
      }).then(async (response) => {
        if (!response.ok) {
          if (response.status === 401) {
            throw { status: 401, error: { response: 'Unauthorized' } };
          }
          throw new Error(`Chat request failed: ${response.status}`);
        }

        const reader = response.body?.getReader();
        if (!reader) {
          throw new Error('Streaming not supported by this browser');
        }

        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            break;
          }

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            const jsonStr = this.extractSseJsonPayload(line);
            if (!jsonStr) {
              continue;
            }

            try {
              const data = JSON.parse(jsonStr);
              rawContent = this.handleStreamPayload(data, rawContent, observer);
            } catch (parseError) {
              if ((parseError as { status?: number })?.status === 401) {
                throw parseError;
              }
              console.warn('Failed to parse SSE data line:', jsonStr, parseError);
            }
          }
        }

        if (rawContent) {
          observer.next({
            type: 'done',
            rawContent,
            htmlContent: renderChatMarkdown(rawContent),
            session_id: this.chatStore.getCurrentSessionId() || ''
          });
        }
        observer.complete();
      }).catch((error) => {
        if (error?.name === 'AbortError') {
          observer.complete();
        } else {
          observer.error(error);
        }
      });

      return () => abortController.abort();
    });
  }

  /**
   * Extract JSON payload from an SSE line (data: {...}) or a bare JSON line.
   */
  private extractSseJsonPayload(line: string): string | null {
    const trimmedLine = line.trim();
    if (!trimmedLine) {
      return null;
    }

    if (trimmedLine.startsWith('data:')) {
      const jsonStr = trimmedLine.startsWith('data: ')
        ? trimmedLine.slice(6)
        : trimmedLine.slice(5).trim();
      return jsonStr || null;
    }

    if (trimmedLine.startsWith('{') && trimmedLine.endsWith('}')) {
      return trimmedLine;
    }

    return null;
  }

  /**
   * Handle a parsed SSE JSON payload and return updated accumulated raw content.
   */
  private handleStreamPayload(
    data: Record<string, unknown>,
    rawContent: string,
    observer: Observer<ChatStreamEvent>
  ): string {
    if (data.response === 'Unauthorized') {
      throw { status: 401, error: { response: 'Unauthorized' } };
    }

    const status = data.status as string | undefined;

    // Lifecycle events with no user-visible content yet
    if (status === 'start' || status === 'thinking') {
      return rawContent;
    }

    if (status === 'done') {
      let finalContent = rawContent;
      if (!finalContent && typeof data.response === 'string') {
        finalContent = data.response;
      }

      observer.next({
        type: 'done',
        rawContent: finalContent,
        htmlContent: renderChatMarkdown(finalContent),
        session_id: (data.session_id as string) || this.chatStore.getCurrentSessionId() || '',
        allow_feedback: data.allow_feedback as boolean | undefined,
        offer_related: data.offer_related as boolean | undefined,
        is_followup: data.is_followup as boolean | undefined,
        has_more: data.has_more as boolean | undefined
      });
      observer.complete();
      return finalContent;
    }

    // Error or informational response delivered as a single payload
    if (typeof data.response === 'string' && data.response.length > 0) {
      rawContent = data.response;
      observer.next({
        type: 'token',
        token: data.response,
        rawContent,
        htmlContent: renderChatMarkdown(rawContent)
      });
      return rawContent;
    }

    // Incremental markdown token
    if (typeof data.token === 'string' && data.token.length > 0) {
      rawContent += data.token;
      observer.next({
        type: 'token',
        token: data.token,
        rawContent,
        htmlContent: renderChatMarkdown(rawContent)
      });
    }

    return rawContent;
  }

  sendFeedback(
    messageId: string,
    feedbackValue: 'thumbs_up' | 'thumbs_down',
    userMessage: string,
    botResponse: string
  ): Observable<any> {
    const request = {
      message_id: messageId,
      feedback_type: 'main_response',
      feedback_value: feedbackValue,
      user_message: userMessage,
      bot_response: botResponse
    };

    return this.http.post(
      this.getFeedbackUrl(),
      request,
      {
        headers: this.getAuthHeaders(),
        withCredentials: true
      }
    );
  }

  sendYesNoResponse(response: 'yes' | 'no'): Observable<ChatbotResponse> {
    const request = {
      action: response,
      session_id: this.chatStore.getCurrentSessionId() || undefined
    };

    return this.http.post<ChatbotResponse>(
      this.getRelatedContentUrl(),
      request,
      {
        headers: this.getAuthHeaders(),
        withCredentials: true
      }
    );
  }

  trackLinkClick(url: string): Observable<any> {
    const request = { url };

    return this.http.post(
      this.getTrackClickUrl(),
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

  addBotMessage(
    content: string,
    sessionId?: string,
    allow_feedback?: boolean,
    offer_related?: boolean,
    is_followup?: boolean,
    has_more?: boolean
  ): void {
    this.chatStore.addBotMessage({ content, sessionId, allow_feedback, offer_related, is_followup, has_more });
  }

  beginStreamingBotMessage(): string {
    return this.chatStore.createStreamingBotMessage();
  }

  updateStreamingBotMessage(messageId: string, htmlContent: string): void {
    this.chatStore.updateStreamingBotMessage(messageId, htmlContent);
  }

  finalizeStreamingBotMessage(
    messageId: string,
    payload: {
      htmlContent: string;
      sessionId?: string;
      allow_feedback?: boolean;
      offer_related?: boolean;
      is_followup?: boolean;
      has_more?: boolean;
    }
  ): void {
    this.chatStore.finalizeStreamingBotMessage(messageId, payload);
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
    this.initializeChatGreeting().subscribe();
  }

  ensureWelcomeMessages(): void {
    const currentMessages = this.chatStore.getAllMessages();
    const nonTypingMessages = currentMessages.filter(msg => !msg.isTyping);

    if (nonTypingMessages.length === 0) {
      this.initializeWelcomeMessage();
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

  getFullQuestionForNumber(input: string): string {
    return this.chatStore.getFullQuestionForNumber(input);
  }

  loadHistory(): Observable<HistoryResponse> {
    const currentUserId = SharedService.getUserId();
    const GUEST_USER_ID = 563;

    if (currentUserId === GUEST_USER_ID || currentUserId <= 0) {
      return new Observable<HistoryResponse>(observer => {
        observer.next({
          status: 'success',
          history: [],
          user_id: currentUserId.toString()
        });
        observer.complete();
      });
    }

    let params = new HttpParams();
    if (currentUserId && currentUserId > 0) {
      params = params.set('user_id', currentUserId.toString());
    }

    return this.http.get<HistoryResponse>(this.getHistoryUrl(), {
      headers: this.getAuthHeaders(),
      params,
      withCredentials: true
    }).pipe(
      map((response: HistoryResponse) => {
        if (currentUserId && currentUserId > 0 && response.user_id) {
          const responseUserId = Number.parseInt(response.user_id, 10);
          console.log('Comparing user IDs:', responseUserId, currentUserId);
        }
        return response;
      })
    );
  }

  prependHistoryMessages(historyMessages: HistoryMessage[]): void {
    const convertedMessages: Array<{
      content: string;
      sender: 'user' | 'bot';
      timestamp: string;
    }> = [];

    historyMessages.forEach(historyItem => {
      convertedMessages.push({
        content: historyItem.user_message,
        sender: 'user',
        timestamp: historyItem.created_at
      });

      convertedMessages.push({
        content: historyItem.bot_response,
        sender: 'bot',
        timestamp: historyItem.created_at
      });
    });

    this.chatStore.prependHistoryMessages(convertedMessages);
  }
}
