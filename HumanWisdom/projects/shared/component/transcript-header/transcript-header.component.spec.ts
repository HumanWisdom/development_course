import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranscriptHeaderComponent } from './transcript-header.component';
import { Router } from '@angular/router';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { Platform } from '@angular/cdk/platform';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { NavigationService } from '../../services/navigation.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('TranscriptHeaderComponent', () => {
  let component: TranscriptHeaderComponent;
  let fixture: ComponentFixture<TranscriptHeaderComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockAdultsService: jasmine.SpyObj<AdultsService>;
  let mockNgNavigatorShareService: jasmine.SpyObj<NgNavigatorShareService>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
  let originalProgramId: PropertyDescriptor | undefined;

  beforeEach(() => {
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    Object.defineProperty(SharedService, 'ProgramId', {
      value: ProgramType.Adults,
      writable: true,
      configurable: true
    });

    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    Object.defineProperty(mockRouter, 'url', {
      get: () => '/adults/guided-meditation/audiopage/s701',
      configurable: true
    });
    mockRouter.getCurrentNavigation = jasmine.createSpy().and.returnValue({
      extractedUrl: { queryParams: {} }
    });

    mockAdultsService = jasmine.createSpyObj('AdultsService', ['submitJournal', 'screenProgress']);
    mockAdultsService.submitJournal.and.returnValue(of({}));
    mockAdultsService.screenProgress.and.returnValue(of('75'));

    mockNgNavigatorShareService = jasmine.createSpyObj('NgNavigatorShareService', ['share']);
    mockNgNavigatorShareService.share.and.returnValue(Promise.resolve());

    mockNavigationService = jasmine.createSpyObj('NavigationService', ['getBackLink', 'navigateToBackLink']);
    mockNavigationService.getBackLink.and.stub();

    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem('saveUsername', JSON.stringify(false));
    localStorage.setItem('guest', 'F');
    localStorage.setItem('Subscriber', '1');
    localStorage.setItem('token', JSON.stringify('token123'));
    sessionStorage.setItem('userId', JSON.stringify(100));

    TestBed.configureTestingModule({
      declarations: [TranscriptHeaderComponent],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: AdultsService, useValue: mockAdultsService },
        { provide: Platform, useValue: { isBrowser: true } },
        { provide: NgNavigatorShareService, useValue: mockNgNavigatorShareService },
        { provide: NavigationService, useValue: mockNavigationService }
      ]
    });

    fixture = TestBed.createComponent(TranscriptHeaderComponent);
    component = fixture.componentInstance;
    component.path = '/adults/guided-meditation/audiopage/s701';
    component.toc = 'guided-meditation';
    component.audioPage = 'audiopage';
    component.progName = 'adults';
    component.bookmark = false;
    fixture.detectChanges();
  });

  afterEach(() => {
    if (originalProgramId) {
      Object.defineProperty(SharedService, 'ProgramId', originalProgramId);
    }
    localStorage.clear();
    sessionStorage.clear();
  });

  describe('component creation and constructor', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should set progUrl from router.url first segment', () => {
      expect(component.progUrl).toBe('/adults/');
    });

    it('should set guest from localStorage', () => {
      expect(component.guest).toBe(false);
    });

    it('should set Subscriber from localStorage', () => {
      expect(component.Subscriber).toBe(true);
    });
  });

  describe('ngOnInit', () => {
    it('should set address to router.url', () => {
      expect(component.address).toBe('/adults/guided-meditation/audiopage/s701');
    });

    it('should set isAdults from SharedService.ProgramId', () => {
      expect(component.isAdults).toBe(true);
    });

    it('should set scrNumber from path (digits only)', () => {
      expect(component.scrNumber).toBe('701');
    });

    it('should call getProgress with scrNumber', () => {
      expect(mockAdultsService.screenProgress).toHaveBeenCalledWith('701');
    });

    it('should set progress from screenProgress response', () => {
      expect(component.progress).toBe(75);
    });

    it('should set userId from sessionStorage when saveUsername is false', () => {
      expect(component.userId).toBe(100);
    });

    it('when guest or !Subscriber should set placeHolder to trial message', () => {
      localStorage.setItem('guest', 'T');
      fixture = TestBed.createComponent(TranscriptHeaderComponent);
      component = fixture.componentInstance;
      component.path = '/adults/s701';
      fixture.detectChanges();
      expect(component.placeHolder).toBe('Start your free trial to access your online journal');
    });

    it('when urlT present should set shared and socialShare true', () => {
      mockRouter.getCurrentNavigation = jasmine.createSpy().and.returnValue({
        extractedUrl: { queryParams: { t: 'shareToken' } }
      });
      fixture = TestBed.createComponent(TranscriptHeaderComponent);
      component = fixture.componentInstance;
      component.path = '/adults/s701';
      fixture.detectChanges();
      expect(component.shared).toBe(true);
      expect(component.socialShare).toBe(true);
    });
  });

  describe('addZero', () => {
    it('should pad number less than 10 with zero', () => {
      expect(component.addZero(5)).toBe('05');
    });

    it('should not pad number 10 or greater', () => {
      expect(component.addZero(12)).toBe(12);
    });
  });

  describe('toggleBookmark', () => {
    it('when guest or !Subscriber should set enableAlert true', () => {
      component.guest = true;
      component.toggleBookmark();
      expect(component.enableAlert).toBe(true);
    });

    it('when Subscriber should toggle bookmark and emit sendBookmark', () => {
      spyOn(component.sendBookmark, 'emit');
      component.bookmark = false;
      component.guest = false;
      component.Subscriber = true;
      component.toggleBookmark();
      expect(component.bookmark).toBe(true);
      expect(component.sendBookmark.emit).toHaveBeenCalledWith(true);
    });
  });

  describe('courseNote', () => {
    it('should navigate to coursenote with path', () => {
      component.path = '/adults/module/s701';
      component.courseNote();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/coursenote', { path: '/adults/module/s701' }]);
    });
  });

  describe('goToToc', () => {
    it('should call getBackLink and navigate to toc', () => {
      component.programName = 'adults';
      component.toc = 'guided-meditation';
      component.goToToc();
      expect(mockNavigationService.getBackLink).toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/guided-meditation']);
    });
  });

  describe('goToDash', () => {
    it('when progUrl is adults should navigate to adult-dashboard', () => {
      component.progUrl = '/adults/';
      component.programName = 'adults';
      component.goToDash();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/adult-dashboard']);
    });

    it('when programName is teenagers should navigate to teenager-dashboard', () => {
      component.progUrl = '/teenagers/';
      component.programName = 'teenagers';
      component.goToDash();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['teenagers/teenager-dashboard']);
    });
  });

  describe('goToAudio', () => {
    it('should navigate to audioPage with progNamePath', () => {
      component.progName = 'adults';
      component.audioPage = 'audiopage';
      component.goToAudio();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/audiopage']);
    });

    it('when urlT should include queryParams t', () => {
      component.urlT = 'shareToken';
      component.progName = 'adults';
      component.audioPage = 'audiopage';
      component.goToAudio();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/audiopage'], { queryParams: { t: 'shareToken' } });
    });

    it('when progName is teenagers should use root path', () => {
      component.progName = 'teenagers';
      component.audioPage = 'audiopage';
      component.goToAudio();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/audiopage']);
    });
  });

  describe('addNote', () => {
    it('should call submitJournal with note and userId', () => {
      component.note = 'My note';
      component.userId = 100;
      component.addNote();
      expect(mockAdultsService.submitJournal).toHaveBeenCalledWith(jasmine.objectContaining({
        Notes: 'My note',
        UserId: 100,
        Title: 'Module'
      }));
    });
  });

  describe('share', () => {
    it('should set path with token and call ngNavigatorShareService.share', () => {
      component.address = '/adults/s701';
      component.token = 'token123';
      component.share();
      expect(component.path).toContain('humanwisdom.me');
      expect(component.path).toContain('t=token123');
      expect(mockNgNavigatorShareService.share).toHaveBeenCalledWith(jasmine.objectContaining({
        title: 'HappierMe Program',
        text: 'Hey, check out the HappierMe Program'
      }));
    });
  });

  describe('addToken', () => {
    it('should set socialShare true and path with token', () => {
      component.address = '/adults/s701';
      component.token = 'tok';
      component.addToken();
      expect(component.socialShare).toBe(true);
      expect(component.path).toContain('t=tok');
    });
  });

  describe('getProgramTypeName', () => {
    it('should return enum key for ProgramId value', () => {
      expect(component.getProgramTypeName(ProgramType.Adults)).toBe('Adults');
      expect(component.getProgramTypeName(ProgramType.Teenagers)).toBe('Teenagers');
    });
  });

  describe('getAlertcloseEvent', () => {
    it('should set enableAlert false', () => {
      component.enableAlert = true;
      component.getAlertcloseEvent('cancel');
      expect(component.enableAlert).toBe(false);
    });

    it('when event ok and not guest and not Subscriber should navigate to add-to-cart', () => {
      component.guest = false;
      component.Subscriber = false;
      component.getAlertcloseEvent('ok');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/onboarding/add-to-cart']);
    });

    it('when event ok and guest should set subscribepage and navigate to login', () => {
      component.guest = true;
      component.getAlertcloseEvent('ok');
      expect(localStorage.getItem('subscribepage')).toBe('T');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/onboarding/login']);
    });
  });
});
