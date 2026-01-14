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
    return SharedService.ProgramId == ProgramType.Teenagers;
  }
  @HostBinding('class.adults-theme') get isAdultsTheme() {
    return SharedService.ProgramId == ProgramType.Adults;
  }
  enableBanner: boolean = false;
  navigationItems = [];
  description: string = 'Deal with stress and anxiety. Go deeper to understand the root cause for long-term benefit.';
  isloggedIn: boolean;
  contentSections: ContentSection[] = [];
  isSubscriber = false;
  navigationChange = new EventEmitter<string>();
  cardClick = new EventEmitter<ContentCard>();
  sectionToggle = new EventEmitter<ContentSection>();
  @ViewChild('sectionElement', { static: false }) sectionElement: ElementRef;
  @ViewChild('navMenu', { static: false }) navMenu: ElementRef;
  personalisedList = [];
  YourTopicofChoice;
  isAdults = false;
  showWisdomExercise: boolean = false;
  username: string = 'Guest';   // Track which sections are showing all cards
  streak: string = ''; // Streak for logged-in users
  showAllCards: { [sectionId: string]: boolean } = {};
  // Track visible card count per section (View More functionality)
  visibleCardCount: { [sectionId: string]: number } = {};
  private readonly DEFAULT_VISIBLE_CARD_COUNT = 5;
  private readonly VIEW_MORE_INCREMENT = 5;
  mainheader: string = '';
  searchinp: string = '';
  searchResult: any[] = [];
  moduleList: any[] = [];
  showSearchBox: boolean = true;
  showModal = false;
  modalTitle = 'The best is yet to come';
  modalContent = 'Unlock the full experience and continue your journey to live your best life';
  private readonly routerSubscription: Subscription;
  private readonly hashChangeHandler: () => void;
  private lastScrollTop: number = 0;
  preference = '';  
  constructor(
    private readonly router: Router,
    private readonly commonService: CommonService,
    private readonly homeStateService: HomeStateService,
    private readonly onboardingService: OnboardingService
  ) {
 
    this.navigationItems = SharedService.getPreferenceDataForHome();
    // Listen to hash changes dynamically
    this.hashChangeHandler = () => {
      this.handleHashChange();
    };
    globalThis.addEventListener('hashchange', this.hashChangeHandler);
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
    console.log('Is Subscriber:', this.isSubscriber);

    // Safely parse username - handle guest users who might have empty/null username
    try {
      const userName = SharedService.FnName();
          if(userName=="null" || userName=="undefined" || userName==""){
          this.username = localStorage.getItem('FnName');
        }
      if (userName && userName.trim() !== '') {
       
        this.username = JSON.parse(userName);
     
        // Fetch streak for logged-in users
        this.getStreak();
      } else {
        this.username = '';
        this.streak = '';
      }
    } catch (error) {
      console.warn('Error parsing username, defaulting to Guest:', error);
      this.username = '';
      this.streak = '';
         this.username = SharedService.FnName();
       this.getStreak();
    }

    // Restore state from store
    this.restoreStateFromStore();

    // Load module list for search dropdown
    this.getModuleList();

    // Check for hash-based navigation before loading user preference
    const hashNavigationItem = this.getNavigationItemFromHash();
    if (hashNavigationItem) {
      // Hash found and matched - activate it
      console.log('Hash navigation detected, activating:', hashNavigationItem);
      this.activateNavigationItemFromHash(hashNavigationItem);
    } else {
      // No hash or hash doesn't match - use default behavior
      this.getUserPreference();
    }

    console.log('Home component initialized');
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }

    // Initialize wisdom exercise as hidden
    this.showWisdomExercise = false;
  }


  private handleGuestUserDefault(preferenceData: any[]): void {
    console.log('No user preference found, defaulting to Mental health for guest user');

    // Ensure wisdom exercise is hidden for guest users
    this.showWisdomExercise = false;

    // Save default preference to store
    this.homeStateService.setActivePreference("2"); // Mental health ID

    // Load Mental health content (id: "2")
    this.loadHomeContents(2);

    // Set Mental health as active in navigation
    preferenceData.forEach((item) => {
      if (item.id === "2") { // Mental health ID
        item['active'] = true;
        this.personalisedList.push(item);
        console.log('Activated Mental health navigation item:', item);
      } else {
        item['active'] = false;
        this.personalisedList.push(item);
      }
    });

    this.YourTopicofChoice = this.personalisedList.filter((d) => d['active']);
    console.log('Guest user default selection:', this.YourTopicofChoice);

    setTimeout(() => {
      this.scrollToActiveList();
    }, 400);
  }

  ngAfterViewInit(): void {
    // Ensure navigation container has horizontal scrolling
    this.setupHorizontalScrolling();

    // Scroll to active personalized list after view is initialized
    setTimeout(() => {
      this.scrollToActiveList();
    }, 100);
  }

  /**
   * Setup horizontal scrolling for navigation container
   */
  private setupHorizontalScrolling(): void {
    const navContainer = globalThis.document.querySelector('.nav-menu') as HTMLElement;
    if (navContainer) {
      // Ensure horizontal scrolling is enabled
      navContainer.style.overflowX = 'auto';
      navContainer.style.overflowY = 'hidden';
      navContainer.style.whiteSpace = 'nowrap';
      navContainer.style.scrollBehavior = 'smooth';

      console.log('Navigation container setup for horizontal scrolling');
    }
  }

  loadHomeContents(id): void {
    let programId = SharedService.ProgramId;
    
    // Clear other program's data before loading new data
    // This ensures only one program's data exists at a time
    this.homeStateService.clearOtherProgramData();
    
    // Always call API to get fresh data
    this.commonService.GetHomeContents(programId, id).subscribe((res: HomeContentResponse) => {
      if (res) {
        this.mainheader = res.MainHeader;
        console.log('Raw API response:', res);

        // Cache the response for future use (optional)
        // This will automatically save to the current program's storage
        this.homeStateService.setCachedContent(id.toString(), res);

        // Transform API response to content sections
        this.contentSections = this.transformApiResponseToContentSections(res);
        console.log('Transformed content sections:', this.contentSections);

        // Merge seen status from state management (background update)
        this.mergeSeenStatusFromState();

        this.restoreExpandedState();

        // Scroll to active list after content is loaded
        setTimeout(() => {
          this.scrollToActiveList();
        }, 300);
      } else {
        console.warn('API response is empty or null');
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

    this.processModules(apiResponse, sections);

    const standardKeys = ['Blogs', 'Stories', 'Podcast', 'Shorts'];
    standardKeys.forEach(key => {
      const section = apiResponse[key];
      if (section && this.hasCards(section)) {
        sections.push(this.transformSection(section, key.toLowerCase()));
      }
    });

    // Handle other sections dynamically
    const knownKeys = new Set(['Introduction', 'Modules1', 'Modules2', 'Modules3', 'Blogs', 'Stories', 'Podcast', 'Shorts', 'MainHeader']);
    Object.keys(apiResponse).forEach(key => {
      if (!knownKeys.has(key) && apiResponse[key]?.title && this.hasCards(apiResponse[key])) {
        sections.push(this.transformSection(apiResponse[key], key.toLowerCase()));
      }
    });

    // Sort sections by ID in ascending order (1, 2, 3, etc.)
    sections.sort((a, b) => (Number.parseInt(a.id) || 0) - (Number.parseInt(b.id) || 0));

    return sections;
  }

  private processModules(apiResponse: HomeContentResponse, sections: ContentSection[]): void {
    if (!apiResponse.Modules1) return;

    const longTermSolutions = this.transformSection(apiResponse.Modules1, 'modules1');
    const childSections: ContentSection[] = [];

    if (apiResponse.Modules2 && this.hasCards(apiResponse.Modules2)) {
      sections.push(this.transformSection(apiResponse.Modules2, 'Modules2'));
    }

    if (apiResponse.Modules3 && this.hasCards(apiResponse.Modules3)) {
      const module3 = this.transformSection(apiResponse.Modules3, 'modules3');
      module3.isInlineSection = true;
      module3.isExpanded = true;
      childSections.push(module3);
    }

    if (this.hasCards(apiResponse.Modules1) || childSections.length > 0) {
      longTermSolutions.childSections = childSections;
      sections.push(longTermSolutions);
    }
  }

  /**
   * Check if a section has cards
   */
  private hasCards(section: HomeSection): boolean {
    const cardsArray = Array.isArray(section.Cards) ? section.Cards : (Array.isArray(section.cards) ? section.cards : []);
    return cardsArray.length > 0;
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
    let viewallUrl = section['viewall_Url'];
    if (viewallUrl === undefined) {
      viewallUrl = section['viewAllUrl'] !== undefined ? section['viewAllUrl'] : section['viewAll_url'];
    }

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
  private isValidPreference(preferenceId: string, preferenceList: any[]): boolean {
    if (!preferenceId) {
      return false;
    }
    return preferenceList.some(item => item.id === preferenceId);
  }

  async getUserPreference() {
    this.commonService.getUserpreference().subscribe({
      next: (res) => this.handleUserPreferenceResponse(res),
      error: (error) => {
        console.error('Error loading user preference:', error);
        this.handleUserPreferenceError();
      }
    });
  }

  private handleUserPreferenceResponse(res: any): void {
    const perd = SharedService.getPreferenceDataForHome();
    this.personalisedList = [];
    const storedActivePreference = this.homeStateService.getActivePreference();

    if (res) {
      localStorage.setItem('userPreference', res);
      let preferenceToUse = storedActivePreference || res;

      if (!this.isValidPreference(preferenceToUse, perd)) {
        console.warn(`Invalid preference "${preferenceToUse}", defaulting to Mental health (ID: 2)`);
        preferenceToUse = "2";
        this.homeStateService.setActivePreference("2");
      }

      this.activatePreferenceItems(preferenceToUse, perd);
    } else if (storedActivePreference && this.isValidPreference(storedActivePreference, perd)) {
      this.activatePreferenceItems(storedActivePreference, perd);
    } else {
      if (storedActivePreference && !this.isValidPreference(storedActivePreference, perd)) {
        console.warn(`Invalid stored preference "${storedActivePreference}", defaulting to Mental health`);
      }
      this.handleGuestUserDefault(perd);
    }
  }

  private activatePreferenceItems(preferenceToUse: string, perd: any[]): void {
    this.personalisedList = perd.map(r => ({
      ...r,
      active: preferenceToUse === r.id
    }));

    if (preferenceToUse === "19" || preferenceToUse === "20") {
      this.showWisdomExercise = true;
      this.preference = preferenceToUse;
      this.YourTopicofChoice = this.personalisedList.filter((d) => d['active']);
    } else {
      this.showWisdomExercise = false;
      this.loadHomeContents(Number(preferenceToUse));
      this.YourTopicofChoice = this.personalisedList.filter((d) => d['active']);
    }

    setTimeout(() => this.scrollToActiveList(), 400);
  }

  private handleUserPreferenceError(): void {
    const perd = SharedService.getPreferenceDataForHome();
    const storedActivePreference = this.homeStateService.getActivePreference();

    if (storedActivePreference && this.isValidPreference(storedActivePreference, perd)) {
      this.activatePreferenceItems(storedActivePreference, perd);
    } else {
      if (storedActivePreference && !this.isValidPreference(storedActivePreference, perd)) {
        console.warn(`Invalid stored preference "${storedActivePreference}", defaulting to Mental health`);
      }
      this.handleGuestUserDefault(perd);
    }
  }

  /**
   * Transform cards based on section type
   */
  transformCards(cards: any[], sectionType: string, sectionTitle: string = ''): ContentCard[] {
    if (!Array.isArray(cards)) {
      return [];
    }

    return cards.map((card, index) => {
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

      if (sectionTitle?.trim().toLowerCase().includes('teen talk')) {
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

  onNavigationClick(item): void {
    console.log(item);

    // Save active preference to store
    this.homeStateService.setActivePreference(item.id);

    // Handle Self Awareness (id: 19) - show wisdom exercise component
    if (item.id === "19" || item.id === "20") {
      this.showWisdomExercise = true;
      this.preference = item.id;
      this.personalisedList.forEach(nav => nav.active = false);
      item.active = true;
      this.YourTopicofChoice = [item];
      // Save user preference for Self Awareness
      this.update(item.id);
      return;
    }

    // Handle other navigation items normally
    this.showWisdomExercise = false;
    this.personalisedList.forEach(nav => nav.active = false);
    item.active = true;
    this.loadHomeContents(item.id);
    this.update(item.id);
    // Update YourTopicofChoice to reflect the new active item
    this.YourTopicofChoice = [item];

    // Scroll to the selected section after content loads
    setTimeout(() => {
      this.scrollToActiveList();
    }, 500);
  }

  update(id) {
    console.log("update")
    this.commonService.AddUserPreference(id).subscribe(res => {
      if (res) {
        console.log(res)
      }
    })
  }

  onCardClick(card: ContentCard): void {
    if (this.handleEventCardClick(card)) return;

    this.trackCardClick(card);

    if (this.handleLockedCard(card)) return;

    this.markCardAsSeen(card);
    this.handleShortVideoPersistence(card);
    this.handleNavigation(card);

    this.cardClick.emit(card);
  }

  private handleEventCardClick(card: ContentCard): boolean {
    const type = (card.moduleType || card.mediaType || '').toUpperCase();
    const isEvent = type.includes('EVENT') || (card.path || '').includes('/events/');
    if (!isEvent) return false;

    const id = this.getCardId(card);
    if (id != null) {
      this.commonService.clickEvents(id).subscribe({ next: () => { }, error: () => { } });
    }

    if (id != null && id >= 2 && localStorage.getItem('Subscriber') === '0') {
      this.showModal = true;
      this.cardClick.emit(card);
      return true;
    }

    const link = this.extractYoutubeLink(card.path);
    if (link) {
      const code = id != null && id <= 1 ? 'rdtfghjhfdg' : 'vncbxdfchgvxd';
      this.router.navigate([`${SharedService.getprogramName()}/curated/youtubelink`, `${link}=${code}`], { state: { title: card.title } });
      this.cardClick.emit(card);
      return true;
    }
    return false;
  }

  private getCardId(card: ContentCard): number | null {
    return this.extractNumericId(card.id) ?? 
           this.extractQueryIdFromPath(card.path, 'eid') ?? 
           this.extractIdFromPath(card.path);
  }

  private handleLockedCard(card: ContentCard): boolean {
    const isLocked = card?.isFree === '0' || card?.isFree === 0;
    if (!this.isSubscriber && isLocked) {
      this.showModal = true;
      this.cardClick.emit(card);
      return true;
    }
    return false;
  }

  private markCardAsSeen(card: ContentCard): void {
    const isUnseen = card?.id && (
      card.isRead === undefined ||
      card.isRead === null ||
      card.isRead === '0' ||
      card.isRead === 0
    );

    if (isUnseen) {
      this.homeStateService.markCardAsSeen(card.id);
      card.isRead = '1';
    }
  }

  private handleShortVideoPersistence(card: ContentCard): void {
    try {
      const type = (card.moduleType || '').toUpperCase();
      const media = (card.mediaType || '').toUpperCase();
      const isShortVideo = type === 'VIDEO' || media === 'SHORT';
      if (isShortVideo && card.path) {
        let linkcode = this.extractVideoLinkCode(card.path);
        if (linkcode) localStorage.setItem('wisdomvideolink', linkcode);
        if (card.title) localStorage.setItem('wisdomvideotitle', card.title);
        localStorage.setItem('fromIndex', 'false');
        localStorage.removeItem('wisdomShortData');
      }
    } catch (e) {
      console.warn('Failed to persist short video data', e);
    }
  }

  private extractVideoLinkCode(path: string): string {
    if (path.includes('/wisdom_shorts/videos/')) {
      const parts = path.split('/');
      return parts[parts.length - 1] || '';
    }
    if (path.includes('?')) {
      const queryParams = new URLSearchParams(path.split('?')[1]);
      return queryParams.get('videolink') || '';
    }
    return '';
  }

  private handleNavigation(card: ContentCard): void {
    if (!card.path) return;

    if (card.path.includes('?')) {
      const [basePath, queryString] = card.path.split('?');
      const queryParams = new URLSearchParams(queryString);
      const queryObj: any = {};
      queryParams.forEach((value, key) => queryObj[key] = value);
      
      const navExtras: any = { queryParams: queryObj };
      if (basePath.includes('youtubelink')) navExtras.state = { title: card.title };
      this.router.navigate([basePath], navExtras);
    } else {
      const navExtras: any = card.path.includes('youtubelink') ? { state: { title: card.title } } : {};
      this.router.navigate([card.path], navExtras);
    }
  }

  private trackCardClick(card: ContentCard): void {
    const type = (card.moduleType || card.mediaType || '').toUpperCase();
    const isTeenTalk = card.isTeenTalk || (card.path?.includes('teen_talk') || card.path?.includes('teen-talk'));

    if (isTeenTalk) {
      const id = this.getCardId(card) ?? this.extractShortIdFromUrl(card.path);
      if (id != null) this.commonService.clickTeenTalk(id).subscribe();
      return;
    }

    if (!type) return;

    this.trackCategoryClick(type, card);
  }

  private trackCategoryClick(type: string, card: ContentCard): void {
    const id = this.getCardId(card);
    if (id == null) return;

    if (type.includes('PODCAST')) {
      this.commonService.clickPodcast(id).subscribe();
    } else if (type.includes('BLOG')) {
      this.onboardingService.clickBlog(id).subscribe();
    } else if (type.includes('STORY') || card.path?.includes('/wisdom-stories/')) {
      this.onboardingService.clickStory(id).subscribe();
    } else if (type.includes('EVENT') || card.path?.includes('/events/')) {
      this.commonService.clickEvents(id).subscribe();
    } else if (type.includes('VIDEO') || type.includes('SHORT')) {
      if (card.path?.includes('/wisdom_shorts/videos/')) {
        const shortId = this.extractShortIdFromUrl(card.path);
        if (shortId != null) this.commonService.clickShorts(shortId).subscribe();
      }
    } else if (type.includes('AUDIO') || type.includes('BREATHING')) {
      this.commonService.clickMeditations(id).subscribe();
    } else if (type.includes('SOUNDSCAPE')) {
      this.commonService.clickSoundscapes(id).subscribe();
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
    const n = v ? Number(v) : Number.NaN;
    return Number.isFinite(n) ? n : null;
  }

  private extractQueryIdFromPath(path?: string, key?: string): number | null {
    if (!path || !key || !path.includes('?')) return null;
    const qs = path.split('?')[1] || '';
    const params = new URLSearchParams(qs);
    const v = params.get(key || '');
    const n = v ? Number(v) : Number.NaN;
    return Number.isFinite(n) ? n : null;
  }

  private extractShortIdFromUrl(url: string): number | null {
    if (!url) return null;
    const withoutQuery = url.split('?')[0];
    const filename = (withoutQuery.split('/').pop() || withoutQuery).toString();
    const extMatch = /\.(\d+)\.(mp4|webm|mov)$/i.exec(filename);
    if (extMatch?.[1]) {
      const n = Number(extMatch[1]);
      return Number.isFinite(n) ? n : null;
    }
    const parts = filename.split(/[.\-_]/).reverse();
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


  getDisplayCards(section: ContentSection): any[] {
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
    if (this.YourTopicofChoice && this.YourTopicofChoice.length > 0) {
      const activeItem = this.YourTopicofChoice[0];

      // Find the active navigation item in the DOM
      const navItems = document.querySelectorAll('.nav-item');
      let targetNavItem: HTMLElement | null = null;

      // Find the navigation item that matches the active item
      for (const navItem of Array.from(navItems) as HTMLElement[]) {
        if (navItem.textContent?.trim() === activeItem.displayName) {
          targetNavItem = navItem;
          break;
        }
      }

      if (targetNavItem) {
        // Get the navigation container
        const navContainer = globalThis.document.querySelector('.nav-menu');
        if (navContainer) {
          // Calculate scroll position to center the active item
          const containerRect = navContainer.getBoundingClientRect();
          const itemRect = targetNavItem.getBoundingClientRect();

          // Calculate the scroll position to center the item
          const scrollLeft = targetNavItem.offsetLeft - (containerRect.width / 2) + (itemRect.width / 2);

          // Smooth horizontal scroll
          navContainer.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
          });
        }
      }
    }
  }

  /**
   * Test method to manually trigger horizontal scroll - for debugging
   */
  testHorizontalScroll(): void {
    console.log('=== MANUAL HORIZONTAL SCROLL TEST ===');

    const navContainer = document.querySelector('.nav-menu') as HTMLElement;
    if (navContainer) {
      console.log('Found nav container:', navContainer);
      console.log('Current scroll left:', navContainer.scrollLeft);
      console.log('Container width:', navContainer.clientWidth);
      console.log('Container scroll width:', navContainer.scrollWidth);

      // Scroll to the right
      navContainer.scrollTo({
        left: navContainer.scrollWidth,
        behavior: 'smooth'
      });

      console.log('Scrolled to end');
    } else {
      console.log('Navigation container not found');
    }
  }

  onViewAll(section): void {
    this.router.navigateByUrl(section.viewall_Url);
  }

  goToSubscribe(): void {
    const prefix = SharedService.getprogramName();
    this.router.navigate([prefix, 'subscription', 'start-your-free-trial']);
  }

  /**
   * Restore state from the store on component initialization
   */
  private restoreStateFromStore(): void {
    const currentState = this.homeStateService.getCurrentState();
    this.showAllCards = { ...currentState.showAllCards };
    // Initialize visible card count for horizontal sections (default 4)
    // Could restore from store if needed in future
    console.log('Restored state from store:', currentState);
  }

  /**
   * Restore expanded state for sections after content is loaded
   * Also ensures sections are sorted by ID
   */
  private restoreExpandedState(): void {
    // Ensure sections are sorted by ID before restoring state
    this.contentSections.sort((a, b) => {
      const idA = Number.parseInt(a.id) || 0;
      const idB = Number.parseInt(b.id) || 0;
      return idA - idB;
    });

    console.log('Sections restored and sorted by ID:', this.contentSections.map(s => ({ title: s.title, id: s.id })));

    this.contentSections.forEach(section => {
      // Restore main section expanded state
      const wasExpanded = this.homeStateService.getSectionExpanded(this.getScopedSectionId(section.id));
      if (wasExpanded !== undefined) {
        section.isExpanded = wasExpanded;
      }

      // Restore child sections expanded state
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
    // Get hash from URL (e.g., "#Mental-health" or "Mental-health")
    const hash = globalThis.location.hash;
    if (!hash || hash.length <= 1) {
      return null;
    }

    // Remove the # symbol and normalize
    const hashValue = hash.substring(1).trim();
    if (!hashValue) {
      return null;
    }

    // Normalize hash: convert hyphens to spaces, handle case
    const normalizedHash = this.normalizeHash(hashValue);
    console.log('Hash detected:', hashValue, 'Normalized:', normalizedHash);

    // Get all navigation items
    const allNavItems = SharedService.getPreferenceDataForHome();

    // Find matching navigation item by displayName (case-insensitive, space/hyphen agnostic)
    const matchingItem = allNavItems.find(item => {
      const normalizedDisplayName = this.normalizeHash(item.displayName.replace(/\s+/g, "").toLocaleLowerCase());
      return normalizedDisplayName === normalizedHash.toLocaleLowerCase();
    });

    if (matchingItem) {
      console.log('Found matching navigation item:', matchingItem);
      return matchingItem;
    }

    console.log('No matching navigation item found for hash:', hashValue);
    return null;
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
   * Using HostListener for better performance
   * Hide search box when scroll exceeds 20% of viewport height
   */
  @HostListener('window:scroll', ['$event'])
  handleScroll(): void {
    const scrollTop = globalThis.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const viewportHeight = globalThis.innerHeight || document.documentElement.clientHeight;
    const threshold = viewportHeight * 0.2; // 20% of viewport height

    // Hide search box when scroll exceeds 20% of screen height
    if (scrollTop > threshold) {
      this.showSearchBox = false;
      this.searchResult = []; // Close dropdown when hiding search box
    } else {
      // Show search box when scroll is within 20% of screen height
      this.showSearchBox = true;
    }

    this.lastScrollTop = Math.max(0, scrollTop);
  }

  ngOnDestroy(): void {
    // Clean up event listeners
    if (this.hashChangeHandler) {
      globalThis.removeEventListener('hashchange', this.hashChangeHandler);
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
      // Only activate if it's different from current active item
      const currentActive = this.personalisedList.find(item => item.active);
      if (!currentActive || currentActive.id !== hashNavigationItem.id) {
        console.log('Hash changed, activating:', hashNavigationItem);
        this.activateNavigationItemFromHash(hashNavigationItem);
      }
    }
  }

  /**
   * Activate navigation item based on hash
   * This method activates the navigation item and loads its content
   */
  private activateNavigationItemFromHash(item: NavigationItem): void {
    // Initialize personalisedList
    const allNavItems = SharedService.getPreferenceDataForHome();
    this.personalisedList = [];

    // Set all items as inactive, then activate the matching one
    allNavItems.forEach((navItem) => {
      if (navItem.id === item.id) {
        navItem.active = true;
        this.personalisedList.push(navItem);
      } else {
        navItem.active = false;
        this.personalisedList.push(navItem);
      }
    });

    // Save active preference to store
    this.homeStateService.setActivePreference(item.id);

    // Handle Self Awareness (id: 19) specially
    if (item.id === "19" || item.id === "20") {
      this.showWisdomExercise = true;
      this.YourTopicofChoice = [item];
      // Save user preference for Self Awareness
      this.update(item.id);
      console.log('Activated Self Awareness from hash');
      return;
    }

    // Handle other navigation items normally
    this.showWisdomExercise = false;
    this.loadHomeContents(Number(item.id));
    this.update(item.id);
    this.YourTopicofChoice = [item];

    console.log('Activated navigation item from hash:', item.displayName, 'ID:', item.id);

    // Scroll to the selected section after content loads
    setTimeout(() => {
      this.scrollToActiveList();
    }, 500);
  }

  /**
   * Get module list from API for search dropdown
   */
  getModuleList(): void {
    this.commonService.getModuleList().subscribe(res => {
      if (res) {
        this.moduleList = res;
        console.log('Module list loaded for search:', this.moduleList.length);
      }
    }, error => {
      console.error('Error loading module list:', error);
    });
  }

  /**
   * Get autocomplete list based on search input
   */
  getAutoCompleteList(value: string): void {
    if (this.moduleList.length > 0) {
      if (value == null || value == "") {
        this.searchResult = this.moduleList;
      } else {
        this.searchResult = this.moduleList.filter(x =>
          (x.ModuleName?.toLocaleLowerCase() || '').includes(value?.toLocaleLowerCase() || '')
        );
      }
      // Toggle body scroll based on search result visibility
      if (this.searchResult.length > 0) {
        this.toggleBodyScroll(true);
      } else {
        this.toggleBodyScroll(false);
      }
    }
  }

  /**
   * Handle focus event - show all modules or filtered results
   */
  onFocus(): void {
    if (this.moduleList.length === 0) {
      this.getModuleList();
    }
    if (this.searchinp == '') {
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
   * Handle focus out event - hide dropdown after delay
   */
  onFocusOutEvent(): void {
    // Removed auto-close to keep screen open until explicit close functionality is used
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
    document.body.style.overflow = lock ? 'hidden' : '';
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
        if (loginData?.Streak) {
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

    console.log('Merging seen status from state:', seenCards);

    // Update cards in all sections
    this.contentSections.forEach(section => {
      if (section.cards) {
        section.cards.forEach(card => {
          if (card.id && seenCards[card.id]) {
            // Only mark as seen if card is accessible (not locked or user is subscriber)
            const isLocked = card.isFree === "0" || card.isFree === 0;
            if (!isLocked || this.isSubscriber) {
              // Override API's isRead with state management value
              card.isRead = '1';
              console.log('Updated card isRead from state:', card.id, card.title);
            } else {
              // Card is locked and user is not subscriber - don't mark as seen
              console.log('Skipping locked card from state (not accessible):', card.id, card.title);
            }
          }
        });
      }

      // Update cards in child sections
      if (section.childSections) {
        section.childSections.forEach(childSection => {
          if (childSection.cards) {
            childSection.cards.forEach(card => {
              if (card.id && seenCards[card.id]) {
                // Only mark as seen if card is accessible (not locked or user is subscriber)
                const isLocked = card.isFree === "0" || card.isFree === 0;
                if (!isLocked || this.isSubscriber) {
                  // Override API's isRead with state management value
                  card.isRead = '1';
                  console.log('Updated child card isRead from state:', card.id, card.title);
                } else {
                  // Card is locked and user is not subscriber - don't mark as seen
                  console.log('Skipping locked child card from state (not accessible):', card.id, card.title);
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
      const scrollAmount = 200; // Adjust scroll distance as needed
      this.navMenu.nativeElement.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  /**
   * Scroll navigation menu forward (right)
   */
  scrollNavForward(): void {
    if (this.navMenu?.nativeElement) {
      const scrollAmount = 200; // Adjust scroll distance as needed
      this.navMenu.nativeElement.scrollBy({
        left: scrollAmount,
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
