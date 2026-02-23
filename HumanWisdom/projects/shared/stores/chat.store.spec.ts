// import { TestBed } from '@angular/core/testing';
// import { ChatStore, ChatMessage } from './chat.store';
// import { SharedService } from '../services/shared.service';
// import { ProgramType } from '../models/program-model';
// import { of } from 'rxjs';

// describe('ChatStore', () => {
//   let store: ChatStore;
//   const STORAGE_KEY = 'chatbot_session';

//   beforeEach(() => {
//     spyOn(localStorage, 'getItem').and.returnValue(null);
//     spyOn(localStorage, 'setItem');
//     spyOn(localStorage, 'removeItem');

//     Object.defineProperty(SharedService, 'ProgramId', {
//       get: () => ProgramType.Adults,
//       configurable: true
//     });
//     spyOn(SharedService, 'getUserId').and.returnValue(100);

//     TestBed.configureTestingModule({
//       providers: [ChatStore]
//     });
//     store = TestBed.inject(ChatStore);
//   });

//   afterEach(() => {
//     localStorage.clear();
//   });

//   describe('Initialization', () => {
//     it('should create the store', () => {
//       expect(store).toBeTruthy();
//     });

//     it('should have initial empty state', () => {
//       const messages = store.getAllMessages();
//       expect(messages).toEqual([]);
//       expect(store.getCurrentSessionId()).toBeNull();
//       expect(store.getCurrentProgramType()).toBeNull();
//       expect(store.getCurrentUserId()).toBeNull();
//     });
//   });

//   describe('Selectors', () => {
//     it('messages$ should emit messages', (done) => {
//       const msg: ChatMessage = {
//         id: '1',
//         content: 'Hello',
//         sender: 'user',
//         timestamp: new Date()
//       };
//       store.addMessage(msg);

//       store.messages$.subscribe(messages => {
//         expect(messages.length).toBe(1);
//         expect(messages[0].content).toBe('Hello');
//         done();
//       });
//     });

//     it('sessionId$ should emit session ID', (done) => {
//       store.setSessionId('session-123');
//       store.sessionId$.subscribe(id => {
//         expect(id).toBe('session-123');
//         done();
//       });
//     });

//     it('isTyping$ should emit typing status', (done) => {
//       store.setTyping(true);
//       store.isTyping$.subscribe(typing => {
//         expect(typing).toBe(true);
//         done();
//       });
//     });

//     it('messageCount$ should exclude typing indicators', (done) => {
//       const userMsg: ChatMessage = {
//         id: '1',
//         content: 'Hi',
//         sender: 'user',
//         timestamp: new Date()
//       };
//       const typingMsg: ChatMessage = {
//         id: '2',
//         content: '',
//         sender: 'bot',
//         timestamp: new Date(),
//         isTyping: true
//       };
//       store.addMessage(userMsg);
//       store.addMessage(typingMsg);

//       store.messageCount$.subscribe(count => {
//         expect(count).toBe(1);
//         done();
//       });
//     });

//     it('userMessages$ should filter user messages only', (done) => {
//       store.addMessage({ id: '1', content: 'User', sender: 'user', timestamp: new Date() });
//       store.addMessage({ id: '2', content: 'Bot', sender: 'bot', timestamp: new Date() });

//       store.userMessages$.subscribe(msgs => {
//         expect(msgs.length).toBe(1);
//         expect(msgs[0].sender).toBe('user');
//         done();
//       });
//     });

//     it('botMessages$ should filter bot messages excluding typing', (done) => {
//       store.addMessage({ id: '1', content: 'Bot reply', sender: 'bot', timestamp: new Date() });
//       store.addMessage({
//         id: '2',
//         content: '',
//         sender: 'bot',
//         timestamp: new Date(),
//         isTyping: true
//       });

//       store.botMessages$.subscribe(msgs => {
//         expect(msgs.length).toBe(1);
//         expect(msgs[0].content).toBe('Bot reply');
//         done();
//       });
//     });

//     it('activeSuggestions$ should emit suggestions', (done) => {
//       store.setActiveSuggestions(['Option 1', 'Option 2']);
//       store.activeSuggestions$.subscribe(suggestions => {
//         expect(suggestions).toEqual(['Option 1', 'Option 2']);
//         done();
//       });
//     });

//     it('programType$ and userId$ should emit values', (done) => {
//       store.setProgramType(ProgramType.Adults);
//       store.setUserId(123);
//       store.programType$.subscribe(pt => {
//         expect(pt).toBe(ProgramType.Adults);
//       });
//       store.userId$.subscribe(uid => {
//         expect(uid).toBe(123);
//         done();
//       });
//     });
//   });

