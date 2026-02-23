import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RelatedWisdomStoriesTilesComponent } from './related-wisdom-stories-tiles.component';
import { Router } from '@angular/router';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RelatedWisdomStoriesTilesComponent', () => {
  let component: RelatedWisdomStoriesTilesComponent;
  let fixture: ComponentFixture<RelatedWisdomStoriesTilesComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockAdultsService: jasmine.SpyObj<AdultsService>;
  let originalProgramId: PropertyDescriptor | undefined;

  const mockStory = (id: number) => ({
    ScenarioID: id,
    Title: `Story ${id}`,
    Img: `https://example.com/img${id}.jpg`
  });

  beforeEach(() => {
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    Object.defineProperty(SharedService, 'ProgramId', {
      value: ProgramType.Adults,
      writable: true,
      configurable: true
    });

    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    mockAdultsService = jasmine.createSpyObj('AdultsService', ['clickStory']);
    mockAdultsService.clickStory.and.returnValue(of({}));

    localStorage.clear();
    localStorage.setItem('isloggedin', 'F');

    TestBed.configureTestingModule({
      declarations: [RelatedWisdomStoriesTilesComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: AdultsService, useValue: mockAdultsService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RelatedWisdomStoriesTilesComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    if (originalProgramId) {
      Object.defineProperty(SharedService, 'ProgramId', originalProgramId);
    }
    localStorage.clear();
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
      fixture = TestBed.createComponent(RelatedWisdomStoriesTilesComponent);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });

    it('should have default input values', () => {
      expect(component.wisdomstories).toEqual([]);
      expect(component.isAccordion).toBe(false);
    });
  });

  describe('ngOnInit', () => {
    it('when wisdomstories has 0 items should not set enablewisdomstory', () => {
      component.wisdomstories = [];
      component.ngOnInit();
      expect(component.enablewisdomstory).toBe(false);
    });

    it('when wisdomstories has 1 item should set enablewisdomstory true', () => {
      component.wisdomstories = [mockStory(1)];
      component.ngOnInit();
      expect(component.enablewisdomstory).toBe(true);
    });

    it('when wisdomstories has 2 items should set enablewisdomstory and split into first two and bottom', () => {
      component.wisdomstories = [mockStory(1), mockStory(2)];
      component.ngOnInit();
      expect(component.enablewisdomstory).toBe(true);
      expect(component.wisdomstories).toEqual([mockStory(1), mockStory(2)]);
      expect(component.wisdomstoriesbottom).toEqual([]);
    });

    it('when wisdomstories has 4 items should put first two in wisdomstories and rest in wisdomstoriesbottom', () => {
      const stories = [mockStory(1), mockStory(2), mockStory(3), mockStory(4)];
      component.wisdomstories = [...stories];
      component.ngOnInit();
      expect(component.enablewisdomstory).toBe(true);
      expect(component.wisdomstories).toEqual([mockStory(1), mockStory(2)]);
      expect(component.wisdomstoriesbottom).toEqual([mockStory(3), mockStory(4)]);
    });
  });

  describe('viewstory', () => {
    it('should set story in localStorage', () => {
      const item = mockStory(10);
      component.viewstory(item);
      expect(localStorage.getItem('story')).toBe(JSON.stringify(item));
    });

    it('when not logged in should navigate to view-stories with sId', () => {
      localStorage.setItem('isloggedin', 'F');
      const item = mockStory(5);
      component.viewstory(item);
      expect(mockAdultsService.clickStory).not.toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalledWith(
        ['/adults/wisdom-stories/view-stories'],
        { queryParams: { sId: '5' } }
      );
    });

    it('when logged in should call clickStory then navigate', () => {
      localStorage.setItem('isloggedin', 'T');
      const item = mockStory(7);
      component.viewstory(item);
      expect(mockAdultsService.clickStory).toHaveBeenCalledWith(7);
      expect(mockRouter.navigate).toHaveBeenCalledWith(
        ['/adults/wisdom-stories/view-stories'],
        { queryParams: { sId: '7' } }
      );
    });

    it('when logged in and Teenagers should navigate to teenagers path', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        value: ProgramType.Teenagers,
        writable: true,
        configurable: true
      });
      fixture = TestBed.createComponent(RelatedWisdomStoriesTilesComponent);
      component = fixture.componentInstance;
      localStorage.setItem('isloggedin', 'F');
      const item = mockStory(3);
      component.viewstory(item);
      expect(mockRouter.navigate).toHaveBeenCalledWith(
        ['/teenagers/wisdom-stories/view-stories'],
        { queryParams: { sId: '3' } }
      );
    });
  });

  describe('toggle_view_more_less', () => {
    it('should set enable_view_more_less true and view_more_less to View Less when currently View More', () => {
      component.view_more_less = 'View More';
      component.toggle_view_more_less();
      expect(component.enable_view_more_less).toBe(true);
      expect(component.view_more_less).toBe('View Less');
    });

    it('should set enable_view_more_less false and view_more_less to View More when currently View Less', () => {
      component.view_more_less = 'View Less';
      component.enable_view_more_less = true;
      component.toggle_view_more_less();
      expect(component.enable_view_more_less).toBe(false);
      expect(component.view_more_less).toBe('View More');
    });
  });

  describe('toggleAccordion', () => {
    it('should toggle isOpen from false to true', () => {
      component.isOpen = false;
      component.toggleAccordion();
      expect(component.isOpen).toBe(true);
    });

    it('should toggle isOpen from true to false', () => {
      component.isOpen = true;
      component.toggleAccordion();
      expect(component.isOpen).toBe(false);
    });
  });

  describe('ngOnDestroy', () => {
    it('should clear wisdomstories, wisdomstoriesbottom and reset flags', () => {
      component.wisdomstories = [mockStory(1)];
      component.wisdomstoriesbottom = [mockStory(2)];
      component.enablewisdomstory = true;
      component.enable_view_more_less = true;
      component.view_more_less = 'View Less';
      component.ngOnDestroy();
      expect(component.wisdomstories).toEqual([]);
      expect(component.wisdomstoriesbottom).toEqual([]);
      expect(component.enablewisdomstory).toBe(false);
      expect(component.enable_view_more_less).toBe(false);
      expect(component.view_more_less).toBe('View More');
    });
  });
});
