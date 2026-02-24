import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JournalWeComponent } from './journal-we.component';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('JournalWeComponent', () => {
  let component: JournalWeComponent;
  let fixture: ComponentFixture<JournalWeComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockAdultsService: jasmine.SpyObj<AdultsService>;
  let originalProgramId: PropertyDescriptor | undefined;

  const mockQrList = {
    ListOfReflection: [
      { ReflectionId: 854, Que: 'Updated question from qrList' },
      { ReflectionId: 100, Que: 'Another question' }
    ]
  };

  beforeEach(() => {
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    Object.defineProperty(SharedService, 'ProgramId', {
      value: ProgramType.Adults,
      writable: true,
      configurable: true
    });

    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
    Object.defineProperty(mockRouter, 'url', { value: '/adults/some-path', configurable: true });
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    mockAdultsService = jasmine.createSpyObj('AdultsService', ['submitProgressReflection']);
    mockAdultsService.submitProgressReflection.and.returnValue(of({}));

    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem('qrList', JSON.stringify(mockQrList));
    localStorage.setItem('guest', 'F');
    sessionStorage.setItem('userId', JSON.stringify(99));

    TestBed.configureTestingModule({
      declarations: [JournalWeComponent],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: AdultsService, useValue: mockAdultsService }
      ]
    });

    fixture = TestBed.createComponent(JournalWeComponent);
    component = fixture.componentInstance;
    component.journalques = 'Default question';
    component.rId = 854;
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

    it('should set isAdults true when ProgramId is Adults', () => {
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults false when ProgramId is Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        value: ProgramType.Teenagers,
        writable: true,
        configurable: true
      });
      fixture = TestBed.createComponent(JournalWeComponent);
      component = fixture.componentInstance;
      component.rId = 854;
      fixture.detectChanges();
      expect(component.isAdults).toBe(false);
    });
  });

  describe('ngOnInit', () => {
    it('should set isGuest from localStorage guest', () => {
      expect(component.isGuest).toBe(false);
    });

    it('should set userId from sessionStorage', () => {
      expect(component.userId).toBe(99);
    });

    it('should emit loaded', () => {
      let emitted = false;
      fixture = TestBed.createComponent(JournalWeComponent);
      component = fixture.componentInstance;
      component.loaded.subscribe(() => (emitted = true));
      component.rId = 854;
      fixture.detectChanges();
      expect(emitted).toBe(true);
    });

    it('should set enabletickValue false when url includes wisdom-exercise', () => {
      Object.defineProperty(mockRouter, 'url', { value: '/adults/wisdom-exercise/s123', configurable: true });
      fixture = TestBed.createComponent(JournalWeComponent);
      component = fixture.componentInstance;
      component.rId = 854;
      fixture.detectChanges();
      expect(component.enabletickValue).toBe(false);
    });
  });

  describe('findReflection', () => {
    it('should set journalques from qrList when rId matches ReflectionId', () => {
      expect(component.journalques).toBe('Updated question from qrList');
    });
  });

  describe('addjournal', () => {
    it('when guest should emit guestEvent', () => {
      localStorage.setItem('guest', 'T');
      fixture = TestBed.createComponent(JournalWeComponent);
      component = fixture.componentInstance;
      component.rId = 854;
      component.userId = 99;
      fixture.detectChanges();
      spyOn(component.guestEvent, 'emit');
      component.addjournal();
      expect(component.guestEvent.emit).toHaveBeenCalledWith(true);
    });

    it('when not guest and not enabletick should call submitProgressReflection and on success set enabletick and btnText', () => {
      component.note = 'My reflection';
      component.addjournal();
      expect(mockAdultsService.submitProgressReflection).toHaveBeenCalled();
      const callArg = (mockAdultsService.submitProgressReflection as jasmine.Spy).calls.mostRecent().args[0];
      expect(callArg.ReflectionId).toBe(854);
      expect(callArg.Resp).toBe('My reflection');
      expect(callArg.UserId).toBe(99);
      expect(component.enabletick).toBe(true);
      expect(component.btnText).toBe('Added to journal');
    });

    it('when enabletick already true should not call submitProgressReflection', () => {
      component.enabletick = true;
      component.addjournal();
      expect(mockAdultsService.submitProgressReflection).not.toHaveBeenCalled();
    });
  });

  describe('getAlertcloseEvent', () => {
    it('when event is ok should set enableAlert false and navigate to login', () => {
      component.enableAlert = true;
      component.getAlertcloseEvent('ok');
      expect(component.enableAlert).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/onboarding/login'], {
        replaceUrl: true,
        skipLocationChange: true
      });
    });

    it('when event is not ok should only set enableAlert false', () => {
      component.enableAlert = true;
      component.getAlertcloseEvent('cancel');
      expect(component.enableAlert).toBe(false);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });
  });

  describe('addZero', () => {
    it('should pad number less than 10 with zero', () => {
      expect(component.addZero(5)).toBe('05');
    });

    it('should not pad number 10 or greater', () => {
      expect(component.addZero(10)).toBe(10);
    });
  });

  describe('routejournel', () => {
    it('when isAdults should navigate to adults journal', () => {
      component.isAdults = true;
      component.routejournel();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/journal']);
    });

    it('when not isAdults should navigate to teenagers journal', () => {
      component.isAdults = false;
      component.routejournel();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/journal']);
    });
  });
});
