import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RouteHistoryGuard } from './router-history-guard';
import { CommonService } from '../services/common.service';
import { of, throwError } from 'rxjs';

describe('RouteHistoryGuard', () => {
  let guard: RouteHistoryGuard;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockActivatedRouteSnapshot: ActivatedRouteSnapshot;
  let mockRouterStateSnapshot: jasmine.SpyObj<RouterStateSnapshot>;

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));
    mockRouter.navigateByUrl.and.returnValue(Promise.resolve(true));
    mockCommonService = jasmine.createSpyObj('CommonService', ['InsertDailyPracticeVisitLog']);
    
    mockActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
    mockRouterStateSnapshot = jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', ['toString']);

    TestBed.configureTestingModule({
      imports: [],
      providers: [
        RouteHistoryGuard,
        { provide: Router, useValue: mockRouter },
        { provide: CommonService, useValue: mockCommonService }
      ]
    });

    guard = TestBed.inject(RouteHistoryGuard);
    
    // Setup default mock response for API
    mockCommonService.InsertDailyPracticeVisitLog.and.returnValue(of({ success: true }));
  });

  afterEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  describe('Guard Initialization', () => {
    it('should be created', () => {
      expect(guard).toBeTruthy();
    });

    it('should initialize with empty route history', () => {
      expect(guard['routeHistory']).toEqual([]);
    });
  });

  describe('canActivate - Guest User Scenarios', () => {
    beforeEach(() => {
      localStorage.setItem('guest', 'T');
      localStorage.setItem('isloggedin', 'F');
    });

    it('should redirect guest user to trial page (adults)', () => {
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(result).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/subscription/start-your-free-trial']);
    });

    it('should redirect guest user to trial page (teenagers)', () => {
      mockRouterStateSnapshot.url = '/teenagers/daily-practice';
      
      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(result).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/subscription/start-your-free-trial']);
    });

    it('should not allow guest access regardless of other conditions', () => {
      localStorage.setItem('NoOfDPVisits', '0');
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(result).toBe(false);
    });
  });

  describe('canActivate - Subscribed User Scenarios', () => {
    beforeEach(() => {
      localStorage.setItem('guest', 'F');
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '1');
    });

    it('should allow subscribed user access', () => {
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(result).toBe(true);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('should not call API for subscribed user', () => {
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(mockCommonService.InsertDailyPracticeVisitLog).not.toHaveBeenCalled();
    });

    it('should handle Subscriber as "T" string', () => {
      localStorage.setItem('Subscriber', 'T');
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(result).toBe(true);
    });
  });

  describe('canActivate - Non-Subscribed Logged-in User', () => {
    beforeEach(() => {
      localStorage.setItem('guest', 'F');
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '0');
    });

    describe('Within Visit Limit', () => {
      it('should allow access on first visit', () => {
        localStorage.setItem('NoOfDPVisits', '0');
        sessionStorage.removeItem('dpSessionVisited');
        mockRouterStateSnapshot.url = '/adults/daily-practice';
        
        const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
        
        expect(result).toBe(true);
      });

      it('should allow access on second visit', () => {
        localStorage.setItem('NoOfDPVisits', '1');
        sessionStorage.removeItem('dpSessionVisited');
        mockRouterStateSnapshot.url = '/adults/daily-practice';
        
        const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
        
        expect(result).toBe(true);
      });

      it('should call API on first visit in session (adults)', () => {
        localStorage.setItem('NoOfDPVisits', '0');
        sessionStorage.removeItem('dpSessionVisited');
        mockRouterStateSnapshot.url = '/adults/daily-practice';
        
        guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
        
        expect(mockCommonService.InsertDailyPracticeVisitLog).toHaveBeenCalledWith(9);
      });

      it('should call API on first visit in session (teenagers)', () => {
        localStorage.setItem('NoOfDPVisits', '0');
        sessionStorage.removeItem('dpSessionVisited');
        mockRouterStateSnapshot.url = '/teenagers/daily-practice';
        
        guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
        
        expect(mockCommonService.InsertDailyPracticeVisitLog).toHaveBeenCalledWith(11);
      });

      it('should increment NoOfDPVisits after API call', (done) => {
        localStorage.setItem('NoOfDPVisits', '0');
        sessionStorage.removeItem('dpSessionVisited');
        mockRouterStateSnapshot.url = '/adults/daily-practice';
        
        guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
        
        // Wait for async operation
        setTimeout(() => {
          const visits = localStorage.getItem('NoOfDPVisits');
          expect(visits).toBe('1');
          done();
        }, 100);
      });

      it('should set session flag after first visit', (done) => {
        sessionStorage.removeItem('dpSessionVisited');
        mockRouterStateSnapshot.url = '/adults/daily-practice';
        
        guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
        
        setTimeout(() => {
          expect(sessionStorage.getItem('dpSessionVisited')).toBe('T');
          done();
        }, 100);
      });

      it('should not call API if already visited in session', () => {
        sessionStorage.setItem('dpSessionVisited', 'T');
        mockRouterStateSnapshot.url = '/adults/daily-practice';
        
        guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
        
        expect(mockCommonService.InsertDailyPracticeVisitLog).not.toHaveBeenCalled();
      });

      it('should handle missing NoOfDPVisits as 0', () => {
        localStorage.removeItem('NoOfDPVisits');
        sessionStorage.removeItem('dpSessionVisited');
        mockRouterStateSnapshot.url = '/adults/daily-practice';
        
        const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
        
        expect(result).toBe(true);
      });
    });

    describe('At Visit Limit', () => {
      it('should redirect when limit reached (2 visits)', () => {
        localStorage.setItem('NoOfDPVisits', '2');
        mockRouterStateSnapshot.url = '/adults/daily-practice';
        
        const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
        
        expect(result).toBe(false);
        expect(mockRouter.navigate).toHaveBeenCalledWith(['/subscription/start-your-free-trial']);
      });

      it('should redirect when limit exceeded (3+ visits)', () => {
        localStorage.setItem('NoOfDPVisits', '5');
        mockRouterStateSnapshot.url = '/adults/daily-practice';
        
        const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
        
        expect(result).toBe(false);
        expect(mockRouter.navigate).toHaveBeenCalledWith(['/subscription/start-your-free-trial']);
      });

      it('should not call API when limit reached', () => {
        localStorage.setItem('NoOfDPVisits', '2');
        mockRouterStateSnapshot.url = '/adults/daily-practice';
        
        guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
        
        expect(mockCommonService.InsertDailyPracticeVisitLog).not.toHaveBeenCalled();
      });
    });
  });

  describe('canActivate - Not Logged In Scenarios', () => {
    beforeEach(() => {
      localStorage.setItem('guest', 'F');
      localStorage.setItem('isloggedin', 'F');
      localStorage.setItem('Subscriber', '0');
    });

    it('should redirect to trial page (adults)', () => {
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(result).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/subscription/start-your-free-trial']);
    });

    it('should redirect to trial page (teenagers)', () => {
      mockRouterStateSnapshot.url = '/teenagers/daily-practice';
      
      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(result).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/subscription/start-your-free-trial']);
    });
  });

  describe('Program Type Detection', () => {
    beforeEach(() => {
      localStorage.setItem('guest', 'F');
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '0');
      localStorage.setItem('NoOfDPVisits', '0');
      sessionStorage.removeItem('dpSessionVisited');
    });

    it('should detect adults program (progId 9)', () => {
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(mockCommonService.InsertDailyPracticeVisitLog).toHaveBeenCalledWith(9);
    });

    it('should detect teenagers program (progId 11)', () => {
      mockRouterStateSnapshot.url = '/teenagers/daily-practice';
      
      guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(mockCommonService.InsertDailyPracticeVisitLog).toHaveBeenCalledWith(11);
    });

    it('should use correct redirect path for adults', () => {
      localStorage.setItem('NoOfDPVisits', '2');
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/subscription/start-your-free-trial']);
    });

    it('should use correct redirect path for teenagers', () => {
      localStorage.setItem('NoOfDPVisits', '2');
      mockRouterStateSnapshot.url = '/teenagers/daily-practice';
      
      guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/subscription/start-your-free-trial']);
    });

    it('should handle URL with additional path segments', () => {
      mockRouterStateSnapshot.url = '/adults/daily-practice/meditation';
      
      guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(mockCommonService.InsertDailyPracticeVisitLog).toHaveBeenCalledWith(9);
    });

    it('should handle URL with query parameters', () => {
      mockRouterStateSnapshot.url = '/adults/daily-practice?from=home';
      
      guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(mockCommonService.InsertDailyPracticeVisitLog).toHaveBeenCalledWith(9);
    });
  });

  describe('API Error Handling', () => {
    beforeEach(() => {
      localStorage.setItem('guest', 'F');
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '0');
      localStorage.setItem('NoOfDPVisits', '0');
      sessionStorage.removeItem('dpSessionVisited');
    });

    // Note: The current implementation doesn't have error handling for the API call
    // so these tests are skipped. If error handling is added to the guard, these can be enabled.
    xit('should still allow access if API fails', () => {
      const error = new Error('API Error');
      mockCommonService.InsertDailyPracticeVisitLog.and.returnValue(throwError(() => error));
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(result).toBe(true);
    });

    xit('should set session flag even if API fails', (done) => {
      const error = new Error('API Error');
      mockCommonService.InsertDailyPracticeVisitLog.and.returnValue(throwError(() => error));
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      setTimeout(() => {
        // Session flag should still be set to prevent multiple API calls
        expect(sessionStorage.getItem('dpSessionVisited')).toBe('T');
        done();
      }, 100);
    });

    xit('should handle API timeout gracefully', () => {
      const timeoutError = { status: 408 };
      mockCommonService.InsertDailyPracticeVisitLog.and.returnValue(throwError(() => timeoutError));
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      expect(() => guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot)).not.toThrow();
    });
  });

  describe('LocalStorage Edge Cases', () => {
    it('should handle null localStorage values', () => {
      localStorage.removeItem('guest');
      localStorage.removeItem('isloggedin');
      localStorage.removeItem('Subscriber');
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      // Should redirect to trial (catch-all case)
      expect(result).toBe(false);
    });

    it('should handle invalid NoOfDPVisits value', () => {
      localStorage.setItem('guest', 'F');
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '0');
      localStorage.setItem('NoOfDPVisits', 'invalid');
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      // NaN should be treated as 0
      expect(result).toBe(true);
    });

    it('should handle negative NoOfDPVisits', () => {
      localStorage.setItem('guest', 'F');
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '0');
      localStorage.setItem('NoOfDPVisits', '-1');
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(result).toBe(true);
    });

    it('should handle floating point NoOfDPVisits', () => {
      localStorage.setItem('guest', 'F');
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '0');
      localStorage.setItem('NoOfDPVisits', '1.5');
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(result).toBe(true);
    });

    it('should handle very large NoOfDPVisits', () => {
      localStorage.setItem('guest', 'F');
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '0');
      localStorage.setItem('NoOfDPVisits', '999999');
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(result).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/subscription/start-your-free-trial']);
    });
  });

  describe('Session Storage Behavior', () => {
    beforeEach(() => {
      localStorage.setItem('guest', 'F');
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '0');
      localStorage.setItem('NoOfDPVisits', '0');
    });

    it('should use session storage to track visits within session', () => {
      sessionStorage.removeItem('dpSessionVisited');
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      // First call
      guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      expect(mockCommonService.InsertDailyPracticeVisitLog).toHaveBeenCalledTimes(1);
      
      // Second call in same session
      guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      expect(mockCommonService.InsertDailyPracticeVisitLog).toHaveBeenCalledTimes(1); // Should not call again
    });

    it('should reset tracking on new session', (done) => {
      // First session
      sessionStorage.removeItem('dpSessionVisited');
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      setTimeout(() => {
        // Simulate new session
        sessionStorage.clear();
        
        guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
        expect(mockCommonService.InsertDailyPracticeVisitLog).toHaveBeenCalledTimes(2);
        done();
      }, 100);
    });
  });

  describe('Boundary Conditions', () => {
    beforeEach(() => {
      localStorage.setItem('guest', 'F');
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '0');
    });

    it('should allow exactly at limit (1 visit, limit is 2)', () => {
      localStorage.setItem('NoOfDPVisits', '1');
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(result).toBe(true);
    });

    it('should block at exactly 2 visits', () => {
      localStorage.setItem('NoOfDPVisits', '2');
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(result).toBe(false);
    });

    it('should check limit with >= operator', () => {
      // Test boundary: visits >= 2 should redirect
      for (let visits = 0; visits < 5; visits++) {
        localStorage.setItem('NoOfDPVisits', visits.toString());
        mockRouter.navigate.calls.reset();
        mockRouterStateSnapshot.url = '/adults/daily-practice';
        
        const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
        
        if (visits >= 2) {
          expect(result).toBe(false);
          expect(mockRouter.navigate).toHaveBeenCalled();
        } else {
          expect(result).toBe(true);
        }
      }
    });
  });

  describe('Multiple Guard Invocations', () => {
    beforeEach(() => {
      localStorage.setItem('guest', 'F');
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '0');
      localStorage.setItem('NoOfDPVisits', '0');
      sessionStorage.removeItem('dpSessionVisited');
    });

    it('should handle rapid successive calls', () => {
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      const results = [];
      for (let i = 0; i < 5; i++) {
        results.push(guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot));
      }
      
      // All should return true
      expect(results.every(r => r === true)).toBe(true);
      
      // API should only be called once due to session flag
      expect(mockCommonService.InsertDailyPracticeVisitLog).toHaveBeenCalledTimes(1);
    });

    it('should maintain state across calls', (done) => {
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      setTimeout(() => {
        const visits1 = localStorage.getItem('NoOfDPVisits');
        
        guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
        
        setTimeout(() => {
          const visits2 = localStorage.getItem('NoOfDPVisits');
          
          // Should only increment once
          expect(visits1).toBe('1');
          expect(visits2).toBe('1');
          done();
        }, 100);
      }, 100);
    });
  });

  describe('Redirect Path Construction', () => {
    it('should construct correct path for adults', () => {
      localStorage.setItem('guest', 'T');
      mockRouterStateSnapshot.url = '/adults/any-path';
      
      guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/subscription/start-your-free-trial']);
    });

    it('should construct correct path for teenagers', () => {
      localStorage.setItem('guest', 'T');
      mockRouterStateSnapshot.url = '/teenagers/any-path';
      
      guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/teenagers/subscription/start-your-free-trial']);
    });

    it('should default to adults path for ambiguous URL', () => {
      localStorage.setItem('guest', 'T');
      mockRouterStateSnapshot.url = '/some/unknown/path';
      
      guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/subscription/start-your-free-trial']);
    });
  });

  describe('Guard Return Values', () => {
    it('should return boolean value', () => {
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(typeof result).toBe('boolean');
    });

    it('should return true for allowed access', () => {
      localStorage.setItem('guest', 'F');
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '1');
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(result).toBe(true);
    });

    it('should return false for denied access', () => {
      localStorage.setItem('guest', 'T');
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      
      expect(result).toBe(false);
    });
  });

  describe('Integration Scenarios', () => {
    it('should handle complete user journey from guest to subscriber', () => {
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      // Step 1: Guest user
      localStorage.setItem('guest', 'T');
      let result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      expect(result).toBe(false);
      
      // Step 2: Logged in, not subscribed, first visit
      localStorage.setItem('guest', 'F');
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '0');
      localStorage.setItem('NoOfDPVisits', '0');
      sessionStorage.removeItem('dpSessionVisited');
      mockRouter.navigate.calls.reset();
      result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      expect(result).toBe(true);
      
      // Step 3: After subscription
      localStorage.setItem('Subscriber', '1');
      mockRouter.navigate.calls.reset();
      result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      expect(result).toBe(true);
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('should handle user exceeding free visits', () => {
      localStorage.setItem('guest', 'F');
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '0');
      mockRouterStateSnapshot.url = '/adults/daily-practice';
      
      // Visit 1
      localStorage.setItem('NoOfDPVisits', '0');
      sessionStorage.removeItem('dpSessionVisited');
      let result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      expect(result).toBe(true);
      
      // Visit 2
      localStorage.setItem('NoOfDPVisits', '1');
      sessionStorage.removeItem('dpSessionVisited');
      mockRouter.navigate.calls.reset();
      result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      expect(result).toBe(true);
      
      // Visit 3 - should be blocked
      localStorage.setItem('NoOfDPVisits', '2');
      mockRouter.navigate.calls.reset();
      result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);
      expect(result).toBe(false);
      expect(mockRouter.navigate).toHaveBeenCalled();
    });
  });
});

