import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ChatbotService, ChatbotResponse, HistoryMessage, HistoryResponse } from './chatbot.service';
import { ChatStore, ChatMessage } from '../stores/chat.store';
import { SharedService } from './shared.service';
import { ProgramType } from '../models/program-model';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('ChatbotService', () => {
  let service: ChatbotService;
  let httpMock: HttpTestingController;
  let mockChatStore: jasmine.SpyObj<ChatStore>;
  let mockRouter: jasmine.SpyObj<Router>;
  let originalProgramId: PropertyDescriptor | undefined;

  const mockChatMessage: ChatMessage = {
    id: '1',
    content: 'Hello',
    sender: 'user',
    timestamp: new Date()
  };

  beforeEach(() => {
    mockChatStore = jasmine.createSpyObj(
      'ChatStore',
      [
        'initializeWelcomeMessages',
        'addUserMessage',
        'addBotMessage',
        'addTypingIndicator',
        'removeTypingIndicator',
        'setTyping',
        'clearChat',
        'getAllMessages',
        'getCurrentSessionId',
        'getFullQuestionForNumber',
        'prependHistoryMessages'
      ],
      {
        messages$: of([]),
        isTyping$: of(false),
        sessionId$: of(null),
        messageCount$: of(0)
      }
    ) as jasmine.SpyObj<ChatStore>;
    mockChatStore.getAllMessages.and.returnValue([]);
    mockChatStore.getCurrentSessionId.and.returnValue(null);
    mockChatStore.getFullQuestionForNumber.and.returnValue('');

    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => ProgramType.Adults,
      configurable: true
    });
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    spyOn(SharedService, 'getUserId').and.returnValue(100);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ChatbotService,
        { provide: ChatStore, useValue: mockChatStore },
        { provide: Router, useValue: mockRouter }
      ]
    });

    service = TestBed.inject(ChatbotService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    if (originalProgramId) {
      Object.defineProperty(SharedService, 'ProgramId', originalProgramId);
    }
    httpMock.verify();
    localStorage.clear();
  });

  describe('Initialization', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should initialize welcome messages on construction', () => {
      expect(mockChatStore.initializeWelcomeMessages).toHaveBeenCalled();
    });
  });

  describe('checkHealth', () => {
    it('should call adult health check URL when ProgramId is Adults', () => {
      service.checkHealth().subscribe();

      const req = httpMock.expectOne(
        (r) => r.url.includes('health') && r.method === 'GET'
      );
      expect(req.request.url).toContain('adults');
      req.flush({ status: 'ok' });
    });

    it('should call teen health check URL when ProgramId is Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => ProgramType.Teenagers,
        configurable: true
      });

      service.checkHealth().subscribe();
      const req = httpMock.expectOne((r) => r.url.includes('health'));
      expect(req.request.url).toContain('teenagers');
      req.flush({ status: 'ok' });
    });

    it('should include auth headers', () => {
      localStorage.setItem('token', JSON.stringify('test-token'));
      service.checkHealth().subscribe();

      const req = httpMock.expectOne(
        (r) => r.url.includes('health') && r.method === 'GET'
      );
      expect(req.request.headers.get('Authorization')).toBe('Bearer test-token');
      req.flush({ status: 'ok' });
    });
  });

  describe('sendMessage', () => {
    it('should POST to chatbot URL with message and session_id', () => {
      mockChatStore.getCurrentSessionId.and.returnValue('session-123');

      service.sendMessage('Hello').subscribe((res) => {
        expect(res.response).toBe('Test response');
      });

      const req = httpMock.expectOne(
        (r) => r.url.includes('chat') && r.method === 'POST'
      );
      expect(req.request.body).toEqual({
        message: 'Hello',
        session_id: 'session-123'
      });
      req.flush({
        status: 'success',
        response: 'Test response',
        is_followup: false,
        session_id: 'session-123'
      } as ChatbotResponse);
    });

    it('should omit session_id when not available', () => {
      mockChatStore.getCurrentSessionId.and.returnValue(null);

      service.sendMessage('Hi').subscribe();

      const req = httpMock.expectOne(
        (r) => r.url.includes('chat') && r.method === 'POST'
      );
      expect(req.request.body.session_id).toBeUndefined();
      req.flush({
        status: 'success',
        response: 'Ok',
        is_followup: false,
        session_id: 'new-session'
      } as ChatbotResponse);
    });
  });

  describe('sendFeedback', () => {
    it('should POST feedback to feedback URL', () => {
      service
        .sendFeedback('msg-1', 'thumbs_up', 'User msg', 'Bot response')
        .subscribe();

      const req = httpMock.expectOne(
        (r) => r.url.includes('feedback') && r.method === 'POST'
      );
      expect(req.request.body).toEqual({
        message_id: 'msg-1',
        feedback_type: 'main_response',
        feedback_value: 'thumbs_up',
        user_message: 'User msg',
        bot_response: 'Bot response'
      });
      req.flush({});
    });
  });

  describe('sendYesNoResponse', () => {
    it('should POST yes/no response to related content URL', () => {
      mockChatStore.getCurrentSessionId.and.returnValue('sess-1');

      service.sendYesNoResponse('yes').subscribe();

      const req = httpMock.expectOne(
        (r) => r.url.includes('related') && r.method === 'POST'
      );
      expect(req.request.body).toEqual({ action: 'yes', session_id: 'sess-1' });
      req.flush({
        status: 'success',
        response: 'Ok',
        is_followup: false,
        session_id: 'sess-1'
      } as ChatbotResponse);
    });
  });

  describe('trackLinkClick', () => {
    it('should POST to track-click URL with url', () => {
      service.trackLinkClick('https://example.com').subscribe();

      const req = httpMock.expectOne(
        (r) => r.url.includes('track-click') && r.method === 'POST'
      );
      expect(req.request.body).toEqual({ url: 'https://example.com' });
      req.flush({});
    });
  });

  describe('Store delegation methods', () => {
    it('addUserMessage should delegate to chatStore', () => {
      service.addUserMessage('Hello');
      expect(mockChatStore.addUserMessage).toHaveBeenCalledWith('Hello');
    });

    it('addBotMessage should delegate to chatStore', () => {
      service.addBotMessage('Hi', 'sess-1', true, false);
      expect(mockChatStore.addBotMessage).toHaveBeenCalledWith({
        content: 'Hi',
        sessionId: 'sess-1',
        allow_feedback: true,
        offer_related: false,
        is_followup: undefined,
        has_more: undefined
      });
    });

    it('addTypingIndicator should delegate to chatStore', () => {
      service.addTypingIndicator();
      expect(mockChatStore.addTypingIndicator).toHaveBeenCalled();
    });

    it('removeTypingIndicator should delegate to chatStore', () => {
      service.removeTypingIndicator();
      expect(mockChatStore.removeTypingIndicator).toHaveBeenCalled();
    });

    it('setTyping should delegate to chatStore', () => {
      service.setTyping(true);
      expect(mockChatStore.setTyping).toHaveBeenCalledWith(true);
    });

    it('getCurrentSessionId should delegate to chatStore', () => {
      mockChatStore.getCurrentSessionId.and.returnValue('abc');
      expect(service.getCurrentSessionId()).toBe('abc');
    });

    it('getFullQuestionForNumber should delegate to chatStore', () => {
      mockChatStore.getFullQuestionForNumber.and.returnValue('Full question?');
      expect(service.getFullQuestionForNumber('1')).toBe('Full question?');
    });
  });

  describe('clearMessages', () => {
    it('should clear chat and re-initialize welcome messages', () => {
      service.clearMessages();
      expect(mockChatStore.clearChat).toHaveBeenCalled();
      expect(mockChatStore.initializeWelcomeMessages).toHaveBeenCalledTimes(2); // once in constructor, once in clearMessages
    });
  });

  describe('ensureWelcomeMessages', () => {
    it('should call initializeWelcomeMessages when store is empty', () => {
      mockChatStore.getAllMessages.and.returnValue([]);

      service.ensureWelcomeMessages();

      expect(mockChatStore.initializeWelcomeMessages).toHaveBeenCalled();
    });

    it('should not call initializeWelcomeMessages when store has messages', () => {
      mockChatStore.getAllMessages.and.returnValue([mockChatMessage]);
      mockChatStore.initializeWelcomeMessages.calls.reset();

      service.ensureWelcomeMessages();

      expect(mockChatStore.initializeWelcomeMessages).not.toHaveBeenCalled();
    });

    it('should initialize when only typing indicators exist', () => {
      mockChatStore.getAllMessages.and.returnValue([
        { ...mockChatMessage, isTyping: true }
      ]);

      service.ensureWelcomeMessages();

      expect(mockChatStore.initializeWelcomeMessages).toHaveBeenCalled();
    });
  });

  describe('formatTimestamp', () => {
    it('should return "Just Now" for dates within 1 minute', () => {
      const now = new Date();
      expect(service.formatTimestamp(now)).toBe('Just Now');
    });

    it('should return "X min ago" for dates within 60 minutes', () => {
      const past = new Date(Date.now() - 30 * 60 * 1000);
      expect(service.formatTimestamp(past)).toBe('30 min ago');
    });

    it('should return time string for dates older than 60 minutes', () => {
      const past = new Date(Date.now() - 2 * 60 * 60 * 1000);
      const result = service.formatTimestamp(past);
      expect(result).toMatch(/\d{1,2}:\d{2}\s*(AM|PM)/);
    });
  });

  describe('loadHistory', () => {
    it('should return empty history for guest user (userId 563)', () => {
      (SharedService.getUserId as jasmine.Spy).and.returnValue(563);

      service.loadHistory().subscribe((res) => {
        expect(res.status).toBe('success');
        expect(res.history).toEqual([]);
        expect(res.user_id).toBe('563');
      });

      httpMock.expectNone((r) => r.url.includes('history'));
    });

    it('should call history API for non-guest users', () => {
      (SharedService.getUserId as jasmine.Spy).and.returnValue(100);

      const mockHistory: HistoryResponse = {
        status: 'success',
        history: [
          {
            user_message: 'Hi',
            bot_response: 'Hello',
            created_at: '2024-01-01T10:00:00Z',
            is_followup: 0
          }
        ],
        user_id: '100'
      };

      service.loadHistory().subscribe((res) => {
        expect(res).toEqual(mockHistory);
      });

      const req = httpMock.expectOne((r) => r.url.includes('history') && r.method === 'GET');
      expect(req.request.params.get('user_id')).toBe('100');
      req.flush(mockHistory);
    });

    it('should filter out history when response user_id does not match current user', () => {
      (SharedService.getUserId as jasmine.Spy).and.returnValue(100);

      service.loadHistory().subscribe((res) => {
        expect(res.history).toEqual([]);
        expect(res.user_id).toBe('999');
      });

      const req = httpMock.expectOne((r) => r.url.includes('history'));
      req.flush({
        status: 'success',
        history: [{ user_message: 'Hi', bot_response: 'Hello', created_at: '2024-01-01', is_followup: 0 }],
        user_id: '999'
      });
    });
  });

  describe('prependHistoryMessages', () => {
    it('should convert history format and delegate to chatStore', () => {
      const historyMessages: HistoryMessage[] = [
        {
          user_message: 'Hello',
          bot_response: 'Hi there',
          created_at: '2024-01-01T10:00:00Z',
          is_followup: 0
        }
      ];

      service.prependHistoryMessages(historyMessages);

      expect(mockChatStore.prependHistoryMessages).toHaveBeenCalledWith([
        { content: 'Hello', sender: 'user', timestamp: '2024-01-01T10:00:00Z' },
        { content: 'Hi there', sender: 'bot', timestamp: '2024-01-01T10:00:00Z' }
      ]);
    });
  });
});
