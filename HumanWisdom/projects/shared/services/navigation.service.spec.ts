import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NavigationService } from './navigation.service';
import { SharedService } from './shared.service';

describe('NavigationService', () => {
  let service: NavigationService;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    Object.defineProperty(mockRouter, 'url', {
      get: () => '/adults/home',
      configurable: true
    });

    spyOn(SharedService, 'getDashboardUrls').and.returnValue('/adults/home' as any);
    spyOn(SharedService, 'getprogramName').and.returnValue('adults');

    TestBed.configureTestingModule({
      providers: [
        NavigationService,
        { provide: Router, useValue: mockRouter }
      ]
    });

    service = TestBed.inject(NavigationService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addToHistory', () => {
    it('should not add url containing add-to-cart', () => {
      service.addToHistory('/adults/onboarding/add-to-cart');
      expect(service.getBackLink()).toBe('/adults/home');
    });

    it('should add url to history when valid (s0 exception)', () => {
      service.addToHistory('/adults/path/s0');
      expect(service.getBackLink()).toBe('/adults/path/s0');
    });

    it('should not add duplicate url', () => {
      service.addToHistory('/adults/path/s0');
      service.addToHistory('/adults/path/s0');
      expect(service.getBackLink()).toBe('/adults/path/s0');
    });

    it('should add url when ends with 001', () => {
      service.addToHistory('/adults/module/s001');
      expect(service.getBackLink()).toBe('/adults/module/s001');
    });

    it('should add exception urls like micro-learning', () => {
      service.addToHistory('/adults/micro-learning');
      expect(service.getBackLink()).toBe('/adults/micro-learning');
    });

    it('should not add when backClicked is true', () => {
      service.addToHistory('/adults/micro-learning');
      (service as any).backClicked = true;
      service.addToHistory('/adults/blog-article/123');
      expect(service.getBackLink()).toBe('/adults/micro-learning');
    });
  });

  describe('dontPushToHistory', () => {
    it('should return true for wisdom-survey', () => {
      expect(service.dontPushToHistory('/adults/wisdom-survey')).toBe(true);
    });

    it('should return true for wisdom-score', () => {
      expect(service.dontPushToHistory('/adults/wisdom-score')).toBe(true);
    });

    it('should return undefined for other urls', () => {
      expect(service.dontPushToHistory('/adults/home')).toBeUndefined();
    });
  });

  describe('endsWith001ForModule', () => {
    it('should return true for url ending with 001', () => {
      expect(service.endsWith001ForModule('s001')).toBe(true);
      expect(service.endsWith001ForModule('module001')).toBe(true);
    });

    it('should return false for url not ending with 001', () => {
      expect(service.endsWith001ForModule('s002')).toBe(false);
      expect(service.endsWith001ForModule('s00')).toBe(false);
    });
  });

  describe('getBackLink', () => {
    it('should return dashboard url when history is empty', () => {
      expect(service.getBackLink()).toBe('/adults/home');
    });

    it('should return last history entry when not empty', () => {
      service.addToHistory('/adults/micro-learning');
      service.addToHistory('/adults/blog-article/1');
      expect(service.getBackLink()).toBe('/adults/blog-article/1');
    });
  });

  describe('getLastUrlVisited', () => {
    it('should return null when history has less than 2 entries', () => {
      expect(service.getLastUrlVisited()).toBeNull();
      service.addToHistory('/adults/page1');
      expect(service.getLastUrlVisited()).toBeNull();
    });

    it('should return second to last when history has 2+ entries', () => {
      service.addToHistory('/adults/micro-learning');
      service.addToHistory('/adults/blog-article/1');
      expect(service.getLastUrlVisited()).toBe('/adults/micro-learning');
    });
  });

  describe('goBack', () => {
    it('should return null and log when history is empty', () => {
      const consoleSpy = spyOn(console, 'log');
      expect(service.goBack()).toBeNull();
      expect(consoleSpy).toHaveBeenCalledWith('Cannot go back. History is empty.');
    });

    it('should return previous path and pop history', () => {
      service.addToHistory('/adults/micro-learning');
      service.addToHistory('/adults/blog-article/1');
      const result = service.goBack();
      expect(result).toBe('/adults/micro-learning');
      expect(service.getBackLink()).toBe('/adults/micro-learning');
    });
  });

  describe('navigateToBackLink', () => {
    it('should return dashboard when not from micro learning and no history', () => {
      const result = service.navigateToBackLink();
      expect(result).toBe('/adults/home');
    });

    it('should return returnUrl when fromMicroLearningEnd and returnUrl set', () => {
      localStorage.setItem('fromMicroLearningEnd', 'true');
      localStorage.setItem('microLearningEndUrl', '/adults/micro-learning/inner/123');
      service.addToHistory('/adults/some-page');
      const result = service.navigateToBackLink();
      expect(result).toBe('/adults/micro-learning/inner/123?isEnd=true');
    });

    it('should build returnUrl from m_learningId when microLearningEndUrl not set', () => {
      localStorage.setItem('fromMicroLearningEnd', 'true');
      localStorage.setItem('m_learningId', 'ml-456');
      const result = service.navigateToBackLink();
      expect(result).toBe('/adults/micro-learning/inner/ml-456?isEnd=true');
    });

    it('should append isEnd=true with & when returnUrl has query params', () => {
      localStorage.setItem('fromMicroLearningEnd', 'true');
      localStorage.setItem('microLearningEndUrl', '/adults/micro-learning/inner/123?foo=bar');
      service.addToHistory('/x');
      const result = service.navigateToBackLink();
      expect(result).toContain('isEnd=true');
    });
  });

  describe('navigateToSkippedBackLink', () => {
    it('should return dashboard when no history', () => {
      const result = service.navigateToSkippedBackLink();
      expect(result).toBe('/adults/home');
    });

    it('should return previous path when history exists', () => {
      service.addToHistory('/adults/micro-learning');
      service.addToHistory('/adults/home');
      service.addToHistory('/adults/blog-article/1');
      const result = service.navigateToSkippedBackLink();
      expect(result).toBe('/adults/micro-learning');
    });
  });
});
