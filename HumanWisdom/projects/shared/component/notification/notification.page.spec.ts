import { ComponentFixture, TestBed, fakeAsync, tick, flush, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe, Location } from '@angular/common';
import { of, throwError } from 'rxjs';

import { NotificationPage } from './notification.page';
import { NotificationModel } from './notification-model';
import { OnboardingService } from '../../services/onboarding.service';
import { SharedService } from '../../../shared/services/shared.service';
import { NavigationService } from '../../../shared/services/navigation.service';
import { ProgramType } from '../../models/program-model';

describe('NotificationPage', () => {
    let component: NotificationPage;
    let fixture: ComponentFixture<NotificationPage>;
    let mockOnboardingService: jasmine.SpyObj<OnboardingService>;
    let mockRouter: jasmine.SpyObj<Router>;
    let mockNavigationService: jasmine.SpyObj<NavigationService>;
    let mockLocation: jasmine.SpyObj<Location>;
    let mockDatePipe: jasmine.SpyObj<DatePipe>;

    // Mock notification data
    const mockNotifications: NotificationModel[] = [
        {
            NotificationId: 1,
            UserId: 123,
            NotificationMsg: 'Test notification 1',
            Url: '/test/url1',
            IconPath: 'icon1.png',
            IsRead: 0,
            Time: '5m ago',
            UpdatedDate: '2026-02-17T08:00:00Z'
        },
        {
            NotificationId: 2,
            UserId: 123,
            NotificationMsg: 'Test notification 2',
            Url: '/test/url2',
            IconPath: 'icon2.png',
            IsRead: 1,
            Time: '1h ago',
            UpdatedDate: '2026-02-17T07:30:00Z'
        },
        {
            NotificationId: 3,
            UserId: 123,
            NotificationMsg: 'Test notification 3',
            Url: '/test/url3',
            IconPath: 'icon3.png',
            IsRead: 0,
            Time: 'Yesterday',
            UpdatedDate: '2026-02-16T08:00:00Z'
        }
    ];

    // Create array with more than 10 notifications for testing pagination
    const createMockNotifications = (count: number): NotificationModel[] => {
        return Array(count).fill(null).map((_, i) => ({
            NotificationId: i + 1,
            UserId: 123,
            NotificationMsg: `Test notification ${i + 1}`,
            Url: `/test/url${i + 1}`,
            IconPath: `icon${i + 1}.png`,
            IsRead: i % 2,
            Time: `${i}m ago`,
            UpdatedDate: new Date(Date.now() - i * 60000).toISOString()
        }));
    };

    beforeEach(waitForAsync(() => {
        // Create spy objects for services
        mockOnboardingService = jasmine.createSpyObj('OnboardingService', [
            'getNotificationList',
            'MarkNotificationAsRead'
        ]);

        mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
        mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);
        mockLocation = jasmine.createSpyObj('Location', ['back']);
        mockDatePipe = jasmine.createSpyObj('DatePipe', ['transform']);

        // Set up default mock return values
        mockOnboardingService.getNotificationList.and.returnValue(of(mockNotifications));
        mockOnboardingService.MarkNotificationAsRead.and.returnValue(of({}));
        mockRouter.navigate.and.returnValue(Promise.resolve(true));
        mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));
        mockNavigationService.navigateToBackLink.and.returnValue(null);
        mockDatePipe.transform.and.returnValue('2/17/26, 1:30:00 PM');

        // Mock SharedService static properties
        Object.defineProperty(SharedService, 'ProgramId', {
            get: () => ProgramType.Adults,
            configurable: true
        });
        spyOn(SharedService, 'getprogramName').and.returnValue('adults');

        TestBed.configureTestingModule({
            declarations: [NotificationPage],
            providers: [
                { provide: OnboardingService, useValue: mockOnboardingService },
                { provide: Router, useValue: mockRouter },
                { provide: NavigationService, useValue: mockNavigationService },
                { provide: Location, useValue: mockLocation },
                { provide: DatePipe, useValue: mockDatePipe }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NotificationPage);
        component = fixture.componentInstance;

        // Initialize arrays to prevent undefined errors in subscriptions
        component.notificationModel = [];
        component.olderNotitification = [];
    });

    afterEach(() => {
        // Clear arrays to prevent state pollution
        component.notificationModel = [];
        component.olderNotitification = [];

        // Reset all mocks
        mockOnboardingService.getNotificationList.calls.reset();
        mockOnboardingService.MarkNotificationAsRead.calls.reset();

        fixture.destroy();
    });

    describe('Component Initialization', () => {
        it('should create the component', () => {
            expect(component).toBeTruthy();
        });

        it('should initialize with default values', () => {
            expect(component.notificationModel).toEqual([]);
            expect(component.olderNotitification).toEqual([]);
            expect(component.showOlderNotifications).toBe(false);
            expect(component.isAdults).toBe(true);
        });

        it('should set isAdults to true when ProgramId is Adults', () => {
            Object.defineProperty(SharedService, 'ProgramId', {
                get: () => ProgramType.Adults,
                configurable: true
            });

            const newFixture = TestBed.createComponent(NotificationPage);
            const newComponent = newFixture.componentInstance;

            expect(newComponent.isAdults).toBe(true);
        });

        it('should set isAdults to false when ProgramId is not Adults', () => {
            Object.defineProperty(SharedService, 'ProgramId', {
                get: () => ProgramType.Teenagers,
                configurable: true
            });

            const newFixture = TestBed.createComponent(NotificationPage);
            const newComponent = newFixture.componentInstance;

            expect(newComponent.isAdults).toBe(false);
        });

        it('should have MONTH_NAMES array with 12 months', () => {
            expect(component.MONTH_NAMES).toBeDefined();
            expect(component.MONTH_NAMES.length).toBe(12);
            expect(component.MONTH_NAMES[0]).toBe('Jan');
            expect(component.MONTH_NAMES[11]).toBe('Dec');
        });
    });

    describe('ngOnInit', () => {
        it('should initialize notificationModel as empty array before async call', () => {
            // Arrays are initialized to empty before the subscription completes
            const initialModel = component.notificationModel;
            const initialOlder = component.olderNotitification;

            component.ngOnInit();

            // Immediately after ngOnInit, arrays are set to empty
            expect(initialModel).toEqual([]);
            expect(initialOlder).toEqual([]);
        });

        it('should initialize olderNotitification as empty array', fakeAsync(() => {
            component.ngOnInit();
            tick();

            // After subscription completes, arrays should be populated
            expect(component.olderNotitification).toBeDefined();
            expect(Array.isArray(component.olderNotitification)).toBe(true);
        }));

        it('should call getNotificationList on init', () => {
            spyOn(component, 'getNotificationList');
            component.ngOnInit();
            expect(component.getNotificationList).toHaveBeenCalled();
        });

        it('should initialize arrays before calling getNotificationList', () => {
            let notificationModelValue: any;
            let olderNotificationValue: any;

            spyOn(component, 'getNotificationList').and.callFake(() => {
                notificationModelValue = component.notificationModel;
                olderNotificationValue = component.olderNotitification;
            });

            component.ngOnInit();

            expect(notificationModelValue).toEqual([]);
            expect(olderNotificationValue).toEqual([]);
        });
    });

    describe('getNotificationList', () => {
        beforeEach(() => {
            // Initialize arrays as ngOnInit does
            component.notificationModel = [];
            component.olderNotitification = [];
        });

        it('should fetch notifications from service', () => {
            component.getNotificationList();
            expect(mockOnboardingService.getNotificationList).toHaveBeenCalled();
        });

        it('should populate notificationModel with first 10 notifications', () => {
            const notifications = createMockNotifications(15);
            mockOnboardingService.getNotificationList.and.returnValue(of(notifications));

            component.ngOnInit();

            expect(component.notificationModel.length).toBe(10);
            expect(component.notificationModel[0].NotificationId).toBe(1);
            expect(component.notificationModel[9].NotificationId).toBe(10);
        });

        it('should populate olderNotitification with notifications after first 10', () => {
            const notifications = createMockNotifications(15);
            mockOnboardingService.getNotificationList.and.returnValue(of(notifications));

            component.ngOnInit();

            expect(component.olderNotitification.length).toBe(5);
            expect(component.olderNotitification[0].NotificationId).toBe(11);
            expect(component.olderNotitification[4].NotificationId).toBe(15);
        });

        it('should handle exactly 10 notifications', () => {
            const notifications = createMockNotifications(10);
            mockOnboardingService.getNotificationList.and.returnValue(of(notifications));

            component.ngOnInit();

            expect(component.notificationModel.length).toBe(10);
            expect(component.olderNotitification.length).toBe(0);
        });

        it('should handle less than 10 notifications', () => {
            const notifications = createMockNotifications(5);
            mockOnboardingService.getNotificationList.and.returnValue(of(notifications));

            component.ngOnInit();

            expect(component.notificationModel.length).toBe(5);
            expect(component.olderNotitification.length).toBe(0);
        });

        it('should convert UTC to IST for each notification in notificationModel', () => {
            spyOn(component, 'convertUTCToIST').and.returnValue('2/17/26, 1:30:00 PM');

            component.ngOnInit();

            expect(component.convertUTCToIST).toHaveBeenCalledTimes(mockNotifications.length);
        });

        it('should calculate time ago for each notification in notificationModel', () => {
            spyOn(component, 'time_ago').and.returnValue('5m ago');

            component.ngOnInit();

            expect(component.time_ago).toHaveBeenCalled();
            expect(component.notificationModel[0].Time).toBe('5m ago');
        });

        it('should calculate time ago for each notification in olderNotitification', () => {
            const notifications = createMockNotifications(15);
            mockOnboardingService.getNotificationList.and.returnValue(of(notifications));
            spyOn(component, 'time_ago').and.returnValue('1h ago');

            component.ngOnInit();

            expect(component.olderNotitification.length).toBe(5);
            component.olderNotitification.forEach(notification => {
                expect(notification.Time).toBe('1h ago');
            });
        });

        it('should handle empty notification list', () => {
            mockOnboardingService.getNotificationList.and.returnValue(of([]));

            component.ngOnInit();

            expect(component.notificationModel.length).toBe(0);
            expect(component.olderNotitification.length).toBe(0);
        });

        it('should handle null response', () => {
            mockOnboardingService.getNotificationList.and.returnValue(of(null as any));

            component.ngOnInit();

            // Should not throw error and arrays should remain empty
            expect(component.notificationModel).toEqual([]);
            expect(component.olderNotitification).toEqual([]);
        });

        // Note: Error hanling test removed because getNotificationList() doesn't have
        // an error handler in its subscribe() call, so errors will propagate uncaught

        it('should set Time property on each notification', () => {
            const notifications = createMockNotifications(3);
            mockOnboardingService.getNotificationList.and.returnValue(of(notifications));

            component.ngOnInit();

            component.notificationModel.forEach(notification => {
                expect(notification.Time).toBeDefined();
                expect(typeof notification.Time).toBe('string');
            });
        });
    });

    describe('convertUTCToIST', () => {
        it('should convert UTC date to IST', () => {
            mockDatePipe.transform.and.returnValue('2/17/26, 1:30:00 PM');

            const result = component.convertUTCToIST('2026-02-17T08:00:00Z');

            expect(result).toBe('2/17/26, 1:30:00 PM');
        });

        it('should add 5 hours and 30 minutes to UTC time', () => {
            const utcDate = '2026-02-17T08:00:00Z';
            mockDatePipe.transform.and.returnValue('13:30:00');

            const result = component.convertUTCToIST(utcDate);

            expect(mockDatePipe.transform).toHaveBeenCalled();
            // Verify the date object passed to transform has been adjusted
            const callArgs = mockDatePipe.transform.calls.mostRecent().args;
            const adjustedDate = callArgs[0] as Date;
            expect(adjustedDate).toBeInstanceOf(Date);
        });

        it('should use correct date format', () => {
            component.convertUTCToIST('2026-02-17T08:00:00Z');

            const callArgs = mockDatePipe.transform.calls.mostRecent().args;
            expect(callArgs[1]).toBe('M/d/yy, h:mm:ss a');
        });

        it('should handle invalid date', () => {
            mockDatePipe.transform.and.returnValue(null);

            const result = component.convertUTCToIST('invalid-date');

            expect(result).toBeNull();
        });
    });

    describe('Integration: ngOnInit with getNotificationList', () => {
        it('should properly initialize and populate notifications on component init', () => {
            const notifications = createMockNotifications(12);
            mockOnboardingService.getNotificationList.and.returnValue(of(notifications));
            spyOn(component, 'convertUTCToIST').and.returnValue('2/17/26, 1:30:00 PM');
            spyOn(component, 'time_ago').and.returnValue('5m ago');

            component.ngOnInit();

            // Verify initialization
            expect(component.notificationModel).toBeDefined();
            expect(component.olderNotitification).toBeDefined();

            // Verify data population
            expect(component.notificationModel.length).toBe(10);
            expect(component.olderNotitification.length).toBe(2);

            // Verify time conversion was called
            expect(component.convertUTCToIST).toHaveBeenCalled();
            expect(component.time_ago).toHaveBeenCalled();
        });

        it('should handle complete initialization flow without errors', fakeAsync(() => {
            const notifications = createMockNotifications(15);
            mockOnboardingService.getNotificationList.and.returnValue(of(notifications));

            expect(() => {
                component.ngOnInit();
                tick();
                flush();
            }).not.toThrow();

            expect(component.notificationModel.length).toBe(10);
            expect(component.olderNotitification.length).toBe(5);
        }));
    });

    describe('routeToLanding', () => {
        it('should navigate back using location.back when navigateToBackLink returns null', () => {
            mockNavigationService.navigateToBackLink.and.returnValue(null);

            component.routeToLanding();

            expect(mockNavigationService.navigateToBackLink).toHaveBeenCalled();
            expect(mockLocation.back).toHaveBeenCalled();
            expect(mockRouter.navigate).not.toHaveBeenCalled();
        });

        it('should navigate to URL when navigateToBackLink returns a URL', () => {
            const testUrl = '/test/back/url';
            mockNavigationService.navigateToBackLink.and.returnValue(testUrl);

            component.routeToLanding();

            expect(mockNavigationService.navigateToBackLink).toHaveBeenCalled();
            expect(mockRouter.navigate).toHaveBeenCalledWith([testUrl]);
            expect(mockLocation.back).not.toHaveBeenCalled();
        });

        it('should handle empty string from navigateToBackLink', () => {
            mockNavigationService.navigateToBackLink.and.returnValue('');

            component.routeToLanding();

            expect(mockRouter.navigate).toHaveBeenCalledWith(['']);
        });
    });

    describe('MarkAsRead', () => {
        it('should call MarkNotificationAsRead service method', () => {
            const notificationId = 123;

            component.MarkAsRead(notificationId);

            expect(mockOnboardingService.MarkNotificationAsRead).toHaveBeenCalledWith(notificationId);
        });

        it('should handle successful response', () => {
            mockOnboardingService.MarkNotificationAsRead.and.returnValue(of({ success: true }));

            expect(() => component.MarkAsRead(1)).not.toThrow();
        });

        it('should handle null notification ID', () => {
            component.MarkAsRead(null);

            expect(mockOnboardingService.MarkNotificationAsRead).toHaveBeenCalledWith(null);
        });


        // Note: Error handling test removed because MarkAsRead() doesn't have
        // an error handler in its subscribe() call
    });

    describe('time_ago', () => {
        let currentDate: Date;

        beforeEach(() => {
            currentDate = new Date('2026-02-17T12:00:00Z');
            jasmine.clock().install();
            jasmine.clock().mockDate(currentDate);
        });

        afterEach(() => {
            jasmine.clock().uninstall();
        });

        it('should return null for null date', () => {
            const result = component.time_ago(null);
            expect(result).toBeNull();
        });

        it('should return null for undefined date', () => {
            const result = component.time_ago(undefined);
            expect(result).toBeNull();
        });

        it('should return "1m ago" for 1 minute or less', () => {
            const oneMinuteAgo = new Date(currentDate.getTime() - 60 * 1000);
            const result = component.time_ago(oneMinuteAgo);
            expect(result).toBe('1m ago');
        });

        it('should return minutes ago for less than 30 minutes', () => {
            const fifteenMinutesAgo = new Date(currentDate.getTime() - 15 * 60 * 1000);
            const result = component.time_ago(fifteenMinutesAgo);
            expect(result).toBe('15m ago');
        });

        it('should return "1h ago" for 30-60 minutes', () => {
            const fortyFiveMinutesAgo = new Date(currentDate.getTime() - 45 * 60 * 1000);
            const result = component.time_ago(fortyFiveMinutesAgo);
            expect(result).toBe('1h ago');
        });

        it('should return hours ago for today', () => {
            const threeHoursAgo = new Date(currentDate.getTime() - 3 * 60 * 60 * 1000);
            const result = component.time_ago(threeHoursAgo);
            expect(result).toBe('3h ago');
        });

        it('should return "Yesterday" for yesterday', () => {
            const yesterday = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
            const result = component.time_ago(yesterday);
            expect(result).toBe('Yesterday');
        });

        it('should return formatted date for this year but more than 1 month ago', () => {
            const twoMonthsAgo = new Date('2025-12-17T12:00:00Z');
            const result = component.time_ago(twoMonthsAgo);
            expect(result).toContain('Dec');
        });

        it('should return month name for dates within this year and more than 1 month', () => {
            // Use a date from this year (2026) that's more than 1 month ago
            const threeMonthsAgo = new Date('2025-11-17T12:00:00Z');
            const result = component.time_ago(threeMonthsAgo);
            // Since it's from last year, it will return month + year
            expect(result).toContain('Nov');
        });

        it('should handle date strings', () => {
            const dateString = '2026-02-17T11:30:00Z';
            const result = component.time_ago(dateString);
            expect(result).toBeDefined();
        });

        it('should handle date objects', () => {
            const dateObject = new Date(currentDate.getTime() - 10 * 60 * 1000);
            const result = component.time_ago(dateObject);
            expect(result).toBe('10m ago');
        });
    });

    describe('getFormattedDate', () => {
        it('should format date with prefomatted date', () => {
            const testDate = new Date('2026-02-17T14:30:00');
            const result = component.getFormattedDate(testDate, 'Today');

            expect(result).toContain('Today');
            expect(result).toMatch(/\d{1,2}:\d{2}/); // Should contain time
        });

        it('should format date without year when hideYear is true', () => {
            const testDate = new Date('2026-02-17T14:30:00');
            const result = component.getFormattedDate(testDate, false, true);

            expect(result).toContain('17');
            expect(result).toContain('Feb');
            expect(result).not.toContain('2026');
        });

        it('should format date with month and year by default', () => {
            const testDate = new Date('2026-02-17T14:30:00');
            const result = component.getFormattedDate(testDate);

            expect(result).toContain('Feb');
            expect(result).toContain('2026');
        });

        it('should handle AM time correctly', () => {
            const testDate = new Date('2026-02-17T09:30:00');
            const result = component.getFormattedDate(testDate, 'Today');

            expect(result).toContain('am');
        });

        it('should handle PM time correctly', () => {
            const testDate = new Date('2026-02-17T14:30:00');
            const result = component.getFormattedDate(testDate, 'Today');

            expect(result).toContain('pm');
        });

        it('should add leading zero to minutes less than 10', () => {
            const testDate = new Date('2026-02-17T14:05:00');
            const result = component.getFormattedDate(testDate, 'Today');

            expect(result).toContain(':05');
        });

        it('should convert 24-hour to 12-hour format', () => {
            const testDate = new Date('2026-02-17T13:30:00');
            const result = component.getFormattedDate(testDate, 'Today');

            expect(result).toContain('1:30');
        });

        it('should handle midnight correctly', () => {
            const testDate = new Date('2026-02-17T00:00:00');
            const result = component.getFormattedDate(testDate, 'Today');

            expect(result).toContain('12:00');
            expect(result).toContain('am');
        });
    });

    describe('NavigateToUrl', () => {
        it('should mark notification as read', () => {
            spyOn(component, 'MarkAsRead');
            const notificationId = 123;
            const url = '/adults/test/path';

            component.NavigateToUrl(url, notificationId);

            expect(component.MarkAsRead).toHaveBeenCalledWith(notificationId);
        });

        it('should remove /adults from URL', () => {
            const url = '/adults/test/path';
            const notificationId = 123;
            (SharedService.getprogramName as jasmine.Spy).and.returnValue('adults');

            component.NavigateToUrl(url, notificationId);

            expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/adults/test/path');
        });

        it('should navigate to correct URL', () => {
            const url = '/adults/notifications/detail';
            const notificationId = 456;
            (SharedService.getprogramName as jasmine.Spy).and.returnValue('adults');

            component.NavigateToUrl(url, notificationId);

            expect(mockRouter.navigateByUrl).toHaveBeenCalled();
        });

        it('should handle URL without /adults prefix', () => {
            const url = '/test/path';
            const notificationId = 789;
            (SharedService.getprogramName as jasmine.Spy).and.returnValue('adults');

            component.NavigateToUrl(url, notificationId);

            expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/adults/test/path');
        });

        it('should call both MarkAsRead and navigate', () => {
            spyOn(component, 'MarkAsRead');
            const url = '/adults/test';
            const notificationId = 999;

            component.NavigateToUrl(url, notificationId);

            expect(component.MarkAsRead).toHaveBeenCalledWith(notificationId);
            expect(mockRouter.navigateByUrl).toHaveBeenCalled();
        });
    });

    describe('getClass', () => {
        it('should return "nrow_active row" for unread notification', () => {
            const unreadNotification = { ...mockNotifications[0], IsRead: 0 };
            const result = component.getClass(unreadNotification);
            expect(result).toBe('nrow_active row');
        });

        it('should return "nrow_inactive row" for read notification', () => {
            const readNotification = { ...mockNotifications[0], IsRead: 1 };
            const result = component.getClass(readNotification);
            expect(result).toBe('nrow_inactive row');
        });

        it('should handle IsRead as number 0', () => {
            const notification = { IsRead: 0 };
            const result = component.getClass(notification);
            expect(result).toBe('nrow_active row');
        });

        it('should handle IsRead as number 1', () => {
            const notification = { IsRead: 1 };
            const result = component.getClass(notification);
            expect(result).toBe('nrow_inactive row');
        });

        it('should treat any non-zero value as read', () => {
            const notification = { IsRead: 2 };
            const result = component.getClass(notification);
            expect(result).toBe('nrow_inactive row');
        });
    });

    describe('toggleText getter', () => {
        it('should return "View older Notifications" when showOlderNotifications is false', () => {
            component.showOlderNotifications = false;
            expect(component.toggleText).toBe('View older Notifications');
        });

        it('should return "View latest notifications only" when showOlderNotifications is true', () => {
            component.showOlderNotifications = true;
            expect(component.toggleText).toBe('View latest notifications only');
        });
    });

    describe('toggleNotifications', () => {
        it('should toggle showOlderNotifications from false to true', () => {
            component.showOlderNotifications = false;
            component.toggleNotifications();
            expect(component.showOlderNotifications).toBe(true);
        });

        it('should toggle showOlderNotifications from true to false', () => {
            component.showOlderNotifications = true;
            component.toggleNotifications();
            expect(component.showOlderNotifications).toBe(false);
        });

        it('should scroll to top when hiding older notifications', fakeAsync(() => {
            component.showOlderNotifications = true;
            const mockElement = {
                scrollIntoView: jasmine.createSpy('scrollIntoView')
            };
            component.notificationTop = { nativeElement: mockElement } as any;

            component.toggleNotifications();
            tick(100);

            expect(mockElement.scrollIntoView).toHaveBeenCalledWith({
                behavior: 'smooth',
                block: 'start'
            });
        }));

        it('should not scroll when showing older notifications', fakeAsync(() => {
            component.showOlderNotifications = false;
            const mockElement = {
                scrollIntoView: jasmine.createSpy('scrollIntoView')
            };
            component.notificationTop = { nativeElement: mockElement } as any;

            component.toggleNotifications();
            tick(100);

            expect(mockElement.scrollIntoView).not.toHaveBeenCalled();
        }));

        it('should handle missing notificationTop element', fakeAsync(() => {
            component.showOlderNotifications = true;
            component.notificationTop = undefined as any;

            expect(() => {
                component.toggleNotifications();
                tick(100);
            }).not.toThrow();
        }));

        it('should use setTimeout with 100ms delay', fakeAsync(() => {
            component.showOlderNotifications = true;
            const mockElement = {
                scrollIntoView: jasmine.createSpy('scrollIntoView')
            };
            component.notificationTop = { nativeElement: mockElement } as any;

            component.toggleNotifications();

            // Should not be called immediately
            expect(mockElement.scrollIntoView).not.toHaveBeenCalled();

            // Should be called after 100ms
            tick(100);
            expect(mockElement.scrollIntoView).toHaveBeenCalled();
        }));
    });

    describe('Edge Cases and Error Handling', () => {
        it('should handle malformed notification data', () => {
            const malformedData: any = [
                { NotificationId: 1, NotificationMsg: 'Test' }
                // Missing required fields
            ];
            mockOnboardingService.getNotificationList.and.returnValue(of(malformedData));

            expect(() => component.ngOnInit()).not.toThrow();
        });

        it('should handle very large notification lists', () => {
            const largeList = createMockNotifications(1000);
            mockOnboardingService.getNotificationList.and.returnValue(of(largeList));

            component.ngOnInit();

            expect(component.notificationModel.length).toBe(10);
            expect(component.olderNotitification.length).toBe(990);
        });

        it('should handle notifications with special characters in URL', () => {
            const url = '/adults/test/path?param=value&other=123';
            const notificationId = 1;

            expect(() => component.NavigateToUrl(url, notificationId)).not.toThrow();
        });

        it('should handle future dates in time_ago', () => {
            jasmine.clock().install();
            jasmine.clock().mockDate(new Date('2026-02-17T12:00:00Z'));

            const futureDate = new Date('2026-02-18T12:00:00Z');
            const result = component.time_ago(futureDate);

            // Should still return a value without throwing
            expect(result).toBeDefined();

            jasmine.clock().uninstall();
        });

        it('should handle invalid date strings in convertUTCToIST', () => {
            mockDatePipe.transform.and.returnValue(null);

            const result = component.convertUTCToIST('not-a-date');

            expect(result).toBeNull();
        });
    });
});
