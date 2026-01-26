import { Component, OnInit, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy, HostListener, HostBinding } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SharedService } from '../../services/shared.service';
import { OnboardingService } from '../../services/onboarding.service';
import { ProgramType } from '../../models/program-model';
import { HomeStateService } from '../../services/home-state.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface NavigationItem {
  id: string;
  displayName: string;
  active: boolean;
  name: string;
}

// API response interfaces
export interface HomeContentResponse {
  Introduction?: HomeSection;
  Modules1?: HomeSection;
  Modules2?: HomeSection;
  Modules3?: HomeSection;
  Blogs?: HomeSection;
  Stories?: HomeSection;
  Podcast?: HomeSection;
  Shorts?: HomeSection;
  [key: string]: any;
}

export interface HomeSection {
  id: string;
  title: string;
  Subtitle: string;
  isExpanded: boolean;
  sectionType?: number | string; // <-- raw from API (1 or 2)
  overlayIcon: string | null;
  cssClass: string;
  Cards?: any[]; // <-- API uses capital C
  cards?: any[]; // <-- fallback for lowercase
  contentSections?: HomeSection[];
  sections?: HomeSection[];
  internalSections?: HomeSection[];
}

export interface ContentCard {
  id: string;
  imageUrl: string;
  title: string;
  subtitle?: string;
  mediaType: 'VIDEO' | 'AUDIO' | 'BLOG' | 'FORUM' | 'BREATHING EXERCISE' | 'WELLNESS SURVEY' | 'PODCAST' | 'SHORT';
  duration?: string;
  overlayIcon?: string;
  path?: string;
  moduleType?: string;
  isFree?: string | number; // "0" means locked, "1" means free
  isRead?: string | number; // "0" means not read, "1" means read/completed
  isTeenTalk?: boolean;
}

