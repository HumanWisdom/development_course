/**
 * Mock Services for Testing
 * Provides mock implementations of commonly used services in the shared folder
 */

import { of, throwError, BehaviorSubject } from 'rxjs';

/**
 * Mock Navigation Service
 */
export class MockNavigationService {
  navigate = jasmine.createSpy('navigate').and.returnValue(Promise.resolve(true));
  navigateForward = jasmine.createSpy('navigateForward').and.returnValue(Promise.resolve(true));
  navigateBack = jasmine.createSpy('navigateBack').and.returnValue(Promise.resolve(true));
  getCurrentUrl = jasmine.createSpy('getCurrentUrl').and.returnValue('/home');
  getRouteParams = jasmine.createSpy('getRouteParams').and.returnValue({});
}

/**
 * Mock Common Service
 */
export class MockCommonService {
  userId = '12345';
  userEmail = 'test@example.com';
  
  getUserId = jasmine.createSpy('getUserId').and.returnValue(this.userId);
  setUserId = jasmine.createSpy('setUserId');
  getUserEmail = jasmine.createSpy('getUserEmail').and.returnValue(this.userEmail);
  showToast = jasmine.createSpy('showToast').and.returnValue(Promise.resolve());
  showLoader = jasmine.createSpy('showLoader').and.returnValue(Promise.resolve());
  hideLoader = jasmine.createSpy('hideLoader').and.returnValue(Promise.resolve());
  showAlert = jasmine.createSpy('showAlert').and.returnValue(Promise.resolve());
}

/**
 * Mock Shared Service
 */
export class MockSharedService {
  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();
  
  setData = jasmine.createSpy('setData').and.callFake((data: any) => {
    this.dataSubject.next(data);
  });
  
  getData = jasmine.createSpy('getData').and.returnValue(of(null));
  clearData = jasmine.createSpy('clearData').and.callFake(() => {
    this.dataSubject.next(null);
  });
}

/**
 * Mock Chatbot Service
 */
export class MockChatbotService {
  sendMessage = jasmine.createSpy('sendMessage').and.returnValue(
    of({ message: 'Bot response', timestamp: new Date() })
  );
  
  getHistory = jasmine.createSpy('getHistory').and.returnValue(of([]));
  clearHistory = jasmine.createSpy('clearHistory').and.returnValue(of({ success: true }));
  isAvailable = jasmine.createSpy('isAvailable').and.returnValue(of(true));
}

/**
 * Mock Forum Service
 */
export class MockForumService {
  getPosts = jasmine.createSpy('getPosts').and.returnValue(of([]));
  getPost = jasmine.createSpy('getPost').and.returnValue(of({
    id: '1',
    title: 'Test Post',
    content: 'Test content',
    author: 'Test User',
    createdAt: new Date()
  }));
  
  createPost = jasmine.createSpy('createPost').and.returnValue(of({ id: '1', success: true }));
  updatePost = jasmine.createSpy('updatePost').and.returnValue(of({ success: true }));
  deletePost = jasmine.createSpy('deletePost').and.returnValue(of({ success: true }));
  
  addComment = jasmine.createSpy('addComment').and.returnValue(of({ id: '1', success: true }));
  likePost = jasmine.createSpy('likePost').and.returnValue(of({ success: true }));
}

/**
 * Mock Modal Service
 */
export class MockModalService {
  private modalSpy = jasmine.createSpyObj('Modal', ['present', 'dismiss', 'onDidDismiss']);
  
  constructor() {
    this.modalSpy.present.and.returnValue(Promise.resolve());
    this.modalSpy.dismiss.and.returnValue(Promise.resolve(true));
    this.modalSpy.onDidDismiss.and.returnValue(Promise.resolve({ data: null, role: 'cancel' }));
  }
  
  create = jasmine.createSpy('create').and.returnValue(Promise.resolve(this.modalSpy));
  dismiss = jasmine.createSpy('dismiss').and.returnValue(Promise.resolve(true));
  getTop = jasmine.createSpy('getTop').and.returnValue(Promise.resolve(this.modalSpy));
}

/**
 * Mock Onboarding Service
 */
export class MockOnboardingService {
  isCompleted = jasmine.createSpy('isCompleted').and.returnValue(of(false));
  markCompleted = jasmine.createSpy('markCompleted').and.returnValue(of({ success: true }));
  getCurrentStep = jasmine.createSpy('getCurrentStep').and.returnValue(of(1));
  setCurrentStep = jasmine.createSpy('setCurrentStep').and.returnValue(of({ success: true }));
  getTotalSteps = jasmine.createSpy('getTotalSteps').and.returnValue(5);
}

/**
 * Mock Log Event Service
 */
export class MockLogEventService {
  logEvent = jasmine.createSpy('logEvent').and.returnValue(Promise.resolve());
  logPageView = jasmine.createSpy('logPageView').and.returnValue(Promise.resolve());
  logError = jasmine.createSpy('logError').and.returnValue(Promise.resolve());
  setUserId = jasmine.createSpy('setUserId').and.returnValue(Promise.resolve());
  setUserProperty = jasmine.createSpy('setUserProperty').and.returnValue(Promise.resolve());
}

/**
 * Mock HTTP Client
 */
export class MockHttpClient {
  get = jasmine.createSpy('get').and.returnValue(of({}));
  post = jasmine.createSpy('post').and.returnValue(of({}));
  put = jasmine.createSpy('put').and.returnValue(of({}));
  delete = jasmine.createSpy('delete').and.returnValue(of({}));
  patch = jasmine.createSpy('patch').and.returnValue(of({}));
}

/**
 * Mock Router
 */
export class MockRouter {
  navigate = jasmine.createSpy('navigate').and.returnValue(Promise.resolve(true));
  navigateByUrl = jasmine.createSpy('navigateByUrl').and.returnValue(Promise.resolve(true));
  
  events = of({});
  url = '/test-url';
  
  createUrlTree = jasmine.createSpy('createUrlTree').and.returnValue({});
  serializeUrl = jasmine.createSpy('serializeUrl').and.returnValue('/test-url');
}

/**
 * Mock ActivatedRoute
 */
export class MockActivatedRoute {
  params = of({ id: '1' });
  queryParams = of({});
  fragment = of(null);
  data = of({});
  snapshot = {
    params: { id: '1' },
    queryParams: {},
    fragment: null,
    data: {},
    url: [],
    outlet: 'primary',
    routeConfig: {},
    parent: null,
    firstChild: null,
    children: [],
    pathFromRoot: [],
    paramMap: {
      get: (key: string) => '1',
      has: (key: string) => true,
      getAll: (key: string) => ['1'],
      keys: []
    },
    queryParamMap: {
      get: (key: string) => null,
      has: (key: string) => false,
      getAll: (key: string) => [],
      keys: []
    }
  };
}

/**
 * Helper function to create a spy object with default methods
 */
export function createSpyObj<T>(baseName: string, methodNames: string[]): jasmine.SpyObj<T> {
  return jasmine.createSpyObj<T>(baseName, methodNames);
}

/**
 * Helper to create an observable that emits once and completes
 */
export function createMockObservable<T>(value: T) {
  return of(value);
}

/**
 * Helper to create an observable that errors
 */
export function createMockErrorObservable(error: any) {
  return throwError(() => error);
}

