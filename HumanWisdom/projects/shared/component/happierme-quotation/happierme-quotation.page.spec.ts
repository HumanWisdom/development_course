import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HappierMeQuotationPage } from './happierme-quotation.page';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { OnboardingService } from '../../services/onboarding.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HappierMeQuotationPage', () => {
  let component: HappierMeQuotationPage;
  let fixture: ComponentFixture<HappierMeQuotationPage>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockOnboardingService: jasmine.SpyObj<OnboardingService>;
  let mockActivatedRoute: { snapshot: { paramMap: { get: jasmine.Spy } } };

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
    (mockRouter as any).url = '/happierme-quotation/123';

    mockLocation = jasmine.createSpyObj('Location', ['back']);

    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.returnValue('42')
        }
      }
    };

    mockOnboardingService = jasmine.createSpyObj('OnboardingService', ['getHappierMeQuotation']);
    mockOnboardingService.getHappierMeQuotation.and.returnValue(
      of([{ quote: 'Test quote text', author: 'Test Author' }])
    );

    localStorage.clear();
    localStorage.setItem('saveUsername', JSON.stringify('user'));
    localStorage.setItem('text', 'screen');
    localStorage.setItem('moduleId', 'mod1');

    TestBed.configureTestingModule({
      declarations: [HappierMeQuotationPage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: Location, useValue: mockLocation },
        { provide: OnboardingService, useValue: mockOnboardingService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    });

    fixture = TestBed.createComponent(HappierMeQuotationPage);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe('component creation and constructor', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should call getHappierMeQuotation with id from route paramMap', () => {
      expect(mockOnboardingService.getHappierMeQuotation).toHaveBeenCalledWith('42');
    });

    it('should set quoationtext and quotationAuthor from response', () => {
      expect(component.quoationtext).toBe('Test quote text');
      expect(component.quotationAuthor).toBe('Test Author');
    });

    it('should set saveUsername, screenType, moduleId from localStorage', () => {
      expect(component.saveUsername).toBe('user');
      expect(component.screenType).toBe('screen');
      expect(component.moduleId).toBe('mod1');
    });

    it('should have default bg_tn, bg_cft, bg', () => {
      expect(component.bg_tn).toBe('bg_blue');
      expect(component.bg_cft).toBe('bg_blue');
      expect(component.bg).toBe('blue_w10');
    });
  });

  describe('back', () => {
    it('should call location.back', () => {
      component.back();
      expect(mockLocation.back).toHaveBeenCalled();
    });
  });
});
