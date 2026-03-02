import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FtPrevComponent } from './ft-prev.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

describe('FtPrevComponent', () => {
  let component: FtPrevComponent;
  let fixture: ComponentFixture<FtPrevComponent>;
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

    await TestBed.configureTestingModule({
      declarations: [FtPrevComponent],
      providers: [
        { provide: Location, useValue: mockLocation },
        { provide: Router, useValue: mockRouter },
        { provide: NavigationService, useValue: mockNavigationService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FtPrevComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('goBack', () => {
    it('should call location.back when navigateToBackLink returns null', () => {
      mockNavigationService.navigateToBackLink.and.returnValue(null);
      component.goBack();
      expect(mockLocation.back).toHaveBeenCalled();
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('should navigate when navigateToBackLink returns url', () => {
      mockNavigationService.navigateToBackLink.and.returnValue('/adults/home');
      component.goBack();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/home']);
      expect(mockLocation.back).not.toHaveBeenCalled();
    });
  });
});
