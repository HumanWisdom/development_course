import { Component, AfterViewInit, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
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
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent implements OnInit, AfterViewInit, OnDestroy {
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

  private messagesSubscription: Subscription = new Subscription();
  private typingSubscription: Subscription = new Subscription();
  private sessionSubscription: Subscription = new Subscription();
  private suggestionsSubscription: Subscription = new Subscription();
  userAvatarUrl: string = 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/icons/user/profile_default.svg';

  constructor(
    private chatbotService: ChatbotService,
    private chatStore: ChatStore,
    private sanitizer: DomSanitizer,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.setUserAvatar();
    
    // Check if program type has changed and clear chat if needed
    this.checkAndHandleProgramTypeChange();
    
    // Subscribe to messages from store
    this.messagesSubscription = this.chatStore.messages$.subscribe(
      messages => {
        this.messages = messages;
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
    this.scrollToBottom();
    // Focus on input when component loads
    if (this.messageInput) {
      this.messageInput.nativeElement.focus();
    }
    this.styleAnchorTags();
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
          this.chatbotService.addBotMessage(response.response, response.session_id);
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
   if(SharedService.ProgramId === ProgramType.Adults) {
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
      // Prefer scrolling the last message into view to handle dynamic content heights
        requestAnimationFrame(() => {
        const container: HTMLElement | null = this.messageContainer
          ? this.messageContainer.nativeElement
          : document.querySelector('.chat-messages') as HTMLElement;

        if (!container) {
          return;
        }

        const lastMessage = container.querySelector('.message:last-child') as HTMLElement | null;
        if (lastMessage) {
          lastMessage.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
          });
        } else {
          // Fallback to container scroll if no message element is found
          container.scrollTop = container.scrollHeight;
        }
        });
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
      const container: HTMLElement | null = this.messageContainer
        ? this.messageContainer.nativeElement
        : document.querySelector('.chat-messages') as HTMLElement;

      if (!container) {
        return;
      }

      container.scrollTop = container.scrollTop + 20;
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
    // Use setTimeout to ensure DOM is updated
    setTimeout(() => {
      const anchorTags = document.querySelectorAll('.chat-bot-container a');
      console.log('Found anchor tags:', anchorTags.length);
      
      anchorTags.forEach((anchor: Element) => {
        const htmlAnchor = anchor as HTMLAnchorElement;
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
        
        console.log('Styled anchor:', htmlAnchor);
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
    return 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/icons/user/profile_default.svg';

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