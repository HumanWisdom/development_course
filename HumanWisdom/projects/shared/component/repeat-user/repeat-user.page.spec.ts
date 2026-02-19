import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RepeatUserPage } from './repeat-user.page';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { Router } from '@angular/router';
import { LogEventService } from '../../services/log-event.service';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { of, throwError } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RepeatUserPage', () => {
  let component: RepeatUserPage;
  let fixture: ComponentFixture<RepeatUserPage>;
  let mockAdultsService: jasmine.SpyObj<AdultsService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockLogEventService: jasmine.SpyObj<LogEventService>;
  let mockActivatedRoute: any;
  let mockProgramId: any;
  let queryParamsSubject: any;

  beforeEach(async () => {
    // Create queryParams subject for ActivatedRoute
    queryParamsSubject = {
      subscribe: jasmine.createSpy('subscribe').and.callFake((callback: any) => {
        callback({ authtoken: null });
        return { unsubscribe: jasmine.createSpy('unsubscribe') };
      })
    };

    // Create mock services
    mockAdultsService = jasmine.createSpyObj('AdultsService', [
      'verifytoken',
      'GetLastVisitedScreen',
      'getBookmarks',
      'clickModule',
      'setmoduleID',
      'freeScreens',
      'getModuleList'
    ]);
    mockAdultsService.verifytoken.and.returnValue(of(null));
    mockAdultsService.GetLastVisitedScreen.and.returnValue(of([]));
    mockAdultsService.getBookmarks.and.returnValue(of([]));
    mockAdultsService.clickModule.and.returnValue(of({ lastVisitedScreen: '27001', scenarios: [] }));
    mockAdultsService.setmoduleID.and.returnValue(undefined);
    mockAdultsService.freeScreens.and.returnValue(of([]));
    mockAdultsService.getModuleList.and.returnValue(of([]));

    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    mockLogEventService = jasmine.createSpyObj('LogEventService', ['logEvent']);

    mockActivatedRoute = {
      queryParams: queryParamsSubject
    };

    // Setup SharedService defaults
    mockProgramId = ProgramType.Teenagers;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });
    spyOn(SharedService, 'getprogramName').and.returnValue('teenagers');
    spyOn(SharedService, 'setUserId');
    spyOn(SharedService, 'setUsername');
    spyOn(SharedService, 'setEmail');
    Object.defineProperty(SharedService, 'FirstLoginOfTheDay', {
      writable: true,
      configurable: true,
      value: false
    });

    await TestBed.configureTestingModule({
      declarations: [RepeatUserPage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: AdultsService, useValue: mockAdultsService },
        { provide: Router, useValue: mockRouter },
        { provide: LogEventService, useValue: mockLogEventService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RepeatUserPage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Constructor', () => {
    it('should handle authtoken from queryParams and call verifytoken', fakeAsync(() => {
      // Arrange
      const mockLoginResponse = {
        Email: 'test@example.com',
        Name: 'Test User',
        UserId: 123,
        Subscriber: 1,
        access_token: 'token123'
      };
      mockAdultsService.verifytoken.and.returnValue(of(mockLoginResponse));
      queryParamsSubject.subscribe = jasmine.createSpy('subscribe').and.callFake((callback: any) => {
        callback({ authtoken: 'test-token' });
        return { unsubscribe: jasmine.createSpy('unsubscribe') };
      });

      // Act
      fixture = TestBed.createComponent(RepeatUserPage);
      component = fixture.componentInstance;
      tick();

      // Assert
      expect(mockAdultsService.verifytoken).toHaveBeenCalledWith('test-token');
      expect(localStorage.getItem('socialLogin')).toBe('T');
      expect(localStorage.getItem('acceptcookie')).toBe('T');
    }));

    it('should set FirstLoginOfTheDay to true when LastVisit is before today', () => {
      // Arrange
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const loginResponse = { LastVisit: yesterday.toISOString() };
      localStorage.setItem('loginResponse', JSON.stringify(loginResponse));

      // Act
      fixture = TestBed.createComponent(RepeatUserPage);
      component = fixture.componentInstance;

      // Assert
      expect(SharedService.FirstLoginOfTheDay).toBe(true);
    });

    it('should set FirstLoginOfTheDay to false when LastVisit is today', () => {
      // Arrange
      const today = new Date();
      const loginResponse = { LastVisit: today.toISOString() };
      localStorage.setItem('loginResponse', JSON.stringify(loginResponse));

      // Act
      fixture = TestBed.createComponent(RepeatUserPage);
      component = fixture.componentInstance;

      // Assert
      expect(SharedService.FirstLoginOfTheDay).toBe(false);
    });

    it('should call getProgress and getBookmarks when user is logged in', () => {
      // Arrange
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('userId', '123');
      localStorage.setItem('name', 'Test User');
      spyOn(component, 'getProgress');
      spyOn(component, 'getBookmarks');

      // Act
      fixture = TestBed.createComponent(RepeatUserPage);
      component = fixture.componentInstance;

      // Assert
      expect(component.name).toBe('Test User');
      expect(component.userName).toBe('Test User');
      expect(component.userId).toBe(123);
    });
  });

  describe('ngOnInit', () => {
    it('should set isAdults to true when ProgramId is Adults', () => {
      // Arrange
      mockProgramId = ProgramType.Adults;

      // Act
      component.ngOnInit();

      // Assert
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      // Arrange
      mockProgramId = ProgramType.Teenagers;

      // Act
      component.ngOnInit();

      // Assert
      expect(component.isAdults).toBe(false);
    });

    it('should navigate to my-daily-practice after 3 seconds', fakeAsync(() => {
      // Arrange
      (SharedService.getprogramName as jasmine.Spy).and.returnValue('teenagers');

      // Act
      component.ngOnInit();
      tick(3000);

      // Assert
      expect(mockRouter.navigate).toHaveBeenCalledWith(['teenagers/repeat-user/my-daily-practice']);
    }));
  });

  describe('getProgress', () => {
    it('should fetch and set resume data', () => {
      // Arrange
      const mockResume = [{ ModuleId: 7, ModuleUrl: '/test', screenno: '701' }];
      mockAdultsService.GetLastVisitedScreen.and.returnValue(of(mockResume));
      component.userId = 123;

      // Act
      component.getProgress();

      // Assert
      expect(mockAdultsService.GetLastVisitedScreen).toHaveBeenCalledWith(123);
      expect(component.resume).toEqual(mockResume);
    });
  });

  describe('getBookmarks', () => {
    it('should fetch and process bookmarks', () => {
      // Arrange
      const mockBookmarks = [{ ScrNo: '101' }, { ScrNo: '102' }];
      mockAdultsService.getBookmarks.and.returnValue(of(mockBookmarks));
      component.userId = 123;

      // Act
      component.getBookmarks();

      // Assert
      expect(mockAdultsService.getBookmarks).toHaveBeenCalledWith(123);
      expect(component.bookmarks).toEqual([101, 102]);
      expect(localStorage.getItem('bookmarkList')).toBe(JSON.stringify([101, 102]));
    });
  });

  describe('loginadult', () => {
    beforeEach(() => {
      spyOn(component, 'getBookmarks');
      spyOn(component, 'getProgress');
      spyOn(component, 'freescreens');
    });

    it('should set guest to T when email is guest@humanwisdom.me', () => {
      // Arrange
      const mockRes = {
        Email: 'guest@humanwisdom.me',
        UserId: 0,
        Name: 'Guest',
        access_token: 'token'
      };

      // Act
      component.loginadult(mockRes);

      // Assert
      expect(localStorage.getItem('guest')).toBe('T');
      expect(component.freescreens).not.toHaveBeenCalled();
    });

    it('should set guest to F and store login data when email is not guest', () => {
      // Arrange
      const mockRes = {
        Email: 'user@example.com',
        UserId: 123,
        Name: 'Test User',
        Subscriber: 1,
        access_token: 'token123'
      };

      // Act
      component.loginadult(mockRes);

      // Assert
      expect(localStorage.getItem('guest')).toBe('F');
      expect(localStorage.getItem('loginResponse')).toBe(JSON.stringify(mockRes));
      expect(localStorage.getItem('token')).toBe(JSON.stringify('token123'));
      expect(localStorage.getItem('Subscriber')).toBe('1');
      expect(localStorage.getItem('userId')).toBe('123');
      expect(localStorage.getItem('email')).toBe('user@example.com');
      expect(localStorage.getItem('name')).toBe('Test User');
      expect(SharedService.setUserId).toHaveBeenCalledWith('123');
      expect(SharedService.setUsername).toHaveBeenCalledWith('Test User');
      expect(SharedService.setEmail).toHaveBeenCalledWith('user@example.com');
      expect(component.freescreens).toHaveBeenCalled();
    });

    it('should call getBookmarks and getProgress', () => {
      // Arrange
      const mockRes = {
        Email: 'user@example.com',
        UserId: 123,
        Name: 'Test User',
        Subscriber: 1,
        access_token: 'token123'
      };

      // Act
      component.loginadult(mockRes);

      // Assert
      expect(component.getBookmarks).toHaveBeenCalled();
      expect(component.getProgress).toHaveBeenCalled();
    });

    it('should store userId and userName in localStorage when saveUsername is true', () => {
      // Arrange
      component.saveUsername = true;
      const mockRes = {
        Email: 'user@example.com',
        UserId: 123,
        Name: 'Test User',
        Subscriber: 1,
        access_token: 'token123'
      };

      // Act
      component.loginadult(mockRes);

      // Assert
      expect(localStorage.getItem('userId')).toBe('123');
      expect(localStorage.getItem('userEmail')).toBe(JSON.stringify('user@example.com'));
      expect(localStorage.getItem('userName')).toBe(JSON.stringify('Test User'));
    });

    it('should store userId and userName in sessionStorage when saveUsername is false', () => {
      // Arrange
      component.saveUsername = false;
      const mockRes = {
        Email: 'user@example.com',
        UserId: 123,
        Name: 'Test User',
        Subscriber: 1,
        access_token: 'token123'
      };

      // Act
      component.loginadult(mockRes);

      // Assert
      expect(sessionStorage.getItem('userId')).toBe('123');
      expect(sessionStorage.getItem('userEmail')).toBe(JSON.stringify('user@example.com'));
      expect(sessionStorage.getItem('userName')).toBe(JSON.stringify('Test User'));
    });

    it('should not store additional data when UserId is 0', () => {
      // Arrange
      const mockRes = {
        Email: 'user@example.com',
        UserId: 0,
        Name: 'Test User',
        Subscriber: 1,
        access_token: 'token123'
      };

      // Act
      component.loginadult(mockRes);

      // Assert
      expect(sessionStorage.getItem('userId')).toBeNull();
      expect(localStorage.getItem('userEmail')).toBeNull();
    });
  });

  describe('routeResume', () => {
    it('should log event and set pageaction', () => {
      // Arrange
      component.resume = [{
        ModuleId: 7,
        ModuleUrl: '/adults/comparison',
        screenno: '701'
      }];

      // Act
      component.routeResume();

      // Assert
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_continue_where_u_left');
      expect(localStorage.getItem('pageaction')).toBe('next');
    });

    it('should call setmoduleID with correct parameters', () => {
      // Arrange
      component.resume = [{
        ModuleId: 7,
        ModuleUrl: '/adults/comparison',
        screenno: '701'
      }];

      // Act
      component.routeResume();

      // Assert
      expect(mockAdultsService.setmoduleID).toHaveBeenCalledWith('7', '/adults/comparison', '/adults/comparisons701');
    });
  });

  describe('clearSearch', () => {
    it('should clear searchinp and searchResult', () => {
      // Arrange
      component.searchinp = 'test';
      component.searchResult = [{ ModuleName: 'test' }];

      // Act
      component.clearSearch();

      // Assert
      expect(component.searchinp).toBe('');
      expect(component.searchResult).toEqual([]);
    });
  });

  describe('getinp', () => {
    it('should navigate to site-search with searchinp', () => {
      // Arrange
      component.searchinp = 'test search';

      // Act
      component.getinp('test search');

      // Assert
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/site-search/test search']);
    });
  });

  describe('searchEvent', () => {
    it('should log event, set searchinp, clear searchResult and call getinp', () => {
      // Arrange
      component.searchResult = [{ ModuleName: 'test' }];
      spyOn(component, 'getinp');

      // Act
      component.searchEvent('new search');

      // Assert
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_search');
      expect(component.searchinp).toBe('new search');
      expect(component.searchResult).toEqual([]);
      expect(component.getinp).toHaveBeenCalledWith('new search');
    });
  });

  describe('getAutoCompleteList', () => {
    it('should show all modules when value is null', () => {
      // Arrange
      component.moduleList = [
        { ModuleName: 'Module 1' },
        { ModuleName: 'Module 2' }
      ];

      // Act
      component.getAutoCompleteList(null);

      // Assert
      expect(component.searchResult.length).toBe(2);
    });

    it('should show all modules when value is empty string', () => {
      // Arrange
      component.moduleList = [
        { ModuleName: 'Module 1' },
        { ModuleName: 'Module 2' }
      ];

      // Act
      component.getAutoCompleteList('');

      // Assert
      expect(component.searchResult.length).toBe(2);
    });

    it('should filter modules by value', () => {
      // Arrange
      component.moduleList = [
        { ModuleName: 'Test Module' },
        { ModuleName: 'Another Module' }
      ];

      // Act
      component.getAutoCompleteList('Test');

      // Assert
      expect(component.searchResult.length).toBe(1);
      expect(component.searchResult[0].ModuleName).toBe('Test Module');
    });

    it('should not filter when moduleList is empty', () => {
      // Arrange
      component.moduleList = [];

      // Act
      component.getAutoCompleteList('test');

      // Assert
      expect(component.searchResult).toBeUndefined();
    });
  });

  describe('onFocus', () => {
    it('should call getModuleList and show all modules when searchinp is empty', () => {
      // Arrange
      component.searchinp = '';
      component.moduleList = [
        { ModuleName: 'Module 1' },
        { ModuleName: 'Module 2' }
      ];
      spyOn(component, 'getModuleList');

      // Act
      component.onFocus();

      // Assert
      expect(component.getModuleList).toHaveBeenCalledWith(true);
      expect(component.searchResult.length).toBe(2);
    });

    it('should filter modules by searchinp', () => {
      // Arrange
      component.searchinp = 'Test';
      component.moduleList = [
        { ModuleName: 'Test Module' },
        { ModuleName: 'Another Module' }
      ];
      spyOn(component, 'getModuleList');

      // Act
      component.onFocus();

      // Assert
      expect(component.searchResult.length).toBe(1);
      expect(component.searchResult[0].ModuleName).toBe('Test Module');
    });
  });

  describe('onFocusOutEvent', () => {
    it('should clear searchResult after 400ms', fakeAsync(() => {
      // Arrange
      component.searchResult = [{ ModuleName: 'test' }];

      // Act
      component.onFocusOutEvent();
      tick(400);

      // Assert
      expect(component.searchResult).toEqual([]);
    }));
  });

  describe('getModuleList', () => {
    it('should populate moduleList', () => {
      // Arrange
      const mockModules = [
        { ModuleName: 'Module 1' },
        { ModuleName: 'Module 2' }
      ];
      mockAdultsService.getModuleList.and.returnValue(of(mockModules));

      // Act
      component.getModuleList();

      // Assert
      expect(component.moduleList).toEqual(mockModules);
    });

    it('should filter and set searchResult when isLoad is true and searchinp is empty', () => {
      // Arrange
      component.searchinp = '';
      const mockModules = [
        { ModuleName: 'Module 1' },
        { ModuleName: 'Module 2' }
      ];
      mockAdultsService.getModuleList.and.returnValue(of(mockModules));

      // Act
      component.getModuleList(true);

      // Assert
      expect(component.searchResult.length).toBe(2);
    });

    it('should filter and set searchResult when isLoad is true and searchinp has value', () => {
      // Arrange
      component.searchinp = 'Module 1';
      const mockModules = [
        { ModuleName: 'Module 1' },
        { ModuleName: 'Module 2' }
      ];
      mockAdultsService.getModuleList.and.returnValue(of(mockModules));

      // Act
      component.getModuleList(true);

      // Assert
      expect(component.searchResult.length).toBe(1);
      expect(component.searchResult[0].ModuleName).toBe('Module 1');
    });
  });

  describe('freescreens', () => {
    it('should process freeScreens and store in localStorage', () => {
      // Arrange
      const mockResponse = [
        { FreeScrs: [{ ScrNo: '101' }, { ScrNo: '102' }] },
        { FreeScrs: [{ ScrNo: '201' }] }
      ];
      mockAdultsService.freeScreens.and.returnValue(of(mockResponse));

      // Act
      component.freescreens();

      // Assert
      expect(mockAdultsService.freeScreens).toHaveBeenCalled();
      const storedFreeScreens = JSON.parse(localStorage.getItem('freeScreens') || '[]');
      expect(storedFreeScreens).toEqual([101, 102, 201]);
    });

    it('should handle empty freeScreens', () => {
      // Arrange
      mockAdultsService.freeScreens.and.returnValue(of([]));

      // Act
      component.freescreens();

      // Assert
      const storedFreeScreens = JSON.parse(localStorage.getItem('freeScreens') || '[]');
      expect(storedFreeScreens).toEqual([]);
    });

    it('should handle null freeScreens in response', () => {
      // Arrange
      const mockResponse = [
        { FreeScrs: null },
        { FreeScrs: [] }
      ];
      mockAdultsService.freeScreens.and.returnValue(of(mockResponse));

      // Act
      component.freescreens();

      // Assert
      const storedFreeScreens = JSON.parse(localStorage.getItem('freeScreens') || '[]');
      expect(storedFreeScreens).toEqual([]);
    });
  });

  describe('logEvent', () => {
    it('should log event and navigate to URL', () => {
      // Act
      component.logEvent('test_event', '/test-url');

      // Assert
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('test_event');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/test-url']);
    });
  });

  describe('routeModule methods', () => {
    beforeEach(() => {
      component.userId = 123;
      spyOn(localStorage, 'setItem');
      spyOn(sessionStorage, 'setItem');
    });

    it('should handle routeDiscoveringWisdom correctly', fakeAsync(() => {
      // Arrange
      const mockResponse = {
        lastVisitedScreen: '27001',
        scenarios: [],
        MediaPercent: '50'
      };
      mockAdultsService.clickModule.and.returnValue(of(mockResponse));

      // Act
      component.routeDiscoveringWisdom(1);
      tick();

      // Assert
      expect(localStorage.setItem).toHaveBeenCalledWith('moduleId', '27');
      expect(mockAdultsService.clickModule).toHaveBeenCalledWith(27, 123);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/discovering-wisdom/s27001']);
    }));

    it('should handle routeComparison correctly', fakeAsync(() => {
      // Arrange
      const mockResponse = {
        lastVisitedScreen: '701',
        scenarios: [],
        MediaPercent: '30'
      };
      mockAdultsService.clickModule.and.returnValue(of(mockResponse));

      // Act
      component.routeComparison(1);
      tick();

      // Assert
      expect(localStorage.setItem).toHaveBeenCalledWith('moduleId', '7');
      expect(mockAdultsService.clickModule).toHaveBeenCalledWith(7, 123);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/comparison/s701']);
    }));

    it('should navigate to default screen when cont is not 1', fakeAsync(() => {
      // Arrange
      const mockResponse = {
        lastVisitedScreen: '27001',
        scenarios: [],
        MediaPercent: '50'
      };
      mockAdultsService.clickModule.and.returnValue(of(mockResponse));

      // Act
      component.routeDiscoveringWisdom(2);
      tick();

      // Assert
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/discovering-wisdom/s27001']);
    }));

    it('should set lastvisited to F when lastVisitedScreen is empty', fakeAsync(() => {
      // Arrange
      const mockResponse = {
        lastVisitedScreen: '',
        scenarios: [],
        MediaPercent: '0'
      };
      mockAdultsService.clickModule.and.returnValue(of(mockResponse));

      // Act
      component.routeDiscoveringWisdom(1);
      tick();

      // Assert
      expect(localStorage.setItem).toHaveBeenCalledWith('lastvisited', 'F');
    }));

    it('should handle error in routeDiscoveringWisdom', fakeAsync(() => {
      // Arrange
      mockAdultsService.clickModule.and.returnValue(throwError('Error'));

      // Act & Assert
      expect(() => {
        component.routeDiscoveringWisdom(1);
        tick();
      }).not.toThrow();
    }));
  });
});

