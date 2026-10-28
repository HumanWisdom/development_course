import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy, HostListener, HostBinding, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { ChatbotService, HistoryMessage, ChatStreamEvent } from '../../services/chatbot.service';
import { ChatStore, ChatMessage } from '../../stores/chat.store';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { LogEventService } from '../../services/log-event.service';
import { Constant } from '../../services/constant';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss','./chat-bot.teenager.component.scss']
})
export class ChatBotComponent implements OnInit, AfterViewInit, OnDestroy {
  @HostBinding('class.teenager-theme') get isTeenagerTheme() {
      return SharedService.ProgramId == ProgramType.Teenagers;
    }
    @HostBinding('class.adults-theme') get isAdultsTheme() {
      return SharedService.ProgramId == ProgramType.Adults;
    }
  @ViewChild('messageContainer', { static: false }) messageContainer!: ElementRef;
  @ViewChild('messageInput', { static: false }) messageInput!: ElementRef;

  messages: ChatMessage[] = [];
  currentMessage: string = '';
  isTyping: boolean = false;
  isLoading: boolean = false;
  isLoadingHistory: boolean = false;
  errorMessage: string = '';
  isTokenExpired: boolean = false;
  activeSuggestions: string[] = [];
  hasHistoryAvailable: boolean = false;
  private cachedHistoryMessages: HistoryMessage[] | null = null;
  private cachedHistoryUserId: number | null = null;
  private historyCheckInProgress: boolean = false;
  isAdults = false;
  showLanding: boolean = false;
  startInQuestionsView: boolean = false;

  // Dislike popup state
  showDislikePopup: boolean = false;
  pendingDislikeMessage: ChatMessage | null = null;
 
  private messagesSubscription: Subscription = new Subscription();
  private typingSubscription: Subscription = new Subscription();
  private sessionSubscription: Subscription = new Subscription();
  private suggestionsSubscription: Subscription = new Subscription();
  userAvatarUrl: string = '';
  private preloadedQuery: string | null = null;

  // Set when a card/link was opened on pointer-up so the trailing click is ignored
  private cardNavigationGuardUntil = 0;
  // Pointer-down position, used to ignore drags / text selection gestures
  private pointerDownX = 0;
  private pointerDownY = 0;
  private static readonly CARD_CLICK_DRAG_TOLERANCE = 10;
  // A card is a short block holding a thumbnail and one link — never the whole bubble
  private static readonly CARD_MAX_HEIGHT = 220;
  // Sanitized HTML is cached so the same SafeHtml instance is reused across CD cycles
  private sanitizedHtmlCache = new Map<string, SafeHtml>();
  private static readonly SANITIZED_HTML_CACHE_LIMIT = 300;

