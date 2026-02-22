import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of, throwError } from 'rxjs';
import { MicroLearningGuard } from './micro-learning.guard';
import { CommonService } from '../services/common.service';
import { SharedService } from '../services/shared.service';
import { ProgramType } from '../models/program-model';

describe('MicroLearningGuard', () => {
  let guard: MicroLearningGuard;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockRoute: ActivatedRouteSnapshot;
  let mockState: RouterStateSnapshot;

  const createParamMap = (id: string | null) => ({
    get: (key: string) => (key === 'id' ? id : null)
  });

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    mockCommonService = jasmine.createSpyObj('CommonService', ['GetMicrolearningList']);

    mockRoute = {
      paramMap: createParamMap('micro-123') as any
    } as ActivatedRouteSnapshot;

    mockState = { url: '/adults/micro-learning/inner/micro-123' } as RouterStateSnapshot;

    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => ProgramType.Adults,
      configurable: true
    });
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');
  });

  afterEach(() => {
    localStorage.clear();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MicroLearningGuard,
        { provide: Router, useValue: mockRouter },
        { provide: CommonService, useValue: mockCommonService }
      ]
    });

    guard = TestBed.inject(MicroLearningGuard);
  });

  describe('Subscriber access', () => {
    it('should allow access when user is subscriber (isloggedin=T and Subscriber=1)', (done) => {
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '1');

      guard.canActivate(mockRoute, mockState).subscribe((result) => {
        expect(result).toBe(true);
        expect(mockCommonService.GetMicrolearningList).not.toHaveBeenCalled();
        done();
      });
    });
  });

  describe('No content ID in route', () => {
    it('should allow access when content ID is not in route params (and not /end url)', (done) => {
      const routeWithoutId = { paramMap: createParamMap(null) } as ActivatedRouteSnapshot;
      const stateWithoutEnd = { url: '/adults/micro-learning' } as RouterStateSnapshot;

      guard.canActivate(routeWithoutId, stateWithoutEnd).subscribe((result) => {
        expect(result).toBe(true);
        expect(mockCommonService.GetMicrolearningList).not.toHaveBeenCalled();
        done();
      });
    });

    it('should use m_learningId from localStorage when content ID is missing and url includes /end', (done) => {
      const routeWithoutId = { paramMap: createParamMap(null) } as ActivatedRouteSnapshot;
      const stateWithEnd = { url: '/adults/micro-learning/inner/123/end' } as RouterStateSnapshot;
      localStorage.setItem('m_learningId', 'micro-456');

      const microList = [
        { microlearningID: 'micro-456', isFree: '1' }
      ];
      mockCommonService.GetMicrolearningList.and.returnValue(of(microList));

      guard.canActivate(routeWithoutId, stateWithEnd).subscribe((result) => {
        expect(result).toBe(true);
        expect(mockCommonService.GetMicrolearningList).toHaveBeenCalledWith(ProgramType.Adults);
        expect(mockRouter.navigate).not.toHaveBeenCalled();
        done();
      });
    });

    it('should redirect when content ID from m_learningId is paid and url includes /end', (done) => {
      const routeWithoutId = { paramMap: createParamMap(null) } as ActivatedRouteSnapshot;
      const stateWithEnd = { url: '/adults/micro-learning/end' } as RouterStateSnapshot;
      localStorage.setItem('m_learningId', 'micro-paid');

      const microList = [{ microlearningID: 'micro-paid', isFree: '0' }];
      mockCommonService.GetMicrolearningList.and.returnValue(of(microList));

      guard.canActivate(routeWithoutId, stateWithEnd).subscribe((result) => {
        expect(result).toBe(false);
        expect(mockRouter.navigate).toHaveBeenCalledWith([
          '/adults/subscription/start-your-free-trial'
        ]);
        done();
      });
    });
  });

  describe('GetMicrolearningList scenarios', () => {
    it('should allow access when content is free (isFree !== "0")', (done) => {
      const microList = [
        { microlearningID: 'micro-123', isFree: '1' }
      ];
      mockCommonService.GetMicrolearningList.and.returnValue(of(microList));

      guard.canActivate(mockRoute, mockState).subscribe((result) => {
        expect(result).toBe(true);
        expect(mockCommonService.GetMicrolearningList).toHaveBeenCalledWith(ProgramType.Adults);
        expect(mockRouter.navigate).not.toHaveBeenCalled();
        done();
      });
    });

    it('should redirect to trial and deny access when content is paid (isFree === "0")', (done) => {
      const microList = [
        { microlearningID: 'micro-123', isFree: '0' }
      ];
      mockCommonService.GetMicrolearningList.and.returnValue(of(microList));

      guard.canActivate(mockRoute, mockState).subscribe((result) => {
        expect(result).toBe(false);
        expect(mockRouter.navigate).toHaveBeenCalledWith([
          '/adults/subscription/start-your-free-trial'
        ]);
        done();
      });
    });

    it('should allow access when content is not found in list', (done) => {
      const microList = [
        { microlearningID: 'other-micro', isFree: '0' }
      ];
      mockCommonService.GetMicrolearningList.and.returnValue(of(microList));

      guard.canActivate(mockRoute, mockState).subscribe((result) => {
        expect(result).toBe(true);
        expect(mockRouter.navigate).not.toHaveBeenCalled();
        done();
      });
    });

    it('should allow access when list is empty', (done) => {
      mockCommonService.GetMicrolearningList.and.returnValue(of([]));

      guard.canActivate(mockRoute, mockState).subscribe((result) => {
        expect(result).toBe(true);
        expect(mockRouter.navigate).not.toHaveBeenCalled();
        done();
      });
    });

    it('should allow access when list is null/undefined', (done) => {
      mockCommonService.GetMicrolearningList.and.returnValue(of(null));

      guard.canActivate(mockRoute, mockState).subscribe((result) => {
        expect(result).toBe(true);
        expect(mockRouter.navigate).not.toHaveBeenCalled();
        done();
      });
    });
  });

  describe('API error handling', () => {
    it('should allow navigation when GetMicrolearningList fails', (done) => {
      mockCommonService.GetMicrolearningList.and.returnValue(
        throwError(() => new Error('API Error'))
      );

      guard.canActivate(mockRoute, mockState).subscribe((result) => {
        expect(result).toBe(true);
        expect(mockRouter.navigate).not.toHaveBeenCalled();
        done();
      });
    });
  });

  describe('Program-specific behavior', () => {
    it('should call GetMicrolearningList with correct ProgramId', (done) => {
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => ProgramType.Teenagers,
        configurable: true
      });
      const microList = [{ microlearningID: 'micro-123', isFree: '1' }];
      mockCommonService.GetMicrolearningList.and.returnValue(of(microList));

      guard.canActivate(mockRoute, mockState).subscribe(() => {
        expect(mockCommonService.GetMicrolearningList).toHaveBeenCalledWith(ProgramType.Teenagers);
        done();
      });
    });

    it('should use correct program name in redirect path', (done) => {
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => ProgramType.Teenagers,
        configurable: true
      });
      (SharedService.getprogramName as jasmine.Spy).and.returnValue('teenagers');
      const microList = [{ microlearningID: 'micro-123', isFree: '0' }];
      mockCommonService.GetMicrolearningList.and.returnValue(of(microList));

      guard.canActivate(mockRoute, mockState).subscribe((result) => {
        expect(result).toBe(false);
        expect(mockRouter.navigate).toHaveBeenCalledWith([
          '/teenagers/subscription/start-your-free-trial'
        ]);
        done();
      });
    });
  });
});
