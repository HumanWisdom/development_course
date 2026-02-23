import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SurveyPage } from './survey.page';
import { CommonService } from '../../services/common.service';
import { Platform } from '@angular/cdk/platform';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { Subject, of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('SurveyPage', () => {
  let component: SurveyPage;
  let fixture: ComponentFixture<SurveyPage>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let surveySubject: Subject<string | null>;
  let mockPlatform: { IOS?: boolean; SAFARI?: boolean; ANDROID?: boolean };
  let originalProgramId: PropertyDescriptor | undefined;

  const sampleFeedbackList = [
    { OptionID: 1, OptionStr: 'Option A', display_text: 'Tell us more' },
    { OptionID: 2, OptionStr: 'Option B', display_text: '' }
  ];

  beforeEach(async () => {
    surveySubject = new Subject<string | null>();

    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    Object.defineProperty(SharedService, 'ProgramId', {
      value: ProgramType.Adults,
      writable: true,
      configurable: true
    });

    mockCommonService = jasmine.createSpyObj('CommonService', [
      'getSurveyList',
      'AddSurveyRes',
      'SkipFeedBkSurvey'
    ]);
    mockCommonService.getSurveyList.and.returnValue(of(sampleFeedbackList));
    mockCommonService.AddSurveyRes.and.returnValue(of({ success: true }));
    mockCommonService.SkipFeedBkSurvey.and.returnValue(of({}));
    Object.defineProperty(mockCommonService, 'surveySubs', {
      get: () => surveySubject.asObservable(),
      configurable: true
    });

    mockPlatform = { IOS: false, SAFARI: false, ANDROID: false };

    localStorage.setItem('name', 'TestUser');

    await TestBed.configureTestingModule({
      declarations: [SurveyPage],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: CommonService, useValue: mockCommonService },
        { provide: Platform, useValue: mockPlatform }
      ]
    }).compileComponents();

    const test1Btn = document.createElement('button');
    test1Btn.id = 'test1';
    test1Btn.click = jasmine.createSpy('test1.click');
    document.body.appendChild(test1Btn);

    fixture = TestBed.createComponent(SurveyPage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    if (originalProgramId) {
      Object.defineProperty(SharedService, 'ProgramId', originalProgramId);
    }
    document.getElementById('test1')?.remove();
    document.getElementById('btnSurveyDismiss')?.remove();
    localStorage.clear();
  });

  describe('component creation and constructor', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should set userName from localStorage', () => {
      expect(component.userName).toBe('TestUser');
    });

    it('should set isAdults to true when ProgramId is Adults', () => {
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        value: ProgramType.Teenagers,
        writable: true,
        configurable: true
      });
      fixture = TestBed.createComponent(SurveyPage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });

    it('should set initial state', () => {
      expect(component.feedbackList).toEqual([]);
      expect(component.selectedText).toBe('');
      expect(component.reason).toBe('');
      expect(component.selectedId).toBe(0);
      expect(component.isSubmitted).toBe(false);
      expect(component.showModal).toBe(false);
      expect(component.isPaymentSurvey).toBe(false);
    });
  });

  describe('surveySubs subscription', () => {
    it('should call getSurveyList with "1" when surveySubs emits null', fakeAsync(() => {
      surveySubject.next(null);
      tick();
      expect(mockCommonService.getSurveyList).toHaveBeenCalledWith('1' as any);
      expect(component.feedbackList).toEqual(sampleFeedbackList);
      expect(component.isPaymentSurvey).toBe(false);
    }));

    it('should call getSurveyList with emitted value and set isPaymentSurvey when data is "2"', fakeAsync(() => {
      surveySubject.next('2');
      tick();
      expect(mockCommonService.getSurveyList).toHaveBeenCalledWith('2' as any);
      expect(component.feedbackList).toEqual(sampleFeedbackList);
      expect(component.isPaymentSurvey).toBe(true);
    }));

    it('should set showModal and trigger test1 click when data is not null', fakeAsync(() => {
      const test1 = document.getElementById('test1') as HTMLButtonElement;
      surveySubject.next('1');
      tick();
      expect(component.showModal).toBe(true);
      expect(test1.click).toHaveBeenCalled();
    }));

    it('should not set showModal when getSurveyList returns falsy', fakeAsync(() => {
      mockCommonService.getSurveyList.and.returnValue(of(null));
      surveySubject.next('1');
      tick();
      expect(component.showModal).toBe(false);
    }));
  });

  describe('getUserName', () => {
    it('should return name from localStorage', () => {
      expect(component.getUserName()).toBe('TestUser');
    });

    it('should return null when name not in localStorage', () => {
      localStorage.removeItem('name');
      expect(component.getUserName()).toBeNull();
    });
  });

  describe('onSelectionChange', () => {
    it('should set selectedText, selectedId and clear reason', () => {
      component.reason = 'some reason';
      component.onSelectionChange('Option A', 10);
      expect(component.selectedText).toBe('Option A');
      expect(component.selectedId).toBe(10);
      expect(component.reason).toBe('');
    });
  });

  describe('onCloseClick', () => {
    it('should call closeModal', () => {
      spyOn(component, 'closeModal');
      component.onCloseClick();
      expect(component.closeModal).toHaveBeenCalled();
    });
  });

  describe('onBackdropClick', () => {
    it('should call closeModal when click is not on modal content', () => {
      spyOn(component, 'closeModal');
      const target = document.createElement('div');
      spyOn(target, 'closest').and.returnValue(null);
      const event = new MouseEvent('click', { bubbles: true });
      Object.defineProperty(event, 'target', { value: target, configurable: true });
      component.onBackdropClick(event);
      expect(component.closeModal).toHaveBeenCalled();
    });

    it('should not call closeModal when click is on modal content', () => {
      spyOn(component, 'closeModal');
      const target = document.createElement('div');
      target.className = 'lab-modal-body_new';
      spyOn(target, 'closest').and.callFake((sel: string) =>
        sel === '.lab-modal-body_new' ? target : null
      );
      const event = new MouseEvent('click', { bubbles: true });
      Object.defineProperty(event, 'target', { value: target, configurable: true });
      component.onBackdropClick(event);
      expect(component.closeModal).not.toHaveBeenCalled();
    });
  });

  describe('closeModal', () => {
    it('should set showModal and isSubmitted to false', () => {
      component.showModal = true;
      component.isSubmitted = true;
      component.closeModal();
      expect(component.showModal).toBe(false);
      expect(component.isSubmitted).toBe(false);
    });

    it('should click btnSurveyDismiss if present', () => {
      const dismissBtn = document.createElement('button');
      dismissBtn.id = 'btnSurveyDismiss';
      dismissBtn.click = jasmine.createSpy('dismiss.click');
      document.body.appendChild(dismissBtn);
      component.closeModal();
      expect(dismissBtn.click).toHaveBeenCalled();
      dismissBtn.remove();
    });

    it('should call SkipFeedBkSurvey when not isPaymentSurvey', fakeAsync(() => {
      component.isPaymentSurvey = false;
      component.closeModal();
      tick();
      expect(mockCommonService.SkipFeedBkSurvey).toHaveBeenCalled();
    }));

    it('should not call SkipFeedBkSurvey when isPaymentSurvey', fakeAsync(() => {
      component.isPaymentSurvey = true;
      component.closeModal();
      tick();
      expect(mockCommonService.SkipFeedBkSurvey).not.toHaveBeenCalled();
    }));
  });

  describe('submitSurvey', () => {
    it('should call AddSurveyRes with selectedId and reason and set isSubmitted on success', fakeAsync(() => {
      component.selectedId = 5;
      component.reason = 'my feedback';
      component.submitSurvey();
      tick();
      expect(mockCommonService.AddSurveyRes).toHaveBeenCalledWith({
        OptionID: 5,
        OptionStr: 'my feedback'
      });
      expect(component.isSubmitted).toBe(true);
    }));

    it('should not set isSubmitted when AddSurveyRes returns falsy', fakeAsync(() => {
      mockCommonService.AddSurveyRes.and.returnValue(of(null));
      component.selectedId = 1;
      component.submitSurvey();
      tick();
      expect(component.isSubmitted).toBe(false);
    }));
  });

  describe('GoToAppStore', () => {
    it('should call closeModal', () => {
      spyOn(component, 'closeModal');
      component.GoToAppStore();
      expect(component.closeModal).toHaveBeenCalled();
    });
  });

  describe('clickbanner', () => {
    it('should open play store when not Safari and not IOS', () => {
      spyOn(component, 'isNotSafari').and.returnValue(true);
      spyOn(window, 'open');
      mockPlatform.IOS = false;
      mockPlatform.SAFARI = false;
      component.clickbanner();
      expect(window.open).toHaveBeenCalledWith('https://play.google.com/store/apps/details?id=io.humanwisdom.me');
    });

    it('should open app store when platform is IOS', () => {
      spyOn(component, 'isNotSafari').and.returnValue(false);
      mockPlatform.IOS = true;
      spyOn(window, 'open');
      component.clickbanner();
      expect(window.open).toHaveBeenCalledWith('https://apps.apple.com/in/app/humanwisdom/id1588535567');
    });

    it('should open app store when platform is SAFARI', () => {
      spyOn(component, 'isNotSafari').and.returnValue(false);
      mockPlatform.SAFARI = true;
      spyOn(window, 'open');
      component.clickbanner();
      expect(window.open).toHaveBeenCalledWith('https://apps.apple.com/in/app/humanwisdom/id1588535567');
    });

    it('should open play store when platform is ANDROID', () => {
      spyOn(component, 'isNotSafari').and.returnValue(false);
      mockPlatform.ANDROID = true;
      spyOn(window, 'open');
      component.clickbanner();
      expect(window.open).toHaveBeenCalledWith('https://play.google.com/store/apps/details?id=io.humanwisdom.me');
    });
  });

  describe('iOSMobile', () => {
    it('should return true when navigator.platform is iPhone', () => {
      Object.defineProperty(navigator, 'platform', {
        value: 'iPhone',
        configurable: true
      });
      expect(component.iOSMobile()).toBe(true);
    });

    it('should return false when navigator.platform is Windows', () => {
      Object.defineProperty(navigator, 'platform', {
        value: 'Win32',
        configurable: true
      });
      expect(component.iOSMobile()).toBe(false);
    });
  });

  describe('isNotSafari', () => {
    it('should return false when userAgent is Safari and not Chrome', () => {
      Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15',
        configurable: true
      });
      expect(component.isNotSafari()).toBe(false);
    });

    it('should return true when userAgent contains Chrome', () => {
      Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/91.0 Safari/537.36',
        configurable: true
      });
      expect(component.isNotSafari()).toBe(true);
    });
  });

  describe('ngOnDestroy', () => {
    it('should unsubscribe from surveySubs', () => {
      const subSpy = jasmine.createSpy('unsubscribe');
      (component as any).subscription = { unsubscribe: subSpy };
      component.ngOnDestroy();
      expect(subSpy).toHaveBeenCalled();
    });
  });

  describe('closeModalevent', () => {
    it('should be callable without error', () => {
      expect(() => component.closeModalevent()).not.toThrow();
    });
  });
});