export interface ContentSection {
  id: string;
  title: string;
  subtitle: string;
  isExpanded: boolean;
  cards: ContentCard[];
  overlayIcon?: string;
  cssClass?: string;
  childSections?: ContentSection[];
  // NEW: if true, render this section as an inline panel (title + visible cards) — not a toggleable accordion
  isInlineSection?: boolean;
  // raw API section type (1 or 2)
  rawSectionType?: number;
  // if true, render cards stacked vertically
  isVerticalCards?: boolean;
  // optional deep-link for full listing
  viewall_Url?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home-teenager.component.scss'],
  animations: [
    trigger('slideDown', [
      state('collapsed', style({
        height: '0px',
        overflow: 'hidden',
        opacity: 0
      })),
      state('expanded', style({
        height: '*',
        overflow: 'visible',
        opacity: 1
      })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  // Dynamic theme class based on ProgramId
  @HostBinding('class.teenager-theme') get isTeenagerTheme() {
    return SharedService.ProgramId === ProgramType.Teenagers;
  }
  @HostBinding('class.adults-theme') get isAdultsTheme() {
    return SharedService.ProgramId === ProgramType.Adults;
  }
  isloggedIn: boolean;
  contentSections: ContentSection[] = [];
  isSubscriber = false;
  cardClick = new EventEmitter<ContentCard>();
  sectionToggle = new EventEmitter<ContentSection>();
  @ViewChild('navMenu', { static: false }) navMenu: ElementRef;
  personalisedList: NavigationItem[] = [];
  YourTopicofChoice: NavigationItem[] = [];
  isAdults = false;
  showWisdomExercise = false;
  username = 'Guest';
  streak = '';
  showAllCards: { [sectionId: string]: boolean } = {};
  visibleCardCount: { [sectionId: string]: number } = {};
  mainheader = '';
  searchinp = '';
  searchResult: Array<{ ModuleName: string }> = [];
  moduleList: Array<{ ModuleName: string }> = [];
  showSearchBox = true;
  showModal = false;
  modalTitle = 'The best is yet to come';
  modalContent = 'Unlock the full experience and continue your journey to live your best life';
  preference = '';
  
  private readonly DEFAULT_VISIBLE_CARD_COUNT = 5;
  private readonly VIEW_MORE_INCREMENT = 5;
  private readonly MENTAL_HEALTH_ID = '2';
  private readonly SELF_AWARENESS_IDS = ['19', '20'];
  private readonly SCROLL_DELAY_SHORT = 100;
  private readonly SCROLL_DELAY_MEDIUM = 300;
  private readonly SCROLL_DELAY_LONG = 400;
  private readonly SCROLL_DELAY_EXTRA_LONG = 500;
  private readonly SCROLL_AMOUNT = 200;
  private readonly SCROLL_THRESHOLD_PERCENTAGE = 0.2;
  
  private routerSubscription: Subscription;
  private hashChangeHandler: () => void;  
  constructor(
    private router: Router,
    private commonService: CommonService,
    private homeStateService: HomeStateService,
    private onboardingService: OnboardingService
  ) {
    // Listen to hash changes dynamically
    this.hashChangeHandler = () => {
      this.handleHashChange();
    };
    window.addEventListener('hashchange', this.hashChangeHandler);
    this.isloggedIn = SharedService.isLoggedIn();
    // Also listen to Angular router navigation events
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Small delay to ensure hash is available after navigation
        setTimeout(() => {
          this.handleHashChange();
        }, 100);
      });

  }

  ngOnInit(): void {
    this.isSubscriber = SharedService.isSubscriber();

    this.initializeUsername();
    this.restoreStateFromStore();
    this.getModuleList();

    const hashNavigationItem = this.getNavigationItemFromHash();
    if (hashNavigationItem) {
      this.activateNavigationItemFromHash(hashNavigationItem);
    } else {
      this.getUserPreference();
    }

    this.isAdults = SharedService.ProgramId === ProgramType.Adults;
    this.showWisdomExercise = false;
  }

  private initializeUsername(): void {
    try {
      const userName = SharedService.FnName();
      if (userName === 'null' || userName === 'undefined' || userName === '') {
        this.username = localStorage.getItem('FnName') || '';
      } else if (userName && userName.trim() !== '') {
        this.username = JSON.parse(userName);
        this.getStreak();
      } else {
        this.username = '';
        this.streak = '';
      }
    } catch (error) {
      this.username = SharedService.FnName() || '';
      this.getStreak();
    }
  }


  private handleGuestUserDefault(preferenceData: NavigationItem[]): void {
    this.showWisdomExercise = false;
    this.homeStateService.setActivePreference(this.MENTAL_HEALTH_ID);
    this.loadHomeContents(Number(this.MENTAL_HEALTH_ID));

    preferenceData.forEach((item) => {
      item.active = item.id === this.MENTAL_HEALTH_ID;
      this.personalisedList.push(item);
    });

    this.YourTopicofChoice = this.personalisedList.filter((d) => d.active);

    setTimeout(() => {
      this.scrollToActiveList();
    }, this.SCROLL_DELAY_LONG);
  }

  ngAfterViewInit(): void {
    this.setupHorizontalScrolling();
    setTimeout(() => {
      this.scrollToActiveList();
    }, this.SCROLL_DELAY_SHORT);
  }

  private setupHorizontalScrolling(): void {
    const navContainer = document.querySelector('.nav-menu') as HTMLElement;
    if (navContainer) {
      navContainer.style.overflowX = 'auto';
      navContainer.style.overflowY = 'hidden';
      navContainer.style.whiteSpace = 'nowrap';
      navContainer.style.scrollBehavior = 'smooth';
    }
  }

  loadHomeContents(id: number): void {
    const programId = SharedService.ProgramId;
    this.homeStateService.clearOtherProgramData();
    
    this.commonService.GetHomeContents(programId, id).subscribe((res: HomeContentResponse) => {
      if (res) {
        this.mainheader = res.MainHeader;
        this.homeStateService.setCachedContent(id.toString(), res);
        this.contentSections = this.transformApiResponseToContentSections(res);
        this.mergeSeenStatusFromState();
        this.restoreExpandedState();

        setTimeout(() => {
          this.scrollToActiveList();
        }, this.SCROLL_DELAY_MEDIUM);
      }
    });
  }

  /**
   * Transform API response to ContentSection format
   * Combines Modules1/2/3 under a single parent "Modules" accordion whose children are inline module panels.
   * Filters out sections with empty cards arrays.
   * Sorts sections by ID in ascending order (1, 2, 3, etc.)
   */
  transformApiResponseToContentSections(apiResponse: HomeContentResponse): ContentSection[] {
    const sections: ContentSection[] = [];

    if (apiResponse.Introduction && this.hasCards(apiResponse.Introduction)) {
      sections.push(this.transformSection(apiResponse.Introduction, 'introduction'));
    }

    // Handle Long term solutions as parent with Modules2 and Modules3 as children
    if (apiResponse.Modules1) {
      const longTermSolutions = this.transformSection(apiResponse.Modules1, 'modules1');

      // Add Modules2 and Modules3 as child sections (only if they have cards)
      const childSections: ContentSection[] = [];

      if (apiResponse.Modules2 && this.hasCards(apiResponse.Modules2)) {
        /* const module2 = this.transformSection(apiResponse.Modules2, 'modules2');
         module2.isInlineSection = true;
         module2.isExpanded = true;
         childSections.push(module2); */
        sections.push(this.transformSection(apiResponse.Modules2, 'Modules2'));
      }

      if (apiResponse.Modules3 && this.hasCards(apiResponse.Modules3)) {
        const module3 = this.transformSection(apiResponse.Modules3, 'modules3');
        module3.isInlineSection = true;
        module3.isExpanded = true;
        childSections.push(module3);
      }

      // Only add the parent section if it has cards or has child sections with cards
      if (this.hasCards(apiResponse.Modules1) || childSections.length > 0) {
        longTermSolutions.childSections = childSections;
        sections.push(longTermSolutions);
      }
    }

    // Only add sections that have cards
    if (apiResponse.Blogs && this.hasCards(apiResponse.Blogs)) {
      sections.push(this.transformSection(apiResponse.Blogs, 'blogs'));
    }
    if (apiResponse.Stories && this.hasCards(apiResponse.Stories)) {
      sections.push(this.transformSection(apiResponse.Stories, 'stories'));
    }
    if (apiResponse.Podcast && this.hasCards(apiResponse.Podcast)) {
      sections.push(this.transformSection(apiResponse.Podcast, 'podcast'));
    }
    if (apiResponse.Shorts && this.hasCards(apiResponse.Shorts)) {
      sections.push(this.transformSection(apiResponse.Shorts, 'shorts'));
    }

    // Handle other sections dynamically
    const knownKeys = ['Introduction', 'Modules1', 'Modules2', 'Modules3', 'Blogs', 'Stories', 'Podcast', 'Shorts'];
    Object.keys(apiResponse).forEach(key => {
      if (!knownKeys.includes(key) && apiResponse[key] && apiResponse[key].title && this.hasCards(apiResponse[key])) {
        sections.push(this.transformSection(apiResponse[key], key.toLowerCase()));
      }
    });

    // Sort sections by ID in ascending order (1, 2, 3, etc.)
    sections.sort((a, b) => {
      const idA = parseInt(a.id, 10) || 0;
      const idB = parseInt(b.id, 10) || 0;
      return idA - idB;
    });

    return sections;
  }

  /**
   * Check if a section has cards
   */
  private hasCards(section: HomeSection): boolean {
    const cardsArray = Array.isArray(section.Cards) ? section.Cards : (Array.isArray(section.cards) ? section.cards : []);
    return cardsArray && cardsArray.length > 0;
  }

  private getDefaultVisibleCount(section: ContentSection): number {
    const totalCards = section.cards?.length || 0;
    if (!totalCards) {
      return 0;
    }
    return Math.min(this.DEFAULT_VISIBLE_CARD_COUNT, totalCards);
  }

  private getVisibleCount(section: ContentSection): number {
    const totalCards = section.cards?.length || 0;
    if (!totalCards) {
      return 0;
    }

    if (this.showAllCards[section.id]) {
      return totalCards;
    }

    const storedCount = this.visibleCardCount[section.id];
    if (storedCount) {
      return Math.min(storedCount, totalCards);
    }

    const defaultCount = this.getDefaultVisibleCount(section);
    this.visibleCardCount[section.id] = defaultCount;
    return defaultCount;
  }

  /**
   * Check if a transformed section has cards (either direct cards or child sections with cards)
   */
  private hasCardsInTransformedSection(section: ContentSection): boolean {
    const hasDirectCards = section.cards && section.cards.length > 0;
    const hasChildSectionsWithCards = section.childSections && section.childSections.length > 0;
    return hasDirectCards || hasChildSectionsWithCards;
  }

  /**
   * Transform individual section (handles nested internal sections recursively)
   */
  transformSection(section: HomeSection, sectionType: string): ContentSection {
    const nestedSources: HomeSection[] = [
      ...(section.contentSections || []),
      ...(section.sections || []),
      ...(section.internalSections || [])
    ].filter(Boolean);

    // Transform child sections and filter out those without cards
    const childSections = nestedSources
      .map((s) => this.transformSection(s, sectionType))
      .filter(childSection => this.hasCardsInTransformedSection(childSection));

    const cardsArray = Array.isArray(section.Cards) ? section.Cards : (Array.isArray(section.cards) ? section.cards : []);

    const rawType = typeof section.sectionType === 'string' ? Number(section.sectionType) : section.sectionType;
    const isVertical = rawType === 2 || rawType === 3;

    const transformedCards = this.transformCards(cardsArray, sectionType, section.title);

    // Get viewall_Url - preserve null if explicitly set, otherwise try alternatives
    const viewallUrl = section['viewall_Url'] !== undefined
      ? section['viewall_Url']
      : (section['viewAllUrl'] !== undefined
        ? section['viewAllUrl']
        : section['viewAll_url']);

    return {
      id: section.id || `section-${Date.now()}`,
      title: section.title || '',
      subtitle: section.Subtitle || '',
      isExpanded: !!section.isExpanded,
      cards: transformedCards,
      overlayIcon: section.overlayIcon,
      cssClass: section.cssClass,
      childSections: childSections.length ? childSections : undefined,
      isInlineSection: false,
      rawSectionType: rawType,
      isVerticalCards: isVertical,
      viewall_Url: viewallUrl
    };
  }

  /**
   * Validate if a preference ID exists in the available preferences list
   */
  private isValidPreference(preferenceId: string, preferenceList: NavigationItem[]): boolean {
    if (!preferenceId) {
      return false;
    }
    return preferenceList.some(item => item.id === preferenceId);
  }

  getUserPreference(): void {
    this.commonService.getUserpreference().subscribe({
      next: (res) => {
        const perd = SharedService.getPreferenceDataForHome();
        this.personalisedList = [];
        const storedActivePreference = this.homeStateService.getActivePreference();

        if (res) {
          localStorage.setItem('userPreference', res);
          let preferenceToUse = storedActivePreference || res;
          
          if (!this.isValidPreference(preferenceToUse, perd)) {
            preferenceToUse = this.MENTAL_HEALTH_ID;
            this.homeStateService.setActivePreference(this.MENTAL_HEALTH_ID);
          }

          perd.forEach((r) => {
            r.active = preferenceToUse === r.id;
            this.personalisedList.push(r);
          });

          if (this.SELF_AWARENESS_IDS.includes(preferenceToUse)) {
            this.showWisdomExercise = true;
            this.preference = preferenceToUse;
          } else {
            this.showWisdomExercise = false;
            this.loadHomeContents(Number(preferenceToUse));
          }
          
          this.YourTopicofChoice = this.personalisedList.filter((d) => d.active);

          setTimeout(() => {
            this.scrollToActiveList();
          }, this.SCROLL_DELAY_LONG);
        } else {
          if (storedActivePreference && this.isValidPreference(storedActivePreference, perd)) {
            perd.forEach((r) => {
              r.active = storedActivePreference === r.id;
              this.personalisedList.push(r);
            });

            if (this.SELF_AWARENESS_IDS.includes(storedActivePreference)) {
              this.showWisdomExercise = true;
              this.preference = storedActivePreference;
            } else {
              this.showWisdomExercise = false;
              this.loadHomeContents(Number(storedActivePreference));
            }

            this.YourTopicofChoice = this.personalisedList.filter((d) => d.active);

            setTimeout(() => {
              this.scrollToActiveList();
            }, this.SCROLL_DELAY_LONG);
          } else {
            this.handleGuestUserDefault(perd);
          }
        }
      },
      error: () => {
        const perd = SharedService.getPreferenceDataForHome();
        const storedActivePreference = this.homeStateService.getActivePreference();

        if (storedActivePreference && this.isValidPreference(storedActivePreference, perd)) {
          perd.forEach((r) => {
            r.active = storedActivePreference === r.id;
            this.personalisedList.push(r);
          });

          if (this.SELF_AWARENESS_IDS.includes(storedActivePreference)) {
            this.showWisdomExercise = true;
          } else {
            this.showWisdomExercise = false;
            this.loadHomeContents(Number(storedActivePreference));
          }

          this.YourTopicofChoice = this.personalisedList.filter((d) => d.active);

          setTimeout(() => {
            this.scrollToActiveList();
          }, this.SCROLL_DELAY_LONG);
        } else {
          this.handleGuestUserDefault(perd);
        }
      }
    });
  }

  /**
   * Transform cards based on section type
   */
  transformCards(cards: any[], sectionType: string, sectionTitle = ''): ContentCard[] {
    if (!Array.isArray(cards)) {
      return [];
    }

    return cards.map((card) => {
      let transformedCard: ContentCard;
      switch (sectionType) {
        case 'introduction':
          transformedCard = this.transformIntroductionCard(card);
          break;
        case 'modules1':
        case 'modules2':
        case 'modules3':
          transformedCard = this.transformModuleCard(card);
          break;
        case 'blogs':
          transformedCard = this.transformBlogCard(card);
          break;
        case 'stories':
          transformedCard = this.transformStoryCard(card);
          break;
        case 'podcast':
          transformedCard = this.transformPodcastCard(card);
          break;
        case 'shorts':
          transformedCard = this.transformShortCard(card);
          break;
        default:
          transformedCard = this.transformGenericCard(card);
          break;
      }

      if (sectionTitle && sectionTitle.trim().toLowerCase().includes('teen talk')) {
        transformedCard.isTeenTalk = true;
      }

      return transformedCard;
    });
  }

  transformIntroductionCard(card: any): ContentCard {
    return {
      id: card.title || `intro-${Date.now()}`,
      imageUrl: card.imgUrl || card.image_path || card.imageUrl || '',
      title: card.title || '',
      subtitle: card.Subtitle || card.subtitle || '',
      mediaType: card.cardtype,
      duration: card.Timing || card.timing || '',
      overlayIcon: card.overlayIcon || card.icon_path || '',
      path: card.URL || card.path || '',
      moduleType: card.cardtype || card.module || '',
      isFree: card.isFree,
      isRead: card.isRead
    };
  }

  transformModuleCard(card: any): ContentCard {
    return {
      id: card.moduleId?.toString() || card.id || `module-${Date.now()}`,
      imageUrl: card.imgUrl || card.image_path || card.ImagePath || card.imageUrl || '',
      title: card.title || card.moduleName || card.Title || '',
      subtitle: card.Subtitle || card.sectionName || card.SectionName || card.subtitle || '',
      mediaType: card.cardtype,
      duration: card.Timing || (card.SessionCnt ? `${card.SessionCnt} sessions` : ''),
      overlayIcon: card.overlayIcon || '',
      path: card.URL || card.path || card.modulePath || '',
      moduleType: card.cardtype || 'MODULE',
      isFree: card.isFree,
      isRead: card.isRead
    };
  }

  transformBlogCard(card: any): ContentCard {
    return {
      id: card.BlogID?.toString() || `blog-${Date.now()}`,
      imageUrl: card.imgUrl || card.ImagePath || card.imageUrl || '',
      title: card.title || card.Title || '',
      subtitle: card.Subtitle || (card.LikeCnt ? `${card.LikeCnt} likes` : ''),
      mediaType: card.cardtype,
      duration: card.Timing || card.isRead || '',
      overlayIcon: card.overlayIcon || '',
      path: card.URL || `/adults/blog-article?sId=${card.BlogID}`,
      moduleType: card.cardtype || 'BLOG',
      isFree: card.isFree,
      isRead: card.isRead
    };
  }

  transformStoryCard(card: any): ContentCard {
    return {
      id: card.ScenarioID?.toString() || `story-${Date.now()}`,
      imageUrl: card.imgUrl || card.Img || card.image || '',
      title: card.title || card.Title || '',
      subtitle: card.Subtitle || (card.PublishedOn ? new Date(card.PublishedOn).toLocaleDateString() : ''),
      mediaType: card.cardtype,
      duration: card.Timing || card.isRead || '',
      overlayIcon: card.overlayIcon || '',
      path: card.URL || `/adults/wisdom-stories/${card.ScenarioID}`,
      moduleType: card.cardtype || 'STORY',
      isFree: card.isFree,
      isRead: card.isRead
    };
  }

  transformPodcastCard(card: any): ContentCard {
    return {
      id: card.PodcastID?.toString() || `podcast-${Date.now()}`,
      imageUrl: card.imgUrl || card.ImageUrl || card.image || '',
      title: card.title || card.Title || '',
      subtitle: card.Subtitle || card.Timing || '',
      mediaType: card.cardtype,
      duration: card.Timing || '',
      overlayIcon: card.overlayIcon || 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/audio.svg',
      path: card.URL || `/adults/podcast/${card.PodcastID}`,
      moduleType: card.cardtype || 'PODCAST',
      isFree: card.isFree,
      isRead: card.isRead
    };
  }

  transformShortCard(card: any): ContentCard {
    return {
      id: card.RowID?.toString() || `short-${Date.now()}`,
      imageUrl: card.imgUrl || card.ImgUrl || card.image || '',
      title: card.title || card.Title || '',
      subtitle: card.Subtitle || (card.Timing ? `${card.Timing} min` : ''),
      mediaType: card.cardtype,
      duration: card.Timing || '',
      overlayIcon: card.overlayIcon || 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/play.svg',
      path: card.URL || card.VideoUrl || card.path || '',
      moduleType: card.cardtype || 'VIDEO',
      isFree: card.isFree,
      isRead: card.isRead
    };
  }

  transformGenericCard(card: any): ContentCard {
    return {
      id: card.RowID?.toString() || card.id?.toString() || card.title || `card-${Date.now()}`,
      imageUrl: card.imgUrl || card.image_path || card.imageUrl || card.ImagePath || '',
      title: card.title || card.Title || '',
      subtitle: card.Subtitle || card.subtitle || '',
      mediaType: card.cardtype,
      duration: card.Timing || card.timing || card.duration || '',
      overlayIcon: card.overlayIcon || card.icon_path || '',
      path: card.URL || card.path || '',
      moduleType: card.cardtype || card.module || card.moduleType || '',
      isFree: card.isFree,
      isRead: card.isRead
    };
  }

  onNavigationClick(item: NavigationItem): void {
    this.homeStateService.setActivePreference(item.id);

    if (this.SELF_AWARENESS_IDS.includes(item.id)) {
      this.showWisdomExercise = true;
      this.preference = item.id;
      this.personalisedList.forEach(nav => nav.active = false);
      item.active = true;
      this.YourTopicofChoice = [item];
      this.updateUserPreference(item.id);
      return;
    }

    this.showWisdomExercise = false;
    this.personalisedList.forEach(nav => nav.active = false);
    item.active = true;
    this.loadHomeContents(Number(item.id));
    this.updateUserPreference(item.id);
    this.YourTopicofChoice = [item];

    setTimeout(() => {
      this.scrollToActiveList();
    }, this.SCROLL_DELAY_EXTRA_LONG);
  }

  private updateUserPreference(id: string): void {
    this.commonService.AddUserPreference(id).subscribe();
  }

  onCardClick(card: ContentCard): void {
    const type = (card.moduleType || card.mediaType || '').toUpperCase();
    const isEvent = type.includes('EVENT') || (card.path || '').includes('/events/');
    if (isEvent) {
      const id = this.extractNumericId(card.id) ?? this.extractQueryIdFromPath(card.path, 'eid') ?? this.extractIdFromPath(card.path);
      if (id != null) {
        this.commonService.clickEvents(id).subscribe({ next: () => { }, error: () => { } });
      }
      const sub = localStorage.getItem('Subscriber');
      if (id != null && id >= 2 && sub === '0') {
        this.showModal = true;
        this.cardClick.emit(card);
        return;
      }
      const prog = SharedService.getprogramName();
      const link = this.extractYoutubeLink(card.path);
      if (link) {
        const code = id != null && id <= 1 ? 'rdtfghjhfdg' : 'vncbxdfchgvxd';
        this.router.navigate([`${prog}/curated/youtubelink`, `${link}=${code}`], { state: { title: card.title } });
        this.cardClick.emit(card);
        return;
      }
    }
    this.trackCardClick(card);

    const isLocked = card && (card.isFree === '0' || card.isFree === 0);
    if (!this.isSubscriber && isLocked) {
      this.showModal = true;
      this.cardClick.emit(card);
      return;
    }

    const isUnseen = card && card.id && (
      card.isRead === undefined ||
      card.isRead === null ||
      card.isRead === '0' ||
      card.isRead === 0
    );

    if (isUnseen) {
      this.homeStateService.markCardAsSeen(card.id);
      card.isRead = '1';
    }
    // Persist selected short video info so s3-video can play exact clicked item
    try {
      const isShortVideo = (card.moduleType || '').toUpperCase() === 'VIDEO' || (card.mediaType || '').toUpperCase() === 'SHORT';
      if (isShortVideo && card.path) {
        let linkcode = '';
        if (card.path.includes('/wisdom_shorts/videos/')) {
          const parts = card.path.split('/');
          linkcode = parts[parts.length - 1] || '';
        }
        if (!linkcode && card.path.includes('?')) {
          const [_, queryString] = card.path.split('?');
          const queryParams = new URLSearchParams(queryString);
          linkcode = queryParams.get('videolink') || '';
        }
        if (linkcode) {
          localStorage.setItem('wisdomvideolink', linkcode);
        }
        if (card.title) {
          localStorage.setItem('wisdomvideotitle', card.title);
        }
        // Ensure swipe is disabled when opening shorts from Home
        localStorage.setItem('fromIndex', 'false');
        localStorage.removeItem('wisdomShortData');
      }
    } catch (e) {
      console.warn('Failed to persist short video data', e);
    }
    if (card.path && card.path.includes('?')) {
      const [basePath, queryString] = card.path.split('?');
      const queryParams = new URLSearchParams(queryString);
      const queryObj: any = {};
      queryParams.forEach((value, key) => {
        queryObj[key] = value;
      });
      try {
        const navExtras: any = { queryParams: queryObj };
        if (basePath.includes('youtubelink')) {
          navExtras.state = { title: card.title };
        }
        this.router.navigate([basePath], navExtras);
      } catch (e) {
        console.warn('Navigation failed for path with query params:', card.path, e);
      }
      return;
    }
    if (card.path) {
      try {
        if (card.path.includes('youtubelink')) {
          this.router.navigate([card.path], { state: { title: card.title } });
        } else {
          this.router.navigate([card.path]);
        }
      } catch (e) {
        console.warn('Navigation failed for path:', card.path, e);
      }
    }
    this.cardClick.emit(card);
  }

  private trackCardClick(card: ContentCard): void {
    const type = (card.moduleType || card.mediaType || '').toUpperCase();

    if (card.isTeenTalk || (card.path && (card.path.includes('teen_talk') || card.path.includes('teen-talk')))) {
      const id = this.extractNumericId(card.id) ?? this.extractShortIdFromUrl(card.path) ?? this.extractIdFromPath(card.path);
      if (id != null) {
        this.commonService.clickTeenTalk(id).subscribe({ next: () => { }, error: () => { } });
      }
      return;
    }

    if (!type) return;
    if (type.includes('PODCAST')) {
      const id = this.extractNumericId(card.id) ?? this.extractIdFromPath(card.path);
      if (id != null) {
        this.commonService.clickPodcast(id).subscribe({ next: () => { }, error: () => { } });
      }
      return;
    }
    if (type.includes('BLOG')) {
      const id = this.extractNumericId(card.id) ?? this.extractBlogIdFromPath(card.path);
      if (id != null) {
        this.onboardingService.clickBlog(id).subscribe({ next: () => { }, error: () => { } });
      }
      return;
    }
    if (type.includes('STORY') || (card.path || '').includes('/wisdom-stories/')) {
      const id = this.extractNumericId(card.id) ?? this.extractQueryIdFromPath(card.path, 'sId') ?? this.extractIdFromPath(card.path);
      if (id != null) {
        this.onboardingService.clickStory(id).subscribe({ next: () => { }, error: () => { } });
      }
      return;
    }
    if (type.includes('EVENT') || (card.path || '').includes('/events/')) {
      const id = this.extractNumericId(card.id) ?? this.extractQueryIdFromPath(card.path, 'eid') ?? this.extractIdFromPath(card.path);
      if (id != null) {
        this.commonService.clickEvents(id).subscribe({ next: () => { }, error: () => { } });
      }
      return;
    }
    if (type.includes('VIDEO') || type.includes('SHORT')) {
      const url = card.path || '';
      if (url.includes('/wisdom_shorts/videos/')) {
        const shortId = this.extractShortIdFromUrl(url);
        if (shortId != null) {
          this.commonService.clickShorts(shortId).subscribe({ next: () => { }, error: () => { } });
        }
      }
      return;
    }
    if (type.includes('AUDIO') || type.includes('BREATHING')) {
      const id = this.extractIdFromPath(card.path);
      if (id != null) {
        this.commonService.clickMeditations(id).subscribe({ next: () => { }, error: () => { } });
      }
      return;
    }
    if (type.includes('SOUNDSCAPE')) {
      const id = this.extractIdFromPath(card.path);
      if (id != null) {
        this.commonService.clickSoundscapes(id).subscribe({ next: () => { }, error: () => { } });
      }
      return;
    }
  }

  private extractNumericId(idValue: any): number | null {
    const n = Number(idValue);
    return Number.isFinite(n) ? n : null;
  }

  private extractIdFromPath(path?: string): number | null {
    if (!path) return null;
    const withoutQuery = path.split('?')[0];
    const parts = withoutQuery.split('/').filter(Boolean);
    for (let i = parts.length - 1; i >= 0; i--) {
      const n = Number(parts[i]);
      if (Number.isFinite(n)) return n;
    }
    return null;
  }

  private extractBlogIdFromPath(path?: string): number | null {
    if (!path || !path.includes('?')) return null;
    const qs = path.split('?')[1] || '';
    const params = new URLSearchParams(qs);
    const v = params.get('sId');
    const n = v ? Number(v) : NaN;
    return Number.isFinite(n) ? n : null;
  }

  private extractQueryIdFromPath(path?: string, key?: string): number | null {
    if (!path || !key || !path.includes('?')) return null;
    const qs = path.split('?')[1] || '';
    const params = new URLSearchParams(qs);
    const v = params.get(key || '');
    const n = v ? Number(v) : NaN;
    return Number.isFinite(n) ? n : null;
  }

  private extractShortIdFromUrl(url: string): number | null {
    if (!url) return null;
    const withoutQuery = url.split('?')[0];
    const filename = (withoutQuery.split('/').pop() || withoutQuery).toString();
    const extMatch = filename.match(/\.(\d+)\.(mp4|webm|mov)$/i);
    if (extMatch && extMatch[1]) {
      const n = Number(extMatch[1]);
      return Number.isFinite(n) ? n : null;
    }
    const parts = filename.split(/[\.\-_]/).reverse();
    for (const part of parts) {
      const n = Number(part);
      if (!Number.isNaN(n) && Number.isFinite(n)) {
        return n;
      }
    }
    return null;
  }

  private extractYoutubeLink(path?: string): string | null {
    if (!path) return null;
    if (path.includes('?')) {
      const qs = path.split('?')[1] || '';
      const params = new URLSearchParams(qs);
      const v = params.get('videolink');
      if (v) return v;
    }
    const parts = path.split('/').filter(Boolean);
    const last = parts[parts.length - 1] || '';
    if (last && !last.includes('youtubelink')) return last;
    return null;
  }

  onModalClose(event: string) {
    this.showModal = false;
    if (event === 'ok') {
      this.router.navigate([SharedService.getprogramName(), 'subscription', 'start-your-free-trial']);
    }
  }

  onSectionToggle(section: ContentSection): void {
    // Only toggle for normal accordion sections (not inline)
    if (section.isInlineSection) {
      return;
    }
    section.isExpanded = !section.isExpanded;

    // Save state to store
    this.homeStateService.setSectionExpanded(this.getScopedSectionId(section.id), section.isExpanded);

    this.sectionToggle.emit(section);
  }


  getDisplayCards(section: ContentSection): ContentCard[] {
    if (!section.cards || !section.cards.length) {
      return [];
    }

    const visibleCount = this.getVisibleCount(section);
    return section.cards.slice(0, visibleCount);
  }

  onViewAllClick(section: ContentSection): void {
    this.onViewMoreClick(section);
  }

  shouldShowViewAll(section: ContentSection): boolean {
    const isStoriesOrBlogs = section.rawSectionType === 2;
    const isQuickAnswers = section.rawSectionType === 3;
    if (!(isStoriesOrBlogs || isQuickAnswers)) {
      return false;
    }

    const totalCards = section.cards?.length || 0;
    if (totalCards <= this.DEFAULT_VISIBLE_CARD_COUNT) {
      return false;
    }

    const visibleCount = this.getVisibleCount(section);
    return visibleCount < totalCards;
  }

  /**
   * Check if "View More" should be shown for horizontal sections
   * Only show if section is horizontal, has more than 4 cards, and not all cards are visible
   */
  shouldShowViewMore(section: ContentSection): boolean {
    const isHorizontal = !section.isVerticalCards;
    if (!isHorizontal) {
      return false;
    }

    const totalCards = section.cards?.length || 0;
    if (totalCards <= this.DEFAULT_VISIBLE_CARD_COUNT) {
      return false;
    }

    const visibleCount = this.getVisibleCount(section);
    return visibleCount < totalCards;
  }

  /**
   * Handle "View More" click for horizontal sections
   * Incrementally loads 4 more cards each time
   */
  onViewMoreClick(section: ContentSection): void {
    const totalCards = section.cards?.length || 0;
    if (!totalCards) {
      return;
    }

    const currentVisible = this.getVisibleCount(section);
    const newVisibleCount = Math.min(currentVisible + this.VIEW_MORE_INCREMENT, totalCards);

    this.visibleCardCount[section.id] = newVisibleCount;

    const reachedEnd = newVisibleCount >= totalCards;
    this.showAllCards[section.id] = reachedEnd;
    this.homeStateService.setShowAllCards(section.id, reachedEnd);

    // Save state to store if needed (optional, for persistence)
    // this.homeStateService.setVisibleCardCount(section.id, newVisibleCount);
  }

  /**
   * Check if we've reached the end of cards (all cards are visible)
   * Only show "View all" link when we've reached the end AND viewall_Url has a valid value
   */
  hasReachedEnd(section: ContentSection): boolean {
    // Only show "View all" if viewall_Url exists and is not null/empty
    if (!section.viewall_Url || section.viewall_Url === null || section.viewall_Url.trim() === '') {
      return false;
    }

    const totalCards = section.cards?.length || 0;
    if (!totalCards) {
      return false;
    }

    const visibleCount = this.getVisibleCount(section);
    return visibleCount >= totalCards;
  }


  /**
   * Scroll to the active personalized list section (horizontal scrolling)
   */
  scrollToActiveList(): void {
    if (!this.YourTopicofChoice || this.YourTopicofChoice.length === 0) {
      return;
    }

    const activeItem = this.YourTopicofChoice[0];
    const navItems = document.querySelectorAll('.nav-item');
    let targetNavItem: HTMLElement | null = null;

    for (let i = 0; i < navItems.length; i++) {
      const navItem = navItems[i] as HTMLElement;
      const navText = navItem.textContent?.trim();

      if (navText === activeItem.displayName) {
        targetNavItem = navItem;
        break;
      }
    }

    if (targetNavItem) {
      const navContainer = document.querySelector('.nav-menu') as HTMLElement;
      if (navContainer) {
        const containerRect = navContainer.getBoundingClientRect();
        const itemRect = targetNavItem.getBoundingClientRect();
        const scrollLeft = targetNavItem.offsetLeft - (containerRect.width / 2) + (itemRect.width / 2);

        navContainer.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }

  onViewAll(section: ContentSection): void {
    if (section.viewall_Url) {
      this.router.navigateByUrl(section.viewall_Url);
    }
  }

  goToSubscribe(): void {
    const prefix = SharedService.getprogramName();
    this.router.navigate([prefix, 'subscription', 'start-your-free-trial']);
  }

  /**
   * Restore state from the store on component initialization
   */
  private restoreStateFromStore(): void {
    const state = this.homeStateService.getCurrentState();
    this.showAllCards = { ...state.showAllCards };
  }

  /**
   * Restore expanded state for sections after content is loaded
   * Also ensures sections are sorted by ID
   */
  private restoreExpandedState(): void {
    this.contentSections.sort((a, b) => {
      const idA = parseInt(a.id, 10) || 0;
      const idB = parseInt(b.id, 10) || 0;
      return idA - idB;
    });

    this.contentSections.forEach(section => {
      const wasExpanded = this.homeStateService.getSectionExpanded(this.getScopedSectionId(section.id));
      if (wasExpanded !== undefined) {
        section.isExpanded = wasExpanded;
      }

      if (section.childSections) {
        section.childSections.forEach(childSection => {
          const childWasExpanded = this.homeStateService.getSectionExpanded(this.getScopedSectionId(childSection.id));
          if (childWasExpanded !== undefined) {
            childSection.isExpanded = childWasExpanded;
          }
        });
      }
    });
  }

  /**
   * Scope a section id by active preference so expanded state is per-nav item
   */
  private getScopedSectionId(sectionId: string): string {
    const activePreference = this.homeStateService.getActivePreference() || 'global';
    return `${activePreference}::${sectionId}`;
  }

  /**
   * Get navigation item from URL hash
   * Returns the matching navigation item if hash is found and matches a displayName
   * Returns null if no hash or no match found
   */
  private getNavigationItemFromHash(): NavigationItem | null {
    const hash = window.location.hash;
    if (!hash || hash.length <= 1) {
      return null;
    }

    const hashValue = hash.substring(1).trim();
    if (!hashValue) {
      return null;
    }

    const normalizedHash = this.normalizeHash(hashValue);
    const allNavItems = SharedService.getPreferenceDataForHome();

    const matchingItem = allNavItems.find(item => {
      const normalizedDisplayName = this.normalizeHash(item.displayName.replace(/\s+/g, '').toLocaleLowerCase());
      return normalizedDisplayName === normalizedHash.toLocaleLowerCase();
    });

    return matchingItem || null;
  }

  /**
   * Normalize hash value for comparison
   * Converts to lowercase, replaces hyphens with spaces, trims whitespace
   */
  private normalizeHash(hash: string): string {
    return hash.toLowerCase()
      .replace(/-/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * Handle scroll events to show/hide search box
   * Hide search box when scroll exceeds 20% of viewport height
   */
  @HostListener('window:scroll', ['$event'])
  handleScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const threshold = viewportHeight * this.SCROLL_THRESHOLD_PERCENTAGE;

    if (scrollTop > threshold) {
      this.showSearchBox = false;
      this.searchResult = [];
    } else {
      this.showSearchBox = true;
    }
  }

  ngOnDestroy(): void {
    // Clean up event listeners
    if (this.hashChangeHandler) {
      window.removeEventListener('hashchange', this.hashChangeHandler);
    }
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  /**
   * Handle hash change events (both initial load and dynamic changes)
   */
  private handleHashChange(): void {
    const hashNavigationItem = this.getNavigationItemFromHash();
    if (hashNavigationItem) {
      const currentActive = this.personalisedList.find(item => item.active);
      if (!currentActive || currentActive.id !== hashNavigationItem.id) {
        this.activateNavigationItemFromHash(hashNavigationItem);
      }
    }
  }

  /**
   * Activate navigation item based on hash
   * This method activates the navigation item and loads its content
   */
  private activateNavigationItemFromHash(item: NavigationItem): void {
    const allNavItems = SharedService.getPreferenceDataForHome();
    this.personalisedList = [];

    allNavItems.forEach((navItem) => {
      navItem.active = navItem.id === item.id;
      this.personalisedList.push(navItem);
    });

    this.homeStateService.setActivePreference(item.id);

    if (this.SELF_AWARENESS_IDS.includes(item.id)) {
      this.showWisdomExercise = true;
      this.YourTopicofChoice = [item];
      this.updateUserPreference(item.id);
      return;
    }

    this.showWisdomExercise = false;
    this.loadHomeContents(Number(item.id));
    this.updateUserPreference(item.id);
    this.YourTopicofChoice = [item];

    setTimeout(() => {
      this.scrollToActiveList();
    }, this.SCROLL_DELAY_EXTRA_LONG);
  }

  /**
   * Get module list from API for search dropdown
   */
  getModuleList(): void {
    this.commonService.getModuleList().subscribe({
      next: (res) => {
        if (res) {
          this.moduleList = res;
        }
      },
      error: () => {
        this.moduleList = [];
      }
    });
  }

  /**
   * Get autocomplete list based on search input
   */
  getAutoCompleteList(value: string): void {
    if (this.moduleList.length > 0) {
      if (value === null || value === '') {
        this.searchResult = this.moduleList;
      } else {
        this.searchResult = this.moduleList.filter(x =>
          (x.ModuleName?.toLocaleLowerCase() || '').includes(value?.toLocaleLowerCase() || '')
        );
      }
      this.toggleBodyScroll(this.searchResult.length > 0);
    }
  }

  /**
   * Handle focus event - show all modules or filtered results
   */
  onFocus(): void {
    if (this.moduleList.length === 0) {
      this.getModuleList();
    }
    if (this.searchinp === '') {
      this.searchResult = this.moduleList;
    } else {
      this.searchResult = this.moduleList.filter(x =>
        (x.ModuleName?.toLocaleLowerCase() || '').includes(this.searchinp?.toLocaleLowerCase() || '')
      );
    }
    if (this.searchResult.length > 0) {
      this.toggleBodyScroll(true);
    }
  }

  /**
   * Navigate to search page when Enter is pressed or search result is clicked
   */
  getinp(searchTerm: string): void {
    if (searchTerm && searchTerm.trim() !== '') {
      const prefix = SharedService.getprogramName();
      const url = `/${prefix}/site-search/${searchTerm}`;
      this.router.navigate([url]);
    }
  }

  /**
   * Handle search result click - navigate to search page
   */
  searchEvent(moduleName: string): void {
    this.searchinp = moduleName;
    this.searchResult = [];
    this.toggleBodyScroll(false);
    this.getinp(moduleName);
  }

  /**
   * Clear search and hide dropdown
   */
  clearSearch(): void {
    this.searchinp = '';
    this.searchResult = [];
    this.toggleBodyScroll(false);
  }

  toggleBodyScroll(lock: boolean): void {
    if (lock) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  /**
   * Get streak for logged-in users from localStorage
   * Similar to adult-dashboard component implementation
   */
  getStreak(): void {
    try {
      // Get streak from loginResponse in localStorage (same as adult-dashboard)
      const loginResponse = localStorage.getItem('loginResponse');
      if (loginResponse) {
        const loginData = JSON.parse(loginResponse);
        if (loginData && loginData.Streak) {
          this.streak = loginData.Streak;
          return;
        }
      }
      // If not found, set empty string
      this.streak = '';
    } catch (error) {
      console.warn('Error getting streak from localStorage:', error);
      this.streak = '';
    }
  }

  /**
   * Merge seen status from state management into cards
   * This updates the isRead property based on user interactions stored in state
   * Called after API response is received and transformed
   * Only marks cards as seen if they are accessible (not locked or user is subscriber)
   */
  private mergeSeenStatusFromState(): void {
    const seenCards = this.homeStateService.getSeenCards();
    if (!seenCards || Object.keys(seenCards).length === 0) {
      return;
    }

    this.contentSections.forEach(section => {
      if (section.cards) {
        section.cards.forEach(card => {
          if (card.id && seenCards[card.id]) {
            const isLocked = card.isFree === '0' || card.isFree === 0;
            if (!isLocked || this.isSubscriber) {
              card.isRead = '1';
            }
          }
        });
      }

      if (section.childSections) {
        section.childSections.forEach(childSection => {
          if (childSection.cards) {
            childSection.cards.forEach(card => {
              if (card.id && seenCards[card.id]) {
                const isLocked = card.isFree === '0' || card.isFree === 0;
                if (!isLocked || this.isSubscriber) {
                  card.isRead = '1';
                }
              }
            });
          }
        });
      }
    });
  }

  /**
   * Scroll navigation menu backward (left)
   */
  scrollNavBackward(): void {
    if (this.navMenu?.nativeElement) {
      this.navMenu.nativeElement.scrollBy({
        left: -this.SCROLL_AMOUNT,
        behavior: 'smooth'
      });
    }
  }

  /**
   * Scroll navigation menu forward (right)
   */
  scrollNavForward(): void {
    if (this.navMenu?.nativeElement) {
      this.navMenu.nativeElement.scrollBy({
        left: this.SCROLL_AMOUNT,
        behavior: 'smooth'
      });
    }
  }

  /**
   * Check if tick icon should be shown for Life Stories
   * Show tick when isRead is "1" (completed/read) AND user can actually access the content
   * Don't show tick for locked content that user hasn't accessed
   */
  shouldShowTickIcon(card: ContentCard): boolean {
    const isLoggedIn = SharedService.isLoggedIn();
    const isGuest = (localStorage.getItem('guest') === 'T');
    if (!isLoggedIn || isGuest) {
      return false;
    }
    
    // Card must be marked as read
    const isRead = card.isRead === "1" || card.isRead === 1;
    if (!isRead) {
      return false;
    }
    
    // If card is locked and user is not subscriber, don't show tick
    // (because they couldn't have actually seen it)
    const isLocked = card.isFree === "0" || card.isFree === 0;
    if (isLocked && !this.isSubscriber) {
      return false;
    }
    
    return true;
  }

  /**
   * Check if lock icon should be shown for Life Stories
   * Show lock when isFree is "0" (locked/not free) and user is not a subscriber
   */
  shouldShowLockIcon(card: ContentCard): boolean {
    if (this.isSubscriber) {
      return false;
    }
    return card.isFree === "0" || card.isFree === 0;
  }
}
