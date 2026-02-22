import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseHeaderComponent } from './course-header.component';
import { Router } from '@angular/router';
import { Platform } from '@angular/cdk/platform';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { NavigationService } from '../../services/navigation.service';
import { ModalService } from '../../services/modal.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('CourseHeaderComponent', () => {
  let component: CourseHeaderComponent;
  let fixture: ComponentFixture<CourseHeaderComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockAdultsService: jasmine.SpyObj<AdultsService>;
  let mockNgNavigatorShareService: jasmine.SpyObj<NgNavigatorShareService>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockModalService: jasmine.SpyObj<ModalService>;
  let mockProgramId: any;

  beforeEach(async () => {
    localStorage.setItem('saveUsername', 'true');
    localStorage.setItem('guest', 'F');
    localStorage.setItem('Subscriber', '1');
    localStorage.setItem('shareToken', 'test-token');
    localStorage.setItem('userId', '123');
    localStorage.setItem('isloggedin', 'T');
    sessionStorage.setItem('userId', '123');

    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));
    Object.defineProperty(mockRouter, 'url', {
      get: () => '/adults/comparison/s701',
      configurable: true
    });
    mockRouter.getCurrentNavigation = jasmine.createSpy().and.returnValue(null);

    mockAdultsService = jasmine.createSpyObj('AdultsService', ['submitJournal', 'screenProgress']);
    mockAdultsService.submitJournal.and.returnValue(of({}));
    mockAdultsService.screenProgress.and.returnValue(of('50'));

    mockNgNavigatorShareService = jasmine.createSpyObj('NgNavigatorShareService', ['share']);
    mockNgNavigatorShareService.share.and.returnValue(Promise.resolve());

    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);
    mockNavigationService.navigateToBackLink.and.returnValue(null);

    mockLocation = jasmine.createSpyObj('Location', ['back']);
    mockLocation.back.and.stub();

    mockModalService = jasmine.createSpyObj('ModalService', ['openModal', 'closeModal']);

    mockProgramId = ProgramType.Adults;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });

    await TestBed.configureTestingModule({
      declarations: [CourseHeaderComponent],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: AdultsService, useValue: mockAdultsService },
        { provide: Platform, useValue: { isBrowser: true } },
        { provide: NgNavigatorShareService, useValue: mockNgNavigatorShareService },
        { provide: NavigationService, useValue: mockNavigationService },
        { provide: Location, useValue: mockLocation },
        { provide: ModalService, useValue: mockModalService },
        { provide: ActivatedRoute, useValue: {} }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseHeaderComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('constructor', () => {
    it('should set isAdults to true when ProgramId is Adults', () => {
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(CourseHeaderComponent);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });

    it('should set isLoggedIn when user is logged in and subscribed', () => {
      expect(component.isLoggedIn).toBe(true);
    });

    it('should set Subscriber from localStorage', () => {
      localStorage.setItem('Subscriber', '0');
      fixture = TestBed.createComponent(CourseHeaderComponent);
      component = fixture.componentInstance;
      expect(component.Subscriber).toBe(false);
    });

    it('should set guest from localStorage', () => {
      localStorage.setItem('guest', 'T');
      fixture = TestBed.createComponent(CourseHeaderComponent);
      component = fixture.componentInstance;
      expect(component.guest).toBe(true);
    });
  });

  describe('ngOnInit', () => {
    it('should set placeHolder for guest', () => {
      component.guest = true;
      component.ngOnInit();
      expect(component.placeHolder).toBe('Start your free trial to access your online journal');
    });

    it('should set placeHolder when not subscribed', () => {
      component.Subscriber = false;
      component.ngOnInit();
      expect(component.placeHolder).toBe('Start your free trial to access your online journal');
    });

    it('should set shared when urlT is present', () => {
      mockRouter.getCurrentNavigation = jasmine.createSpy().and.returnValue({
        extractedUrl: { queryParams: { t: 'share-token' } }
      });
      fixture = TestBed.createComponent(CourseHeaderComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.shared).toBe(true);
    });
  });

  describe('addZero', () => {
    it('should add leading zero for single digit', () => {
      expect(component.addZero(5)).toBe('05');
    });

    it('should not add zero for double digit', () => {
      expect(component.addZero(12)).toBe(12);
    });
  });

  describe('toggleBookmark', () => {
    it('should show alert when guest', () => {
      component.guest = true;
      component.bookmark = false;

      component.toggleBookmark();

      expect(component.content).toBe('Start your free trial to activate this feature');
      expect(component.enableAlert).toBe(true);
      expect(component.bookmark).toBe(false);
    });

    it('should show alert when not subscribed', () => {
      component.Subscriber = false;
      component.bookmark = false;

      component.toggleBookmark();

      expect(component.enableAlert).toBe(true);
    });

    it('should toggle bookmark and emit when subscribed', () => {
      component.guest = false;
      component.Subscriber = true;
      component.bookmark = false;
      let emitted = false;
      component.sendBookmark.subscribe((val: boolean) => { emitted = true; });

      component.toggleBookmark();

      expect(component.bookmark).toBe(true);
      expect(emitted).toBe(true);
    });
  });

  describe('onEditIconClick', () => {
    it('should open modal with event', () => {
      const mockEvent = { preventDefault: jasmine.createSpy() } as any;

      component.onEditIconClick(mockEvent);

      expect(component.isEditClicked).toBe(true);
      expect(component.isModalPopupOpen).toBe(true);
      expect(mockModalService.openModal).toHaveBeenCalledWith('exampleModalCenter', mockEvent);
    });
  });

  describe('OpenPopup', () => {
    it('should open modal', () => {
      component.OpenPopup();

      expect(component.isModalPopupOpen).toBe(true);
      expect(mockModalService.openModal).toHaveBeenCalledWith('exampleModalCenter');
    });
  });

  describe('courseNote', () => {
    it('should navigate to coursenote', () => {
      component.programName = 'adults';
      component.path = '/adults/comparison/s701';

      component.courseNote();

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/coursenote', { path: '/adults/comparison/s701' }]);
    });
  });

  describe('goToToc', () => {
    it('should navigateByUrl when navigateToBackLink returns url', () => {
      mockNavigationService.navigateToBackLink.and.returnValue('/adults/comparison');

      component.goToToc();

      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/adults/comparison');
    });

    it('should call location.back when url includes wellness-survey', () => {
      mockNavigationService.navigateToBackLink.and.returnValue(null);
      Object.defineProperty(mockRouter, 'url', {
        get: () => '/adults/wellness-survey/intro',
        configurable: true
      });

      component.goToToc();

      expect(mockLocation.back).toHaveBeenCalled();
    });

    it('should navigate to parent url when not wellness-survey', () => {
      mockNavigationService.navigateToBackLink.and.returnValue(null);
      Object.defineProperty(mockRouter, 'url', {
        get: () => '/adults/comparison/s701',
        configurable: true
      });

      component.goToToc();

      expect(mockRouter.navigate).toHaveBeenCalled();
      const navArgs = mockRouter.navigate.calls.mostRecent().args[0][0];
      expect(navArgs).toContain('adults/comparison');
    });
  });

  describe('goToDash', () => {
    it('should navigate to adult-dashboard when progUrl is adults', () => {
      component.progUrl = '/adults/';
      component.programName = 'adults';

      component.goToDash();

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/adult-dashboard']);
    });

    it('should navigate to teenager-dashboard when not adults', () => {
      component.progUrl = '/teenagers/';
      component.programName = '';

      component.goToDash();

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenager-dashboard']);
    });
  });

  describe('addToken', () => {
    it('should set socialShare to true', () => {
      component.addToken();
      expect(component.socialShare).toBe(true);
    });
  });

  describe('addNote', () => {
    it('should call submitJournal and set content on success', () => {
      component.note = 'Test note';
      component.userId = 123;
      component.minDate = '2025-02-22';

      component.addNote();

      expect(mockAdultsService.submitJournal).toHaveBeenCalledWith({
        JournalId: 0,
        JDate: component.minDate,
        Title: 'Module Note',
        Notes: 'Test note',
        UserId: 123
      });
      expect(component.content).toBe('Note has been successfully saved to diary');
      expect(component.enableAlert).toBe(true);
      expect(mockModalService.closeModal).toHaveBeenCalledWith('exampleModalCenter');
    });
  });

  describe('share', () => {
    it('should call shareUrl and ngNavigatorShareService.share', () => {
      component.address = '/adults/comparison/s701';
      component.path = SharedService.AdultsBaseUrl + component.address + '?t=test-token';

      component.share();

      expect(mockNgNavigatorShareService.share).toHaveBeenCalledWith({
        title: 'HappierMe Program',
        text: "Hi! I've been using the HappierMe app and wanted to share something you may find interesting. Let me know what you think",
        url: component.path
      });
    });
  });

  describe('getProgress', () => {
    it('should call screenProgress and update progress', (done) => {
      component.showheaderbar = false;
      mockAdultsService.screenProgress.and.returnValue(of('75'));

      component.getProgress('701');

      setTimeout(() => {
        expect(mockAdultsService.screenProgress).toHaveBeenCalledWith('701');
        expect(component.progress).toBe(75);
        expect(component.showheaderbar).toBe(true);
        done();
      }, 150);
    });
  });

  describe('getProgramTypeName', () => {
    it('should return program type name for Adults', () => {
      const result = component.getProgramTypeName(ProgramType.Adults);
      expect(result).toBe('Adults');
    });

    it('should return program type name for Teenagers', () => {
      const result = component.getProgramTypeName(ProgramType.Teenagers);
      expect(result).toBe('Teenagers');
    });
  });

  describe('shareUrl', () => {
    it('should set path for Adults with urlT', () => {
      component.urlT = 'shared-token';
      component.address = '/adults/comparison/s701';

      component.shareUrl(ProgramType.Adults);

      expect(component.path).toBe(SharedService.AdultsBaseUrl + component.address + '?t=shared-token');
    });

    it('should set path for Adults with token when no urlT', () => {
      component.urlT = undefined;
      component.address = '/adults/comparison/s701';

      component.shareUrl(ProgramType.Adults);

      expect(component.path).toBe(SharedService.AdultsBaseUrl + component.address + '?t=' + component.token);
    });

    it('should set path for Teenagers', () => {
      component.address = '/teenagers/module/s123';
      component.token = 'tk';

      component.shareUrl(ProgramType.Teenagers);

      expect(component.path).toBe(SharedService.TeenagerBaseUrl + component.address + '?t=tk');
    });
  });

  describe('getAlertcloseEvent', () => {
    it('should clear alert state', () => {
      component.enableAlert = true;
      component.enablecancel = true;
      component.content = 'test';

      component.getAlertcloseEvent('cancel');

      expect(component.enableAlert).toBe(false);
      expect(component.enablecancel).toBe(false);
      expect(component.content).toBe('');
    });

    it('should navigate to add-to-cart when event is ok and not guest and not subscriber', () => {
      component.guest = false;
      component.Subscriber = false;

      component.getAlertcloseEvent('ok');

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/onboarding/add-to-cart']);
    });

    it('should navigate to login when event is ok and guest', () => {
      component.guest = true;

      component.getAlertcloseEvent('ok');

      expect(localStorage.getItem('subscribepage')).toBe('T');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/onboarding/login']);
    });
  });

  describe('CloseModal', () => {
    it('should close modal', () => {
      component.isModalPopupOpen = true;

      component.CloseModal();

      expect(component.isModalPopupOpen).toBe(false);
      expect(mockModalService.closeModal).toHaveBeenCalledWith('exampleModalCenter');
    });
  });
});
