import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TnCloseComponent } from './tn-close.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';

describe('TnCloseComponent', () => {
  let component: TnCloseComponent;
  let fixture: ComponentFixture<TnCloseComponent>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockNavigationService: jasmine.SpyObj<NavigationService>;

  beforeEach(async () => {
    mockLocation = jasmine.createSpyObj('Location', ['back']);
    mockLocation.back.and.stub();

    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    mockNavigationService = jasmine.createSpyObj('NavigationService', ['navigateToBackLink']);
    mockNavigationService.navigateToBackLink.and.returnValue(null);

    spyOn(SharedService, 'getDashboardUrls').and.returnValue('/adults/adult-dashboard' as any);

    await TestBed.configureTestingModule({
      declarations: [TnCloseComponent],
      providers: [
        { provide: Location, useValue: mockLocation },
        { provide: Router, useValue: mockRouter },
        { provide: NavigationService, useValue: mockNavigationService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TnCloseComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set isAdults true when ProgramId is Adults', () => {
      SharedService.ProgramId = ProgramType.Adults;
      component.ngOnInit();
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults false when ProgramId is Teenagers', () => {
      SharedService.ProgramId = ProgramType.Teenagers;
      component.ngOnInit();
      expect(component.isAdults).toBe(false);
    });
  });

  describe('goBack', () => {
    it('should call location.back when navigateToBackLink returns null', () => {
      mockNavigationService.navigateToBackLink.and.returnValue(null);
      component.goBack();
      expect(mockLocation.back).toHaveBeenCalled();
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('should navigate to url when navigateToBackLink returns a url', () => {
      mockNavigationService.navigateToBackLink.and.returnValue('/adults/some-page');
      component.goBack();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/some-page']);
      expect(mockLocation.back).not.toHaveBeenCalled();
    });

    it('should navigate to dashboard when url includes daily-checkin-save', () => {
      mockNavigationService.navigateToBackLink.and.returnValue('/adults/daily-checkin-save');
      component.goBack();
      expect(SharedService.getDashboardUrls).toHaveBeenCalled();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/adult-dashboard']);
    });
  });
});
