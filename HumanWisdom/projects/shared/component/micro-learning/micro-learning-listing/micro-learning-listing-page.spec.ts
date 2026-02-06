import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { MicroLearningListingPage } from './micro-learning-listing.page';
import { CommonService } from '../../../services/common.service';
import { SharedService } from "../../../services/shared.service";
import { ProgramType } from "../../../models/program-model";
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MicroLearningListingPage', () => {
  let component: MicroLearningListingPage;
  let fixture: ComponentFixture<MicroLearningListingPage>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let originalProgramId: any;

  const mockMicroLearningData = [
    {
      microlearningID: 1,
      Title: 'Test Title 1',
      ImageUrl: 'test1.jpg',
      isRead: 0,
      PreferenceIDs: '2'
    },
    {
      microlearningID: 2,
      Title: 'Test Title 2',
      ImageUrl: 'test2.jpg',
      isRead: 1,
      PreferenceIDs: '3'
    }
  ];

  const mockPrefData = [
    { id: '1', displayName: 'Work', active: false },
    { id: '2', displayName: 'Mental health', active: false },
    { id: '3', displayName: 'Relationships', active: false },
    { id: '999', displayName: 'All', active: true }
  ];

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockLocation = jasmine.createSpyObj('Location', ['back']);
    mockCommonService = jasmine.createSpyObj('CommonService', ['GetMicrolearningList', 'clickMicrolearning']);

    mockCommonService.GetMicrolearningList.and.returnValue(of(mockMicroLearningData));
    mockCommonService.clickMicrolearning.and.returnValue(of({}));

    // Spy on static SharedService methods before component is created
    spyOn(SharedService, 'getPreferenceData').and.returnValue(JSON.parse(JSON.stringify(mockPrefData)));
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    
    // Save and Mock ProgramId
    originalProgramId = SharedService.ProgramId;
    SharedService.ProgramId = ProgramType.Adults;

    await TestBed.configureTestingModule({
      declarations: [MicroLearningListingPage],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: Location, useValue: mockLocation },
        { provide: CommonService, useValue: mockCommonService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroLearningListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    // Restore static property
    SharedService.ProgramId = originalProgramId;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct data in constructor', () => {
    expect(component.isAdults).toBeTrue();
    // 'Work' should be excluded based on component logic
    expect(component.prefData.find(p => p.displayName === 'Work')).toBeUndefined();
    expect(component.prefData.find(p => p.displayName === 'Mental health')).toBeDefined();
  });

  it('should call APIs and set timer in ngOnInit', fakeAsync(() => {
    spyOn(component, 'getMicroLearningList');
    spyOn(component, 'getUserPref');
    
    component.ngOnInit();
    tick(100);
    
    expect(component.getMicroLearningList).toHaveBeenCalled();
    expect(component.getUserPref).toHaveBeenCalledWith('all');
  }));

  it('should fetch and map micro learning list in getMicroLearningList', () => {
    component.getMicroLearningList();
    
    expect(mockCommonService.GetMicrolearningList).toHaveBeenCalledWith(9);
    expect(component.microLearningList.length).toBe(2);
    expect(component.microLearningList[0].title).toBe('Test Title 1');
    expect(component.filteredList.length).toBe(2);
    
    // Check prefData active state update (id '2' is in mockMicroLearningData)
    const mentalHealthPref = component.prefData.find(p => p.id === '2');
    expect(mentalHealthPref.active).toBeTrue();
  });

  it('should navigate back on goBack', () => {
    component.goBack();
    expect(mockLocation.back).toHaveBeenCalled();
  });

  describe('searchMicroLearning', () => {
    beforeEach(() => {
        component.microLearningList = [
            { title: 'Stress' },
            { title: 'Anxiety' }
        ];
    });

    it('should filter list based on search text', () => {
        component.searchMicroLearning('stress');
        expect(component.filteredList.length).toBe(1);
        expect(component.filteredList[0].title).toBe('Stress');
    });

    it('should show all items if search text is empty', () => {
        component.searchMicroLearning('');
        expect(component.filteredList.length).toBe(2);
    });
  });

  describe('getUserPref', () => {
    beforeEach(() => {
        component.microLearningList = [
            { preferenceIDs: '2' },
            { preferenceIDs: '3' }
        ];
    });

    it('should filter list based on preference type', () => {
        component.getUserPref('2');
        expect(component.filteredList.length).toBe(1);
        expect(component.selectedPref).toBe('2');
    });

    it('should show all items if type is all', () => {
        component.getUserPref('all');
        expect(component.filteredList.length).toBe(2);
    });

    it('should handle DOM manipulations for active state', fakeAsync(() => {
        // Set up active preferences to ensure buttons are rendered
        component.prefData = [
          { id: '2', displayName: 'Mental health', active: true },
          { id: '999', displayName: 'All', active: true }
        ];
        fixture.detectChanges();
        tick();

        const btnAll = fixture.nativeElement.querySelector('#all');
        const btnPref = fixture.nativeElement.querySelector('[id="2"]');

        expect(btnAll).toBeTruthy('All button should be rendered');
        expect(btnPref).toBeTruthy('Pref button should be rendered');

        // Call method
        component.getUserPref('all');
        
        expect(btnPref.classList.contains('active')).toBeFalse();
        expect(btnAll.classList.contains('active')).toBeTrue();

        component.getUserPref('2');
        expect(btnAll.classList.contains('active')).toBeFalse();
        expect(btnPref.classList.contains('active')).toBeTrue();
    }));
  });

  it('should navigate to inner page on navigateToInner', () => {
    const item = { id: 101 };
    const mockRes = { microLearningData: 'test' };
    mockCommonService.clickMicrolearning.and.returnValue(of(mockRes));
    
    component.navigateToInner(item);
    
    expect(mockCommonService.clickMicrolearning).toHaveBeenCalledWith(101);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/micro-learning/inner', 101], {
        state: { microLearningData: mockRes }
    });
  });
});
