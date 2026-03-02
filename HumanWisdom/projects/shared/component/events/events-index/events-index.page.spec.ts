import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { EventsIndexPage } from './events-index.page';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { Platform } from '@angular/cdk/platform';
import { Meta, Title } from '@angular/platform-browser';
import { CommonService } from '../../../services/common.service';
import { SharedService } from '../../../services/shared.service';
import { ProgramType } from '../../../models/program-model';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('EventsIndexPage', () => {
  let component: EventsIndexPage;
  let fixture: ComponentFixture<EventsIndexPage>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockPlatform: jasmine.SpyObj<Platform>;
  let mockNgNavigatorShareService: jasmine.SpyObj<NgNavigatorShareService>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockMeta: jasmine.SpyObj<Meta>;
  let mockTitle: jasmine.SpyObj<Title>;
  let originalProgramId: PropertyDescriptor | undefined;

  const mockRouterUrl = '/adults/events';

  const mockEventsResponse = {
    FutureEvents: [
      { RowID: 1, Title: 'Upcoming Event', Event_Date: '2024-03-01', ProgIDs: ['9'], ImgUrl: 'https://example.com/1.jpg' }
    ],
    PastEvents: [
      { RowID: 1, Title: 'Past Event One', YoutubeLink: 'abc123', ProgIDs: ['9'], ImgUrl: 'https://example.com/a.jpg', Timing: '15', searchtags: 'mindfulness', isRead: '0' },
      { RowID: 2, Title: 'Past Event Two', YoutubeLink: 'def456', ProgIDs: ['9'], ImgUrl: 'https://example.com/b.jpg', Timing: '20', searchtags: 'meditation', isRead: '1' }
    ]
  };

  beforeEach(async () => {
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    Object.defineProperty(SharedService, 'ProgramId', {
      value: ProgramType.Adults,
      writable: true,
      configurable: true
    });

    mockLocation = jasmine.createSpyObj('Location', ['back']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl'], { url: mockRouterUrl });
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));
    Object.defineProperty(mockRouter, 'url', { get: () => mockRouterUrl, configurable: true });

    mockPlatform = jasmine.createSpyObj('Platform', [], { IOS: false, isBrowser: true });
    mockNgNavigatorShareService = jasmine.createSpyObj('NgNavigatorShareService', ['share']);
    mockNgNavigatorShareService.share.and.returnValue(Promise.resolve());

    mockCommonService = jasmine.createSpyObj('CommonService', ['getAllEvents', 'clickEvents']);
    mockCommonService.getAllEvents.and.returnValue(of(mockEventsResponse));
    mockCommonService.clickEvents.and.returnValue(of({}));

    mockMeta = jasmine.createSpyObj('Meta', ['updateTag']);
    mockTitle = jasmine.createSpyObj('Title', ['setTitle']);

    spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    spyOn(SharedService, 'initializeIosCheck').and.returnValue(false);

    (window as any).bootstrap = {
      Collapse: jasmine.createSpy('Collapse').and.returnValue({})
    };

    await TestBed.configureTestingModule({
      declarations: [EventsIndexPage],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Location, useValue: mockLocation },
        { provide: Router, useValue: mockRouter },
        { provide: Platform, useValue: mockPlatform },
        { provide: NgNavigatorShareService, useValue: mockNgNavigatorShareService },
        { provide: CommonService, useValue: mockCommonService },
        { provide: Meta, useValue: mockMeta },
        { provide: Title, useValue: mockTitle }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EventsIndexPage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    if (originalProgramId) {
      Object.defineProperty(SharedService, 'ProgramId', originalProgramId);
    }
    localStorage.clear();
  });

  describe('Component creation and constructor', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should set address from router.url', () => {
      expect(component.address).toBe(mockRouterUrl);
    });

    it('should set isAdults to true when ProgramId is Adults', () => {
      Object.defineProperty(SharedService, 'ProgramId', { value: ProgramType.Adults, writable: true, configurable: true });
      fixture = TestBed.createComponent(EventsIndexPage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', { value: ProgramType.Teenagers, writable: true, configurable: true });
      fixture = TestBed.createComponent(EventsIndexPage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });

    it('should set isIos from SharedService.initializeIosCheck', () => {
      (SharedService.initializeIosCheck as jasmine.Spy).and.returnValue(true);
      fixture = TestBed.createComponent(EventsIndexPage);
      component = fixture.componentInstance;
      expect(component.isIos).toBe(true);
    });

    it('should have default isEventsOpen true', () => {
      expect(component.isEventsOpen).toBe(true);
    });

    it('should have default showModal false', () => {
      expect(component.showModal).toBe(false);
    });
  });

  describe('ngOnInit', () => {
    it('should set document title and meta tags', () => {
      component.ngOnInit();
      expect(mockTitle.setTitle).toHaveBeenCalledWith('Mindfulness Events - Learn to Live in the Present');
      expect(mockMeta.updateTag).toHaveBeenCalledWith({ property: 'title', content: 'Mindfulness Events - Learn to Live in the Present' });
      expect(mockMeta.updateTag).toHaveBeenCalledWith(jasmine.objectContaining({ property: 'description' }));
      expect(mockMeta.updateTag).toHaveBeenCalledWith(jasmine.objectContaining({ property: 'keywords' }));
    });

    it('should call getAllEvents and filter FutureEvents and PastEvents by ProgramId', fakeAsync(() => {
      component.ngOnInit();
      tick();
      expect(mockCommonService.getAllEvents).toHaveBeenCalled();
      expect(component.futureeventList.length).toBe(1);
      expect(component.futureeventList[0].Title).toBe('Upcoming Event');
      expect(component.eventList.length).toBe(2);
      expect(component.backupList.length).toBe(2);
    }));

    it('should set isSubscriber to true when isloggedin is T and Subscriber is 1', () => {
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '1');
      component.ngOnInit();
      expect(component.isSubscriber).toBe(true);
    });

    it('should set isSubscriber to false when not logged in or not subscriber', () => {
      localStorage.setItem('isloggedin', 'F');
      localStorage.setItem('Subscriber', '0');
      component.ngOnInit();
      expect(component.isSubscriber).toBe(false);
    });

    it('should filter events by ProgIDs matching ProgramId', fakeAsync(() => {
      Object.defineProperty(SharedService, 'ProgramId', { value: ProgramType.Teenagers, writable: true, configurable: true });
      mockCommonService.getAllEvents.and.returnValue(of({
        FutureEvents: [{ RowID: 1, Title: 'Teen Event', ProgIDs: ['11'] }],
        PastEvents: [{ RowID: 1, Title: 'Teen Past', ProgIDs: ['11'], YoutubeLink: 'x', ImgUrl: '', Timing: '10', searchtags: '' }]
      }));
      fixture = TestBed.createComponent(EventsIndexPage);
      component = fixture.componentInstance;
      component.ngOnInit();
      tick();
      expect(component.futureeventList.length).toBe(1);
      expect(component.futureeventList[0].ProgIDs).toContain('11');
    }));
  });

  describe('getSearchResult', () => {
    beforeEach(fakeAsync(() => {
      component.backupList = [
        { Title: 'Mindfulness Workshop', searchtags: 'meditation' },
        { Title: 'Stress Relief', searchtags: 'stress' },
        { Title: 'Yoga Session', searchtags: 'yoga' }
      ];
      component.eventList = [...component.backupList];
    }));

    it('should set searchinp and filter eventList by Title', fakeAsync(() => {
      component.getSearchResult('mindfulness');
      tick(50);
      expect(component.searchinp).toBe('mindfulness');
      expect(component.eventList.length).toBe(1);
      expect(component.eventList[0].Title).toBe('Mindfulness Workshop');
    }));

    it('should filter eventList by searchtags', fakeAsync(() => {
      component.getSearchResult('yoga');
      tick(50);
      expect(component.eventList.length).toBe(1);
      expect(component.eventList[0].searchtags).toBe('yoga');
    }));

    it('should be case insensitive', fakeAsync(() => {
      component.getSearchResult('STRESS');
      tick(50);
      expect(component.eventList.length).toBe(1);
      expect(component.eventList[0].Title).toBe('Stress Relief');
    }));
  });

  describe('clearSearch', () => {
    it('should clear searchinp and restore eventList from backupList', fakeAsync(() => {
      component.backupList = [{ Title: 'A' }, { Title: 'B' }];
      component.eventList = [{ Title: 'A' }];
      component.searchinp = 'test';
      component.clearSearch();
      tick(50);
      expect(component.searchinp).toBe('');
      expect(component.eventList.length).toBe(2);
      expect(component.eventList).toEqual(component.backupList);
    }));
  });

  describe('routeFutureEvents', () => {
    it('should navigate by url with eid param', () => {
      const item = { RowID: 42 };
      component.routeFutureEvents(item);
      expect(SharedService.getprogramName).toHaveBeenCalled();
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('adults/events/event?eid=42');
    });
  });

  describe('getStyle', () => {
    it('should return background-image style string', () => {
      const url = 'https://example.com/image.jpg';
      expect(component.getStyle(url)).toBe('background-image: url(https://example.com/image.jpg)');
    });
  });

  describe('goBack', () => {
    it('should call location.back', () => {
      component.goBack();
      expect(mockLocation.back).toHaveBeenCalled();
    });
  });

  describe('youtube', () => {
    it('should call clickEvents with RowID', () => {
      component.youtube('link123', 5, 'My Title');
      expect(mockCommonService.clickEvents).toHaveBeenCalledWith(5);
    });

    it('should show modal when RowID > 1 and user is not subscriber', () => {
      component.isSubscriber = false;
      component.youtube('link', 2, 'Title');
      expect(component.showModal).toBe(true);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('should navigate when RowID <= 1', () => {
      component.youtube('abc', 1, 'Free Event');
      expect(component.showModal).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(
        ['adults/curated/youtubelink', 'abc=rdtfghjhfdg'],
        { state: { title: 'Free Event' } }
      );
    });

    it('should navigate with different link suffix when RowID > 1 and subscriber', () => {
      component.isSubscriber = true;
      component.youtube('xyz', 3, 'Paid Event');
      expect(component.showModal).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(
        ['adults/curated/youtubelink', 'xyz=vncbxdfchgvxd'],
        { state: { title: 'Paid Event' } }
      );
    });
  });

  describe('share', () => {
    it('should set path and call ngNavigatorShareService.share', () => {
      component.address = '/adults/events';
      component.share();
      expect(component.path).toBe('https://happierme.app/adults/events');
      expect(mockNgNavigatorShareService.share).toHaveBeenCalledWith({
        title: 'HappierMe Program',
        text: 'Hey, check out the HappierMe Program',
        url: 'https://happierme.app/adults/events'
      });
    });
  });

  describe('onModalClose', () => {
    it('should set showModal to false', () => {
      component.showModal = true;
      component.onModalClose('cancel');
      expect(component.showModal).toBe(false);
    });

    it('should navigate to start-your-free-trial when event is ok', () => {
      component.showModal = true;
      component.onModalClose('ok');
      expect(component.showModal).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['adults', 'subscription', 'start-your-free-trial']);
    });

    it('should not navigate when event is not ok', () => {
      component.onModalClose('cancel');
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });
  });

  describe('toggleEventsAccordion', () => {
    it('should toggle isEventsOpen from true to false', () => {
      component.isEventsOpen = true;
      component.toggleEventsAccordion();
      expect(component.isEventsOpen).toBe(false);
    });

    it('should toggle isEventsOpen from false to true', () => {
      component.isEventsOpen = false;
      component.toggleEventsAccordion();
      expect(component.isEventsOpen).toBe(true);
    });
  });

  describe('ngAfterViewInit', () => {
    it('should initialize bootstrap Collapse on accordion elements', () => {
      const collapseEl = document.createElement('div');
      collapseEl.className = 'accordion-collapse';
      document.body.appendChild(collapseEl);
      component.ngAfterViewInit();
      expect((window as any).bootstrap.Collapse).toHaveBeenCalled();
      document.body.removeChild(collapseEl);
    });
  });
});
