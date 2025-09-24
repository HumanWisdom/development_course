import { Component, AfterViewInit, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatbotService, ChatMessage } from '../../services/chatbot.service';

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

  constructor(private chatbotService: ChatbotService) {}

  ngOnInit(): void {
    // Subscribe to messages
    this.messagesSubscription = this.chatbotService.messages$.subscribe(
      messages => {
        this.messages = messages;
        setTimeout(() => this.scrollToBottom(), 100);
      }
    );

    // Subscribe to typing indicator
    this.typingSubscription = this.chatbotService.isTyping$.subscribe(
      isTyping => this.isTyping = isTyping
    );
  }

  ngAfterViewInit(): void {
    this.scrollToBottom();
    // Focus on input when component loads
    if (this.messageInput) {
      this.messageInput.nativeElement.focus();
    }
  }

  ngOnDestroy(): void {
    this.messagesSubscription.unsubscribe();
    this.typingSubscription.unsubscribe();
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

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.onSendMessage();
    }
  }

  onCloseChat(): void {
    // This would typically emit an event to parent component or use a service
    // For now, we'll just clear the messages
    this.chatbotService.clearMessages();
  }

  scrollToBottom(): void {
    if (this.messageContainer) {
      const element = this.messageContainer.nativeElement;
      element.scrollTop = element.scrollHeight;
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
}