  constructor(
    private chatbotService: ChatbotService,
    public chatStore: ChatStore,
    private sanitizer: DomSanitizer,
    private router: Router,
    private location: Location,
    private logeventservice: LogEventService,
    private ngZone: NgZone
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      if (navigation.extras.state['query']) {
        this.preloadedQuery = navigation.extras.state['query'];
      }
      if (navigation.extras.state['startWithChat']) {
        this.showLanding = false;
      }
    }
  }

  ngOnInit(): void {
    this.setUserAvatar();

    // Check if program type has changed and clear chat if needed
    this.checkAndHandleProgramTypeChange();

    // Load personalized greeting from /api/history (Adults & Teenagers)
    this.chatbotService.initializeChatGreeting().subscribe();

    // Ensure welcome messages are shown if store is empty (e.g., after logout)
    this.chatbotService.ensureWelcomeMessages();

    // Subscribe to messages from store
    this.messagesSubscription = this.chatStore.messages$.subscribe(
      messages => {
        this.messages = messages;
        this.pruneSanitizedHtmlCache(messages);
        
        // Debug: Log messages with suggestions
        messages.forEach((msg, index) => {
          if (msg.suggestions && msg.suggestions.length > 0) {
            console.log(`Message ${index} has ${msg.suggestions.length} suggestions:`, msg.suggestions);
          }
        });
         if (SharedService.ProgramId == ProgramType.Adults) {
              this.isAdults = true;
            } else {
              this.isAdults = false;
            }

         const hasUserMessage = messages.some(msg => msg.sender === 'user');
         if (hasUserMessage) {
           this.showLanding = false;
         }

        // Ensure welcome messages if store becomes empty (e.g., after logout)
        if (messages.length === 0) {
          // Use setTimeout to avoid infinite loop and ensure store is ready
          setTimeout(() => {
            this.chatbotService.ensureWelcomeMessages();
          }, 50);
        }

        // Scroll to bottom quickly when messages update
        setTimeout(() => this.scrollToBottom(), 100);
        // Style anchor tags after messages are updated
        this.styleAnchorTags();
      }
    );

    // Subscribe to typing indicator from store
    this.typingSubscription = this.chatStore.isTyping$.subscribe(
      isTyping => this.isTyping = isTyping
    );

    // Optional: Subscribe to session ID for monitoring
    this.sessionSubscription = this.chatStore.sessionId$.subscribe(
      sessionId => {
        if (sessionId) {
          console.log('Chat session ID:', sessionId);
        }
      }
    );

    // Subscribe to active suggestions
    this.suggestionsSubscription = this.chatStore.activeSuggestions$.subscribe(
      suggestions => {
        this.activeSuggestions = suggestions;
      }
    );

    this.checkHistoryAvailability();
    if (this.isGuestUser()) {
      this.checkTokenExpiry();
    }

    // Check router history state fallback for preloaded query and startWithChat
    const historyState = window.history.state;
    if (historyState) {
      if (!this.preloadedQuery && historyState['query']) {
        this.preloadedQuery = historyState['query'];
      }
      if (historyState['startWithChat']) {
        this.showLanding = false;
      }
    }

    if (this.preloadedQuery) {
      this.onStartChat(this.preloadedQuery);
    }
  }

  ngAfterViewInit(): void {
    // Ensure welcome messages are present after view initializes
    // This handles cases where store was empty when ngOnInit ran
    setTimeout(() => {
      this.chatbotService.ensureWelcomeMessages();
    }, 100);

    this.scrollToBottom();
    // Focus on input when component loads
    if (this.messageInput) {
      this.messageInput.nativeElement.focus();
    }
    this.styleAnchorTags();
  }

  @HostListener('window:scroll')
    handleScroll(): void {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const threshold = viewportHeight * 0.2; // 20% of viewport height
  
     
    }
  ngOnDestroy(): void {
    this.messagesSubscription.unsubscribe();
    this.typingSubscription.unsubscribe();
    this.sessionSubscription.unsubscribe();
    this.suggestionsSubscription.unsubscribe();
  }

  onSendMessage(): void {
    if (!this.currentMessage.trim() || this.isLoading) {
      return;
    }

    if (!this.isAdults) {
      this.logeventservice.logEvent('teenager_click_send');
    } else {
      this.logeventservice.logEvent('click_sent_icon');
    }

    const originalMessage = this.currentMessage.trim();
    this.currentMessage = '';
    
    // Reset height of textarea to single row
    if (this.messageInput && this.messageInput.nativeElement) {
      this.messageInput.nativeElement.style.height = 'auto';
    }

    this.errorMessage = '';
    this.isLoading = true;

    // Check if it's a number and get the full question for display
    const displayMessage = this.chatbotService.getFullQuestionForNumber(originalMessage);

    // Add user message to chat (show the full question if it was a number)
    this.chatbotService.addUserMessage(displayMessage);

    // Add typing indicator
    this.chatbotService.addTypingIndicator();
    this.chatbotService.setTyping(true);

    // Nudge the view slightly down immediately so the typing area / new content is visible
    setTimeout(() => this.scrollSlightlyDown(), 100);

    // Send original message to chatbot API via SSE streaming
    this.handleStreamingChatResponse(originalMessage);
  }

  private handleStreamingChatResponse(originalMessage: string): void {
    let streamingMessageId: string | null = null;

    this.chatbotService.sendMessageStream(originalMessage).subscribe({
      next: (event: ChatStreamEvent) => {
        if (event.type === 'token') {
          if (!streamingMessageId) {
            this.chatbotService.removeTypingIndicator();
            this.chatbotService.setTyping(false);
            streamingMessageId = this.chatbotService.beginStreamingBotMessage();
          }
          this.chatbotService.updateStreamingBotMessage(streamingMessageId, event.htmlContent);
        } else if (event.type === 'done') {
          this.chatbotService.removeTypingIndicator();
          this.chatbotService.setTyping(false);

          if (streamingMessageId) {
            this.chatbotService.finalizeStreamingBotMessage(streamingMessageId, {
              htmlContent: event.htmlContent,
              sessionId: event.session_id,
              allow_feedback: event.allow_feedback,
              offer_related: event.offer_related,
              is_followup: event.is_followup,
              has_more: event.has_more
            });
            // Cards inside streaming HTML render via innerHTML + styleAnchorTags click handler
          } else if (event.rawContent) {
            this.chatbotService.addBotMessage(
              event.htmlContent,
              event.session_id,
              event.allow_feedback,
              event.offer_related,
              event.is_followup,
              event.has_more
            );
            // First/streaming responses render cards via innerHTML directly
            // parseAndAttachCards not needed here
          } else {
            this.errorMessage = 'Sorry, I encountered an error. Please try again.';
          }
          this.isLoading = false;
        }
      },
      error: (error) => {
        console.error('Chatbot API Error:', error);
        this.chatbotService.removeTypingIndicator();
        this.chatbotService.setTyping(false);
        if (error.status === 401 || (error.error && error.error.response === 'Unauthorized')) {
          this.handleUnauthorizedError();
        } else {
          this.errorMessage = 'Sorry, I\'m having trouble connecting. Please check your internet connection and try again.';
        }
        this.isLoading = false;
      }
    });
  }

  onStartChat(query: string): void {
    this.showLanding = false;
    this.startInQuestionsView = false;
    this.currentMessage = query;
    setTimeout(() => {
      this.onSendMessage();
    }, 50);
  }

  onChatInputClick(): void {
    this.showLanding = true;
    this.startInQuestionsView = true;
  }

  onQuestionsLinkClick(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    if (!this.isAdults) {
      this.logeventservice.logEvent('teenager_click_questionsyoucanask');
    }
    this.showLanding = true;
    this.startInQuestionsView = true;
  }

  onLandingViewChanged(isQuestionsView: boolean): void {
    // When the back arrow in questions view is pressed, viewChanged emits false.
    // Hide the olly-landing and return to the chat view.
    if (!isQuestionsView) {
      this.showLanding = false;
      this.startInQuestionsView = false;
    }
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.onSendMessage();
    }
  }

  adjustHeight(event?: Event): void {
    const textarea = event ? (event.target as HTMLTextAreaElement) : (this.messageInput?.nativeElement as HTMLTextAreaElement);
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }

  onCloseChat(): void {
    this.logeventservice.logEvent('click_close_olly_popup');
    // Navigate back to the Today page
    if (SharedService.ProgramId === ProgramType.Adults) {
      this.router.navigate(['/adults/today']);
    } else {
      this.router.navigate(['/teenagers/today']);
    }


    // Optional: Clear messages when closing (uncomment if you want to clear chat history)
    // this.chatbotService.clearMessages();
  }

  onLoadHistory(event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    if (this.isLoadingHistory) {
      return;
    }

    // Don't load history for guest users
    if (this.isGuestUser()) {
      console.log('Guest user cannot load history.');
      return;
    }

    this.isLoadingHistory = true;
    this.errorMessage = '';

    const currentUserId = SharedService.getUserId();
    if (
      this.cachedHistoryMessages &&
      this.cachedHistoryMessages.length > 0 &&
      this.cachedHistoryUserId === currentUserId
    ) {
      this.applyHistoryMessages(this.cachedHistoryMessages);
      this.isLoadingHistory = false;
      return;
    }

    this.chatbotService.loadHistory().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.history.length > 0) {
          this.applyHistoryMessages(response.history);
        } else if (response.response === 'Unauthorized') {
          this.handleUnauthorizedError();
        } else {
          this.errorMessage = 'No previous conversations found.';
          this.hasHistoryAvailable = false;
          this.cachedHistoryMessages = null;
          this.cachedHistoryUserId = null;
        }
        this.isLoadingHistory = false;
      },
      error: (error) => {
        console.error('Error loading history:', error);
        if (error.status === 401 || (error.error && error.error.response === 'Unauthorized')) {
          this.handleUnauthorizedError();
        } else {
          this.errorMessage = 'Failed to load previous conversations. Please try again.';
        }
        this.isLoadingHistory = false;
      }
    });
  }

  scrollToBottom(): void {
    try {
      // Use setTimeout to allow DOM to update
      setTimeout(() => {
        // Since the layout uses the main window scroll with fixed header/footer,
        // we should scroll the window to the bottom
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
    } catch (err) {
      console.error('Error scrolling to bottom:', err);
    }
  }

  /**
   * Scroll the chat container slightly down (about 20px)
   * to give immediate feedback while waiting for the bot response.
   */
  private scrollSlightlyDown(): void {
    try {
      window.scrollBy({
        top: 20,
        behavior: 'smooth'
      });
    } catch (err) {
      console.error('Error scrolling slightly down:', err);
    }
  }

  formatTimestamp(timestamp: Date): string {
    return this.chatbotService.formatTimestamp(timestamp);
  }

  retryLastMessage(): void {
    if (this.messages.length > 0) {
      const lastUserMessage = this.messages
        .filter(msg => msg.sender === 'user')
        .pop();

      if (lastUserMessage) {
        this.currentMessage = lastUserMessage.content;
        this.onSendMessage();
      }
    }
  }

  clearError(): void {
    this.errorMessage = '';
    this.isTokenExpired = false;
  }

  private handleUnauthorizedError(): void {
    if (this.isGuestUser()) {
      localStorage.setItem('btnclick', 'F');
      this.router.navigateByUrl(SharedService.getDashboardUrls());
    } else {
      this.isTokenExpired = true;
      this.errorMessage = 'Your session has been timed out, please logout and login again';
    }
  }

  redirectToLogin(): void {
    const programName = SharedService.getprogramName();
    this.router.navigate([`/${programName}/onboarding/login`]);
  }

  private checkTokenExpiry(): void {
    this.chatbotService.checkHealth().subscribe({
      next: (response) => {
        if (response && response.status === 'error' && response.response === 'Unauthorized') {
          this.handleUnauthorizedError();
        }
      },
      error: (error) => {
        if (error.status === 401 || (error.error && error.error.response === 'Unauthorized')) {
          this.handleUnauthorizedError();
        }
      }
    });
  }

  /**
   * Handle suggestion click - add the suggestion to input and send
   */
  onSuggestionClick(suggestion: string): void {
    if (this.isLoading) {
      return;
    }

    this.currentMessage = suggestion;
    this.onSendMessage();
  }

  /**
   * Handle clicks on message content to track link clicks and navigate immediately
   */
  onMessageContentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target) {
      return;
    }

    // A pointer-up on the same card already navigated — ignore the trailing click
    if (Date.now() < this.cardNavigationGuardUntil) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    const link = this.resolveChatLink(target, event);
    if (link && this.openChatLink(link)) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  /** Remember where the gesture started, so pointer-up can tell a tap from a drag. */
  onMessageContentPointerDown(event: PointerEvent): void {
    this.pointerDownX = event.clientX;
    this.pointerDownY = event.clientY;
  }

  /**
   * Pointer-up safety net for cards.
   *
   * Cards inside the bot bubble used to open only on some clicks: the click handler
   * needs mousedown and mouseup on the same node, and the API's card link does not
   * always cover the visible card (padding/title/type were dead areas), while the
   * streamed bubble keeps re-rendering. pointerup always fires on the element under
   * the pointer, so the whole card opens on the very first press — and it does not
   * fire when the gesture is a scroll.
   */
  onMessageContentPointerUp(event: PointerEvent): void {
    const target = event.target as HTMLElement | null;

    if (!target || event.button !== 0) {
      return;
    }

    // Scrolling / selecting text moves the pointer — that must not open a card
    const movedX = Math.abs(event.clientX - this.pointerDownX);
    const movedY = Math.abs(event.clientY - this.pointerDownY);
    if (movedX > ChatBotComponent.CARD_CLICK_DRAG_TOLERANCE || movedY > ChatBotComponent.CARD_CLICK_DRAG_TOLERANCE) {
      return;
    }

    const link = this.resolveChatLink(target, event);
    if (!link || !this.openChatLink(link)) {
      return;
    }

    // Suppress the click that follows this gesture, so we never navigate twice
    this.cardNavigationGuardUntil = Date.now() + 1200;
  }

  /**
   * Find what the user aimed at: a plain link, or the resource card under the pointer.
   * Nothing is resolved when the gesture did not land on a card, so ordinary message
   * text stays inert.
   */
  private resolveChatLink(target: HTMLElement, event?: Event): HTMLElement | null {
    const bubble = target.closest('.bot-message-content') as HTMLElement | null;
    const direct = target.closest('a[href], a[data-path], [data-path]') as HTMLElement | null;

    // Only links that live inside the bubble count — never a stray ancestor wrapper
    if (direct && (!bubble || bubble.contains(direct))) {
      return direct;
    }

    const isMouseEvent = typeof MouseEvent !== 'undefined' && event instanceof MouseEvent;
    const cardLink = this.findCardLinkAtPoint(target, isMouseEvent ? (event as MouseEvent).clientX : undefined,
      isMouseEvent ? (event as MouseEvent).clientY : undefined);

    return cardLink ?? this.findCardLink(target);
  }

  /**
   * Resolve the card link by locating the backend-injected `.resource-card` block that
   * contains the pointer position. Works even when the card's own anchor only covers
   * part of the card, or when the event target is the bubble itself.
   */
  private findCardLinkAtPoint(target: HTMLElement, clientX?: number, clientY?: number): HTMLElement | null {
    const bubble = target.closest('.bot-message-content') as HTMLElement | null;
    if (!bubble) {
      return null;
    }

    const cards = Array.from(bubble.querySelectorAll('.resource-card')) as HTMLElement[];
    if (cards.length === 0) {
      return null;
    }

    const linkOf = (card: HTMLElement): HTMLElement | null =>
      card.querySelector('a[href], a[data-path], [data-path]') as HTMLElement | null;

    if (typeof clientX === 'number' && typeof clientY === 'number') {
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        if (clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom) {
          return linkOf(card);
        }
      }
      return null;
    }

    // Keyboard activation carries no coordinates — only a single card is unambiguous
    return cards.length === 1 ? linkOf(cards[0]) : null;
  }

  /**
   * Fallback for card markup without a `.resource-card` wrapper.
   * Walks up only while the ancestor holds exactly one link plus a thumbnail, so a
   * click on ordinary message text can never trigger a card navigation.
   */
  private findCardLink(target: HTMLElement): HTMLElement | null {
    let element: HTMLElement | null = target;

    while (element && !element.classList.contains('bot-message-content')) {
      const links = element.querySelectorAll('a[href], a[data-path], [data-path]');

      if (links.length > 1) {
        return null; // several cards in one container — ambiguous
      }

      if (links.length === 1 && element.querySelector('img')
        && element.getBoundingClientRect().height <= ChatBotComponent.CARD_MAX_HEIGHT) {
        return links[0] as HTMLElement;
      }

      element = element.parentElement;
    }

    return null;
  }

  /** Track + navigate for a link inside a bot message. Returns false when unusable. */
  private openChatLink(element: HTMLElement): boolean {
    const path = element.getAttribute('data-path');
    const href = element.getAttribute('href') || '';

    // Card markup from the backend sometimes ships href="#" (or no href at all)
    // and relies on data-path — treat that as a valid target too.
    const hasNavigableHref = !!href && href !== '#' && !href.startsWith('javascript:');
    if (!path && !hasNavigableHref) {
      return false;
    }

    const resolvedHref = hasNavigableHref ? ((element as HTMLAnchorElement).href || href) : '';

    // Track the click in background (fire-and-forget)
    if (resolvedHref) {
      this.chatbotService.trackLinkClick(resolvedHref).subscribe({
        next: () => { /* tracking only */ },
        error: () => { /* tracking must never block navigation */ }
      });
    }

    this.navigateToCard(path || resolvedHref);
    return true;
  }

  /**
   * Handle thumbs up click - send positive feedback
   */
  onThumbsUp(message: ChatMessage): void {
    if (message.feedback_given || this.isLoading) {
      return;
    }

    // Find the corresponding user message
    const messageIndex = this.messages.findIndex(msg => msg.id === message.id);
    let userMessage = '';
    
    // Look backwards for the most recent user message before this bot message
    for (let i = messageIndex - 1; i >= 0; i--) {
      if (this.messages[i].sender === 'user') {
        userMessage = this.messages[i].content;
        break;
      }
    }

    // Update message to show feedback was given
    this.chatStore.updateMessage({
      id: message.id,
      updates: { feedback_given: 'positive' }
    });

    // Send feedback to API with correct format
    this.chatbotService.sendFeedback(
      message.id,
      'thumbs_up',
      userMessage,
      message.content
    ).subscribe({
      next: (response) => {
        console.log('Positive feedback sent successfully:', response);
      },
      error: (error) => {
        console.error('Error sending feedback:', error);
        // Revert the feedback state if API call fails
        this.chatStore.updateMessage({
          id: message.id,
          updates: { feedback_given: null }
        });
      }
    });
  }

  /**
   * Handle thumbs down button click - immediately submit feedback and show confirmation popup
   */
  onThumbsDownClick(message: ChatMessage): void {
    if (message.feedback_given || this.isLoading) {
      return;
    }
    // Submit the dislike feedback immediately
    this.onThumbsDown(message);
    // Show confirmation popup
    this.showDislikePopup = true;
    this.pendingDislikeMessage = message;
  }

  /**
   * Close the dislike popup
   */
  onCloseDislikePopup(): void {
    this.showDislikePopup = false;
    this.pendingDislikeMessage = null;
  }

  /**
   * Navigate to the community forum
   */
  onGoToForum(): void {
    this.showDislikePopup = false;
    this.pendingDislikeMessage = null;
    if (SharedService.ProgramId === ProgramType.Adults) {
      this.router.navigate(['/adults/forum']);
    } else {
      this.router.navigate(['/teenagers/forum']);
    }
  }

  /**
   * Select a dislike reason (kept for compatibility)
   */
  onSelectDislikeReason(reason: string): void {}

  /**
   * Submit dislike (kept for compatibility)
   */
  onSubmitDislike(): void {
    this.onCloseDislikePopup();
  }

  /**
   * Handle thumbs down click - send negative feedback
   */
  onThumbsDown(message: ChatMessage, reason?: string): void {
    if (message.feedback_given || this.isLoading) {
      return;
    }

    // Find the corresponding user message
    const messageIndex = this.messages.findIndex(msg => msg.id === message.id);
    let userMessage = '';
    
    // Look backwards for the most recent user message before this bot message
    for (let i = messageIndex - 1; i >= 0; i--) {
      if (this.messages[i].sender === 'user') {
        userMessage = this.messages[i].content;
        break;
      }
    }

    // Update message to show feedback was given
    this.chatStore.updateMessage({
      id: message.id,
      updates: { feedback_given: 'negative' }
    });

    // Send feedback to API with correct format
    this.chatbotService.sendFeedback(
      message.id,
      'thumbs_down',
      userMessage,
      message.content
    ).subscribe({
      next: (response) => {
        console.log('Negative feedback sent successfully:', response);
      },
      error: (error) => {
        console.error('Error sending feedback:', error);
        // Revert the feedback state if API call fails
        this.chatStore.updateMessage({
          id: message.id,
          updates: { feedback_given: null }
        });
      }
    });
  }

  /**
   * Handle Yes button click - send yes response
   */
  onYesClick(message: ChatMessage): void {
    if (this.isLoading || message.related_answer_given) {
      return;
    }

    // Mark message as answered immediately so buttons disable
    this.chatStore.updateMessage({ id: message.id, updates: { related_answer_given: 'yes' } });

    this.currentMessage = '';
    this.errorMessage = '';
    this.isLoading = true;

    // Add user message
    this.chatbotService.addUserMessage('Yes');

    // Add typing indicator
    this.chatbotService.addTypingIndicator();
    this.chatbotService.setTyping(true);

    // Scroll to show the response
    setTimeout(() => this.scrollSlightlyDown(), 100);

    // Send yes response to chatbot API
    this.chatbotService.sendYesNoResponse('yes').subscribe({
      next: (response) => {
        this.chatbotService.removeTypingIndicator();
        this.chatbotService.setTyping(false);

        if (response.status === 'success') {
          this.chatbotService.addBotMessage(
            response.response,
            response.session_id,
            response.allow_feedback,
            response.offer_related,
            response.is_followup,
            response.has_more
          );
          this.parseAndAttachCards(response.response);
        } else {
          this.errorMessage = 'Sorry, I encountered an error. Please try again.';
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Chatbot API Error:', error);
        this.chatbotService.removeTypingIndicator();
        this.chatbotService.setTyping(false);
        this.errorMessage = 'Sorry, I\'m having trouble connecting. Please check your internet connection and try again.';
        this.isLoading = false;
      }
    });
  }

  /**
   * Handle No button click - send no response
   */
  onNoClick(message: ChatMessage): void {
    if (this.isLoading || message.related_answer_given) {
      return;
    }

    // Mark message as answered immediately so buttons disable
    this.chatStore.updateMessage({ id: message.id, updates: { related_answer_given: 'no' } });

    this.currentMessage = '';
    this.errorMessage = '';
    this.isLoading = true;

    // Add user message
    this.chatbotService.addUserMessage('No');

    // Add typing indicator
    this.chatbotService.addTypingIndicator();
    this.chatbotService.setTyping(true);

    // Scroll to show the response
    setTimeout(() => this.scrollSlightlyDown(), 100);

    // Send no response to chatbot API
    this.chatbotService.sendYesNoResponse('no').subscribe({
      next: (response) => {
        this.chatbotService.removeTypingIndicator();
        this.chatbotService.setTyping(false);

        if (response.status === 'success') {
          this.chatbotService.addBotMessage(
            response.response,
            response.session_id,
            response.allow_feedback,
            response.offer_related,
            response.is_followup,
            response.has_more
          );
          this.parseAndAttachCards(response.response);
        } else {
          this.errorMessage = 'Sorry, I encountered an error. Please try again.';
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Chatbot API Error:', error);
        this.chatbotService.removeTypingIndicator();
        this.chatbotService.setTyping(false);
        this.errorMessage = 'Sorry, I\'m having trouble connecting. Please check your internet connection and try again.';
        this.isLoading = false;
      }
    });
  }

  /**
   * Handle "Give me more options" button click - send yes response and show as user message
   */
  onGiveMoreOptions(): void {
    if (this.isLoading) {
      return;
    }

    this.errorMessage = '';
    this.isLoading = true;

    // Add user message to show the action
    this.chatbotService.addUserMessage('Give me more options');

    // Add typing indicator
    this.chatbotService.addTypingIndicator();
    this.chatbotService.setTyping(true);

    // Scroll to show the response
    setTimeout(() => this.scrollSlightlyDown(), 100);

    // Send yes response to chatbot API
    this.chatbotService.sendYesNoResponse('yes').subscribe({
      next: (response) => {
        this.chatbotService.removeTypingIndicator();
        this.chatbotService.setTyping(false);

        if (response.status === 'success') {
          this.chatbotService.addBotMessage(
            response.response,
            response.session_id,
            response.allow_feedback,
            response.offer_related,
            response.is_followup,
            response.has_more
          );
          this.parseAndAttachCards(response.response);
        } else {
          this.errorMessage = 'Sorry, I encountered an error. Please try again.';
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Chatbot API Error:', error);
        this.chatbotService.removeTypingIndicator();
        this.chatbotService.setTyping(false);
        this.errorMessage = 'Sorry, I\'m having trouble connecting. Please check your internet connection and try again.';
        this.isLoading = false;
      }
    });
  }

  sanitizeHtml(html: string): SafeHtml {
    const content = html || '';

    // Returning the SAME SafeHtml instance for the same content keeps Angular from
    // re-writing innerHTML on every change-detection cycle. Without this the bubble's
    // DOM is rebuilt constantly, which drops the card's mousedown/mouseup pair and
    // makes one click behave like none.
    const cached = this.sanitizedHtmlCache.get(content);
    if (cached) {
      return cached;
    }

    // Strip target/rel so no new tab opens
    let cleaned = content
      .replace(/target\s*=\s*["'][^"']*["']/gi, '')
      .replace(/rel\s*=\s*["'][^"']*["']/gi, '');

    // Ensure backend-injected cards are top-aligned
    if (cleaned.includes('resource-card')) {
      cleaned = cleaned.replace(/align-items\s*:\s*center/gi, 'align-items: flex-start');
    }
    const safeHtml = this.sanitizer.bypassSecurityTrustHtml(cleaned);

    this.sanitizedHtmlCache.set(content, safeHtml);
    if (this.sanitizedHtmlCache.size > ChatBotComponent.SANITIZED_HTML_CACHE_LIMIT) {
      const oldestKey = this.sanitizedHtmlCache.keys().next().value;
      if (oldestKey !== undefined) {
        this.sanitizedHtmlCache.delete(oldestKey);
      }
    }

    return safeHtml;
  }

  /**
   * Keep message DOM stable when the store replaces a message object.
   * Re-creating the bubble on every store update is what made cards need several clicks.
   */
  trackByMessageId(index: number, message: ChatMessage): string {
    return message.id || String(index);
  }

  /** Drop cached HTML of messages that are no longer on screen (e.g. streaming tokens). */
  private pruneSanitizedHtmlCache(messages: ChatMessage[]): void {
    if (this.sanitizedHtmlCache.size <= messages.length) {
      return;
    }

    const activeContents = new Set(messages.map(message => message.content || ''));
    this.sanitizedHtmlCache.forEach((_value, key) => {
      if (!activeContents.has(key)) {
        this.sanitizedHtmlCache.delete(key);
      }
    });
  }

  styleAnchorTags(): void {
    setTimeout(() => {
      const anchorTags = document.querySelectorAll('.bot-message-content a:not([data-styled])');
      anchorTags.forEach((anchor: Element) => {
        const htmlAnchor = anchor as HTMLAnchorElement;
        htmlAnchor.setAttribute('data-styled', 'true');

        // Remove new-tab behavior — delegation handler in onMessageContentClick navigates
        htmlAnchor.removeAttribute('target');
        htmlAnchor.removeAttribute('rel');

        // Styling only — NO addEventListener click (delegation handles it, no duplicates)
        const isCard = !!htmlAnchor.closest('.resource-card') ||
                      htmlAnchor.classList.contains('resource-card') ||
                      (htmlAnchor.getAttribute('style') || '').includes('position: absolute');
        if (!isCard) {
          htmlAnchor.style.color = '#1976d2';
          htmlAnchor.style.textDecoration = 'underline';
          htmlAnchor.style.cursor = 'pointer';
          htmlAnchor.style.fontWeight = '500';
        } else {
          htmlAnchor.style.textDecoration = 'none';
          htmlAnchor.style.cursor = 'pointer';
        }
      });
    }, 100);
  }

  shouldShowTimestamp(message: ChatMessage, isFirst: boolean): boolean {
    if (!message) {
      return true;
    }

    const isIntroBotMessage =
      message.sender === 'bot' &&
      typeof message.content === 'string' &&
      message.content.toLowerCase().includes("hi. i'm olly. ask me a question.");

    if (isIntroBotMessage) {
      return false;
    }

    if (isFirst && message.sender === 'bot') {
      return false;
    }

    return true;
  }

  /**
   * Check if the current user is a guest user (userId = 563)
   * Guest users should not see old conversation history
   */
  isGuestUser(): boolean {
    const currentUserId = SharedService.getUserId();
    const GUEST_USER_ID = 563;
    return currentUserId === GUEST_USER_ID || currentUserId <= 0;
  }

  private checkHistoryAvailability(): void {
    if (this.isGuestUser() || this.historyCheckInProgress) {
      return;
    }

    const currentUserId = SharedService.getUserId();
    if (!currentUserId || currentUserId <= 0) {
      return;
    }

    if (this.cachedHistoryUserId && this.cachedHistoryUserId !== currentUserId) {
      this.cachedHistoryMessages = null;
      this.hasHistoryAvailable = false;
    }

    this.historyCheckInProgress = true;

    this.chatbotService.loadHistory().subscribe({
      next: (response) => {
        if (response && response.status && response.status.toLowerCase() === 'success' && response.history && response.history.length > 0) {
          this.hasHistoryAvailable = true;
          this.cachedHistoryMessages = response.history;
          this.cachedHistoryUserId = currentUserId;
        } else if (response && response.response === 'Unauthorized') {
          this.handleUnauthorizedError();
        } else {
          this.hasHistoryAvailable = false;
          this.cachedHistoryMessages = null;
          this.cachedHistoryUserId = null;
        }
        this.historyCheckInProgress = false;
      },
      error: (error) => {
        console.error('Error checking history availability:', error);
        if (error.status === 401 || (error.error && error.error.response === 'Unauthorized')) {
          this.handleUnauthorizedError();
        } else {
          this.hasHistoryAvailable = false;
          this.cachedHistoryMessages = null;
          this.cachedHistoryUserId = null;
        }
        this.historyCheckInProgress = false;
      }
    });
  }

  private applyHistoryMessages(history: HistoryMessage[]): void {
    this.chatbotService.prependHistoryMessages(history);
    this.cachedHistoryMessages = null;
    this.hasHistoryAvailable = false;
    this.cachedHistoryUserId = null;
    console.log('Loaded history messages:', history);
  }
  private getDefaultAvatar(): string {
    if (SharedService.ProgramId === ProgramType.Teenagers) {
      return 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/chatbotProfile_teens.svg';
    }
    return 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/chatbotProfile+adults.svg';
  }

  private setUserAvatar(): void {
    const storedDetails = localStorage.getItem('userDetails');
    if (!storedDetails) {
      this.userAvatarUrl = this.getDefaultAvatar();
      return;
    }

    try {
      const detail = JSON.parse(storedDetails);
      const rawPath: string = detail?.UserImagePath || '';
      if (rawPath && !rawPath.includes('undefined')) {
        const normalizedPath = rawPath.replace(/\\/g, '/').replace(/^\/+/, '').replace(/\/+/g, '/');
        if (normalizedPath.startsWith('http')) {
          this.userAvatarUrl = `${normalizedPath}?${Date.now()}`;
        } else {
          this.userAvatarUrl = `https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/${normalizedPath}?${Date.now()}`;
        }
        return;
      }
    } catch (error) {
      console.warn('Failed to parse userDetails for avatar', error);
    }

    this.userAvatarUrl = this.getDefaultAvatar();
  }

  onAvatarError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    if (imgElement) {
      imgElement.src = this.getDefaultAvatar();
    }
  }

  /**
   * Check if program type has changed and clear chat store if needed
   */
  private checkAndHandleProgramTypeChange(): void {
    const currentProgramType = SharedService.ProgramId;
    const storedProgramType = this.chatStore.getCurrentProgramType();

    // If program type has changed, clear the chat
    if (storedProgramType !== null && storedProgramType !== currentProgramType) {
      console.log('Program type changed from', storedProgramType, 'to', currentProgramType, '- clearing chat');
      this.chatbotService.clearMessages();
      // Clear cached history as well
      this.cachedHistoryMessages = null;
      this.cachedHistoryUserId = null;
      this.hasHistoryAvailable = false;
    }
  }

  /**
   * Parse resource-card anchors from bot HTML response and store them on the message.
   * This runs once when API response arrives — no DOM touching needed.
   */
  private parseAndAttachCards(html: string, messageId?: string): void {
    const cards: { title: string; type: string; path: string; img: string }[] = [];

    const cardRegex = /<div class="resource-card"[^>]*>([\s\S]*?<\/div>)\s*<\/div>/gi;
    let cardMatch: RegExpExecArray | null;

    while ((cardMatch = cardRegex.exec(html)) !== null) {
      const block = cardMatch[0];

      const hrefMatch  = block.match(/href="([^"]*)"/i);
      const imgMatch   = block.match(/src="([^"]*cloudfront[^"]*)"/i)
                      || block.match(/src="([^"]*)"/i);
      const titleMatch = block.match(/<strong[^>]*>([\s\S]*?)<\/strong>/i);
      const typeMatch  = block.match(/<span[^>]*>([\s\S]*?)<\/span>/i);

      if (!hrefMatch || !imgMatch || !titleMatch) continue;

      try {
        const u = new URL(hrefMatch[1]);
        cards.push({
          path:  u.pathname + u.search + u.hash,
          img:   imgMatch[1],
          title: titleMatch[1].replace(/<[^>]*>/g, '').replace(/^\d+\.\s*/, '').trim(),
          type:  typeMatch ? typeMatch[1].replace(/<[^>]*>/g, '').trim() : ''
        });
      } catch { /* skip malformed url */ }
    }

    if (cards.length === 0) return;

    // Strip resource-card HTML from content — Angular cards take over rendering
    const strippedHtml = html.replace(/<div class="resource-card"[^>]*>[\s\S]*?<\/div>\s*<\/div>/gi, '').trim();

    setTimeout(() => {
      if (messageId) {
        this.chatStore.updateMessage({ id: messageId, updates: { resourceCards: cards, content: strippedHtml } });
      } else {
        const botMessages = this.messages.filter(msg => msg.sender === 'bot' && !msg.isTyping);
        const latest = botMessages[botMessages.length - 1];
        if (latest) {
          this.chatStore.updateMessage({ id: latest.id, updates: { resourceCards: cards, content: strippedHtml } });
        }
      }
    }, 0);
  }

  /** Navigate to a path or full URL — always same tab, always Angular router */
  navigateToCard(urlOrPath: string): void {
    if (!urlOrPath) return;
    this.ngZone.run(() => {
      let path = urlOrPath;
      if (urlOrPath.startsWith('http://') || urlOrPath.startsWith('https://')) {
        try {
          const u = new URL(urlOrPath);
          path = u.pathname + u.search + u.hash;
        } catch { /* use as-is */ }
      }

      // Save current chatbot URL so subscription page back button returns here
      SharedService.setDataInLocalStorage(Constant.NaviagtedFrom, this.router.url);

      this.router.navigateByUrl(path);
    });
  }
}
