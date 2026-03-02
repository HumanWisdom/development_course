import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of, throwError } from 'rxjs';
import { PodcastGuard } from './podcast.guard';
import { CommonService } from '../services/common.service';
import { SharedService } from '../services/shared.service';
import { ProgramType } from '../models/program-model';

describe('PodcastGuard', () => {
  let guard: PodcastGuard;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockCommonService: jasmine.SpyObj<CommonService>;
  let mockRoute: ActivatedRouteSnapshot;
  let mockState: RouterStateSnapshot;
  let originalProgramId: PropertyDescriptor | undefined;

  const createParamMap = (id: string | null) => ({
    get: (key: string) => (key === 'id' ? id : null)
  });

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRouter.navigate.and.returnValue(Promise.resolve(true));

    mockCommonService = jasmine.createSpyObj('CommonService', ['GetPodcastList']);

    mockRoute = {
      paramMap: createParamMap('podcast-123') as any
    } as ActivatedRouteSnapshot;

    mockState = {} as RouterStateSnapshot;

    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => ProgramType.Adults,
      configurable: true
    });
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');

    TestBed.configureTestingModule({
      providers: [
        PodcastGuard,
        { provide: Router, useValue: mockRouter },
        { provide: CommonService, useValue: mockCommonService }
      ]
    });

    guard = TestBed.inject(PodcastGuard);
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe('Subscriber access', () => {
    it('should allow access when user is subscriber (isloggedin=T and Subscriber=1)', (done) => {
      localStorage.setItem('isloggedin', 'T');
      localStorage.setItem('Subscriber', '1');

      guard.canActivate(mockRoute, mockState).subscribe((result) => {
        expect(result).toBe(true);
        expect(mockCommonService.GetPodcastList).not.toHaveBeenCalled();
        done();
      });
    });
  });

  describe('No podcast ID in route', () => {
    it('should allow access when podcast ID is not in route params', (done) => {
      const routeWithoutId = { paramMap: createParamMap(null) } as ActivatedRouteSnapshot;

      guard.canActivate(routeWithoutId, mockState).subscribe((result) => {
        expect(result).toBe(true);
        expect(mockCommonService.GetPodcastList).not.toHaveBeenCalled();
        done();
      });
    });
  });

  describe('GetPodcastList scenarios', () => {
    it('should allow access when podcast is free (isFree !== "0")', (done) => {
      const podcastList = [
        {
          PodcastID: 'podcast-123',
          ProgIDs: ['9'],
          isFree: '1'
        }
      ];
      mockCommonService.GetPodcastList.and.returnValue(of(podcastList));

      guard.canActivate(mockRoute, mockState).subscribe((result) => {
        expect(result).toBe(true);
        expect(mockRouter.navigate).not.toHaveBeenCalled();
        done();
      });
    });

    it('should redirect to trial and deny access when podcast is paid (isFree === "0")', (done) => {
      const podcastList = [
        {
          PodcastID: 'podcast-123',
          ProgIDs: ['9'],
          isFree: '0'
        }
      ];
      mockCommonService.GetPodcastList.and.returnValue(of(podcastList));

      guard.canActivate(mockRoute, mockState).subscribe((result) => {
        expect(result).toBe(false);
        expect(mockRouter.navigate).toHaveBeenCalledWith([
          '/adults/subscription/start-your-free-trial'
        ]);
        done();
      });
    });

    it('should allow access when podcast is not found in list', (done) => {
      const podcastList = [
        {
          PodcastID: 'other-podcast',
          ProgIDs: ['9'],
          isFree: '0'
        }
      ];
      mockCommonService.GetPodcastList.and.returnValue(of(podcastList));

      guard.canActivate(mockRoute, mockState).subscribe((result) => {
        expect(result).toBe(true);
        expect(mockRouter.navigate).not.toHaveBeenCalled();
        done();
      });
    });

    it('should allow access when podcast is not in current program (ProgIDs filter)', (done) => {
      const podcastList = [
        {
          PodcastID: 'podcast-123',
          ProgIDs: ['11'], // Teenagers
          isFree: '0'
        }
      ];
      mockCommonService.GetPodcastList.and.returnValue(of(podcastList));

      guard.canActivate(mockRoute, mockState).subscribe((result) => {
        expect(result).toBe(true);
        expect(mockRouter.navigate).not.toHaveBeenCalled();
        done();
      });
    });

    it('should allow access when list is empty', (done) => {
      mockCommonService.GetPodcastList.and.returnValue(of([]));

      guard.canActivate(mockRoute, mockState).subscribe((result) => {
        expect(result).toBe(true);
        expect(mockRouter.navigate).not.toHaveBeenCalled();
        done();
      });
    });

    it('should allow access when list is null/undefined', (done) => {
      mockCommonService.GetPodcastList.and.returnValue(of(null));

      guard.canActivate(mockRoute, mockState).subscribe((result) => {
        expect(result).toBe(true);
        expect(mockRouter.navigate).not.toHaveBeenCalled();
        done();
      });
    });
  });

  describe('API error handling', () => {
    it('should allow navigation when GetPodcastList fails', (done) => {
      mockCommonService.GetPodcastList.and.returnValue(
        throwError(() => new Error('API Error'))
      );

      guard.canActivate(mockRoute, mockState).subscribe((result) => {
        expect(result).toBe(true);
        expect(mockRouter.navigate).not.toHaveBeenCalled();
        done();
      });
    });
  });

  describe('Program-specific redirect path', () => {
    it('should use correct program name in redirect path', (done) => {
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => ProgramType.Teenagers,
        configurable: true
      });
      (SharedService.getprogramName as jasmine.Spy).and.returnValue('teenagers');
      const podcastList = [
        {
          PodcastID: 'podcast-123',
          ProgIDs: ['11'], // Teenagers
          isFree: '0'
        }
      ];
      mockCommonService.GetPodcastList.and.returnValue(of(podcastList));

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
