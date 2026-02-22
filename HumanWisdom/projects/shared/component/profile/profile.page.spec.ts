import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { of } from 'rxjs';
import { ProfilePage } from './profile.page';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { OnboardingService } from '../../../shared/services/onboarding.service';
import { LogEventService } from '../../../shared/services/log-event.service';
import { NavigationService } from '../../services/navigation.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../../shared/models/program-model';

describe('ProfilePage', () => {
  let component: ProfilePage;
  let fixture: ComponentFixture<ProfilePage>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockOnboardingService: jasmine.SpyObj<OnboardingService>;
  let mockAdultsService: jasmine.SpyObj<AdultsService>;
  let mockLogEventService: jasmine.SpyObj<LogEventService>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;
  let mockPlatform: jasmine.SpyObj<Platform>;

  const mockLoginResponse = {
    ActKeys: [{ MySelf: '1', Prog: 'Adults', ActKey: 'Premium' }],
    WkDays: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday',
    hwScore: '80',
    hwPrevScore: '75',
    OverallPercentage: 60,
    Name: 'Test User',
    Points: '100',
    Modules: 5,
    Notes: 10,
    Surveys: 2,
    Streak: '7',
    WkHours: '120'
  };

  const mockUserDetail = {
    UserImagePath: 'path/to/image.jpg',
    Name: 'Test User'
  };

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    mockOnboardingService = jasmine.createSpyObj('OnboardingService', [
      'getpaymentdetail',
      'getuser',
      'deleteMyData'
    ]);
    mockOnboardingService.getpaymentdetail.and.returnValue(of([{ CCName: 'Visa', CCNumber: '1234' }]));
    mockOnboardingService.getuser.and.returnValue(of([mockUserDetail]));
    mockOnboardingService.deleteMyData.and.returnValue(of({}));

    mockAdultsService = jasmine.createSpyObj<AdultsService>('AdultsService', ['getPoints']);
    mockAdultsService.getPoints.and.returnValue(of({ overallPercentage: 65 }));

    mockLogEventService = jasmine.createSpyObj('LogEventService', ['logEvent']);

    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToSkippedBackLink']);
    mockNavigationService.navigateToSkippedBackLink.and.returnValue(null);

    mockPlatform = jasmine.createSpyObj('Platform', [], { IOS: false });

    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => ProgramType.Adults,
      configurable: true
    });
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');
    spyOn(SharedService, 'getDashboardUrls').and.returnValue('/adults/home');

    localStorage.setItem('loginResponse', JSON.stringify(mockLoginResponse));
    localStorage.setItem('userID', '123');
    localStorage.setItem('userId', '123');
    localStorage.setItem('RoleID', '1');
    localStorage.setItem('email', 'test@example.com');
    localStorage.setItem('Subscriber', '1');
    localStorage.setItem('IsPartner', '0');
    localStorage.setItem('PartnerOption', 'ReceiveIncome');

    await TestBed.configureTestingModule({
      declarations: [ProfilePage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: Location, useValue: jasmine.createSpyObj('Location', ['back']) },
        { provide: OnboardingService, useValue: mockOnboardingService },
        { provide: AdultsService, useValue: mockAdultsService },
        { provide: LogEventService, useValue: mockLogEventService },
        { provide: NavigationService, useValue: mockNavigationService },
        { provide: Platform, useValue: mockPlatform }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilePage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('constructor', () => {
    it('should set isAdults to true when ProgramId is Adults', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => ProgramType.Adults,
        configurable: true
      });
      fixture = TestBed.createComponent(ProfilePage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => ProgramType.Teenagers,
        configurable: true
      });
      fixture = TestBed.createComponent(ProfilePage);
      component = fixture.componentInstance;
      expect(component.isAdults).toBe(false);
    });

    it('should initialize loginResponse from localStorage', () => {
      expect(component.loginResponse).toBeDefined();
      expect(component.actKeys).toEqual(mockLoginResponse.ActKeys);
      expect(component.weekDays).toEqual(mockLoginResponse.WkDays.split(','));
    });

    it('should call initialize when no loginResponse in localStorage', () => {
      localStorage.removeItem('loginResponse');
      fixture = TestBed.createComponent(ProfilePage);
      component = fixture.componentInstance;
      expect(component.loginResponse).toEqual(
        jasmine.objectContaining({
          Streak: '',
          WkHours: '',
          hwScore: '',
          Name: ''
        })
      );
    });

    it('should set direction to "up" when score is positive', () => {
      expect(component.direction).toBe('up');
      expect(component.score).toBe(5);
    });

    it('should set direction to "down" and absolute score when score is negative', () => {
      localStorage.setItem(
        'loginResponse',
        JSON.stringify({ ...mockLoginResponse, hwScore: '70', hwPrevScore: '80' })
      );
      fixture = TestBed.createComponent(ProfilePage);
      component = fixture.componentInstance;
      expect(component.direction).toBe('down');
      expect(component.score).toBe(10);
    });

    it('should set direction to empty when score is zero', () => {
      localStorage.setItem(
        'loginResponse',
        JSON.stringify({ ...mockLoginResponse, hwScore: '75', hwPrevScore: '75' })
      );
      fixture = TestBed.createComponent(ProfilePage);
      component = fixture.componentInstance;
      expect(component.direction).toBe('');
    });
  });

  describe('ngOnInit', () => {
    it('should set week day flags from WkDays', fakeAsync(() => {
      fixture.detectChanges();
      tick(1100);
      expect(component.sun).toBe(true);
      expect(component.mon).toBe(true);
      expect(component.tue).toBe(true);
      expect(component.wed).toBe(true);
      expect(component.thu).toBe(true);
      expect(component.fri).toBe(true);
      expect(component.sat).toBe(true);
    }));

    it('should set myPrograms from actKeys filtered by MySelf', fakeAsync(() => {
      fixture.detectChanges();
      tick(1100);
      expect(component.myPrograms).toEqual([{ MySelf: '1', Prog: 'Adults', ActKey: 'Premium' }]);
    }));

    it('should set isSubscribe based on Subscriber', fakeAsync(() => {
      localStorage.setItem('Subscriber', '0');
      fixture.detectChanges();
      tick(1100);
      expect(component.isSubscribe).toBe(false);
    }));

    it('should fetch user data and update overallPercentage', fakeAsync(() => {
      fixture.detectChanges();
      tick(1100);
      expect(mockOnboardingService.getuser).toHaveBeenCalledWith(123);
      expect(mockAdultsService.getPoints).toHaveBeenCalledWith(123);
      expect(component.overallPercentage).toBe(65);
    }));

    it('should apply nameupdate from localStorage if present', fakeAsync(() => {
      localStorage.setItem('nameupdate', 'Updated Name');
      fixture.detectChanges();
      tick(1100);
      expect(component.loginResponse.Name).toBe('Updated Name');
    }));
  });

  describe('handleReferFriendClick', () => {
    it('should log event and navigate to adults refer-friend', () => {
      component.isAdults = true;
      component.handleReferFriendClick();
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_invite_friends');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/refer-friend']);
    });

    it('should navigate to teenagers refer-friend when not adults', () => {
      component.isAdults = false;
      component.handleReferFriendClick();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/refer-friend']);
    });
  });

  describe('survey', () => {
    it('should log event and navigate to wisdom-survey', () => {
      component.survey();
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_happiness_survey');
      expect(mockRouter.navigate).toHaveBeenCalledWith(
        ['/adults/wisdom-survey'],
        jasmine.objectContaining({ state: { isUseCloseButton: true } })
      );
    });
  });

  describe('getAffiliate', () => {
    it('should navigate to income-activity when PartnerOption is ReceiveIncome', () => {
      component.partnerOption = 'ReceiveIncome';
      component.getAffiliate();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['adults/partnership-report/income-activity']);
    });

    it('should navigate to tree-plantation-report otherwise', () => {
      component.partnerOption = 'Other';
      component.getAffiliate();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/partnership-report/tree-plantation-report']);
    });
  });

  describe('deleteMyData', () => {
    it('should set alert content and show delete confirmation', () => {
      component.deleteMyData();
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_deleteMyData');
      expect(component.contentText).toContain('Your entire account');
      expect(component.enableAlert).toBe(true);
      expect(component.isCancel).toBe(true);
    });
  });

  describe('back', () => {
    it('should navigate to skipped back link when available', () => {
      mockNavigationService.navigateToSkippedBackLink.and.returnValue('/adults/previous-page');
      component.back();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/previous-page']);
    });

    it('should navigate to dashboard when no skipped back link', () => {
      mockNavigationService.navigateToSkippedBackLink.and.returnValue(null);
      component.back();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/home']);
    });
  });

  describe('Logevent', () => {
    it('should log event and navigate to route with program prefix', () => {
      component.Logevent('/onboarding/profile-edit', '', 'click_edit_profile');
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_edit_profile');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/onboarding/profile-edit']);
    });

    it('should navigate to dashboard route for adults', () => {
      component.isAdults = true;
      component.Logevent('dashboard', '', 'evt');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults' + 'dashboard']);
    });

    it('should navigate to teenager-dashboard for non-adults', () => {
      component.isAdults = false;
      component.Logevent('dashboard', '', 'evt');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/teenager-dashboard']);
    });
  });

  describe('getAlertcloseEvent', () => {
    it('should close alert when event is not ok', () => {
      component.enableAlert = true;
      component.getAlertcloseEvent('cancel');
      expect(component.enableAlert).toBe(false);
    });

    it('should call deleteMyData when ok and delete confirmation', () => {
      component.contentText = 'Are you sure you want to delete your data? Your entire account, including content and purchases will be deleted.';
      component.getAlertcloseEvent('ok');
      expect(mockOnboardingService.deleteMyData).toHaveBeenCalledWith({
        UserID: '123',
        Email: 'test@example.com'
      });
    });

    it('should call Logout when isDeleted and event received', () => {
      component.isDeleted = true;
      spyOn(component, 'Logout');
      component.getAlertcloseEvent('ok');
      expect(component.Logout).toHaveBeenCalled();
    });
  });

  describe('Logout', () => {
    it('should set localStorage and navigate to login', () => {
      spyOn(localStorage, 'setItem');
      component.Logout();
      expect(localStorage.setItem).toHaveBeenCalledWith('isloggedin', 'F');
      expect(localStorage.setItem).toHaveBeenCalledWith('guest', 'T');
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/onboarding/login']);
    });

    it('should log logout event', () => {
      component.Logout();
      expect(mockLogEventService.logEvent).toHaveBeenCalledWith('click_logout_Hamburger');
    });
  });

  describe('clickButtonById', () => {
    it('should click button when element exists', () => {
      const button = document.createElement('button');
      button.id = 'testClickButton';
      const clickSpy = jasmine.createSpy('click');
      button.click = clickSpy;
      document.body.appendChild(button);
      component.clickButtonById('testClickButton');
      expect(clickSpy).toHaveBeenCalled();
      document.body.removeChild(button);
    });

    it('should log error when button does not exist', () => {
      const consoleSpy = spyOn(console, 'error');
      component.clickButtonById('nonexistent');
      expect(consoleSpy).toHaveBeenCalledWith("Button with ID 'nonexistent' not found");
    });
  });
});
