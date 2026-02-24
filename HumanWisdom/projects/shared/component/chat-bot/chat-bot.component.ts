import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy, HostListener, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { ChatbotService, HistoryMessage } from '../../services/chatbot.service';
import { ChatStore, ChatMessage } from '../../stores/chat.store';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';

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
  activeSuggestions: string[] = [];
  hasHistoryAvailable: boolean = false;
  private cachedHistoryMessages: HistoryMessage[] | null = null;
  private cachedHistoryUserId: number | null = null;
  private historyCheckInProgress: boolean = false;
  isAdults = false;

  // Dislike popup state
  showDislikePopup: boolean = false;
  pendingDislikeMessage: ChatMessage | null = null;
 
  private messagesSubscription: Subscription = new Subscription();
  private typingSubscription: Subscription = new Subscription();
  private sessionSubscription: Subscription = new Subscription();
  private suggestionsSubscription: Subscription = new Subscription();
  userAvatarUrl: string = '';

  constructor(
    private chatbotService: ChatbotService,
    public chatStore: ChatStore,
    private sanitizer: DomSanitizer,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.setUserAvatar();

    // Check if program type has changed and clear chat if needed
    this.checkAndHandleProgramTypeChange();

    // Ensure welcome messages are shown if store is empty (e.g., after logout)
    this.chatbotService.ensureWelcomeMessages();

    // Subscribe to messages from store
    this.messagesSubscription = this.chatStore.messages$.subscribe(
      messages => {
        this.messages = messages;
        
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

    const originalMessage = this.currentMessage.trim();
    this.currentMessage = '';
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

    // Send original message to chatbot API (keep it as number for API)
    this.chatbotService.sendMessage(originalMessage).subscribe({
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
          // Note: Scrolling is handled automatically by messages$ subscription
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
        // Note: Scrolling is handled automatically by messages$ subscription
      }
    });
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.onSendMessage();
    }
  }

  onCloseChat(): void {
    // Navigate back to dashboard
    // Option 1: Go back in browser history
    // this.location.back();
    if (SharedService.ProgramId === ProgramType.Adults) {
      this.router.navigate(['/adults/home']);
    } else {
      this.router.navigate(['/teenagers/teenager-dashboard']);
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
        this.errorMessage = 'Failed to load previous conversations. Please try again.';
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
   * Handle clicks on message content to track link clicks
   */
  onMessageContentClick(event: Event): void {
    const target = event.target as HTMLElement;
    
    // Check if clicked element is an anchor tag or inside one
    const anchor = target.closest('a') as HTMLAnchorElement;
    
    if (anchor && anchor.href) {
      event.preventDefault(); // Prevent default navigation
      event.stopPropagation(); // Stop event bubbling
      
      const clickedUrl = anchor.href;
      console.log('Link clicked via delegation, tracking:', clickedUrl);
      
      // Track the click first, then navigate on success
      this.chatbotService.trackLinkClick(clickedUrl).subscribe({
        next: (response) => {
          console.log('Link click tracked successfully:', response);
          // Navigate to the URL in the same tab after successful tracking
          window.location.href = clickedUrl;
        },
        error: (error) => {
          console.error('Error tracking link click:', error);
          // Even if tracking fails, navigate to the URL so user isn't blocked
          window.location.href = clickedUrl;
        }
      });
    }
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
  onYesClick(): void {
    if (this.isLoading) {
      return;
    }

    this.currentMessage = 'Yes';
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
  onNoClick(): void {
    if (this.isLoading) {
      return;
    }

    this.currentMessage = 'No';
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
    console.log('HTML Content:', html);
    console.log('Contains anchor tags:', html.includes('<a'));

    // Add inline styles to anchor tags as a workaround
    const styledHtml = html.replace(/<a\s+([^>]*?)>/gi, (match, attributes) => {
      // Check if style attribute already exists
      if (attributes.includes('style=')) {
        return match.replace(/style="([^"]*)"/, 'style="$1; font-weight:500; text-decoration: underline !important;"');
      } else {
        return `<a ${attributes} style="font-weight:500; text-decoration: underline !important; cursor: pointer !important;">`;
      }
    });

    console.log('Styled HTML:', styledHtml);
    const sanitized = this.sanitizer.bypassSecurityTrustHtml(styledHtml);
    console.log('Sanitized result:', sanitized);
    return sanitized;
  }

  styleAnchorTags(): void {
    // Use setTimeout with longer delay to ensure DOM is updated after innerHTML rendering
    setTimeout(() => {
      const anchorTags = document.querySelectorAll('.bot-message-content a');
      console.log('Found anchor tags in bot messages:', anchorTags.length);

      anchorTags.forEach((anchor: Element) => {
        const htmlAnchor = anchor as HTMLAnchorElement;
        
        // Check if this anchor already has tracking (to avoid duplicates)
        if (htmlAnchor.getAttribute('data-tracking-added')) {
          return;
        }
        
        // Mark as tracking added
        htmlAnchor.setAttribute('data-tracking-added', 'true');
        
        htmlAnchor.style.color = '#1976d2';
        htmlAnchor.style.textDecoration = 'underline';
        htmlAnchor.style.cursor = 'pointer';

        // Add hover event listener
        htmlAnchor.addEventListener('mouseenter', () => {
          htmlAnchor.style.color = '#1565c0';
        });

        htmlAnchor.addEventListener('mouseleave', () => {
          htmlAnchor.style.color = '#1976d2';
        });

        // Add click tracking
        htmlAnchor.addEventListener('click', (event: Event) => {
          event.preventDefault(); // Prevent default navigation
          event.stopPropagation(); // Stop event bubbling
          
          const clickedUrl = htmlAnchor.href;
          
          if (clickedUrl) {
            console.log('Link clicked, tracking:', clickedUrl);
            
            // Track the click first, then navigate on success
            this.chatbotService.trackLinkClick(clickedUrl).subscribe({
              next: (response) => {
                console.log('Link click tracked successfully:', response);
                // Navigate to the URL in the same tab after successful tracking
                window.location.href = clickedUrl;
              },
              error: (error) => {
                console.error('Error tracking link click:', error);
                // Even if tracking fails, navigate to the URL so user isn't blocked
                window.location.href = clickedUrl;
              }
            });
          }
        });

        console.log('Styled and added tracking to anchor:', htmlAnchor.href);
      });
    }, 300);
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
    return currentUserId === GUEST_USER_ID;
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
        if (response.status === 'success' && response.history.length > 0) {
          this.hasHistoryAvailable = true;
          this.cachedHistoryMessages = response.history;
          this.cachedHistoryUserId = currentUserId;
        } else {
          this.hasHistoryAvailable = false;
          this.cachedHistoryMessages = null;
          this.cachedHistoryUserId = null;
        }
        this.historyCheckInProgress = false;
      },
      error: (error) => {
        console.error('Error checking history availability:', error);
        this.hasHistoryAvailable = false;
        this.cachedHistoryMessages = null;
        this.cachedHistoryUserId = null;
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
      return 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/icons/user/profile_default.svg';
    }
    return 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/profile_default.svg';
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
        const normalizedPath = rawPath.replace('\\', '/');
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
}