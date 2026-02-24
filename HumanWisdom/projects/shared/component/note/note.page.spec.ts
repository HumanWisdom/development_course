import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotePage } from './note.page';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CommonService } from '../../services/common.service';
import { LogEventService } from '../../services/log-event.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('NotePage', () => {
  let component: NotePage;
  let fixture: ComponentFixture<NotePage>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: any;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockLogEventService: jasmine.SpyObj<LogEventService>;
  let originalProgramId: PropertyDescriptor | undefined;

  beforeEach(() => {
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    Object.defineProperty(SharedService, 'ProgramId', {
      value: ProgramType.Adults,
      writable: true,
      configurable: true
    });

    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.callFake((key: string) => {
            const params: Record<string, string> = {
              jNotes: '',
              jId: '0',
              title: '',
              type: 'note',
              pId: '',
              mId: ''
            };
            return params[key] ?? null;
          })
        }
      }
    };

    mockLocation = jasmine.createSpyObj('Location', ['back']);
    mockCommonService = jasmine.createSpyObj('CommonService', [
      'submitJournal',
      'addReflection',
      'addDailyQuestion'
    ]);
    mockCommonService.submitJournal.and.returnValue(of({}));
    mockCommonService.addReflection.and.returnValue(of({}));
    mockCommonService.addDailyQuestion.and.returnValue(of({}));

    mockLogEventService = jasmine.createSpyObj('LogEventService', ['logEvent']);
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');

    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem('saveUsername', 'false');
    sessionStorage.setItem('userId', JSON.stringify(42));

    TestBed.configureTestingModule({
      declarations: [NotePage],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Location, useValue: mockLocation },
        { provide: CommonService, useValue: mockCommonService },
        { provide: LogEventService, useValue: mockLogEventService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NotePage);
    component = fixture.componentInstance;
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

    it('should set isAdults to true when ProgramId is Adults', () => {
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        value: ProgramType.Teenagers,
        writable: true,
        configurable: true
      });
      fixture = TestBed.createComponent(NotePage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });
  });

  describe('ngOnInit', () => {
    it('should set userId from sessionStorage when saveUsername is false', () => {
      sessionStorage.setItem('userId', JSON.stringify(99));
      component.ngOnInit();
      expect(component.userId).toBe(99);
    });

    it('should set userId from localStorage when saveUsername is true', () => {
      localStorage.setItem('saveUsername', 'true');
      localStorage.setItem('userId', JSON.stringify(100));
      fixture = TestBed.createComponent(NotePage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.userId).toBe(100);
    });

    it('should set url params from route', () => {
      component.ngOnInit();
      expect(component.urlNotes).toBe('');
      expect(component.urlId).toBe('0');
      expect(component.urlTitle).toBe('');
      expect(component.urlType).toBe('note');
    });

    it('should set notes, title, id and readOnly when urlId is not 0', () => {
      mockActivatedRoute.snapshot.paramMap.get.and.callFake((key: string) => {
        const params: Record<string, string> = {
          jNotes: 'My note text',
          jId: '5',
          title: 'My Title',
          type: 'Diary',
          pId: '',
          mId: ''
        };
        return params[key] ?? null;
      });
      fixture = TestBed.createComponent(NotePage);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(component.notes).toBe('My note text');
      expect(component.oldnotes).toBe('My note text');
      expect(component.title).toBe('My Title');
      expect((component as any).id).toBe('5');
      expect(component.readOnly).toBe(true);
    });
  });

  describe('save', () => {
    it('should set enableAlert to true', () => {
      component.save();
      expect(component.enableAlert).toBe(true);
    });
  });

  describe('doNotSave', () => {
    it('should set isSave to false', () => {
      component.isSave = true;
      component.doNotSave();
      expect(component.isSave).toBe(false);
    });
  });

  describe('submitProgress', () => {
    it('should call addNote when urlId is 0', () => {
      component.urlId = '0';
      component.urlType = 'other';
      component.title = 'T';
      component.notes = 'N';
      component.userId = 1;
      component.submitProgress();
      expect(mockCommonService.submitJournal).toHaveBeenCalledWith(
        jasmine.objectContaining({
          JournalId: 0,
          Title: 'T',
          Notes: 'N',
          UserId: 1
        })
      );
      expect(component.enableAlert).toBe(false);
      expect(component.isSave).toBe(false);
    });

    it('should call editJournal when urlType is Diary', () => {
      component.urlId = '10';
      component.urlType = 'Diary';
      component.title = 'T';
      component.notes = 'N';
      component.userId = 1;
      component.submitProgress();
      expect(mockCommonService.submitJournal).toHaveBeenCalledWith(
        jasmine.objectContaining({
          JournalId: '10',
          Notes: 'N',
          UserId: 1
        })
      );
    });

    it('should call editReflection when urlType is Reflections', () => {
      component.urlId = '7';
      component.urlType = 'Reflections';
      component.notes = 'Reflection text';
      component.userId = 1;
      component.submitProgress();
      expect(mockCommonService.addReflection).toHaveBeenCalledWith({
        SubscriberID: 1,
        ReflectionId: '7',
        Resp: 'Reflection text'
      });
    });

    it('should call editDq when urlType is dq', () => {
      component.urlId = '3';
      component.urlType = 'dq';
      component.notes = 'DQ response';
      component.userId = 1;
      component.submitProgress();
      expect(mockCommonService.addDailyQuestion).toHaveBeenCalledWith({
        SubscriberID: 1,
        ReflectionId: '3',
        Resp: 'DQ response'
      });
    });

    it('should set enableSuccessAlert on submitJournal complete', () => {
      component.urlId = '0';
      component.urlType = 'x';
      component.title = 'T';
      component.notes = 'N';
      component.userId = 1;
      component.submitProgress();
      expect(component.enableSuccessAlert).toBe(true);
    });
  });

  describe('continue', () => {
    it('should set enableSuccessAlert and isSave false and navigate to journal', () => {
      component.enableSuccessAlert = true;
      component.isSave = true;
      component.continue();
      expect(component.enableSuccessAlert).toBe(false);
      expect(component.isSave).toBe(false);
      expect(SharedService.getprogramName).toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/journal']);
    });
  });

  describe('addZero', () => {
    it('should pad single digit with zero', () => {
      expect(component.addZero(5)).toBe('05');
      expect(component.addZero(9)).toBe('09');
    });

    it('should not pad double digit', () => {
      expect(component.addZero(10)).toBe('10');
      expect(component.addZero(12)).toBe('12');
    });
  });

  describe('goBack', () => {
    it('should call location.back', () => {
      component.goBack();
      expect(mockLocation.back).toHaveBeenCalled();
    });
  });

  describe('dataChanged', () => {
    it('should set enableSave true when event differs from oldnotes after trim', () => {
      component.oldnotes = 'same';
      component.dataChanged('different');
      expect(component.enableSave).toBe(true);
    });

    it('should set enableSave false when event equals oldnotes after trim', () => {
      component.oldnotes = '  same  ';
      component.dataChanged('same');
      expect(component.enableSave).toBe(false);
    });
  });

  describe('Save', () => {
    it('should call submitProgress when event is ok', () => {
      spyOn(component, 'submitProgress');
      component.Save('ok');
      expect(component.submitProgress).toHaveBeenCalled();
    });

    it('should set enableAlert false when event is cancel', () => {
      component.enableAlert = true;
      component.Save('cancel');
      expect(component.enableAlert).toBe(false);
    });

    it('should set document.body.style.overflow to auto', () => {
      component.Save('ok');
      expect(document.body.style.overflow).toBe('auto');
    });
  });

  describe('save_continue', () => {
    it('should call continue when event is ok', () => {
      spyOn(component, 'continue');
      component.save_continue('ok');
      expect(component.continue).toHaveBeenCalled();
    });

    it('should set enableAlert false when event is cancel', () => {
      component.enableAlert = true;
      component.save_continue('cancel');
      expect(component.enableAlert).toBe(false);
    });
  });

  describe('closeAllModals', () => {
    it('should remove modal-open from body and clear overflow', () => {
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
      component.closeAllModals();
      expect(document.body.classList.contains('modal-open')).toBe(false);
      expect(document.body.style.overflow).toBe('');
    });

    it('should remove modal backdrops', () => {
      const backdrop = document.createElement('div');
      backdrop.className = 'modal-backdrop';
      document.body.appendChild(backdrop);
      component.closeAllModals();
      expect(document.body.querySelectorAll('.modal-backdrop').length).toBe(0);
    });
  });
});
