import { TestBed } from '@angular/core/testing';
import { HomeStateService } from './home-state.service';
import { SharedService } from './shared.service';
import { ProgramType } from '../models/program-model';

describe('HomeStateService', () => {
  let service: HomeStateService;
  let originalProgramId: PropertyDescriptor | undefined;

  beforeEach(() => {
    originalProgramId = Object.getOwnPropertyDescriptor(SharedService, 'ProgramId');
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => ProgramType.Adults,
      configurable: true
    });
    localStorage.clear();

    TestBed.configureTestingModule({
      providers: [HomeStateService]
    });
    service = TestBed.inject(HomeStateService);
  });

  afterEach(() => {
    if (originalProgramId) {
      Object.defineProperty(SharedService, 'ProgramId', originalProgramId);
    }
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('state$', () => {
    it('should emit initial state', (done) => {
      service.state$.subscribe((state) => {
        expect(state).toBeDefined();
        expect(state.expandedSections).toEqual({});
        expect(state.showAllCards).toEqual({});
        expect(state.cachedContent).toEqual({});
        expect(state.lastActivePreference).toBeNull();
        expect(state.seenCards).toEqual({});
        done();
      });
    });
  });

  describe('setSectionExpanded / getSectionExpanded', () => {
    it('should set and get section expanded state', () => {
      service.setSectionExpanded('section1', true);
      expect(service.getSectionExpanded('section1')).toBe(true);

      service.setSectionExpanded('section1', false);
      expect(service.getSectionExpanded('section1')).toBe(false);
    });

    it('should return undefined for section never set', () => {
      expect(service.getSectionExpanded('unknown')).toBeUndefined();
    });
  });

  describe('setShowAllCards / getShowAllCards', () => {
    it('should set and get show all cards state', () => {
      service.setShowAllCards('section1', true);
      expect(service.getShowAllCards('section1')).toBe(true);

      service.setShowAllCards('section1', false);
      expect(service.getShowAllCards('section1')).toBe(false);
    });

    it('should return false for section never set', () => {
      expect(service.getShowAllCards('unknown')).toBe(false);
    });
  });

  describe('setCachedContent / getCachedContent', () => {
    it('should cache and retrieve content', () => {
      const content = [{ id: 1, title: 'Test' }];
      service.setCachedContent('pref1', content);
      expect(service.getCachedContent('pref1')).toEqual(content);
    });

    it('should return null for uncached preference', () => {
      expect(service.getCachedContent('unknown')).toBeNull();
    });
  });

  describe('setActivePreference / getActivePreference', () => {
    it('should set and get active preference', () => {
      service.setActivePreference('pref1');
      expect(service.getActivePreference()).toBe('pref1');

      service.setActivePreference('pref2');
      expect(service.getActivePreference()).toBe('pref2');
    });
  });

  describe('getCurrentState', () => {
    it('should return current state snapshot', () => {
      service.setSectionExpanded('s1', true);
      const state = service.getCurrentState();
      expect(state.expandedSections['s1']).toBe(true);
    });
  });

  describe('resetState', () => {
    it('should reset all state to initial', () => {
      service.setSectionExpanded('s1', true);
      service.setShowAllCards('s1', true);
      service.setCachedContent('p1', []);
      service.setActivePreference('p1');

      service.resetState();

      expect(service.getSectionExpanded('s1')).toBeUndefined();
      expect(service.getShowAllCards('s1')).toBe(false);
      expect(service.getCachedContent('p1')).toBeNull();
      expect(service.getActivePreference()).toBeNull();
    });
  });

  describe('clearCache', () => {
    it('should clear cached content only', () => {
      service.setCachedContent('p1', []);
      service.setSectionExpanded('s1', true);

      service.clearCache();

      expect(service.getCachedContent('p1')).toBeNull();
      expect(service.getSectionExpanded('s1')).toBe(true);
    });
  });

  describe('clearProgramData', () => {
    it('should remove program data from localStorage', () => {
      service.setSectionExpanded('s1', true);

      service.clearProgramData(ProgramType.Adults);

      const key = `homeState_${ProgramType.Adults}`;
      expect(localStorage.getItem(key)).toBeNull();
    });
  });

  describe('clearOtherProgramData', () => {
    it('should clear Teenagers data when current is Adults', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => ProgramType.Adults,
        configurable: true
      });
      const teenKey = `homeState_${ProgramType.Teenagers}`;
      localStorage.setItem(teenKey, JSON.stringify({ expandedSections: { s1: true } }));

      service.clearOtherProgramData();

      expect(localStorage.getItem(teenKey)).toBeNull();
    });

    it('should clear Adults data when current is Teenagers', () => {
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => ProgramType.Teenagers,
        configurable: true
      });
      const newService = new HomeStateService();
      const adultKey = `homeState_${ProgramType.Adults}`;
      localStorage.setItem(adultKey, JSON.stringify({ expandedSections: { s1: true } }));

      newService.clearOtherProgramData();

      expect(localStorage.getItem(adultKey)).toBeNull();
    });
  });

  describe('markCardAsSeen / isCardSeen / getSeenCards', () => {
    it('should mark card as seen and check status', () => {
      expect(service.isCardSeen('card1')).toBe(false);

      service.markCardAsSeen('card1');
      expect(service.isCardSeen('card1')).toBe(true);
    });

    it('should return all seen cards', () => {
      service.markCardAsSeen('card1');
      service.markCardAsSeen('card2');

      const seen = service.getSeenCards();
      expect(seen['card1']).toBe(true);
      expect(seen['card2']).toBe(true);
    });
  });

  describe('persistence', () => {
    it('should persist state to localStorage', () => {
      service.setSectionExpanded('s1', true);
      const key = `homeState_${ProgramType.Adults}`;
      const stored = JSON.parse(localStorage.getItem(key));
      expect(stored.expandedSections['s1']).toBe(true);
    });

    it('should load state from localStorage on init', () => {
      const key = `homeState_${ProgramType.Adults}`;
      localStorage.setItem(
        key,
        JSON.stringify({ expandedSections: { s1: true } })
      );

      const newService = new HomeStateService();
      expect(newService.getSectionExpanded('s1')).toBe(true);
    });
  });
});
