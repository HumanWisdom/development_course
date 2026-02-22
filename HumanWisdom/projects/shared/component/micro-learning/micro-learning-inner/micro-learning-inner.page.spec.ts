import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { MicroLearningInnerPage } from './micro-learning-inner.page';
import { CommonService } from '../../../services/common.service';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { HomeStateService } from '../../../services/home-state.service';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';

describe('MicroLearningInnerPage', () => {
  let component: MicroLearningInnerPage;
  let fixture: ComponentFixture<MicroLearningInnerPage>;
  let mockActivatedRoute: Partial<ActivatedRoute>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockNgNavigatorShareService: jasmine.SpyObj<NgNavigatorShareService>;
  let mockHomeStateService: jasmine.SpyObj<HomeStateService>;

  const mockScreens = [
    { title: 'Screen 1', content: '<p>Content 1</p>', ImageUrl: 'https://example.com/img1.jpg' },
    { title: 'Screen 2', content: '<p>Content 2</p>', ImageUrl: 'https://example.com/img2.jpg' }
  ];

  const createParamMap = (id: string | null) => ({
    get: (name: string) => (name === 'id' ? id : null),
    getAll: () => (id ? [id] : [])
  });

  beforeEach(async () => {
    mockActivatedRoute = {
      paramMap: of(createParamMap('123') as any),
      snapshot: {
        queryParamMap: {
          get: jasmine.createSpy('get').and.returnValue(null)
        }
      } as any
    };

    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl'], {
      url: '/adults/micro-learning/123'
    });
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));
    mockRouter.getCurrentNavigation = jasmine.createSpy('getCurrentNavigation').and.returnValue(null);

    mockCommonService = jasmine.createSpyObj('CommonService', ['GetMicrolearningScreens', 'clickMicrolearning']);
    mockCommonService.GetMicrolearningScreens.and.returnValue(of(mockScreens));
    mockCommonService.clickMicrolearning.and.returnValue(of({}));

    mockNgNavigatorShareService = jasmine.createSpyObj('NgNavigatorShareService', ['share']);
    mockNgNavigatorShareService.share.and.returnValue(Promise.resolve());

    mockHomeStateService = jasmine.createSpyObj('HomeStateService', ['markCardAsSeen']);

    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => ProgramType.Adults,
      configurable: true
    });
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');

    spyOn(localStorage, 'getItem').and.callFake((key: string) => {
      const storage: { [key: string]: string } = {
        'm_learningId': '123',
        'shareToken': 'test-token'
      };
      return storage[key] || null;
    });
    spyOn(localStorage, 'setItem');
    spyOn(localStorage, 'removeItem');

    await TestBed.configureTestingModule({
      declarations: [MicroLearningInnerPage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
        { provide: Location, useValue: jasmine.createSpyObj('Location', ['back']) },
        { provide: CommonService, useValue: mockCommonService },
        { provide: NgNavigatorShareService, useValue: mockNgNavigatorShareService },
        { provide: HomeStateService, useValue: mockHomeStateService },
        {
          provide: DomSanitizer,
          useValue: {
            bypassSecurityTrustHtml: (val: string) => val
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MicroLearningInnerPage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    (localStorage.removeItem as jasmine.Spy).calls.reset();
    (localStorage.setItem as jasmine.Spy).calls.reset();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('constructor', () => {
    it('should set isAdults to true when ProgramId is Adults', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => ProgramType.Adults,
        configurable: true
      });
      fixture = TestBed.createComponent(MicroLearningInnerPage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => ProgramType.Teenagers,
        configurable: true
      });
      fixture = TestBed.createComponent(MicroLearningInnerPage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });

    it('should set isFromEnd and direction when navigation state has fromEnd', () => {
      mockRouter.getCurrentNavigation = jasmine.createSpy('getCurrentNavigation').and.returnValue({
        extras: { state: { fromEnd: true } }
      });
      fixture = TestBed.createComponent(MicroLearningInnerPage);
      component = fixture.componentInstance;
      expect(component.isFromEnd).toBe(true);
      expect(component.direction).toBe('backward');
    });
  });

  describe('ngOnInit', () => {
    it('should get contentId from route params and fetch screens', fakeAsync(() => {
      fixture.detectChanges();
      tick(450);
      expect(component.contentId).toBe('123');
      expect(mockCommonService.GetMicrolearningScreens).toHaveBeenCalledWith('123');
      expect(component.screensList).toEqual(mockScreens);
      expect(component.isLoading).toBe(false);
    }));

    it('should use localStorage m_learningId when route has no id', fakeAsync(() => {
      (mockActivatedRoute as any).paramMap = of(createParamMap(null) as any);
      (localStorage.getItem as jasmine.Spy).and.callFake((k: string) => k === 'm_learningId' ? '456' : null);
      fixture.detectChanges();
      tick(450);
      expect(component.contentId).toBe('456');
      expect(mockCommonService.GetMicrolearningScreens).toHaveBeenCalledWith('456');
    }));

    it('should strip query params from contentId', fakeAsync(() => {
      (mockActivatedRoute as any).paramMap = of(createParamMap('123?foo=bar') as any);
      fixture.detectChanges();
      tick(450);
      expect(component.contentId).toBe('123');
    }));

    it('should save contentId to localStorage when present', fakeAsync(() => {
      fixture.detectChanges();
      tick(450);
      expect(localStorage.setItem).toHaveBeenCalledWith('m_learningId', '123');
    }));
  });

  describe('checkIfComingFromEnd', () => {
    it('should set isFromEnd when fromMicroLearningEnd is in localStorage', fakeAsync(() => {
      (localStorage.getItem as jasmine.Spy).and.callFake((k: string) =>
        k === 'fromMicroLearningEnd' ? 'true' : null
      );
      (mockActivatedRoute.snapshot.queryParamMap.get as jasmine.Spy).and.returnValue(null);
      fixture.detectChanges();
      tick(450);
      expect(component.isFromEnd).toBe(true);
      expect(localStorage.removeItem).toHaveBeenCalledWith('fromMicroLearningEnd');
    }));

    it('should set isFromEnd when isEnd query param is true', fakeAsync(() => {
      (mockActivatedRoute.snapshot.queryParamMap.get as jasmine.Spy).and.returnValue('true');
      fixture.detectChanges();
      tick(450);
      expect(component.isFromEnd).toBe(true);
    }));
  });

  describe('getMicroLearningScreens', () => {
    it('should restore saved index when persist_ml_index is true', fakeAsync(() => {
      (localStorage.getItem as jasmine.Spy).and.callFake((k: string) => {
        if (k === 'ml_index_123') return '1';
        if (k === 'persist_ml_index') return 'true';
        return k === 'm_learningId' ? '123' : null;
      });
      fixture.detectChanges();
      tick(450);
      expect(component.currentScreenIndex).toBe(1);
      expect(localStorage.removeItem).toHaveBeenCalledWith('persist_ml_index');
    }));

    it('should reset saved index if it exceeds screen count', fakeAsync(() => {
      (localStorage.getItem as jasmine.Spy).and.callFake((k: string) => {
        if (k === 'ml_index_123') return '99';
        if (k === 'persist_ml_index') return 'true';
        return k === 'm_learningId' ? '123' : null;
      });
      fixture.detectChanges();
      tick(450);
      expect(component.currentScreenIndex).toBe(0);
    }));

    it('should set currentScreenIndex to end when isFromEnd', fakeAsync(() => {
      component.isFromEnd = true;
      fixture.detectChanges();
      tick(450);
      expect(component.currentScreenIndex).toBe(mockScreens.length);
    }));

    it('should set isLoading to false on API error', fakeAsync(() => {
      mockCommonService.GetMicrolearningScreens.and.returnValue(throwError(() => new Error('API Error')));
      fixture.detectChanges();
      tick(450);
      expect(component.isLoading).toBe(false);
    }));

    it('should not update screens when response is empty', fakeAsync(() => {
      mockCommonService.GetMicrolearningScreens.and.returnValue(of([]));
      fixture.detectChanges();
      tick(450);
      expect(component.screensList).toEqual([]);
    }));
  });

  describe('updateContent', () => {
    beforeEach(fakeAsync(() => {
      fixture.detectChanges();
      tick(450);
    }));

    it('should save current index to localStorage', fakeAsync(() => {
      component.updateContent();
      tick(450);
      expect(localStorage.setItem).toHaveBeenCalledWith('ml_index_123', component.currentScreenIndex.toString());
    }));

    it('should call clickMicrolearning and markCardAsSeen when on last screen', fakeAsync(() => {
      component.currentScreenIndex = mockScreens.length;
      component.screensList = mockScreens;
      component.isReadMarked = false;
      component.updateContent();
      tick(450);
      expect(mockCommonService.clickMicrolearning).toHaveBeenCalledWith('123');
      expect(mockHomeStateService.markCardAsSeen).toHaveBeenCalledWith('123');
      expect(component.isReadMarked).toBe(true);
    }));

    it('should not call clickMicrolearning when already read marked', fakeAsync(() => {
      component.currentScreenIndex = mockScreens.length;
      component.screensList = mockScreens;
      component.isReadMarked = true;
      component.updateContent();
      tick(450);
      expect(mockCommonService.clickMicrolearning).not.toHaveBeenCalled();
    }));
  });

  describe('goBack', () => {
    beforeEach(fakeAsync(() => {
      fixture.detectChanges();
      tick(450);
    }));

    it('should decrement index when not on first screen', () => {
      component.currentScreenIndex = 2;
      component.goBack();
      expect(component.currentScreenIndex).toBe(1);
      expect(component.direction).toBe('backward');
    });

    it('should call backToDashboard when on first screen', () => {
      component.currentScreenIndex = 0;
      spyOn(component, 'backToDashboard');
      component.goBack();
      expect(component.backToDashboard).toHaveBeenCalled();
    });
  });

  describe('backToDashboard', () => {
    beforeEach(fakeAsync(() => {
      fixture.detectChanges();
      tick(450);
    }));

    it('should remove localStorage keys and navigate', () => {
      component.backToDashboard();
      expect(localStorage.removeItem).toHaveBeenCalledWith('ml_index_123');
      expect(localStorage.removeItem).toHaveBeenCalledWith('persist_ml_index');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/micro-learning']);
    });
  });

  describe('next', () => {
    beforeEach(fakeAsync(() => {
      fixture.detectChanges();
      tick(450);
    }));

    it('should increment index when not on last screen', () => {
      component.currentScreenIndex = 0;
      component.next();
      expect(component.currentScreenIndex).toBe(1);
      expect(component.direction).toBe('forward');
    });

    it('should not increment when on last screen', () => {
      component.currentScreenIndex = mockScreens.length;
      component.next();
      expect(component.currentScreenIndex).toBe(mockScreens.length);
    });
  });

  describe('getProgressPercentage', () => {
    it('should return 0 when screensList is empty', () => {
      component.screensList = [];
      expect(component.getProgressPercentage()).toBe(0);
    });

    it('should return correct percentage', fakeAsync(() => {
      fixture.detectChanges();
      tick(450);
      component.currentScreenIndex = 0;
      expect(component.getProgressPercentage()).toBeCloseTo((1 / 3) * 100);
      component.currentScreenIndex = 1;
      expect(component.getProgressPercentage()).toBeCloseTo((2 / 3) * 100);
    }));
  });

  describe('share', () => {
    beforeEach(fakeAsync(() => {
      fixture.detectChanges();
      tick(450);
    }));

    it('should call ngNavigatorShareService with correct params', async () => {
      await component.share();
      const shareCall = mockNgNavigatorShareService.share.calls.mostRecent();
      expect(shareCall.args[0].title).toBe('HappierMe');
      expect(shareCall.args[0].text).toBe('Share');
      expect(shareCall.args[0].url).toContain('/adults/micro-learning/123');
    });
  });

  describe('sanitizeContent', () => {
    it('should return sanitized content', () => {
      const result = component.sanitizeContent('<p>Hello</p>');
      expect(result).toBeDefined();
    });

    it('should handle null/empty content', () => {
      const result = component.sanitizeContent('');
      expect(result).toBeDefined();
    });
  });

  describe('routeUrl', () => {
    beforeEach(fakeAsync(() => {
      fixture.detectChanges();
      tick(450);
    }));

    it('should not navigate when url is empty', () => {
      component.routeUrl('');
      expect(mockRouter.navigate).not.toHaveBeenCalled();
      expect(mockRouter.navigateByUrl).not.toHaveBeenCalled();
    });

    it('should set persist_ml_index and navigate with program prefix for relative path', () => {
      component.routeUrl('/some-path');
      expect(localStorage.setItem).toHaveBeenCalledWith('persist_ml_index', 'true');
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/adults/some-path');
    });

    it('should navigateByUrl when path starts with program prefix', () => {
      component.routeUrl('/adults/feel-better-now');
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/adults/feel-better-now');
    });

    it('should navigate for non-leading-slash path', () => {
      component.routeUrl('feel-better-now');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/feel-better-now']);
    });
  });

  describe('forceRoute', () => {
    beforeEach(fakeAsync(() => {
      fixture.detectChanges();
      tick(450);
    }));

    it('should route from data-route attribute', () => {
      const anchor = document.createElement('a');
      anchor.setAttribute('data-route', '/adults/test');
      component.forceRoute(anchor);
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/adults/test');
    });

    it('should route from href attribute', () => {
      const anchor = document.createElement('a');
      anchor.setAttribute('href', '/adults/href-path');
      component.forceRoute(anchor);
      expect(mockRouter.navigateByUrl).toHaveBeenCalled();
    });

    it('should not route for javascript:void(0)', () => {
      const anchor = document.createElement('a');
      anchor.setAttribute('href', 'javascript:void(0)');
      component.forceRoute(anchor);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
      expect(mockRouter.navigateByUrl).not.toHaveBeenCalled();
    });
  });

  describe('handleContentClick', () => {
    beforeEach(fakeAsync(() => {
      fixture.detectChanges();
      tick(450);
    }));

    it('should call forceRoute when clicking anchor', () => {
      const anchor = document.createElement('a');
      anchor.setAttribute('data-route', '/adults/test');
      const event = { target: anchor, preventDefault: jasmine.createSpy(), stopPropagation: jasmine.createSpy() } as any;
      component.handleContentClick(event);
      expect(event.preventDefault).toHaveBeenCalled();
      expect(event.stopPropagation).toHaveBeenCalled();
      expect(mockRouter.navigateByUrl).toHaveBeenCalled();
    });

    it('should not do anything when target is not inside anchor', () => {
      const div = document.createElement('div');
      const event = { target: div, preventDefault: jasmine.createSpy() } as any;
      component.handleContentClick(event);
      expect(event.preventDefault).not.toHaveBeenCalled();
    });
  });

  describe('touch handlers', () => {
    let testWrapper: HTMLDivElement;

    beforeEach(fakeAsync(() => {
      fixture.detectChanges();
      tick(450);
      testWrapper = document.createElement('div');
      testWrapper.className = 'mc_content_wrapper';
      testWrapper.style.width = '300px';
      document.body.appendChild(testWrapper);
    }));

    afterEach(() => {
      testWrapper?.remove?.();
    });

    it('handleTouchStart should set isDragging when not animating', () => {
      const event = { type: 'mousedown', clientX: 100, clientY: 50, target: document.createElement('div') };
      component.handleTouchStart(event);
      expect(component.isDragging).toBe(true);
    });

    it('handleTouchStart should not set isDragging when animating', () => {
      component.isAnimating = true;
      const event = { type: 'mousedown', clientX: 100, clientY: 50, target: document.createElement('div') };
      component.handleTouchStart(event);
      expect(component.isDragging).toBe(false);
    });

    it('handleTouchMove should update dragOffset for horizontal swipe', () => {
      const startEvent = { type: 'mousedown', clientX: 100, clientY: 50, target: document.createElement('div') };
      component.handleTouchStart(startEvent);
      const moveEvent = { type: 'mousemove', clientX: 150, clientY: 50, touches: [{ clientX: 150, clientY: 50 }], cancelable: true, preventDefault: () => {} };
      component.handleTouchMove(moveEvent);
      expect(component.dragOffset).toBe(50);
    });

    it('getTransform should return correct translate string', fakeAsync(() => {
      fixture.detectChanges();
      tick(450);
      component.currentScreenIndex = 1;
      component.dragOffset = 0;
      component['containerWidth'] = 300;
      const transform = component.getTransform();
      expect(transform).toContain('translateX');
      expect(transform).toContain('-100');
    }));
  });
});