//   describe('Updaters', () => {
//     it('addMessage should add a message', () => {
//       const msg: ChatMessage = {
//         id: '1',
//         content: 'Test',
//         sender: 'user',
//         timestamp: new Date()
//       };
//       store.addMessage(msg);

//       expect(store.getAllMessages().length).toBe(1);
//       expect(store.getAllMessages()[0].content).toBe('Test');
//       expect(localStorage.setItem).toHaveBeenCalledWith(STORAGE_KEY, jasmine.any(String));
//     });

//     it('addMessages should add multiple messages', () => {
//       const msgs: ChatMessage[] = [
//         { id: '1', content: 'A', sender: 'user', timestamp: new Date() },
//         { id: '2', content: 'B', sender: 'bot', timestamp: new Date() }
//       ];
//       store.addMessages(msgs);

//       expect(store.getAllMessages().length).toBe(2);
//     });

//     it('setMessages should replace all messages', () => {
//       store.addMessage({ id: '1', content: 'Old', sender: 'user', timestamp: new Date() });
//       const newMsgs: ChatMessage[] = [
//         { id: '2', content: 'New1', sender: 'user', timestamp: new Date() },
//         { id: '3', content: 'New2', sender: 'bot', timestamp: new Date() }
//       ];
//       store.setMessages(newMsgs);

//       expect(store.getAllMessages().length).toBe(2);
//       expect(store.getAllMessages()[0].content).toBe('New1');
//     });

//     it('removeMessage should remove by id', () => {
//       store.addMessage({ id: 'remove-me', content: 'X', sender: 'user', timestamp: new Date() });
//       store.addMessage({ id: 'keep-me', content: 'Y', sender: 'user', timestamp: new Date() });

//       store.removeMessage('remove-me');

//       const messages = store.getAllMessages();
//       expect(messages.length).toBe(1);
//       expect(messages[0].id).toBe('keep-me');
//     });

//     it('removeTypingIndicators should remove typing messages', () => {
//       store.addMessage({
//         id: 'typing-1',
//         content: '',
//         sender: 'bot',
//         timestamp: new Date(),
//         isTyping: true
//       });
//       store.addMessage({ id: 'real-1', content: 'Hi', sender: 'user', timestamp: new Date() });

//       store.removeTypingIndicators();

//       const messages = store.getAllMessages();
//       expect(messages.length).toBe(1);
//       expect(messages[0].id).toBe('real-1');
//     });

//     it('setSessionId should update session', () => {
//       store.setSessionId('sess-456');
//       expect(store.getCurrentSessionId()).toBe('sess-456');
//     });

//     it('clearChat should reset to initial state', () => {
//       store.addMessage({ id: '1', content: 'X', sender: 'user', timestamp: new Date() });
//       store.setSessionId('sess');
//       store.setProgramType(ProgramType.Adults);

//       store.clearChat();

//       expect(store.getAllMessages()).toEqual([]);
//       expect(store.getCurrentSessionId()).toBeNull();
//       expect(store.getCurrentProgramType()).toBeNull();
//       expect(localStorage.removeItem).toHaveBeenCalledWith(STORAGE_KEY);
//     });

//     it('setProgramType and setUserId should update state', () => {
//       store.setProgramType(ProgramType.Teenagers);
//       store.setUserId(555);

//       expect(store.getCurrentProgramType()).toBe(ProgramType.Teenagers);
//       expect(store.getCurrentUserId()).toBe(555);
//     });

//     it('updateMessage should update message by id', () => {
//       store.addMessage({
//         id: 'msg-1',
//         content: 'Original',
//         sender: 'user',
//         timestamp: new Date()
//       });
//       store.updateMessage({ id: 'msg-1', updates: { content: 'Updated' } });

//       expect(store.getAllMessages()[0].content).toBe('Updated');
//     });

//     it('clearActiveSuggestions should clear suggestions', () => {
//       store.setActiveSuggestions(['A', 'B']);
//       store.clearActiveSuggestions();

//       store.activeSuggestions$.subscribe(s => expect(s).toEqual([])).unsubscribe();
//     });
//   });

//   describe('prependHistoryMessages', () => {
//     it('should prepend unique history messages', () => {
//       store.addMessage({
//         id: 'cur-1',
//         content: 'Current',
//         sender: 'user',
//         timestamp: new Date()
//       });
//       const history = [
//         { content: 'History 1', sender: 'user' as const, timestamp: new Date(Date.now() - 60000).toISOString() },
//         { content: 'History 2', sender: 'bot' as const, timestamp: new Date(Date.now() - 120000).toISOString() }
//       ];

//       store.prependHistoryMessages(history);

