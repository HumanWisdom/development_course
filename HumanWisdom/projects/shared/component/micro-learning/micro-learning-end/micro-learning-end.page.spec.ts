import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { MicroLearningEndPage } from './micro-learning-end.page';
import { CommonService } from '../../../services/common.service';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { HomeStateService } from '../../../services/home-state.service';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';

describe('MicroLearningEndPage', () => {
  let component: MicroLearningEndPage;
  let fixture: ComponentFixture<MicroLearningEndPage>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockNgNavigatorShareService: jasmine.SpyObj<NgNavigatorShareService>;
  let mockHomeStateService: jasmine.SpyObj<HomeStateService>;

  const mockScreens = [
    { title: 'Screen 1', content: '<p>Content 1</p>', ImageUrl: 'https://example.com/img1.jpg' }
  ];

  const mockEndScreens = [
    {
      Link1Title: 'Resource 1 (1 min.)',
      Link1Url: '/adults/feel-better-now',
      Link1imgpath: 'https://example.com/img1.jpg',
      Link2Title: 'Resource 2',
      Link2Url: 'https://external.com/link',
      Link2imgpath: 'https://example.com/img2.jpg',
      Link3Title: '',
      Link3Url: '',
      Link3imgpath: ''
    }
  ];

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl'], {
      url: '/adults/micro-learning/inner/123'
    });
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));
    mockRouter.getCurrentNavigation = jasmine.createSpy('getCurrentNavigation').and.returnValue(null);

    mockCommonService = jasmine.createSpyObj('CommonService', [
      'GetMicrolearningScreens',
      'getMicrolearningsEndScreens',
      'clickMicrolearning',
      'submitJournal'
    ]);
    mockCommonService.GetMicrolearningScreens.and.returnValue(of(mockScreens));
    mockCommonService.getMicrolearningsEndScreens.and.returnValue(of(mockEndScreens));
    mockCommonService.clickMicrolearning.and.returnValue(of({}));
    mockCommonService.submitJournal.and.returnValue(of({ success: true }));

    mockNgNavigatorShareService = jasmine.createSpyObj('NgNavigatorShareService', ['share']);
    mockNgNavigatorShareService.share.and.returnValue(Promise.resolve());

    mockHomeStateService = jasmine.createSpyObj('HomeStateService', ['markCardAsSeen']);

    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => ProgramType.Adults,
      configurable: true
    });
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    spyOn(SharedService, 'getDashboardUrls').and.returnValue('/adults/home');

    spyOn(localStorage, 'getItem').and.callFake((key: string) => {
      const storage: { [key: string]: string } = {
        'm_learningId': '123',
        'shareToken': 'test-token',
        'userId': '42'
      };
      return storage[key] || null;
    });
    spyOn(localStorage, 'setItem');

    await TestBed.configureTestingModule({
      declarations: [MicroLearningEndPage],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: Location, useValue: jasmine.createSpyObj('Location', ['back']) },
        { provide: CommonService, useValue: mockCommonService },
        { provide: NgNavigatorShareService, useValue: mockNgNavigatorShareService },
        { provide: HomeStateService, useValue: mockHomeStateService },
        { provide: ActivatedRoute, useValue: {} }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MicroLearningEndPage);
    component = fixture.componentInstance;
    component.contentId = '123';
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
      fixture = TestBed.createComponent(MicroLearningEndPage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => ProgramType.Teenagers,
        configurable: true
      });
      fixture = TestBed.createComponent(MicroLearningEndPage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });

    it('should set contentId from navigation state when not subcomponent', () => {
      mockRouter.getCurrentNavigation = jasmine.createSpy('getCurrentNavigation').and.returnValue({
        extras: { state: { contentId: '456' } }
      });
      fixture = TestBed.createComponent(MicroLearningEndPage);
      component = fixture.componentInstance;
      component.isSubComponent = false;
      fixture.detectChanges();
      expect(component.contentId).toBe('456');
    });

    it('should set contentId from localStorage when not subcomponent and no state', () => {
      (localStorage.getItem as jasmine.Spy).and.returnValue('789');
      mockRouter.getCurrentNavigation = jasmine.createSpy('getCurrentNavigation').and.returnValue(null);
      fixture = TestBed.createComponent(MicroLearningEndPage);
      component = fixture.componentInstance;
      component.isSubComponent = false;
      fixture.detectChanges();
      expect(component.contentId).toBe('789');
    });

    it('should strip query params from contentId', () => {
      mockRouter.getCurrentNavigation = jasmine.createSpy('getCurrentNavigation').and.returnValue({
        extras: { state: { contentId: '123?foo=bar' } }
      });
      fixture = TestBed.createComponent(MicroLearningEndPage);
      component = fixture.componentInstance;
      component.isSubComponent = false;
      fixture.detectChanges();
      expect(component.contentId).toBe('123');
    });
  });

  describe('ngOnInit', () => {
    it('should fetch end screens and micro learning screens when contentId exists', fakeAsync(() => {
      component.contentId = '123';
      fixture.detectChanges();
      tick(650);
      expect(mockCommonService.getMicrolearningsEndScreens).toHaveBeenCalledWith('123');
      expect(mockCommonService.GetMicrolearningScreens).toHaveBeenCalledWith('123');
      expect(component.screensList).toEqual(mockScreens);
    }));

    it('should not call APIs when contentId is null', () => {
      component.contentId = null;
      (localStorage.getItem as jasmine.Spy).and.returnValue(null);
      fixture.detectChanges();
      expect(mockCommonService.getMicrolearningsEndScreens).not.toHaveBeenCalled();
      expect(mockCommonService.GetMicrolearningScreens).not.toHaveBeenCalled();
    });

    it('should call clickMicrolearning and markCardAsSeen when not subcomponent', fakeAsync(() => {
      component.contentId = '123';
      component.isSubComponent = false;
      fixture.detectChanges();
      tick(650);
      expect(mockCommonService.clickMicrolearning).toHaveBeenCalledWith('123');
      expect(mockHomeStateService.markCardAsSeen).toHaveBeenCalledWith('123');
    }));

    it('should not call clickMicrolearning when isSubComponent', fakeAsync(() => {
      component.contentId = '123';
      component.isSubComponent = true;
      fixture.detectChanges();
      tick(650);
      expect(mockCommonService.clickMicrolearning).not.toHaveBeenCalled();
    }));

    it('should set progressbarvalue when not subcomponent', fakeAsync(() => {
      component.contentId = '123';
      component.isSubComponent = false;
      fixture.detectChanges();
      tick(650);
      expect(localStorage.setItem).toHaveBeenCalledWith('progressbarvalue', '100');
    }));
  });

  describe('getEndScreens', () => {
    it('should populate resourcesList from API response', fakeAsync(() => {
      component.contentId = '123';
      fixture.detectChanges();
      tick(650);
      expect(component.resourcesList.length).toBe(3);
      expect(component.resourcesList[0].title).toBe('Resource 1');
      expect(component.resourcesList[0].type).toBe('1 min.');
      expect(component.resourcesList[0].url).toBe('/adults/feel-better-now');
    }));

    it('should handle empty API response', fakeAsync(() => {
      mockCommonService.getMicrolearningsEndScreens.and.returnValue(of([]));
      component.contentId = '123';
      fixture.detectChanges();
      tick(650);
      expect(component.resourcesList).toEqual([]);
    }));
  });

  describe('processLink', () => {
    it('should extract type from parentheses', () => {
      const result = component.processLink('Title (5 min.)', '/path', 'img.jpg');
      expect(result.title).toBe('Title');
      expect(result.type).toBe('5 min.');
      expect(result.url).toBe('/path');
    });

    it('should use Resource as default type when no parentheses', () => {
      const result = component.processLink('Plain Title', '/path', 'img.jpg');
      expect(result.title).toBe('Plain Title');
      expect(result.type).toBe('Resource');
    });

    it('should handle empty title', () => {
      const result = component.processLink('', '/path', 'img.jpg');
      expect(result.title).toBe('');
    });

    it('should decode URI component in title', () => {
      const result = component.processLink(encodeURIComponent('Title with spaces'), '/path', '');
      expect(result.title).toBe('Title with spaces');
    });
  });

  describe('goBack', () => {
    it('should navigate to inner screen with fromEnd state', () => {
      component.contentId = '123';
      component.goBack();
      expect(mockRouter.navigate).toHaveBeenCalledWith(
        ['/adults/micro-learning/inner', '123'],
        { state: { fromEnd: true } }
      );
      expect(component.direction).toBe('backward');
    });
  });

  describe('goToInnerScreen', () => {
    it('should navigate to micro-learning listing', () => {
      component.goToInnerScreen();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/micro-learning']);
    });
  });

  describe('addJournal', () => {
    it('should not submit when journalText is empty', () => {
      component.journalText = '';
      component.addJournal();
      expect(mockCommonService.submitJournal).not.toHaveBeenCalled();
    });

    it('should submit journal and emit when isSubComponent', fakeAsync(() => {
      component.contentId = '123';
      component.isSubComponent = true;
      component.journalText = 'My reflection';
      spyOn(component.journalStatus, 'emit');
      fixture.detectChanges();
      tick(650);
      component.addJournal();
      tick();
      expect(mockCommonService.submitJournal).toHaveBeenCalledWith(jasmine.objectContaining({
        Title: 'Microlearning',
        Notes: 'My reflection',
        MicrolearningID: '123'
      }));
      expect(component.journalStatus.emit).toHaveBeenCalledWith('added');
      expect(component.journalText).toBe('');
    }));

    it('should show success popup when not isSubComponent', fakeAsync(() => {
      component.contentId = '123';
      component.isSubComponent = false;
      component.journalText = 'My reflection';
      fixture.detectChanges();
      tick(650);
      component.addJournal();
      tick();
      expect(component.showSuccessPopup).toBe(true);
      expect(component.journalText).toBe('');
    }));
  });

  describe('closeSuccessPopup', () => {
    it('should hide success popup', () => {
      component.showSuccessPopup = true;
      component.closeSuccessPopup('close');
      expect(component.showSuccessPopup).toBe(false);
    });
  });

  describe('navigateToListing', () => {
    it('should navigate to micro-learning listing', () => {
      component.navigateToListing();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/micro-learning']);
    });
  });

  describe('goToHome', () => {
    it('should navigate to dashboard', () => {
      component.goToHome();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/home']);
    });
  });

  describe('handleResourceClick', () => {
    beforeEach(() => {
      component.contentId = '123';
    });

    it('should not navigate when resource has no url', () => {
      component.handleResourceClick({ title: 'Test', url: '', imgUrl: '', type: 'Resource' });
      expect(mockRouter.navigateByUrl).not.toHaveBeenCalled();
    });

    it('should navigate for relative URL and set localStorage', () => {
      component.handleResourceClick({
        title: 'Test',
        url: encodeURIComponent('/feel-better-now'),
        imgUrl: '',
        type: 'Resource'
      });
      expect(localStorage.setItem).toHaveBeenCalledWith('fromMicroLearningEnd', 'true');
      expect(localStorage.setItem).toHaveBeenCalledWith('microLearningEndUrl', jasmine.any(String));
      expect(mockRouter.navigateByUrl).toHaveBeenCalled();
    });

    it('should navigate for absolute http URL without modifying path', () => {
      component.handleResourceClick({
        title: 'Test',
        url: 'https://example.com/page',
        imgUrl: '',
        type: 'Resource'
      });
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('https://example.com/page');
    });

    it('should replace breathing/s29 with breathing/s107 for non-adults', () => {
      component.isAdults = false;
      component.handleResourceClick({
        title: 'Test',
        url: encodeURIComponent('breathing/s29'),
        imgUrl: '',
        type: 'Resource'
      });
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith(jasmine.stringMatching(/breathing\/s107/));
    });
  });

  describe('share', () => {
    it('should call ngNavigatorShareService with correct params', async () => {
      component.contentId = '123';
      await component.share();
      const shareCall = mockNgNavigatorShareService.share.calls.mostRecent();
      expect(shareCall.args[0].title).toBe('HappierMe Program');
      expect(shareCall.args[0].url).toContain('/adults/micro-learning/inner/123');
    });
  });

  describe('touch handlers', () => {
    let testWrapper: HTMLDivElement;

    beforeEach(fakeAsync(() => {
      component.contentId = '123';
      component.isSubComponent = false;
      fixture.detectChanges();
      tick(650);
      testWrapper = document.createElement('div');
      testWrapper.className = 'mc_content_wrapper';
      testWrapper.style.width = '300px';
      document.body.appendChild(testWrapper);
    }));

    afterEach(() => {
      testWrapper?.remove?.();
    });

    it('handleTouchStart should set isDragging', () => {
      const event = { type: 'mousedown', clientX: 100, clientY: 50 };
      component.handleTouchStart(event);
      expect(component.isDragging).toBe(true);
    });

    it('handleTouchMove should update dragOffset for horizontal swipe', () => {
      const startEvent = { type: 'mousedown', clientX: 100, clientY: 50 };
      component.handleTouchStart(startEvent);
      const moveEvent = { type: 'mousemove', clientX: 150, clientY: 50, cancelable: true, preventDefault: () => {} };
      component.handleTouchMove(moveEvent);
      expect(component.dragOffset).toBeGreaterThan(0);
    });

    it('handleTouchEnd should call goBack when swipe threshold exceeded', () => {
      component['containerWidth'] = 300;
      component.isDragging = true;
      component['isHorizontalSwipe'] = true;
      component.dragOffset = 100;
      spyOn(component, 'goBack');
      component.handleTouchEnd();
      expect(component.goBack).toHaveBeenCalled();
      expect(component.isDragging).toBe(false);
    });

    it('getTransform should return translate string', () => {
      component['containerWidth'] = 300;
      component.dragOffset = 30;
      const transform = component.getTransform();
      expect(transform).toContain('translateX');
    });
  });
});
