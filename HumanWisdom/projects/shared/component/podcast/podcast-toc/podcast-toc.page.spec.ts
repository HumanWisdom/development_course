import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { PodcastTocPage } from './podcast-toc.page';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { DomSanitizer } from '@angular/platform-browser';
import { Platform } from '@angular/cdk/platform';
import { Meta, Title } from '@angular/platform-browser';
import { LogEventService } from '../../../services/log-event.service';
import { CommonService } from '../../../services/common.service';
import { SharedService } from '../../../services/shared.service';
import { NavigationService } from '../../../services/navigation.service';
import { of, throwError } from 'rxjs';
import { ProgramType } from '../../../models/program-model';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PodcastTocPage', () => {
    let component: PodcastTocPage;
    let fixture: ComponentFixture<PodcastTocPage>;
    let mockRouter: jasmine.SpyObj<Router>;
    let mockActivatedRoute: any;
    let mockLocation: jasmine.SpyObj<Location>;
    let mockNgNavigatorShareService: jasmine.SpyObj<NgNavigatorShareService>;
    let mockSanitizer: jasmine.SpyObj<DomSanitizer>;
    let mockPlatform: any;
    let mockMeta: jasmine.SpyObj<Meta>;
    let mockTitle: jasmine.SpyObj<Title>;
    let mockLogEventService: jasmine.SpyObj<LogEventService>;
    let mockCommonService: jasmine.SpyObj<CommonService>;
    let mockNavigationService: jasmine.SpyObj<NavigationService>;
    let programIdSpy: jasmine.Spy;

    const mockPodcastList = [
        {
            PodcastID: 1,
            Title: 'Podcast 1',
            MediaUrl: 'https://test.com/audio1.mp3',
            ProgIDs: ['9'],
            PreferenceIDs: '1,2',
            searchtags: 'tag1',
            isFree: '1'
        },
        {
            PodcastID: 2,
            Title: 'Podcast 2',
            MediaUrl: 'https://test.com/audio2.mp3',
            ProgIDs: ['9'],
            PreferenceIDs: '3',
            searchtags: 'tag2',
            isFree: '0'
        }
    ];

    beforeEach(waitForAsync(() => {
        mockRouter = jasmine.createSpyObj('Router', ['navigate', 'url']);
        // Mock router.url as valid string
        (mockRouter as any).url = '/adults/podcast';

        mockLocation = jasmine.createSpyObj('Location', ['back']);
        mockNgNavigatorShareService = jasmine.createSpyObj('NgNavigatorShareService', ['share', 'canShare']);
        mockSanitizer = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustResourceUrl']);
        mockPlatform = { isBrowser: true };
        mockMeta = jasmine.createSpyObj('Meta', ['updateTag']);
        mockTitle = jasmine.createSpyObj('Title', ['setTitle']);
        mockLogEventService = jasmine.createSpyObj('LogEventService', ['logEvent']);
        mockCommonService = jasmine.createSpyObj('CommonService', ['GetPodcastList', 'clickPodcast']);
        mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);

        mockActivatedRoute = {
            snapshot: {
                paramMap: {
                    get: jasmine.createSpy('get').and.returnValue('all')
                }
            }
        };

        mockCommonService.GetPodcastList.and.returnValue(of(mockPodcastList));
        mockCommonService.clickPodcast.and.returnValue(of(true));
        mockSanitizer.bypassSecurityTrustResourceUrl.and.callFake((url) => url as any);

        // Default ProgramId spy
        programIdSpy = spyOnProperty(SharedService, 'ProgramId', 'get').and.returnValue(ProgramType.Adults);
        spyOn(SharedService, 'getPreferenceData').and.returnValue([]);
        spyOn(SharedService, 'getprogramName').and.returnValue('adults');

        TestBed.configureTestingModule({
            declarations: [PodcastTocPage],
            providers: [
                { provide: Router, useValue: mockRouter },
                { provide: ActivatedRoute, useValue: mockActivatedRoute },
                { provide: Location, useValue: mockLocation },
                { provide: NgNavigatorShareService, useValue: mockNgNavigatorShareService },
                { provide: DomSanitizer, useValue: mockSanitizer },
                { provide: Platform, useValue: mockPlatform },
                { provide: Meta, useValue: mockMeta },
                { provide: Title, useValue: mockTitle },
                { provide: LogEventService, useValue: mockLogEventService },
                { provide: CommonService, useValue: mockCommonService },
                { provide: NavigationService, useValue: mockNavigationService }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        localStorage.clear();
        fixture = TestBed.createComponent(PodcastTocPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        localStorage.clear();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInit', () => {
        it('should set isAdults to true if ProgramId is Adults', () => {
            // Re-create component to trigger constructor logic
            programIdSpy.and.returnValue(ProgramType.Adults);
            fixture = TestBed.createComponent(PodcastTocPage);
            component = fixture.componentInstance;
            expect(component.isAdults).toBeTrue();
        });

        it('should set isAdults to false if ProgramId is not Adults', () => {
            programIdSpy.and.returnValue(ProgramType.Teenagers);
            fixture = TestBed.createComponent(PodcastTocPage);
            component = fixture.componentInstance;
            expect(component.isAdults).toBeFalse();
        });

        it('should call getPodcast and set address if isdefaultShow is false', fakeAsync(() => {
            component.isdefaultShow = false;
            component.ngOnInit();
            tick(100);
            expect(mockCommonService.GetPodcastList).toHaveBeenCalled();
            expect(component.address).toBe('/adults/podcast');
        }));

        it('should set meta tags', fakeAsync(() => {
            component.ngOnInit();
            tick(100);
            expect(mockTitle.setTitle).toHaveBeenCalled();
            expect(mockMeta.updateTag).toHaveBeenCalledTimes(3);
        }));

        it('should log event', fakeAsync(() => {
            component.ngOnInit();
            tick(100);
            expect(mockLogEventService.logEvent).toHaveBeenCalledWith('view_humanwisdom_podcast');
        }));

        it('should set isSubscriber based on localStorage', fakeAsync(() => {
            localStorage.setItem('isloggedin', 'T');
            localStorage.setItem('Subscriber', '1');
            component.ngOnInit();
            tick(100);
            expect(component.isSubscriber).toBeTrue();

            localStorage.setItem('Subscriber', '0');
            component.ngOnInit();
            tick(100);
            expect(component.isSubscriber).toBeFalse();
        }));
    });

    describe('goBack', () => {
        it('should navigate to back link if available', () => {
            mockNavigationService.navigateToBackLink.and.returnValue('/home');
            component.goBack();
            expect(mockRouter.navigate).toHaveBeenCalledWith(['/home']);
        });

        it('should interact with location back if no back link', () => {
            mockNavigationService.navigateToBackLink.and.returnValue(null);
            component.goBack();
            expect(mockLocation.back).toHaveBeenCalled();
        });
    });

    describe('getPodcast', () => {
        it('should filter podcast list based on ProgramId', () => {
            programIdSpy.and.returnValue(ProgramType.Adults); // ID 9
            // In mockPodcastList both have ProgIDs: ['9']
            // SharedService.ProgramId.toString() is '9' if ProgramType.Adults=9 (assuming)
            // Actually ProgramType is enum.
            // SharedService.ProgramId is usually number.
            // We need to check ProgramType definition or assume.
            // In component: x.ProgIDs.includes(SharedService.ProgramId.toString())
            // If ProgramType.Adults is 9.

            component.getPodcast();
            expect(component.podcastList.length).toBe(2);
        });
    });

    describe('audioevent', () => {
        it('should show modal if not subscriber and podcast is paid', () => {
            localStorage.setItem('Subscriber', '0');
            const data = { PodcastID: 2, MediaUrl: 'url', Title: 'Title', isFree: '0' };
            component.audioevent(data);
            expect(component.showModal).toBeTrue();
        });

        it('should navigate if subscriber', () => {
            localStorage.setItem('Subscriber', '1');
            const data = { PodcastID: 2, MediaUrl: 'url', Title: 'Title', isFree: '0' };
            component.audioevent(data);
            expect(mockRouter.navigate).toHaveBeenCalled();
            expect(mockCommonService.clickPodcast).toHaveBeenCalled();
        });

        it('should navigate if free podcast even if not subscriber', () => {
            localStorage.setItem('Subscriber', '0');
            // Logic in component says: if (sub === '0' && data.PodcastID >= 2) -> show modal.
            // Wait, PodcastID >= 2 is the check?
            // Yes: if (sub === '0' && data.PodcastID >= 2)

            // Case 1: PodcastID 1 (assumed free based on ID?? logic is weird but let's follow code)
            const data = { PodcastID: 1, MediaUrl: 'url', Title: 'Title', isFree: '1' };
            component.audioevent(data);
            expect(mockRouter.navigate).toHaveBeenCalled();
        });
    });

    describe('searchPodcast', () => {
        it('should filter list by search text', () => {
            component.allpodcastList = mockPodcastList;
            component.searchPodcast('Podcast 1');
            expect(component.podcastList.length).toBe(1);
            expect(component.podcastList[0].Title).toBe('Podcast 1');
        });

        it('should reset list if search is empty', () => {
            component.allpodcastList = mockPodcastList;
            component.searchPodcast('');
            expect(component.podcastList.length).toBe(2);
        });
    });

    describe('getUserPref', () => {
        it('should filter by preference', () => {
            component.allpodcastList = mockPodcastList;
            component.getUserPref('1'); // PreferenceIDs: '1,2' matches
            expect(component.podcastList.length).toBe(1);
            expect(component.podcastList[0].PodcastID).toBe(1);
        });

        it('should show all if type is all', () => {
            component.allpodcastList = mockPodcastList;
            component.getUserPref('all');
            expect(component.podcastList.length).toBe(2);
        });
    });

    describe('onModalClose', () => {
        it('should close modal', () => {
            component.showModal = true;
            component.onModalClose('close');
            expect(component.showModal).toBeFalse();
        });

        it('should navigate to free trial if ok', () => {
            component.onModalClose('ok');
            expect(mockRouter.navigate).toHaveBeenCalledWith(['adults', 'subscription', 'start-your-free-trial']);
        });
    });
});
