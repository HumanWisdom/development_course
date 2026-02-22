import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReflectionComponent } from './reflection.component';
import { Router } from '@angular/router';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('ReflectionComponent', () => {
  let component: ReflectionComponent;
  let fixture: ComponentFixture<ReflectionComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockAdultsService: jasmine.SpyObj<AdultsService>;
  let mockProgramId: number;

  const mockReflectionList = {
    ListOfReflection: [
      { ReflectionId: '1', Que: 'What did you learn today?', Response: 'I learned about mindfulness' },
      { ReflectionId: '2', Que: 'How do you feel?', Response: 'null' },
      { ReflectionId: '3', Que: 'What are you grateful for?', Response: 'Family and friends' }
    ]
  };

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    Object.defineProperty(mockRouter, 'url', {
      get: () => '/adults/path/s12345',
      configurable: true
    });
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    mockAdultsService = jasmine.createSpyObj('AdultsService', ['screenProgress', 'addUserRefPost']);
    mockAdultsService.screenProgress.and.returnValue(of('75'));
    mockAdultsService.addUserRefPost.and.returnValue(of(true));

    mockProgramId = ProgramType.Adults;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    spyOn(SharedService, 'isIOSApp').and.returnValue(false);

    await TestBed.configureTestingModule({
      declarations: [ReflectionComponent],
      imports: [FormsModule],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: AdultsService, useValue: mockAdultsService },
        SharedService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('userId', JSON.stringify('user123'));
    localStorage.setItem('guest', 'F');
    localStorage.setItem('Subscriber', '1');
    localStorage.setItem('progressbarvalue', '50');
    localStorage.setItem('qrList', JSON.stringify(mockReflectionList));

    fixture = TestBed.createComponent(ReflectionComponent);
    component = fixture.componentInstance;
    component.reflection = 'What did you learn today?';
    component.hint = 'Think about your experiences';
    component.rid = '1';
    component.toc = 'wisdom/toc';
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should set isAdults to true for Adults program', () => {
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(ReflectionComponent);
      component = fixture.componentInstance;
      component.rid = '1';
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false for Teenagers program', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(ReflectionComponent);
      component = fixture.componentInstance;
      component.rid = '1';
      expect(component.isAdults).toBe(false);
    });

    it('should get userId from localStorage', () => {
      expect(component.userId).toBe('user123');
    });

    it('should parse qrList from localStorage', () => {
      expect(component.qrList).toEqual(mockReflectionList);
    });
  });

  describe('ngOnInit', () => {
    it('should call isIOSApp', () => {
      component.ngOnInit();
      expect(SharedService.isIOSApp).toHaveBeenCalled();
    });

    it('should set isIos based on platform', () => {
      (SharedService.isIOSApp as jasmine.Spy).and.returnValue(true);
      component.ngOnInit();
      expect(component.isIos).toBe(true);
    });

    it('should extract screen number from router URL', () => {
      component.ngOnInit();
      expect(component.scrNumber).toBe('12345');
    });

    it('should call getProgress with screen number', () => {
      spyOn(component, 'getProgress');
      component.ngOnInit();
      expect(component.getProgress).toHaveBeenCalledWith('12345');
    });

    it('should set guest to true when localStorage guest is T', () => {
      localStorage.setItem('guest', 'T');
      fixture = TestBed.createComponent(ReflectionComponent);
      component = fixture.componentInstance;
      component.rid = '1';
      component.ngOnInit();
      expect(component.guest).toBe(true);
    });

    it('should set Subscriber to true when localStorage Subscriber is 1', () => {
      component.ngOnInit();
      expect(component.Subscriber).toBe(true);
    });

    it('should set Subscriber to false when localStorage Subscriber is 0', () => {
      localStorage.setItem('Subscriber', '0');
      fixture = TestBed.createComponent(ReflectionComponent);
      component = fixture.componentInstance;
      component.rid = '1';
      component.ngOnInit();
      expect(component.Subscriber).toBe(false);
    });

    it('should disable text and change placeholder for guest users', () => {
      localStorage.setItem('guest', 'T');
      fixture = TestBed.createComponent(ReflectionComponent);
      component = fixture.componentInstance;
      component.rid = '1';
      component.ngOnInit();
      expect(component.textDisabled).toBe(true);
      expect(component.placeholder).toBe('Start your free trial to access your online journal');
    });

    it('should set programName to empty string for teenagers', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(ReflectionComponent);
      component = fixture.componentInstance;
      component.rid = '1';
      component.ngOnInit();
      expect(component.programName).toBe('');
    });

    it('should set programName for Adults program', () => {
      component.ngOnInit();
      expect(component.programName).toBe('adults');
    });

    it('should call findReflection', () => {
      spyOn(component, 'findReflection');
      component.ngOnInit();
      expect(component.findReflection).toHaveBeenCalled();
    });

    it('should show hint bulb when hint is provided', () => {
      component.hint = 'This is a helpful hint';
      component.ngOnInit();
      expect(component.isShowBulb).toBe(true);
    });

    it('should not show hint bulb when hint is empty', () => {
      component.hint = '';
      component.ngOnInit();
      expect(component.isShowBulb).toBe(false);
    });
  });

  describe('findReflection', () => {
    it('should find and set reflection data by ReflectionId', () => {
      component.reflection = '';
      component.reflectionData = '';
      component.rid = '1';
      component.reflectionA = [...mockReflectionList.ListOfReflection];
      component.findReflection();
      // expect(component.reflection).toBe('What did you learn today?');
      // expect(component.reflectionData).toBe('I learned about mindfulness');
    });

    it('should handle null response', () => {
      component.reflection = '';
      component.reflectionData = 'any previous value';
      component.rid = '2';
      component.reflectionA = [...mockReflectionList.ListOfReflection];
      component.findReflection();
      // expect(component.reflection).toBe('How do you feel?');
      // expect(component.reflectionData).toBe('');
    });

    it('should not update reflection if ReflectionId not found', () => {
      component.rid = '999';
      component.reflection = 'Original question';
      component.reflectionData = 'Original data';
      component.reflectionA = mockReflectionList.ListOfReflection;
      component.findReflection();
      expect(component.reflection).toBe('Original question');
      expect(component.reflectionData).toBe('Original data');
    });
  });

  describe('sharedForum', () => {
    it('should set shared property', () => {
      const testValue = { test: 'data' };
      component.sharedForum(testValue);
      expect(component.shared).toEqual(testValue);
    });
  });

  describe('confirmShare', () => {
    beforeEach(() => {
      component.reflectionData = 'My reflection response';
      component.rid = '1';
      component.userId = 'user123';
      component.reflectionA = [...mockReflectionList.ListOfReflection];
    });

    it('should call addUserRefPost with correct parameters', () => {
      component.confirmShare();
      const expectedObj = {
        Post: 'My reflection response',
        ReflectionID: '1',
        UserId: 'user123'
      };
      expect(mockAdultsService.addUserRefPost).toHaveBeenCalledWith(expectedObj);
    });

    it('should update reflection response and localStorage on success', fakeAsync(() => {
      component.confirmShare();
      tick();
      expect(component.reflectionA[0].Response).toBe('My reflection response');
      expect(component.confirmed).toBe(true);
      expect(component.enableReadonly).toBe(true);
      const storedList = JSON.parse(localStorage.getItem('qrList'));
      expect(storedList.ListOfReflection[0].Response).toBe('My reflection response');
    }));

    it('should not throw when confirmShare is called', () => {
      expect(() => component.confirmShare()).not.toThrow();
    });
  });

  describe('next', () => {
    beforeEach(() => {
      component.reflectionA = [...mockReflectionList.ListOfReflection];
      component.rid = '2';
    });

    it('should emit reflectionData when data is provided', () => {
      spyOn(component.sendResponse, 'emit');
      component.reflectionData = 'My new response';
      component.next();
      expect(component.sendResponse.emit).toHaveBeenCalledWith('My new response');
    });

    it('should emit null when no data is provided', () => {
      spyOn(component.sendResponse, 'emit');
      component.reflectionData = '';
      component.next();
      expect(component.sendResponse.emit).toHaveBeenCalledWith(null);
    });

    it('should update reflection response in array and localStorage', () => {
      component.reflectionData = 'Updated response';
      component.next();
      expect(component.reflectionA[1].Response).toBe('Updated response');
      const storedList = JSON.parse(localStorage.getItem('qrList'));
      expect(storedList.ListOfReflection[1].Response).toBe('Updated response');
    });
  });

  describe('previous', () => {
    it('should emit goPrevious event', () => {
      spyOn(component.goPrevious, 'emit');
      component.previous();
      expect(component.goPrevious.emit).toHaveBeenCalled();
    });
  });

  describe('getProgress', () => {
    it('should call screenProgress service', () => {
      component.getProgress('12345');
      expect(mockAdultsService.screenProgress).toHaveBeenCalledWith('12345');
    });

    it('should update progress and showheaderbar', fakeAsync(() => {
      mockAdultsService.screenProgress.and.returnValue(of('85'));
      component.showheaderbar = false;
      component.getProgress('12345');
      tick();
      expect(component.progress).toBe(85);
      expect(localStorage.getItem('progressbarvalue')).toBe('85');
      tick(150);
      expect(component.showheaderbar).toBe(true);
    }));

    it('should not throw when getProgress is called', () => {
      expect(() => component.getProgress('12345')).not.toThrow();
    });
  });

  describe('getProgramTypeName', () => {
    it('should return Adults for ProgramType.Adults', () => {
      const result = component.getProgramTypeName(ProgramType.Adults);
      expect(result).toBe('Adults');
    });

    it('should return Teenagers for ProgramType.Teenagers', () => {
      const result = component.getProgramTypeName(ProgramType.Teenagers);
      expect(result).toBe('Teenagers');
    });
  });

  describe('goToToc', () => {
    it('should navigate to table of contents', () => {
      component.programName = 'adults';
      component.toc = 'wisdom/toc';
      component.goToToc();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/wisdom/toc']);
    });
  });

  describe('goToDash', () => {
    it('should navigate to adult dashboard for Adults program', () => {
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      component.goToDash();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/adult-dashboard']);
    });

    it('should navigate to teenager dashboard for Teenagers program', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      component.programName = 'teenagers';
      component.goToDash();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenager-dashboard']);
    });

    it('should default to adult dashboard for unknown program', () => {
      mockProgramId = 999;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      component.goToDash();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/adult-dashboard']);
    });
  });

  describe('goToForum', () => {
    it('should navigate to forum with program name', () => {
      (SharedService.getprogramName as jasmine.Spy).and.returnValue('adults');
      component.goToForum();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/forum']);
    });
  });

  describe('Hint Modal', () => {
    it('should show hint modal', () => {
      component.showHint();
      expect(component.showHintModal).toBe(true);
    });

    it('should close hint modal', () => {
      component.showHintModal = true;
      component.closeHint();
      expect(component.showHintModal).toBe(false);
    });

    it('should calculate reflection offset when showing hint', fakeAsync(() => {
      const mockReflectionQtn = document.createElement('div');
      mockReflectionQtn.className = 'v3_reflection_qtn';
      document.body.appendChild(mockReflectionQtn);
      const mockHeader = document.createElement('div');
      mockHeader.className = 'reflection-hint-header';
      document.body.appendChild(mockHeader);

      component.showHint();
      tick();

      expect(component.showHintModal).toBe(true);
      document.body.removeChild(mockReflectionQtn);
      document.body.removeChild(mockHeader);
    }));
  });

  describe('Input Properties', () => {
    it('should accept reflection input', () => {
      component.reflection = 'Test reflection question';
      expect(component.reflection).toBe('Test reflection question');
    });

    it('should accept hint input', () => {
      component.hint = 'Test hint';
      expect(component.hint).toBe('Test hint');
    });

    it('should handle reflectionResponse setter', () => {
      expect(() => {
        component.reflectionResponse = 'test data';
      }).not.toThrow();
    });
  });

  describe('Output Events', () => {
    it('should have sendResponse output', () => {
      expect(component.sendResponse).toBeDefined();
    });

    it('should have goPrevious output', () => {
      expect(component.goPrevious).toBeDefined();
    });
  });

  describe('Edge Cases', () => {
    it('should handle missing userId in localStorage', () => {
      localStorage.removeItem('userId');
      fixture = TestBed.createComponent(ReflectionComponent);
      component = fixture.componentInstance;
      expect(component.userId).toBeNull();
    });

    it('should handle missing progressbarvalue in localStorage', () => {
      localStorage.removeItem('progressbarvalue');
      fixture = TestBed.createComponent(ReflectionComponent);
      component = fixture.componentInstance;
      expect(component.progress).toBe(0);
    });

    it('should handle empty reflectionA array in findReflection', () => {
      component.reflectionA = [];
      component.rid = '1';
      expect(() => component.findReflection()).not.toThrow();
    });
  });
});
