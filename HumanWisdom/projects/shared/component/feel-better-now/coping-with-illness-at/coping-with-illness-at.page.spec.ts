import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CopingWithIllnessAtPage } from './coping-with-illness-at.page';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../shared/services/navigation.service';
import { SharedService } from '../../../../shared/services/shared.service';
import { ProgramType } from '../../../../shared/models/program-model';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CopingWithIllnessAtPage', () => {
  let component: CopingWithIllnessAtPage;
  let fixture: ComponentFixture<CopingWithIllnessAtPage>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
  let mockProgramId: any;

  beforeEach(async () => {
    mockLocation = jasmine.createSpyObj('Location', ['back']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);
    mockNavigationService.navigateToBackLink.and.returnValue(null);

    mockProgramId = ProgramType.Adults;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });

    await TestBed.configureTestingModule({
      declarations: [CopingWithIllnessAtPage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Location, useValue: mockLocation },
        { provide: Router, useValue: mockRouter },
        { provide: NavigationService, useValue: mockNavigationService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CopingWithIllnessAtPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set isAdults to true when ProgramId is Adults', () => {
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(CopingWithIllnessAtPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(CopingWithIllnessAtPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.isAdults).toBe(false);
    });

    it('should initialize with isShowTranscript false and isShowAudio true', () => {
      expect(component.isShowTranscript).toBe(false);
      expect(component.isShowAudio).toBe(true);
    });
  });

  describe('changeType', () => {
    it('should toggle to transcript view when currently showing audio', () => {
      component.isShowTranscript = false;
      component.isShowAudio = true;

      component.changeType();

      expect(component.isShowTranscript).toBe(true);
      expect(component.isShowAudio).toBe(false);
    });

    it('should toggle to audio view when currently showing transcript', () => {
      component.isShowTranscript = true;
      component.isShowAudio = false;

      component.changeType();

      expect(component.isShowTranscript).toBe(false);
      expect(component.isShowAudio).toBe(true);
    });
  });

  describe('goBack', () => {
    it('should navigate to back link when navigateToBackLink returns a url', () => {
      mockNavigationService.navigateToBackLink.and.returnValue('/some-back-url');

      component.goBack();

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/some-back-url']);
    });

    it('should call defaultGoBack when navigateToBackLink returns null', () => {
      mockNavigationService.navigateToBackLink.and.returnValue(null);

      component.goBack();

      expect(mockRouter.navigate).toHaveBeenCalled();
    });
  });

  describe('defaultGoBack', () => {
    it('should navigate to feel-better-now route based on current url', () => {
      component.defaultGoBack();

      expect(mockRouter.navigate).toHaveBeenCalled();
      const navArgs = mockRouter.navigate.calls.mostRecent().args[0];
      expect(
        navArgs[0] === '/adults/feel-better-now' || navArgs[0] === '/teenagers/feel-better-now'
      ).toBe(true);
    });
  });
});
