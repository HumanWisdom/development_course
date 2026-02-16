import { ComponentFixture, TestBed, fakeAsync, tick, flush } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { of, throwError, Subject } from 'rxjs';
import { ChatBotComponent } from './chat-bot.component';
import { ChatbotService, HistoryMessage } from '../../services/chatbot.service';
import { ChatStore, ChatMessage } from '../../stores/chat.store';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('ChatBotComponent', () => {
  let component: ChatBotComponent;
  let fixture: ComponentFixture<ChatBotComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockChatbotService: jasmine.SpyObj<ChatbotService>;
  let mockChatStore: jasmine.SpyObj<ChatStore>;
  let mockSanitizer: jasmine.SpyObj<DomSanitizer>;
  let mockSafeHtml: any;

  // Observable subjects for store
  let messagesSubject: Subject<ChatMessage[]>;
  let isTypingSubject: Subject<boolean>;
  let sessionIdSubject: Subject<string | null>;
  let activeSuggestionsSubject: Subject<string[]>;

  const mockChatbotResponse = {
    status: 'success' as const,
    response: 'This is a test response',
    session_id: 'test-session-123',
    allow_feedback: true,
    offer_related: false,
    is_followup: false,
    has_more: false
  };

  const mockHistoryResponse = {
    status: 'success' as const,
    history: [
      {
        user_message: 'Hello',
        bot_response: 'Hi there!',
        created_at: '2024-01-01T10:00:00Z',
        is_followup: 0
      }
    ] as HistoryMessage[],
    user_id: '123'
  };

  beforeEach(async () => {
    // Create subjects for observables
    messagesSubject = new Subject<ChatMessage[]>();
    isTypingSubject = new Subject<boolean>();
    sessionIdSubject = new Subject<string | null>();
    activeSuggestionsSubject = new Subject<string[]>();

    // Create spies
    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockLocation = jasmine.createSpyObj('Location', ['back']);
    mockSanitizer = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustHtml']);
    mockSafeHtml = { changingThisBreaksApplicationSecurity: 'safe-html' };
    mockSanitizer.bypassSecurityTrustHtml.and.returnValue(mockSafeHtml);

    mockChatbotService = jasmine.createSpyObj('ChatbotService', [
      'sendMessage',
      'addUserMessage',
      'addBotMessage',
      'addTypingIndicator',
      'removeTypingIndicator',
      'setTyping',
      'loadHistory',
      'ensureWelcomeMessages',
      'prependHistoryMessages',
      'clearMessages',
      'formatTimestamp',
      'getFullQuestionForNumber',
      'sendFeedback',
      'sendYesNoResponse',
      'trackLinkClick'
    ]);

    mockChatStore = jasmine.createSpyObj('ChatStore', [
      'updateMessage',
      'getCurrentProgramType'
    ], {
      messages$: messagesSubject.asObservable(),
      isTyping$: isTypingSubject.asObservable(),
      sessionId$: sessionIdSubject.asObservable(),
      activeSuggestions$: activeSuggestionsSubject.asObservable()
    });
    
    // Setup default return values for updateMessage
    mockChatStore.updateMessage.and.returnValue(undefined);

    // Setup default return values
    mockChatbotService.sendMessage.and.returnValue(of(mockChatbotResponse));
    mockChatbotService.loadHistory.and.returnValue(of(mockHistoryResponse));
    mockChatbotService.sendFeedback.and.returnValue(of({ status: 'success' }));
    mockChatbotService.sendYesNoResponse.and.returnValue(of(mockChatbotResponse));
    mockChatbotService.trackLinkClick.and.returnValue(of({ status: 'success' }));
    mockChatbotService.formatTimestamp.and.returnValue('10:00 AM');
    mockChatbotService.getFullQuestionForNumber.and.returnValue('Test question');
    mockChatStore.getCurrentProgramType.and.returnValue(null);

    // Spy on SharedService static methods
    spyOn(SharedService, 'getUserId').and.returnValue(123);
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    
    // Mock ProgramId
    const originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => ProgramType.Adults,
      configurable: true
    });

    // Mock localStorage
    spyOn(localStorage, 'getItem').and.returnValue(null);

    await TestBed.configureTestingModule({
      declarations: [ChatBotComponent],
      imports: [CommonModule, FormsModule],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: Location, useValue: mockLocation },
        { provide: ChatbotService, useValue: mockChatbotService },
        { provide: ChatStore, useValue: mockChatStore },
        { provide: DomSanitizer, useValue: mockSanitizer }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    // Restore ProgramId if needed
    if (originalProgramId) {
      Object.defineProperty(SharedService, 'ProgramId', originalProgramId);
    }
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBotComponent);
    component = fixture.componentInstance;
    
    // Setup ViewChild mocks before detectChanges
    component.messageContainer = {
      nativeElement: {
        scrollTop: 0,
        scrollHeight: 1000
      }
    } as any;
    component.messageInput = {
      nativeElement: {
        focus: jasmine.createSpy('focus')
      }
    } as any;

    // Emit initial values for observables
    messagesSubject.next([]);
    isTypingSubject.next(false);
    sessionIdSubject.next(null);
    activeSuggestionsSubject.next([]);

    fixture.detectChanges();
  });

  afterEach(() => {
    // Reset spies but don't complete subjects (they're reused across tests)
    // Completing subjects would break subsequent tests
    if (mockChatbotService) {
      Object.keys(mockChatbotService).forEach(key => {
        const spy = (mockChatbotService as any)[key];
        if (spy && typeof spy.calls !== 'undefined') {
          spy.calls.reset();
        }
      });
    }
    if (mockChatStore) {
      Object.keys(mockChatStore).forEach(key => {
        const spy = (mockChatStore as any)[key];
        if (spy && typeof spy.calls !== 'undefined') {
          spy.calls.reset();
        }
      });
    }
  });

  describe('Component Initialization', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should initialize with default values', fakeAsync(() => {
      // Mock loadHistory to return no history for this test
      mockChatbotService.loadHistory.and.returnValue(of({
        status: 'success' as const,
        history: [],
        user_id: '123'
      }));
      
      // Reset component state
      component.isLoading = false;
      component.hasHistoryAvailable = false;
      
      // Trigger ngOnInit if not already called
      if (!component.messages) {
        component.ngOnInit();
      }
      
      tick(); // Allow any async initialization
      expect(component.messages).toEqual([]);
      expect(component.currentMessage).toBe('');
      expect(component.isTyping).toBe(false);
      expect(component.isLoading).toBe(false);
      expect(component.isLoadingHistory).toBe(false);
      expect(component.errorMessage).toBe('');
      expect(component.activeSuggestions).toEqual([]);
      expect(component.hasHistoryAvailable).toBe(false);
    }));

    it('should set user avatar on init', () => {
      expect(component.userAvatarUrl).toBeDefined();
    });

    it('should subscribe to messages from store', fakeAsync(() => {
      // Flush any pending timers from component initialization
      tick(300); // Flush all pending timers
      flush(); // Ensure all pending timers are flushed
      
      const testMessages: ChatMessage[] = [
        {
          id: '1',
          content: 'Hello',
          sender: 'user',
          timestamp: new Date()
        }
      ];
      
      messagesSubject.next(testMessages);
      tick(200); // Flush all timers including setTimeout(50) and setTimeout(100) in subscription
      flush(); // Ensure all pending timers are flushed
      
      expect(component.messages).toEqual(testMessages);
    }));

    it('should subscribe to typing indicator from store', fakeAsync(() => {
      isTypingSubject.next(true);
      tick();
      
      expect(component.isTyping).toBe(true);
    }));

    it('should subscribe to active suggestions from store', fakeAsync(() => {
      const suggestions = ['Suggestion 1', 'Suggestion 2'];
      activeSuggestionsSubject.next(suggestions);
      tick();
      
      expect(component.activeSuggestions).toEqual(suggestions);
    }));

    it('should call ensureWelcomeMessages on init', () => {
      expect(mockChatbotService.ensureWelcomeMessages).toHaveBeenCalled();
    });

    it('should check history availability on init', fakeAsync(() => {
      // ngOnInit is called during fixture.detectChanges() in beforeEach
      // Verify that checkHistoryAvailability logic was executed by checking loadHistory was called
      // (assuming user is not a guest and has valid userId)
      tick();
      
      // Verify that loadHistory was called during initialization (via checkHistoryAvailability)
      expect(mockChatbotService.loadHistory).toHaveBeenCalled();
    }));
  });

  describe('ngAfterViewInit', () => {
    it('should call ensureWelcomeMessages after view init', fakeAsync(() => {
      mockChatbotService.ensureWelcomeMessages.calls.reset();
      component.ngAfterViewInit();
      tick(200); // Flush setTimeout(100) and any other timers
      flush(); // Ensure all pending timers are flushed
      
      expect(mockChatbotService.ensureWelcomeMessages).toHaveBeenCalled();
    }));

    it('should scroll to bottom after view init', fakeAsync(() => {
      spyOn(component, 'scrollToBottom');
      component.ngAfterViewInit();
      tick(300); // Flush all timers (ensureWelcomeMessages setTimeout(100) + scrollToBottom setTimeout(100))
      
      expect(component.scrollToBottom).toHaveBeenCalled();
    }));

    it('should focus on input after view init', fakeAsync(() => {
      const focusSpy = jasmine.createSpy('focus');
      component.messageInput = {
        nativeElement: {
          focus: focusSpy
        }
      } as any;
      
      component.ngAfterViewInit();
      tick(300); // Flush all timers (ensureWelcomeMessages + scrollToBottom + focus setTimeout)
      
      expect(focusSpy).toHaveBeenCalled();
    }));

    it('should style anchor tags after view init', fakeAsync(() => {
      spyOn(component, 'styleAnchorTags');
      component.ngAfterViewInit();
      tick(100); // Flush ensureWelcomeMessages setTimeout(100)
      tick(300); // Flush styleAnchorTags setTimeout(300)
      flush(); // Ensure all pending timers are flushed
      
      expect(component.styleAnchorTags).toHaveBeenCalled();
    }));
  });

  describe('ngOnDestroy', () => {
    it('should unsubscribe from all subscriptions', () => {
      spyOn(component['messagesSubscription'], 'unsubscribe');
      spyOn(component['typingSubscription'], 'unsubscribe');
      spyOn(component['sessionSubscription'], 'unsubscribe');
      spyOn(component['suggestionsSubscription'], 'unsubscribe');
      
      component.ngOnDestroy();
      
      expect(component['messagesSubscription'].unsubscribe).toHaveBeenCalled();
      expect(component['typingSubscription'].unsubscribe).toHaveBeenCalled();
      expect(component['sessionSubscription'].unsubscribe).toHaveBeenCalled();
      expect(component['suggestionsSubscription'].unsubscribe).toHaveBeenCalled();
    });
  });

  describe('onSendMessage', () => {
    it('should not send message if currentMessage is empty', () => {
      component.currentMessage = '';
      component.onSendMessage();
      
      expect(mockChatbotService.sendMessage).not.toHaveBeenCalled();
    });

    it('should not send message if currentMessage is only whitespace', () => {
      component.currentMessage = '   ';
      component.onSendMessage();
      
      expect(mockChatbotService.sendMessage).not.toHaveBeenCalled();
    });

    it('should not send message if isLoading is true', () => {
      component.currentMessage = 'Test message';
      component.isLoading = true;
      component.onSendMessage();
      
      expect(mockChatbotService.sendMessage).not.toHaveBeenCalled();
    });

    it('should send message with trimmed content', () => {
      component.currentMessage = '  Test message  ';
      component.isLoading = false;
      
      component.onSendMessage();
      
      expect(mockChatbotService.getFullQuestionForNumber).toHaveBeenCalledWith('Test message');
      expect(mockChatbotService.addUserMessage).toHaveBeenCalled();
      expect(mockChatbotService.sendMessage).toHaveBeenCalledWith('Test message');
    });

    it('should clear currentMessage after sending', () => {
      component.currentMessage = 'Test message';
      component.onSendMessage();
      
      expect(component.currentMessage).toBe('');
    });

    it('should clear error message when sending', () => {
      component.errorMessage = 'Previous error';
      component.currentMessage = 'Test message';
      component.onSendMessage();
      
      expect(component.errorMessage).toBe('');
    });

    it('should set isLoading to true when sending', fakeAsync(() => {
      // Use a Subject to control when the observable completes
      const sendMessageSubject = new Subject<any>();
      mockChatbotService.sendMessage.and.returnValue(sendMessageSubject.asObservable());
      
      component.currentMessage = 'Test message';
      component.isLoading = false;
      component.onSendMessage();
      
      // isLoading should be set to true immediately (synchronously) before observable completes
      expect(component.isLoading).toBe(true);
      
      // Now complete the observable
      sendMessageSubject.next(mockChatbotResponse);
      sendMessageSubject.complete();
      tick(150); // Flush all timers including setTimeout(100) in scrollSlightlyDown
      flush(); // Ensure all pending timers are flushed
      
      // After completion, isLoading should be false
      expect(component.isLoading).toBe(false);
    }));

    it('should add typing indicator when sending', () => {
      component.currentMessage = 'Test message';
      component.onSendMessage();
      
      expect(mockChatbotService.addTypingIndicator).toHaveBeenCalled();
      expect(mockChatbotService.setTyping).toHaveBeenCalledWith(true);
    });

    it('should handle successful response', fakeAsync(() => {
      component.currentMessage = 'Test message';
      component.onSendMessage();
      tick(150); // Flush all timers including setTimeout
      
      expect(mockChatbotService.removeTypingIndicator).toHaveBeenCalled();
      expect(mockChatbotService.setTyping).toHaveBeenCalledWith(false);
      expect(mockChatbotService.addBotMessage).toHaveBeenCalled();
      expect(component.isLoading).toBe(false);
    }));

    it('should handle error response', fakeAsync(() => {
      mockChatbotService.sendMessage.and.returnValue(throwError(() => new Error('API Error')));
      component.currentMessage = 'Test message';
      component.onSendMessage();
      tick(150); // Flush all timers
      
      expect(mockChatbotService.removeTypingIndicator).toHaveBeenCalled();
      expect(mockChatbotService.setTyping).toHaveBeenCalledWith(false);
      expect(component.errorMessage).toContain('trouble connecting');
      expect(component.isLoading).toBe(false);
    }));

    it('should handle response with error status', fakeAsync(() => {
      const errorResponse = { ...mockChatbotResponse, status: 'error' as const };
      mockChatbotService.sendMessage.and.returnValue(of(errorResponse));
      component.currentMessage = 'Test message';
      component.onSendMessage();
      tick(150); // Flush all timers
      
      expect(component.errorMessage).toContain('encountered an error');
      expect(component.isLoading).toBe(false);
    }));

    it('should scroll slightly down when sending', fakeAsync(() => {
      spyOn(component as any, 'scrollSlightlyDown');
      component.currentMessage = 'Test message';
      component.onSendMessage();
      tick(150);
      
      expect((component as any).scrollSlightlyDown).toHaveBeenCalled();
    }));
  });

  describe('onKeyPress', () => {
    it('should send message on Enter key press', () => {
      spyOn(component, 'onSendMessage');
      const event = new KeyboardEvent('keypress', { key: 'Enter' });
      spyOn(event, 'preventDefault');
      
      component.onKeyPress(event);
      
      expect(event.preventDefault).toHaveBeenCalled();
      expect(component.onSendMessage).toHaveBeenCalled();
    });

    it('should not send message on Shift+Enter', () => {
      spyOn(component, 'onSendMessage');
      const event = new KeyboardEvent('keypress', { key: 'Enter', shiftKey: true });
      
      component.onKeyPress(event);
      
      expect(component.onSendMessage).not.toHaveBeenCalled();
    });

    it('should not send message on other keys', () => {
      spyOn(component, 'onSendMessage');
      const event = new KeyboardEvent('keypress', { key: 'a' });
      
      component.onKeyPress(event);
      
      expect(component.onSendMessage).not.toHaveBeenCalled();
    });
  });

  describe('onCloseChat', () => {
    it('should navigate to adults home for adults program', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => ProgramType.Adults,
        configurable: true
      });
      
      component.onCloseChat();
      
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/home']);
    });

    it('should navigate to teenagers dashboard for teenagers program', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => ProgramType.Teenagers,
        configurable: true
      });
      
      component.onCloseChat();
      
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/teenager-dashboard']);
    });
  });

  describe('onLoadHistory', () => {
    beforeEach(() => {
      // Reset spy if it exists
      if ((component.isGuestUser as jasmine.Spy).and) {
        (component.isGuestUser as jasmine.Spy).and.returnValue(false);
      } else {
        spyOn(component, 'isGuestUser').and.returnValue(false);
      }
    });

    it('should not load history if already loading', () => {
      mockChatbotService.loadHistory.calls.reset();
      component.isLoadingHistory = true;
      component.onLoadHistory();
      
      expect(mockChatbotService.loadHistory).not.toHaveBeenCalled();
    });

    it('should not load history for guest users', () => {
      mockChatbotService.loadHistory.calls.reset();
      // Check if already spied, if so reset and reconfigure
      if ((component.isGuestUser as jasmine.Spy).and) {
        (component.isGuestUser as jasmine.Spy).and.returnValue(true);
      } else {
        spyOn(component, 'isGuestUser').and.returnValue(true);
      }
      component.isLoadingHistory = false;
      component.onLoadHistory();
      
      expect(mockChatbotService.loadHistory).not.toHaveBeenCalled();
    });

    it('should prevent default event behavior', () => {
      const event = jasmine.createSpyObj('Event', ['preventDefault']);
      component.onLoadHistory(event);
      
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should load history from service', fakeAsync(() => {
      component.isLoadingHistory = false;
      component.onLoadHistory();
      tick();
      
      expect(mockChatbotService.loadHistory).toHaveBeenCalled();
      expect(component.isLoadingHistory).toBe(false);
    }));

    it('should use cached history if available for same user', fakeAsync(() => {
      mockChatbotService.loadHistory.calls.reset();
      const cachedHistory: HistoryMessage[] = [
        {
          user_message: 'Cached message',
          bot_response: 'Cached response',
          created_at: '2024-01-01T10:00:00Z',
          is_followup: 0
        }
      ];
      component['cachedHistoryMessages'] = cachedHistory;
      component['cachedHistoryUserId'] = 123;
      (SharedService.getUserId as jasmine.Spy).and.returnValue(123);
      // Check if already spied, if so reset and reconfigure
      if ((component.isGuestUser as jasmine.Spy).and) {
        (component.isGuestUser as jasmine.Spy).and.returnValue(false);
      } else {
        spyOn(component, 'isGuestUser').and.returnValue(false);
      }
      spyOn(component as any, 'applyHistoryMessages');
      
      component.onLoadHistory();
      tick();
      
      expect((component as any).applyHistoryMessages).toHaveBeenCalledWith(cachedHistory);
      expect(mockChatbotService.loadHistory).not.toHaveBeenCalled();
      expect(component.isLoadingHistory).toBe(false);
    }));

    it('should handle successful history load', fakeAsync(() => {
      spyOn(component as any, 'applyHistoryMessages');
      component.onLoadHistory();
      tick();
      
      expect((component as any).applyHistoryMessages).toHaveBeenCalledWith(mockHistoryResponse.history);
      expect(component.isLoadingHistory).toBe(false);
    }));

    it('should handle empty history response', fakeAsync(() => {
      const emptyResponse = { ...mockHistoryResponse, history: [] };
      mockChatbotService.loadHistory.and.returnValue(of(emptyResponse));
      component.isLoadingHistory = false;
      component['cachedHistoryMessages'] = null; // Ensure no cached history
      // Check if already spied, if so reset and reconfigure
      if ((component.isGuestUser as jasmine.Spy).and) {
        (component.isGuestUser as jasmine.Spy).and.returnValue(false);
      } else {
        spyOn(component, 'isGuestUser').and.returnValue(false);
      }
      
      component.onLoadHistory();
      tick();
      
      expect(component.errorMessage).toContain('No previous conversations');
      expect(component.hasHistoryAvailable).toBe(false);
      expect(component.isLoadingHistory).toBe(false);
    }));

    it('should handle history load error', fakeAsync(() => {
      mockChatbotService.loadHistory.and.returnValue(throwError(() => new Error('Load error')));
      component.isLoadingHistory = false;
      component['cachedHistoryMessages'] = null; // Ensure no cached history
      // Check if already spied, if so reset and reconfigure
      if ((component.isGuestUser as jasmine.Spy).and) {
        (component.isGuestUser as jasmine.Spy).and.returnValue(false);
      } else {
        spyOn(component, 'isGuestUser').and.returnValue(false);
      }
      
      component.onLoadHistory();
      tick();
      
      expect(component.errorMessage).toContain('Failed to load');
      expect(component.isLoadingHistory).toBe(false);
    }));
  });

  describe('scrollToBottom', () => {
    it('should scroll window to bottom', fakeAsync(() => {
      spyOn(window, 'scrollTo');
      component.scrollToBottom();
      tick(150);
      
      expect(window.scrollTo).toHaveBeenCalled();
    }));

    it('should handle scroll errors gracefully', () => {
      spyOn(window, 'scrollTo').and.throwError('Scroll error');
      spyOn(console, 'error');
      
      expect(() => component.scrollToBottom()).not.toThrow();
    });
  });

  describe('scrollSlightlyDown', () => {
    it('should scroll window slightly down', () => {
      const scrollBySpy = spyOn(window, 'scrollBy').and.callThrough();
      component['scrollSlightlyDown']();
      
      expect(scrollBySpy).toHaveBeenCalled();
      const callArgs = (scrollBySpy as jasmine.Spy).calls.mostRecent().args[0];
      expect(callArgs).toEqual(jasmine.objectContaining({
        top: 20,
        behavior: 'smooth'
      }));
    });

    it('should handle scroll errors gracefully', () => {
      spyOn(window, 'scrollBy').and.throwError('Scroll error');
      spyOn(console, 'error');
      
      expect(() => component['scrollSlightlyDown']()).not.toThrow();
    });
  });

  describe('formatTimestamp', () => {
    it('should format timestamp using service', () => {
      const date = new Date();
      component.formatTimestamp(date);
      
      expect(mockChatbotService.formatTimestamp).toHaveBeenCalledWith(date);
    });
  });

  describe('retryLastMessage', () => {
    it('should retry last user message', () => {
      const testMessages: ChatMessage[] = [
        {
          id: '1',
          content: 'First message',
          sender: 'user',
          timestamp: new Date()
        },
        {
          id: '2',
          content: 'Last message',
          sender: 'user',
          timestamp: new Date()
        }
      ];
      component.messages = testMessages;
      spyOn(component, 'onSendMessage');
      
      component.retryLastMessage();
      
      expect(component.currentMessage).toBe('Last message');
      expect(component.onSendMessage).toHaveBeenCalled();
    });

    it('should not retry if no user messages exist', () => {
      component.messages = [];
      spyOn(component, 'onSendMessage');
      
      component.retryLastMessage();
      
      expect(component.onSendMessage).not.toHaveBeenCalled();
    });

    it('should not retry if only bot messages exist', () => {
      component.messages = [
        {
          id: '1',
          content: 'Bot message',
          sender: 'bot',
          timestamp: new Date()
        }
      ];
      spyOn(component, 'onSendMessage');
      
      component.retryLastMessage();
      
      expect(component.onSendMessage).not.toHaveBeenCalled();
    });
  });

  describe('clearError', () => {
    it('should clear error message', () => {
      component.errorMessage = 'Test error';
      component.clearError();
      
      expect(component.errorMessage).toBe('');
    });
  });

  describe('onSuggestionClick', () => {
    it('should send message with suggestion', () => {
      component.isLoading = false;
      spyOn(component, 'onSendMessage');
      
      component.onSuggestionClick('Test suggestion');
      
      expect(component.currentMessage).toBe('Test suggestion');
      expect(component.onSendMessage).toHaveBeenCalled();
    });

    it('should not send if loading', () => {
      component.isLoading = true;
      spyOn(component, 'onSendMessage');
      
      component.onSuggestionClick('Test suggestion');
      
      expect(component.onSendMessage).not.toHaveBeenCalled();
    });
  });

  describe('onMessageContentClick', () => {
    let locationMock: any;
    let hrefValue: string = '';

    beforeAll(() => {
      // Create a mock location object
      locationMock = {
        assign: jasmine.createSpy('assign'),
        replace: jasmine.createSpy('replace')
      };
      
      // Define href as a property with getter/setter on the mock
      Object.defineProperty(locationMock, 'href', {
        get: () => hrefValue,
        set: (value: string) => {
          hrefValue = value;
        },
        configurable: true
      });
      
      // Try to mock window.location
      try {
        const existingDescriptor = Object.getOwnPropertyDescriptor(window, 'location');
        
        // Delete the existing location property if possible
        if (existingDescriptor && existingDescriptor.configurable) {
          delete (window as any).location;
        }
        
        // Define our mock location
        Object.defineProperty(window, 'location', {
          get: () => locationMock,
          configurable: true
        });
      } catch (e) {
        // If we can't define it, the test will need to work differently
        console.warn('Could not mock window.location:', e);
      }
    });

    beforeEach(() => {
      // Reset href for each test
      hrefValue = '';
    });

    it('should not track if not an anchor tag', () => {
      // Reset href for this test
      hrefValue = '';
      
      const div = document.createElement('div');
      const event = {
        target: div,
        preventDefault: jasmine.createSpy('preventDefault')
      } as any;
      
      spyOn(div, 'closest').and.returnValue(null);
      
      component.onMessageContentClick(event);
      
      expect(mockChatbotService.trackLinkClick).not.toHaveBeenCalled();
      expect(event.preventDefault).not.toHaveBeenCalled();
    });
  });

  describe('onThumbsUp', () => {
    let mockMessage: ChatMessage;

    beforeEach(() => {
      // Reset spies before each test
      mockChatStore.updateMessage.calls.reset();
      mockChatbotService.sendFeedback.calls.reset();
      
      // Create fresh mockMessage for each test to avoid state pollution
      mockMessage = {
        id: '1',
        content: 'Bot response',
        sender: 'bot',
        timestamp: new Date(),
        allow_feedback: true,
        feedback_given: undefined // Ensure it's not set
      };

      component.messages = [
        {
          id: '0',
          content: 'User question',
          sender: 'user',
          timestamp: new Date()
        },
        mockMessage
      ];
    });

    it('should send positive feedback', fakeAsync(() => {
      // Ensure isLoading is false and message doesn't have feedback
      component.isLoading = false;
      mockMessage.feedback_given = undefined;
      
      component.onThumbsUp(mockMessage);
      // Flush the observable subscription - of() emits synchronously but we need to flush
      tick();
      
      expect(mockChatStore.updateMessage).toHaveBeenCalled();
      expect(mockChatbotService.sendFeedback).toHaveBeenCalledWith(
        '1',
        'thumbs_up',
        'User question',
        'Bot response'
      );
    }));

    it('should not send feedback if already given', () => {
      mockMessage.feedback_given = 'positive';
      component.isLoading = false;
      
      component.onThumbsUp(mockMessage);
      
      expect(mockChatbotService.sendFeedback).not.toHaveBeenCalled();
    });

    it('should not send feedback if loading', () => {
      component.isLoading = true;
      
      component.onThumbsUp(mockMessage);
      
      expect(mockChatbotService.sendFeedback).not.toHaveBeenCalled();
    });

    it('should revert feedback on API error', fakeAsync(() => {
      mockChatbotService.sendFeedback.and.returnValue(throwError(() => new Error('API Error')));
      component.isLoading = false;
      mockMessage.feedback_given = undefined;
      mockChatStore.updateMessage.calls.reset();
      
      component.onThumbsUp(mockMessage);
      // Flush the observable error handler - throwError emits synchronously
      tick();
      
      expect(mockChatStore.updateMessage).toHaveBeenCalledTimes(2); // Once to set, once to revert
    }));
  });

  describe('onThumbsDown', () => {
    let mockMessage: ChatMessage;

    beforeEach(() => {
      // Reset spies before each test
      mockChatStore.updateMessage.calls.reset();
      mockChatbotService.sendFeedback.calls.reset();
      
      // Create fresh mockMessage for each test to avoid state pollution
      mockMessage = {
        id: '1',
        content: 'Bot response',
        sender: 'bot',
        timestamp: new Date(),
        allow_feedback: true,
        feedback_given: undefined // Ensure it's not set
      };

      component.messages = [
        {
          id: '0',
          content: 'User question',
          sender: 'user',
          timestamp: new Date()
        },
        mockMessage
      ];
    });

    it('should send negative feedback', fakeAsync(() => {
      // Ensure isLoading is false and message doesn't have feedback
      component.isLoading = false;
      mockMessage.feedback_given = undefined;
      
      component.onThumbsDown(mockMessage);
      // Flush the observable subscription - of() emits synchronously but we need to flush
      tick();
      
      expect(mockChatStore.updateMessage).toHaveBeenCalled();
      expect(mockChatbotService.sendFeedback).toHaveBeenCalledWith(
        '1',
        'thumbs_down',
        'User question',
        'Bot response'
      );
    }));

    it('should not send feedback if already given', () => {
      mockMessage.feedback_given = 'negative';
      component.isLoading = false;
      
      component.onThumbsDown(mockMessage);
      
      expect(mockChatbotService.sendFeedback).not.toHaveBeenCalled();
    });

    it('should revert feedback on API error', fakeAsync(() => {
      mockChatbotService.sendFeedback.and.returnValue(throwError(() => new Error('API Error')));
      component.isLoading = false;
      mockMessage.feedback_given = undefined;
      mockChatStore.updateMessage.calls.reset();
      
      component.onThumbsDown(mockMessage);
      // Flush the observable error handler - throwError emits synchronously
      tick();
      
      expect(mockChatStore.updateMessage).toHaveBeenCalledTimes(2);
    }));
  });

  describe('onYesClick', () => {
    it('should send yes response', fakeAsync(() => {
      component.isLoading = false;
      component.onYesClick();
      tick(150); // Flush all timers
      
      expect(component.currentMessage).toBe('Yes');
      expect(mockChatbotService.addUserMessage).toHaveBeenCalledWith('Yes');
      expect(mockChatbotService.sendYesNoResponse).toHaveBeenCalledWith('yes');
      expect(component.isLoading).toBe(false);
    }));

    it('should not send if loading', () => {
      component.isLoading = true;
      component.onYesClick();
      
      expect(mockChatbotService.sendYesNoResponse).not.toHaveBeenCalled();
    });

    it('should handle error response', fakeAsync(() => {
      mockChatbotService.sendYesNoResponse.and.returnValue(throwError(() => new Error('API Error')));
      component.isLoading = false;
      component.onYesClick();
      tick(150); // Flush all timers
      
      expect(component.errorMessage).toContain('trouble connecting');
      expect(component.isLoading).toBe(false);
    }));
  });

  describe('onNoClick', () => {
    it('should send no response', fakeAsync(() => {
      component.isLoading = false;
      component.onNoClick();
      tick(150); // Flush all timers
      
      expect(component.currentMessage).toBe('No');
      expect(mockChatbotService.addUserMessage).toHaveBeenCalledWith('No');
      expect(mockChatbotService.sendYesNoResponse).toHaveBeenCalledWith('no');
      expect(component.isLoading).toBe(false);
    }));

    it('should not send if loading', () => {
      component.isLoading = true;
      component.onNoClick();
      
      expect(mockChatbotService.sendYesNoResponse).not.toHaveBeenCalled();
    });
  });

  describe('onGiveMoreOptions', () => {
    it('should send yes response for more options', fakeAsync(() => {
      component.isLoading = false;
      component.onGiveMoreOptions();
      tick(150); // Flush all timers
      
      expect(mockChatbotService.addUserMessage).toHaveBeenCalledWith('Give me more options');
      expect(mockChatbotService.sendYesNoResponse).toHaveBeenCalledWith('yes');
      expect(component.isLoading).toBe(false);
    }));

    it('should not send if loading', () => {
      component.isLoading = true;
      component.onGiveMoreOptions();
      
      expect(mockChatbotService.sendYesNoResponse).not.toHaveBeenCalled();
    });
  });

  describe('sanitizeHtml', () => {
    it('should sanitize HTML content', () => {
      const html = '<p>Test content</p>';
      const result = component.sanitizeHtml(html);
      
      expect(mockSanitizer.bypassSecurityTrustHtml).toHaveBeenCalled();
      expect(result).toBe(mockSafeHtml);
    });

    it('should add styles to anchor tags', () => {
      const html = '<a href="test.html">Link</a>';
      component.sanitizeHtml(html);
      
      const callArgs = mockSanitizer.bypassSecurityTrustHtml.calls.mostRecent().args[0];
      expect(callArgs).toContain('style=');
      expect(callArgs).toContain('font-weight:500');
    });
  });

  describe('shouldShowTimestamp', () => {
    it('should return false for intro bot message', () => {
      const message: ChatMessage = {
        id: '1',
        content: "Hi. I'm olly. ask me a question.",
        sender: 'bot',
        timestamp: new Date()
      };
      
      expect(component.shouldShowTimestamp(message, false)).toBe(false);
    });

    it('should return false for first bot message', () => {
      const message: ChatMessage = {
        id: '1',
        content: 'Regular message',
        sender: 'bot',
        timestamp: new Date()
      };
      
      expect(component.shouldShowTimestamp(message, true)).toBe(false);
    });

    it('should return true for regular messages', () => {
      const message: ChatMessage = {
        id: '1',
        content: 'Regular message',
        sender: 'user',
        timestamp: new Date()
      };
      
      expect(component.shouldShowTimestamp(message, false)).toBe(true);
    });

    it('should return true for null message', () => {
      expect(component.shouldShowTimestamp(null as any, false)).toBe(true);
    });
  });

  describe('isGuestUser', () => {
    it('should return true for guest user (ID 563)', () => {
      (SharedService.getUserId as jasmine.Spy).and.returnValue(563);
      
      expect(component.isGuestUser()).toBe(true);
    });

    it('should return false for regular user', () => {
      (SharedService.getUserId as jasmine.Spy).and.returnValue(123);
      
      expect(component.isGuestUser()).toBe(false);
    });
  });

  describe('setUserAvatar', () => {
    it('should use default avatar when no userDetails in localStorage', () => {
      (localStorage.getItem as jasmine.Spy).and.returnValue(null);
      component['setUserAvatar']();
      
      expect(component.userAvatarUrl).toContain('profile_default.svg');
    });

    it('should use user image from localStorage', () => {
      const userDetails = {
        UserImagePath: 'https://example.com/image.jpg'
      };
      (localStorage.getItem as jasmine.Spy).and.returnValue(JSON.stringify(userDetails));
      
      component['setUserAvatar']();
      
      expect(component.userAvatarUrl).toContain('example.com/image.jpg');
    });

    it('should construct S3 URL for relative paths', () => {
      const userDetails = {
        UserImagePath: 'user/image.jpg'
      };
      (localStorage.getItem as jasmine.Spy).and.returnValue(JSON.stringify(userDetails));
      
      component['setUserAvatar']();
      
      expect(component.userAvatarUrl).toContain('humanwisdoms3.s3.eu-west-2.amazonaws.com');
    });

    it('should use default avatar on parse error', () => {
      (localStorage.getItem as jasmine.Spy).and.returnValue('invalid json');
      spyOn(console, 'warn');
      
      component['setUserAvatar']();
      
      expect(component.userAvatarUrl).toContain('profile_default.svg');
    });

    it('should use default avatar when path contains undefined', () => {
      const userDetails = {
        UserImagePath: 'undefined/image.jpg'
      };
      (localStorage.getItem as jasmine.Spy).and.returnValue(JSON.stringify(userDetails));
      
      component['setUserAvatar']();
      
      expect(component.userAvatarUrl).toContain('profile_default.svg');
    });
  });

  describe('checkAndHandleProgramTypeChange', () => {
    it('should clear chat when program type changes', () => {
      mockChatStore.getCurrentProgramType.and.returnValue(ProgramType.Teenagers);
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => ProgramType.Adults,
        configurable: true
      });
      
      component['checkAndHandleProgramTypeChange']();
      
      expect(mockChatbotService.clearMessages).toHaveBeenCalled();
      expect(component['cachedHistoryMessages']).toBeNull();
      expect(component.hasHistoryAvailable).toBe(false);
    });

    it('should not clear chat when program type is same', () => {
      mockChatStore.getCurrentProgramType.and.returnValue(ProgramType.Adults);
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => ProgramType.Adults,
        configurable: true
      });
      
      component['checkAndHandleProgramTypeChange']();
      
      expect(mockChatbotService.clearMessages).not.toHaveBeenCalled();
    });

    it('should not clear chat when stored program type is null', () => {
      mockChatStore.getCurrentProgramType.and.returnValue(null);
      
      component['checkAndHandleProgramTypeChange']();
      
      expect(mockChatbotService.clearMessages).not.toHaveBeenCalled();
    });
  });

  describe('checkHistoryAvailability', () => {
    beforeEach(() => {
      // Reset spy calls before each test
      mockChatbotService.loadHistory.calls.reset();
      
      // Reset spy if it exists
      if ((component.isGuestUser as jasmine.Spy).and) {
        (component.isGuestUser as jasmine.Spy).and.returnValue(false);
      } else {
        spyOn(component, 'isGuestUser').and.returnValue(false);
      }
      (SharedService.getUserId as jasmine.Spy).and.returnValue(123);
      
      // Reset component state
      component['historyCheckInProgress'] = false;
      component['cachedHistoryMessages'] = null;
      component['cachedHistoryUserId'] = null;
      component.hasHistoryAvailable = false;
    });

    it('should not check history for guest users', () => {
      // Remove existing spy if any
      if ((component.isGuestUser as jasmine.Spy).and) {
        (component.isGuestUser as jasmine.Spy).and.returnValue(true);
      } else {
        spyOn(component, 'isGuestUser').and.returnValue(true);
      }
      
      // Reset spy calls to ignore any previous calls
      mockChatbotService.loadHistory.calls.reset();
      
      component['checkHistoryAvailability']();
      
      expect(mockChatbotService.loadHistory).not.toHaveBeenCalled();
    });

    it('should not check history if check in progress', () => {
      component['historyCheckInProgress'] = true;
      component['cachedHistoryMessages'] = null;
      
      // Reset spy calls to ignore any previous calls
      mockChatbotService.loadHistory.calls.reset();
      
      component['checkHistoryAvailability']();
      
      expect(mockChatbotService.loadHistory).not.toHaveBeenCalled();
    });

    it('should not check history if no user ID', () => {
      (SharedService.getUserId as jasmine.Spy).and.returnValue(0);
      component['historyCheckInProgress'] = false;
      
      // Reset spy calls to ignore any previous calls
      mockChatbotService.loadHistory.calls.reset();
      
      component['checkHistoryAvailability']();
      
      expect(mockChatbotService.loadHistory).not.toHaveBeenCalled();
    });

    it('should check history availability', fakeAsync(() => {
      component['checkHistoryAvailability']();
      tick();
      
      expect(mockChatbotService.loadHistory).toHaveBeenCalled();
    }));

    it('should set hasHistoryAvailable to true when history exists', fakeAsync(() => {
      component['checkHistoryAvailability']();
      tick();
      
      expect(component.hasHistoryAvailable).toBe(true);
      expect(component['cachedHistoryMessages']).toEqual(mockHistoryResponse.history);
      expect(component['cachedHistoryUserId']).toBe(123);
    }));

    it('should clear cached history when user changes', fakeAsync(() => {
      component['cachedHistoryUserId'] = 456;
      component['cachedHistoryMessages'] = [{ user_message: 'Hello', bot_response: 'Hi there!', created_at: '2024-01-01T10:00:00Z', is_followup: 0 }];
      component.hasHistoryAvailable = true;
      component['historyCheckInProgress'] = false;
      (SharedService.getUserId as jasmine.Spy).and.returnValue(123); // Different user ID
      
      // Mock empty history response so it stays cleared after the async call
      mockChatbotService.loadHistory.and.returnValue(of({
        status: 'success' as const,
        history: [],
        user_id: '123'
      }));
      
      component['checkHistoryAvailability']();
      
      // Immediately after calling (synchronously), the cache should be cleared
      expect(component['cachedHistoryMessages']).toBeNull();
      expect(component.hasHistoryAvailable).toBe(false);
      
      // After async call completes, it should still be cleared (empty history)
      tick();
      expect(component['cachedHistoryMessages']).toBeNull();
      expect(component.hasHistoryAvailable).toBe(false);
    }));

    it('should handle history check error', fakeAsync(() => {
      mockChatbotService.loadHistory.and.returnValue(throwError(() => new Error('Error')));
      
      component['checkHistoryAvailability']();
      tick();
      
      expect(component.hasHistoryAvailable).toBe(false);
      expect(component['cachedHistoryMessages']).toBeNull();
      expect(component['historyCheckInProgress']).toBe(false);
    }));
  });

  describe('applyHistoryMessages', () => {
    it('should prepend history messages and clear cache', () => {
      const history: HistoryMessage[] = [
        {
          user_message: 'Hello',
          bot_response: 'Hi',
          created_at: '2024-01-01T10:00:00Z',
          is_followup: 0
        }
      ];
      component['cachedHistoryMessages'] = history;
      component['cachedHistoryUserId'] = 123;
      component.hasHistoryAvailable = true;
      
      component['applyHistoryMessages'](history);
      
      expect(mockChatbotService.prependHistoryMessages).toHaveBeenCalledWith(history);
      expect(component['cachedHistoryMessages']).toBeNull();
      expect(component.hasHistoryAvailable).toBe(false);
      expect(component['cachedHistoryUserId']).toBeNull();
    });
  });
});