//       const messages = store.getAllMessages();
//       expect(messages.length).toBe(3);
//       expect(messages[0].content).toBe('History 1');
//       expect(messages[1].content).toBe('History 2');
//       expect(messages[2].content).toBe('Current');
//     });

//     it('should filter duplicate messages', () => {
//       const baseTime = new Date();
//       store.addMessage({
//         id: 'cur-1',
//         content: 'Same content',
//         sender: 'user',
//         timestamp: baseTime
//       });
//       const history = [
//         { content: 'Same content', sender: 'user' as const, timestamp: new Date(baseTime.getTime() + 60000).toISOString() }
//       ];

//       store.prependHistoryMessages(history);

//       const messages = store.getAllMessages();
//       expect(messages.length).toBe(1);
//     });
//   });

//   describe('Effects', () => {
//     it('addUserMessage should add user message', (done) => {
//       store.addUserMessage(of('Hello user'));
//       setTimeout(() => {
//         const messages = store.getAllMessages();
//         expect(messages.length).toBe(1);
//         expect(messages[0].sender).toBe('user');
//         expect(messages[0].content).toBe('Hello user');
//         done();
//       }, 50);
//     });

//     it('addBotMessage should add bot message', (done) => {
//       store.addBotMessage(of({ content: 'Hello bot' }));
//       setTimeout(() => {
//         const messages = store.getAllMessages();
//         expect(messages.length).toBe(1);
//         expect(messages[0].sender).toBe('bot');
//         expect(messages[0].content).toBe('Hello bot');
//         done();
//       }, 50);
//     });

//     it('addBotMessage should set sessionId when provided', (done) => {
//       store.addBotMessage(of({ content: 'Reply', sessionId: 'new-session' }));
//       setTimeout(() => {
//         expect(store.getCurrentSessionId()).toBe('new-session');
//         done();
//       }, 50);
//     });

//     it('addTypingIndicator should add typing message', (done) => {
//       store.addTypingIndicator(of(undefined));
//       setTimeout(() => {
//         const messages = store.getAllMessages();
//         expect(messages.length).toBe(1);
//         expect(messages[0].isTyping).toBe(true);
//         expect(messages[0].sender).toBe('bot');
//         done();
//       }, 50);
//     });

//     it('removeTypingIndicator should remove typing messages', (done) => {
//       store.addMessage({
//         id: 'typing-1',
//         content: '',
//         sender: 'bot',
//         timestamp: new Date(),
//         isTyping: true
//       });
//       store.setTyping(true);
//       store.removeTypingIndicator(of(undefined));
//       setTimeout(() => {
//         const messages = store.getAllMessages();
//         expect(messages.filter(m => m.isTyping).length).toBe(0);
//         done();
//       }, 50);
//     });
//   });

//   describe('getFullQuestionForNumber', () => {
//     it('should return input when not a number', () => {
//       const result = store.getFullQuestionForNumber('hello');
//       expect(result).toBe('hello');
//     });

//     it('should return input when no suggestions in messages', () => {
//       store.addMessage({ id: '1', content: 'No suggestions', sender: 'bot', timestamp: new Date() });
//       const result = store.getFullQuestionForNumber('1');
//       expect(result).toBe('1');
//     });

//     it('should expand number to full question when valid', () => {
//       store.addMessage({
//         id: '1',
//         content: 'Choose',
//         sender: 'bot',
//         timestamp: new Date(),
//         suggestions: ['First option', 'Second option', 'Third option']
//       });
//       const result = store.getFullQuestionForNumber('2');
//       expect(result).toBe('Second option');
//     });

//     it('should return original input when number out of range', () => {
//       store.addMessage({
//         id: '1',
//         content: 'Choose',
//         sender: 'bot',
//         timestamp: new Date(),
//         suggestions: ['A', 'B']
//       });
//       const result = store.getFullQuestionForNumber('5');
//       expect(result).toBe('5');
//     });
//   });

//   describe('initializeWelcomeMessages', () => {
//     const welcomeMsgs: ChatMessage[] = [
//       { id: 'w1', content: 'Welcome!', sender: 'bot', timestamp: new Date() }
//     ];

//     it('should set welcome messages when store is empty', () => {
//       store.initializeWelcomeMessages(welcomeMsgs);
//       expect(store.getAllMessages().length).toBe(1);
//       expect(store.getAllMessages()[0].content).toBe('Welcome!');
//     });

//     it('should set programType and userId when not set', () => {
//       store.initializeWelcomeMessages(welcomeMsgs);
//       expect(store.getCurrentProgramType()).toBe(ProgramType.Adults);
//       expect(store.getCurrentUserId()).toBe(100);
//     });

