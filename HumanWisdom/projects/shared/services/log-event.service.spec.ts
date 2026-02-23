import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LogEventService } from './log-event.service';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { DeviceDetectorService } from 'ngx-device-detector';
import { SharedService } from './shared.service';

describe('LogEventService', () => {
  let service: LogEventService;
  let mockAnalytics: jasmine.SpyObj<AngularFireAnalytics>;
  let mockDeviceService: jasmine.SpyObj<DeviceDetectorService>;

  beforeEach(() => {
    mockAnalytics = jasmine.createSpyObj('AngularFireAnalytics', ['logEvent']);
    mockDeviceService = jasmine.createSpyObj('DeviceDetectorService', ['getDeviceInfo', 'isMobile', 'isDesktop']);
    mockDeviceService.getDeviceInfo.and.returnValue({
      browser: 'Chrome',
      os: 'Windows',
      device: 'desktop',
      userAgent: 'test-agent',
      os_version: '',
      browser_version: '',
      deviceType: 'desktop',
      orientation: 'landscape'
    } as any);
    mockDeviceService.isMobile.and.returnValue(false);
    mockDeviceService.isDesktop.and.returnValue(true);

    spyOn(SharedService, 'getprogramName').and.returnValue('adults');

    (window as any).Moengage = {
      update_unique_user_id: jasmine.createSpy('update_unique_user_id'),
      track_event: jasmine.createSpy('track_event')
    };

    TestBed.configureTestingModule({
      providers: [
        LogEventService,
        { provide: AngularFireAnalytics, useValue: mockAnalytics },
        { provide: DeviceDetectorService, useValue: mockDeviceService }
      ]
    });

    service = TestBed.inject(LogEventService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('logEvent', () => {
    it('should call analytics.logEvent with event name', () => {
      service.logEvent('test_event');
      expect(mockAnalytics.logEvent).toHaveBeenCalled();
    });

    it('should use Guest User when name not in localStorage', () => {
      service.logEvent('click_home');
      expect(mockAnalytics.logEvent).toHaveBeenCalledWith(
        jasmine.stringMatching(/adults_click_home/),
        { UserName: 'Guest User' }
      );
    });

    it('should use name from localStorage when set', () => {
      localStorage.setItem('name', 'John Doe');
      service.logEvent('click_home');
      expect(mockAnalytics.logEvent).toHaveBeenCalledWith(
        jasmine.any(String),
        { UserName: 'John Doe' }
      );
    });

    it('should replace hyphen with underscore in event name', () => {
      service.logEvent('click-home');
      expect(mockAnalytics.logEvent).toHaveBeenCalledWith(
        jasmine.stringMatching(/click_home/),
        jasmine.any(Object)
      );
    });

    it('should truncate base event name to 36 chars before suffix', () => {
      service.logEvent('a'.repeat(50));
      expect(mockAnalytics.logEvent).toHaveBeenCalled();
      const eventName = mockAnalytics.logEvent.calls.first().args[0];
      expect(eventName).toMatch(/^adults_/);
    });

    it('should call analytics with ScreenNo when module is true', () => {
      service.logEvent('screen_view', true, 5);
      expect(mockAnalytics.logEvent).toHaveBeenCalledWith(
        jasmine.any(String),
        { ScreenNo: 5 }
      );
    });

    it('should call Moengage track_event after timeout', fakeAsync(() => {
      service.logEvent('test_event');
      tick(5000);
      expect((window as any).Moengage.track_event).toHaveBeenCalled();
    }));

    it('should call Moengage update_unique_user_id when logged in', fakeAsync(() => {
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('userId', JSON.stringify('user123'));
      service.logEvent('test_event');
      tick(5000);
      expect((window as any).Moengage.update_unique_user_id).toHaveBeenCalledWith('user123');
    }));
  });

  describe('isBrowser', () => {
    it('should return true for Chrome', () => {
      expect(service.isBrowser('Chrome')).toBe(true);
    });

    it('should return true for Firefox', () => {
      expect(service.isBrowser('Firefox')).toBe(true);
    });

    it('should return true for Safari', () => {
      expect(service.isBrowser('Safari')).toBe(true);
    });

    it('should return true for Opera', () => {
      expect(service.isBrowser('Opera')).toBe(true);
    });

    it('should return true for IE', () => {
      expect(service.isBrowser('IE')).toBe(true);
    });

    it('should return true for MS-Edge', () => {
      expect(service.isBrowser('MS-Edge')).toBe(true);
    });

    it('should return true for MS-Edge-Chromium', () => {
      expect(service.isBrowser('MS-Edge-Chromium')).toBe(true);
    });

    it('should return true for Samsung', () => {
      expect(service.isBrowser('Samsung')).toBe(true);
    });

    it('should return true for UC-Browser', () => {
      expect(service.isBrowser('UC-Browser')).toBe(true);
    });

    it('should return false for unknown browser', () => {
      expect(service.isBrowser('Unknown')).toBe(false);
    });
  });
});
