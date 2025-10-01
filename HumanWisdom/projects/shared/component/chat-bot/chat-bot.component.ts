import { Component, AfterViewInit, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { ChatbotService } from '../../services/chatbot.service';
import { ChatStore, ChatMessage } from '../../stores/chat.store';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
  errorMessage: string = '';

  private messagesSubscription: Subscription = new Subscription();
  private typingSubscription: Subscription = new Subscription();
  private sessionSubscription: Subscription = new Subscription();

  constructor(
    private chatbotService: ChatbotService,
    private chatStore: ChatStore,
    private sanitizer: DomSanitizer,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    // Subscribe to messages from store
    this.messagesSubscription = this.chatStore.messages$.subscribe(
      messages => {
        this.messages = messages;
        // Scroll to bottom when messages update (with longer delay to ensure DOM is ready)
        setTimeout(() => this.scrollToBottom(), 1000);
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
  }

  onSendMessage(): void {
    if (!this.currentMessage.trim() || this.isLoading) {
      return;
    }

    const message = this.currentMessage.trim();
    this.currentMessage = '';
    this.errorMessage = '';
    this.isLoading = true;

    // Add user message to chat
    this.chatbotService.addUserMessage(message);

    // Add typing indicator
    this.chatbotService.addTypingIndicator();
    this.chatbotService.setTyping(true);

    // Send message to chatbot API
    this.chatbotService.sendMessage(message).subscribe({
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
    
    // Option 2: Navigate to specific dashboard route (uncomment if needed)
   this.router.navigate(['/adults/home']);
    
    // Optional: Clear messages when closing (uncomment if you want to clear chat history)
    // this.chatbotService.clearMessages();
  }

  scrollToBottom(): void {
    if (this.messageContainer) {
      try {
        const element = this.messageContainer.nativeElement;
        // Force immediate scroll first
        element.scrollTop = element.scrollHeight;
        // Then smooth scroll to ensure we're at the bottom
        requestAnimationFrame(() => {
          element.scrollTo({
            top: element.scrollHeight,
            behavior: 'smooth'
          });
        });
      } catch (err) {
        console.error('Error scrolling to bottom:', err);
      }
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

  sanitizeHtml(html: string): SafeHtml {
    console.log('HTML Content:', html);
    console.log('Contains anchor tags:', html.includes('<a'));
    
    // Add inline styles to anchor tags as a workaround
    const styledHtml = html.replace(/<a\s+([^>]*?)>/gi, (match, attributes) => {
      // Check if style attribute already exists
      if (attributes.includes('style=')) {
        return match.replace(/style="([^"]*)"/, 'style="$1; color: #1976d2 !important; text-decoration: underline !important;"');
      } else {
        return `<a ${attributes} style="color: #1976d2 !important; text-decoration: underline !important; cursor: pointer !important;">`;
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
}