//     it('should not overwrite existing messages', () => {
//       store.addMessage({ id: '1', content: 'Existing', sender: 'user', timestamp: new Date() });
//       store.initializeWelcomeMessages(welcomeMsgs);
//       expect(store.getAllMessages().length).toBe(1);
//       expect(store.getAllMessages()[0].content).toBe('Existing');
//     });

//     it('should clear and reinitialize when program type changed', () => {
//       store.setProgramType(ProgramType.Adults);
//       store.addMessage({ id: '1', content: 'Old', sender: 'user', timestamp: new Date() });
//       Object.defineProperty(SharedService, 'ProgramId', {
//         get: () => ProgramType.Teenagers,
//         configurable: true
//       });

//       store.initializeWelcomeMessages(welcomeMsgs);

//       expect(store.getAllMessages().length).toBe(1);
//       expect(store.getCurrentProgramType()).toBe(ProgramType.Teenagers);
//     });
//   });

//   describe('Persistence / loadSessionFromStorage', () => {
//     function createStoreWithStorage(): ChatStore {
//       TestBed.resetTestingModule();
//       TestBed.configureTestingModule({
//         providers: [ChatStore]
//       });
//       return TestBed.inject(ChatStore);
//     }

//     it('should load valid session from localStorage on init', () => {
//       const storedState = {
//         messages: [{ id: '1', content: 'Stored', sender: 'user', timestamp: new Date().toISOString() }],
//         sessionId: 'stored-session',
//         isTyping: false,
//         lastUpdated: new Date().toISOString(),
//         activeSuggestions: [],
//         programType: ProgramType.Adults,
//         userId: 100
//       };
//       (localStorage.getItem as jasmine.Spy).and.returnValue(JSON.stringify(storedState));

//       const newStore = createStoreWithStorage();

//       expect(newStore.getAllMessages().length).toBe(1);
//       expect(newStore.getCurrentSessionId()).toBe('stored-session');
//     });

//     it('should not load when session is expired', () => {
//       const oldDate = new Date();
//       oldDate.setHours(oldDate.getHours() - 48);
//       const storedState = {
//         messages: [{ id: '1', content: 'Old', sender: 'user', timestamp: oldDate.toISOString() }],
//         sessionId: 'old',
//         isTyping: false,
//         lastUpdated: oldDate.toISOString(),
//         activeSuggestions: [],
//         programType: ProgramType.Adults,
//         userId: 100
//       };
//       (localStorage.getItem as jasmine.Spy).and.returnValue(JSON.stringify(storedState));

//       const newStore = createStoreWithStorage();

//       expect(newStore.getAllMessages().length).toBe(0);
//       expect(localStorage.removeItem).toHaveBeenCalledWith(STORAGE_KEY);
//     });

//     it('should clear storage when user changed (guest to logged-in different user)', () => {
//       const storedState = {
//         messages: [{ id: '1', content: 'Guest chat', sender: 'user', timestamp: new Date().toISOString() }],
//         sessionId: 's',
//         isTyping: false,
//         lastUpdated: new Date().toISOString(),
//         activeSuggestions: [],
//         programType: ProgramType.Adults,
//         userId: null
//       };
//       (localStorage.getItem as jasmine.Spy).and.returnValue(JSON.stringify(storedState));
//       (SharedService.getUserId as jasmine.Spy).and.returnValue(200);

//       const newStore = createStoreWithStorage();

//       expect(newStore.getAllMessages().length).toBe(0);
//     });

//     it('should clear storage when program type changed', () => {
//       const storedState = {
//         messages: [{ id: '1', content: 'X', sender: 'user', timestamp: new Date().toISOString() }],
//         sessionId: 's',
//         isTyping: false,
//         lastUpdated: new Date().toISOString(),
//         activeSuggestions: [],
//         programType: ProgramType.Adults,
//         userId: 100
//       };
//       (localStorage.getItem as jasmine.Spy).and.returnValue(JSON.stringify(storedState));
//       Object.defineProperty(SharedService, 'ProgramId', {
//         get: () => ProgramType.Teenagers,
//         configurable: true
//       });

//       const newStore = createStoreWithStorage();

//       expect(newStore.getAllMessages().length).toBe(0);
//     });
//   });

//   describe('addBotMessage - suggestions extraction', () => {
//     it('should extract suggestions from content with numbered list', (done) => {
//       const content = `Choose a number:\n<ol><li>Option A</li><li>Option B</li></ol>`;
//       store.addBotMessage(of({ content }));
//       setTimeout(() => {
//         store.activeSuggestions$.subscribe(s => {
//           expect(s.length).toBeGreaterThanOrEqual(0);
//           done();
//         }).unsubscribe();
//       }, 50);
//     });
//   });
// });
