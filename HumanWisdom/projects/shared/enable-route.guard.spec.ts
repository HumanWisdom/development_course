import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { EnableRouteGuard } from './enable-route.guard';
import { SharedService } from './services/shared.service';
import { ProgramType } from './models/program-model';

describe('EnableRouteGuard', () => {
  let guard: EnableRouteGuard;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockProgramId: number;

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    mockProgramId = ProgramType.Adults;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });

    TestBed.configureTestingModule({
      providers: [
        EnableRouteGuard,
        { provide: Router, useValue: mockRouter }
      ]
    });

    guard = TestBed.inject(EnableRouteGuard);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should create', () => {
    expect(guard).toBeTruthy();
  });

  describe('canActivate', () => {
    it('should return true when user is logged in (isloggedin is T)', () => {
      localStorage.setItem('isloggedin', 'T');
      const result = guard.canActivate();
      expect(result).toBe(true);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('should return false and navigate to adults login when not logged in and ProgramId is Adults', () => {
      localStorage.setItem('isloggedin', 'F');
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });

      const result = guard.canActivate();
      expect(result).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/onboarding/login']);
    });

    it('should return false and navigate to teenagers login when not logged in and ProgramId is Teenagers', () => {
      localStorage.setItem('isloggedin', 'F');
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });

      const result = guard.canActivate();
      expect(result).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/onboarding/login']);
    });

    it('should return false when isloggedin is null', () => {
      localStorage.removeItem('isloggedin');
      const result = guard.canActivate();
      expect(result).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/adults/onboarding/login']);
    });
  });
});
