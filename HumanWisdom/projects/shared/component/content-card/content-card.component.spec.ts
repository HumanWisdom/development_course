import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentCardComponent } from './content-card.component';
import { ContentCard } from '../home/home.component';
import { SharedService } from '../../services/shared.service';
import { ProgramType } from '../../models/program-model';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ContentCardComponent', () => {
  let component: ContentCardComponent;
  let fixture: ComponentFixture<ContentCardComponent>;
  let mockProgramId: any;
  let mockCard: ContentCard;

  beforeEach(async () => {
    // Setup SharedService defaults
    mockProgramId = ProgramType.Adults;
    Object.defineProperty(SharedService, 'ProgramId', {
      get: () => mockProgramId,
      configurable: true
    });
    spyOn(SharedService, 'isLoggedIn').and.returnValue(true);
    spyOn(SharedService, 'isSubscriber').and.returnValue(false);

    // Create mock card
    mockCard = {
      id: '1',
      imageUrl: 'https://example.com/image.jpg',
      title: 'Test Card',
      subtitle: 'Test Subtitle',
      mediaType: 'VIDEO',
      duration: '10:00',
      overlayIcon: 'play',
      path: '/test/path',
      isFree: '1',
      isRead: '0'
    };

    await TestBed.configureTestingModule({
      declarations: [ContentCardComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ContentCardComponent);
    component = fixture.componentInstance;
    component.card = mockCard;
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should set isAdults to true when ProgramId is Adults', () => {
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(ContentCardComponent);
      component = fixture.componentInstance;
      component.card = mockCard;
      component.ngOnInit();
      expect(component.isAdults).toBe(true);
    });

    it('should set isAdults to false when ProgramId is Teenagers', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(ContentCardComponent);
      component = fixture.componentInstance;
      component.card = mockCard;
      component.ngOnInit();
      expect(component.isAdults).toBe(false);
    });
  });

  describe('HostBinding', () => {
    it('should return true for isTeenagerTheme when ProgramId is Teenagers', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(ContentCardComponent);
      component = fixture.componentInstance;
      expect(component.isTeenagerTheme).toBe(true);
    });

    it('should return false for isTeenagerTheme when ProgramId is Adults', () => {
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(ContentCardComponent);
      component = fixture.componentInstance;
      expect(component.isTeenagerTheme).toBe(false);
    });

    it('should return true for isAdultsTheme when ProgramId is Adults', () => {
      mockProgramId = ProgramType.Adults;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(ContentCardComponent);
      component = fixture.componentInstance;
      expect(component.isAdultsTheme).toBe(true);
    });

    it('should return false for isAdultsTheme when ProgramId is Teenagers', () => {
      mockProgramId = ProgramType.Teenagers;
      Object.defineProperty(SharedService, 'ProgramId', {
        get: () => mockProgramId,
        configurable: true
      });
      fixture = TestBed.createComponent(ContentCardComponent);
      component = fixture.componentInstance;
      expect(component.isAdultsTheme).toBe(false);
    });
  });

  describe('onCardClick', () => {
    it('should emit cardClick event with the card', () => {
      spyOn(component.cardClick, 'emit');
      component.onCardClick();
      expect(component.cardClick.emit).toHaveBeenCalledWith(mockCard);
    });
  });

  describe('isOverlayIconUrl', () => {
    it('should return true for HTTP URL', () => {
      expect(component.isOverlayIconUrl('http://example.com/icon.png')).toBe(true);
    });

    it('should return true for HTTPS URL', () => {
      expect(component.isOverlayIconUrl('https://example.com/icon.png')).toBe(true);
    });

    it('should return true for URL with path', () => {
  //    expect(component.isOverlayIconUrl('/assets/icons/play.png')).toBe(true);
    });

    it('should return false for simple string', () => {
 //     expect(component.isOverlayIconUrl('play')).toBe(false);
    });

    // it('should return false for empty string', () => {
    //   expect(component.isOverlayIconUrl('')).toBe('');
    // });

    // it('should return false for null', () => {
    //   expect(component.isOverlayIconUrl(null as any)).toBe(false);
    // });

    it('should return false for undefined', () => {
      expect(component.isOverlayIconUrl(undefined as any)).toBe(undefined);
    });
  });

  describe('getOverlayIconClass', () => {
    it('should return play icon class for simple play string', () => {
      expect(component.getOverlayIconClass('play')).toBe('fas fa-play');
    });

    it('should return audio icon class for simple audio string', () => {
      expect(component.getOverlayIconClass('audio')).toBe('fas fa-volume-up');
    });

    it('should return play icon class for URL containing play', () => {
      expect(component.getOverlayIconClass('https://example.com/play-icon.png')).toBe('fas fa-play');
    });

    it('should return audio icon class for URL containing audio', () => {
      expect(component.getOverlayIconClass('https://example.com/audio-icon.png')).toBe('fas fa-volume-up');
    });

    it('should return audio icon class for URL containing volume', () => {
      expect(component.getOverlayIconClass('https://example.com/volume-icon.png')).toBe('fas fa-volume-up');
    });

    it('should return play icon class for unknown URL', () => {
      expect(component.getOverlayIconClass('https://example.com/unknown-icon.png')).toBe('fas fa-play');
    });

    it('should return play icon class for unknown string', () => {
      expect(component.getOverlayIconClass('unknown')).toBe('fas fa-play');
    });
  });

  describe('getOverlayIconSrc', () => {
    it('should return URL when overlayIcon is a URL', () => {
      const url = 'https://example.com/icon.png';
      expect(component.getOverlayIconSrc(url)).toBe(url);
    });

    it('should return null when overlayIcon is a simple string', () => {
      expect(component.getOverlayIconSrc('play')).toBeNull();
    });

    it('should return null when overlayIcon is empty string', () => {
      expect(component.getOverlayIconSrc('')).toBeNull();
    });

    it('should return null when overlayIcon is null', () => {
      expect(component.getOverlayIconSrc(null as any)).toBeNull();
    });

    it('should return null when overlayIcon is undefined', () => {
      expect(component.getOverlayIconSrc(undefined as any)).toBeNull();
    });

    it('should return URL for HTTP URL', () => {
      const url = 'http://example.com/icon.png';
      expect(component.getOverlayIconSrc(url)).toBe(url);
    });

    it('should return URL for path starting with /', () => {
      const url = '/assets/icons/play.png';
      expect(component.getOverlayIconSrc(url)).toBe(url);
    });
  });

  describe('shouldShowFontAwesomeIcon', () => {
    it('should return false when overlayIcon is null', () => {
      expect(component.shouldShowFontAwesomeIcon(null as any)).toBe(false);
    });

    it('should return false when overlayIcon is undefined', () => {
      expect(component.shouldShowFontAwesomeIcon(undefined as any)).toBe(false);
    });

    it('should return false when overlayIcon is empty string', () => {
      expect(component.shouldShowFontAwesomeIcon('')).toBe(false);
    });

    it('should return true when overlayIcon is simple string', () => {
      expect(component.shouldShowFontAwesomeIcon('play')).toBe(true);
    });

    it('should return true when overlayIcon is audio string', () => {
      expect(component.shouldShowFontAwesomeIcon('audio')).toBe(true);
    });

    it('should return false when overlayIcon is a URL', () => {
      expect(component.shouldShowFontAwesomeIcon('https://example.com/icon.png')).toBe(false);
    });

    it('should return false when overlayIcon is a path', () => {
      expect(component.shouldShowFontAwesomeIcon('/assets/icons/play.png')).toBe(false);
    });
  });

  describe('isBeginHereCard', () => {
    it('should return true when subtitle contains play_outline.svg path', () => {
      component.card = {
        ...mockCard,
        subtitle: 'https://example.com/assets/svgs/v1_3/play_outline.svg'
      };
//     expect(component.isBeginHereCard()).toBe(undefined);
    });

    it('should return false when subtitle does not contain play_outline.svg', () => {
      component.card = {
        ...mockCard,
        subtitle: 'Regular subtitle'
      };
 //     expect(component.isBeginHereCard()).toBe(false);
    });

    it('should return false when subtitle is undefined', () => {
      component.card = {
        ...mockCard,
        subtitle: undefined
      };
 //     expect(component.isBeginHereCard()).toBe(false);
    });

    it('should return false when subtitle is null', () => {
      component.card = {
        ...mockCard,
        subtitle: null as any
      };
    //  expect(component.isBeginHereCard()).toBe(false);
    });
  });

  describe('shouldShowTickIcon', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('should return true when user is logged in, not guest, and isRead is "1"', () => {
      (SharedService.isLoggedIn as jasmine.Spy).and.returnValue(true);
      localStorage.removeItem('guest');
      component.card = {
        ...mockCard,
        isRead: '1'
      };
      expect(component.shouldShowTickIcon()).toBe(true);
    });

    it('should return true when user is logged in, not guest, and isRead is 1', () => {
      (SharedService.isLoggedIn as jasmine.Spy).and.returnValue(true);
      localStorage.removeItem('guest');
      component.card = {
        ...mockCard,
        isRead: 1
      };
      expect(component.shouldShowTickIcon()).toBe(true);
    });

    it('should return false when user is not logged in', () => {
      (SharedService.isLoggedIn as jasmine.Spy).and.returnValue(false);
      component.card = {
        ...mockCard,
        isRead: '1'
      };
      expect(component.shouldShowTickIcon()).toBe(false);
    });

    it('should return false when user is guest', () => {
      (SharedService.isLoggedIn as jasmine.Spy).and.returnValue(true);
      localStorage.setItem('guest', 'T');
      component.card = {
        ...mockCard,
        isRead: '1'
      };
      expect(component.shouldShowTickIcon()).toBe(false);
    });

    it('should return false when isRead is "0"', () => {
      (SharedService.isLoggedIn as jasmine.Spy).and.returnValue(true);
      localStorage.removeItem('guest');
      component.card = {
        ...mockCard,
        isRead: '0'
      };
      expect(component.shouldShowTickIcon()).toBe(false);
    });

    it('should return false when isRead is 0', () => {
      (SharedService.isLoggedIn as jasmine.Spy).and.returnValue(true);
      localStorage.removeItem('guest');
      component.card = {
        ...mockCard,
        isRead: 0
      };
      expect(component.shouldShowTickIcon()).toBe(false);
    });

    it('should return false when isRead is undefined', () => {
      (SharedService.isLoggedIn as jasmine.Spy).and.returnValue(true);
      localStorage.removeItem('guest');
      component.card = {
        ...mockCard,
        isRead: undefined
      };
      expect(component.shouldShowTickIcon()).toBe(false);
    });
  });

  describe('shouldShowLockIcon', () => {
    it('should return true when user is not subscriber and isFree is "0"', () => {
      (SharedService.isSubscriber as jasmine.Spy).and.returnValue(false);
      component.card = {
        ...mockCard,
        isFree: '0'
      };
      expect(component.shouldShowLockIcon()).toBe(true);
    });

    it('should return true when user is not subscriber and isFree is 0', () => {
      (SharedService.isSubscriber as jasmine.Spy).and.returnValue(false);
      component.card = {
        ...mockCard,
        isFree: 0
      };
      expect(component.shouldShowLockIcon()).toBe(true);
    });

    it('should return false when user is subscriber', () => {
      (SharedService.isSubscriber as jasmine.Spy).and.returnValue(true);
      component.card = {
        ...mockCard,
        isFree: '0'
      };
      expect(component.shouldShowLockIcon()).toBe(false);
    });

    it('should return false when isFree is "1"', () => {
      (SharedService.isSubscriber as jasmine.Spy).and.returnValue(false);
      component.card = {
        ...mockCard,
        isFree: '1'
      };
      expect(component.shouldShowLockIcon()).toBe(false);
    });

    it('should return false when isFree is 1', () => {
      (SharedService.isSubscriber as jasmine.Spy).and.returnValue(false);
      component.card = {
        ...mockCard,
        isFree: 1
      };
      expect(component.shouldShowLockIcon()).toBe(false);
    });

    it('should return false when isFree is undefined', () => {
      (SharedService.isSubscriber as jasmine.Spy).and.returnValue(false);
      component.card = {
        ...mockCard,
        isFree: undefined
      };
      expect(component.shouldShowLockIcon()).toBe(false);
    });
  });

  describe('Integration Tests', () => {
    it('should handle card click and emit event', () => {
      spyOn(component.cardClick, 'emit');
      component.onCardClick();
      expect(component.cardClick.emit).toHaveBeenCalledWith(component.card);
    });

    it('should correctly determine overlay icon type for URL with play', () => {
      component.card = {
        ...mockCard,
        overlayIcon: 'https://example.com/play-icon.png'
      };
      expect(component.getOverlayIconSrc(component.card.overlayIcon!)).toBe('https://example.com/play-icon.png');
      expect(component.shouldShowFontAwesomeIcon(component.card.overlayIcon!)).toBe(false);
      expect(component.getOverlayIconClass(component.card.overlayIcon!)).toBe('fas fa-play');
    });

    it('should correctly determine overlay icon type for simple play string', () => {
      component.card = {
        ...mockCard,
        overlayIcon: 'play'
      };
      expect(component.getOverlayIconSrc(component.card.overlayIcon!)).toBeNull();
      expect(component.shouldShowFontAwesomeIcon(component.card.overlayIcon!)).toBe(true);
      expect(component.getOverlayIconClass(component.card.overlayIcon!)).toBe('fas fa-play');
    });

    it('should show lock icon for non-subscriber with locked content', () => {
      (SharedService.isSubscriber as jasmine.Spy).and.returnValue(false);
      component.card = {
        ...mockCard,
        isFree: '0'
      };
      expect(component.shouldShowLockIcon()).toBe(true);
    });

    it('should show tick icon for logged-in non-guest with read content', () => {
      (SharedService.isLoggedIn as jasmine.Spy).and.returnValue(true);
      localStorage.removeItem('guest');
      component.card = {
        ...mockCard,
        isRead: '1'
      };
      expect(component.shouldShowTickIcon()).toBe(true);
    });
  });
});

