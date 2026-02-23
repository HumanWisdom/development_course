import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AudioHeaderComponent } from './audio-header.component';
import { Router } from '@angular/router';
import { Platform } from '@angular/cdk/platform';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { NavigationService } from '../../services/navigation.service';
import { ModalService } from '../../services/modal.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AudioHeaderComponent', () => {
  let component: AudioHeaderComponent;
  let fixture: ComponentFixture<AudioHeaderComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockAdultsService: jasmine.SpyObj<AdultsService>;
  let mockNgNavigatorShareService: jasmine.SpyObj<NgNavigatorShareService>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
  let mockModalService: jasmine.SpyObj<ModalService>;
  let mockProgramId: any;
  let originalProgramId: PropertyDescriptor | undefined;

  beforeEach(async () => {
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    localStorage.setItem('saveUsername', 'true');
    localStorage.setItem('guest', 'F');
    localStorage.setItem('Subscriber', '1');
    localStorage.setItem('shareToken', 'test-token');
    localStorage.setItem('userId', '123');
    sessionStorage.setItem('userId', '123');

    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    Object.defineProperty(mockRouter, 'url', {
      get: () => '/adults/audiopage/123/1/45/test',
      configurable: true
    });
    mockRouter.getCurrentNavigation = jasmine.createSpy().and.returnValue(null);

    mockAdultsService = jasmine.createSpyObj('AdultsService', ['submitJournal', 'screenProgress']);
    mockAdultsService.submitJournal.and.returnValue(of({}));
    mockAdultsService.screenProgress.and.returnValue(of('50'));

    mockNgNavigatorShareService = jasmine.createSpyObj('NgNavigatorShareService', ['share']);
    mockNgNavigatorShareService.share.and.returnValue(Promise.resolve());

    mockNavigationService = jasmine.createSpyObj('NavigationService', ['getBackLink']);
    mockNavigationService.getBackLink.and.returnValue('/adults/toc');

    mockModalService = jasmine.createSpyObj('ModalService', ['openModal', 'closeModal']);

    mockProgramId = ProgramType.Adults;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });

    await TestBed.configureTestingModule({
      declarations: [AudioHeaderComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: AdultsService, useValue: mockAdultsService },
        { provide: Platform, useValue: { isBrowser: true } },
        { provide: NgNavigatorShareService, useValue: mockNgNavigatorShareService },
        { provide: NavigationService, useValue: mockNavigationService },
        { provide: ModalService, useValue: mockModalService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AudioHeaderComponent);
    component = fixture.componentInstance;
    component.toc = 'feel-better-now';
  });

  afterEach(() => {
    if (originalProgramId) {
      Object.defineProperty(SharedService, 'ProgramId', originalProgramId);
    }
    localStorage.clear();
    sessionStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set isAdult based on ProgramId', () => {
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(AudioHeaderComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isAdult).toBe(true);
    });

    it('should set placeHolder for guest or non-subscriber', () => {
      localStorage.setItem('Subscriber', '0');
      fixture = TestBed.createComponent(AudioHeaderComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.placeHolder).toBe('Start your free trial to access your online journal');
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
    it('should set enableAlert when guest', () => {
      component.guest = true;
      component.bookmark = false;

      component.toggleBookmark();

      expect(component.enableAlert).toBe(true);
      expect(component.bookmark).toBe(false);
    });

    it('should toggle bookmark and emit when subscribed', () => {
      component.guest = false;
      component.Subscriber = true;
      component.bookmark = false;
      let emitted = false;
      component.sendBookmark.subscribe(() => (emitted = true));

      component.toggleBookmark();

      expect(component.bookmark).toBe(true);
      expect(emitted).toBe(true);
    });
  });

  describe('goToToc', () => {
    it('should navigate to toc', () => {
      component.programName = 'adults';
      component.toc = 'feel-better-now';

      component.goToToc();

      expect(mockNavigationService.getBackLink).toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/feel-better-now']);
    });
  });

  describe('goToDash', () => {
    it('should navigate to adult-dashboard when Adults', () => {
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      component.ngOnInit();

      component.goToDash();

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/adult-dashboard']);
    });

    it('should navigate to teenager-dashboard when Teenagers', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(AudioHeaderComponent);
      component = fixture.componentInstance;
      component.ngOnInit();

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

  describe('onEditIconClick', () => {
    it('should open modal', () => {
      component.onEditIconClick();

      expect(component.isEditClicked).toBe(true);
      expect(component.isModalPopupOpen).toBe(true);
      expect(mockModalService.openModal).toHaveBeenCalledWith('exampleModalCenter', undefined);
    });
  });

  describe('shareUrl', () => {
    it('should set baseUrl for Adults', () => {
      component.shareUrl(ProgramType.Adults);
      expect(component.baseUrl).toBe(SharedService.AdultsBaseUrl);
    });

    it('should set baseUrl for Teenagers', () => {
      component.shareUrl(ProgramType.Teenagers);
      expect(component.baseUrl).toBe(SharedService.TeenagerBaseUrl);
    });
  });

  describe('getProgramTypeName', () => {
    it('should return program type name', () => {
      const result = component.getProgramTypeName(ProgramType.Adults);
      expect(result).toBe('Adults');
    });
  });

  describe('getAlertcloseEvent', () => {
    it('should set enableAlert to false', () => {
      component.enableAlert = true;
      component.getAlertcloseEvent({});
      expect(component.enableAlert).toBe(false);
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
