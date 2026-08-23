import { ChangeDetectorRef, Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy, HostListener, HostBinding } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SharedService } from '../../services/shared.service';
import { OnboardingService } from '../../services/onboarding.service';
import { ProgramType } from '../../models/program-model';
import { HomeStateService } from '../../services/home-state.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { LogEventService } from '../../services/log-event.service';
import { NavigationService } from '../../services/navigation.service';

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
  sectionType?: number | string;
  overlayIcon: string | null;
  cssClass: string;
  Cards?: any[];
  cards?: any[]; 
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
  dailyPractiseID?: string | number;
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
  username: string = '';
  streak: string = ''; // Streak for logged-in users
  showAllCards: { [sectionId: string]: boolean } = {};
  // Track visible card count per section (View More functionality)
  visibleCardCount: { [sectionId: string]: number } = {};
  private readonly DEFAULT_VISIBLE_CARD_COUNT = 5;
    private readonly DEFAULT_VerticalVISIBLE_CARD_COUNT = 2;

  private readonly VIEW_MORE_INCREMENT = 5;
  mainheader: string = '';
  searchinp: string = '';
  isSearchActive: boolean = false;
  searchResult: any[] = [];
  moduleList: any[] = [];
  eventList: any[] = [];
  audioMeditationList: any[] = [];
  showSearchBox: boolean = true;
  showGreeting: boolean = true;
  showModal = false;
  modalTitle = 'The best is yet to come';
  modalContent = 'Unlock the full experience and continue your journey to live your best life';
  private routerSubscription: Subscription;
  private userDetailsSubscription: Subscription;
  private hashChangeHandler: () => void;
  private lastScrollTop: number = 0;
  private playstoreBannerObserver: MutationObserver | null = null;
  preference = '';  
  isHeaderHidden: boolean = false;
  showExplorePopup: boolean = false;
  showCrisisPopup: boolean = false;

  private readonly CRISIS_KEYWORDS: string[] = [
    'suicide', 'suicidal', 'kill myself', 'end my life', "don't want to live",
    'want to die', 'self-harm', 'self harm', 'cutting', 'hurting myself',
    'overdose', "there's no point", "i can't go on", 'nothing will change',
    'no way out', 'i give up', 'kms', "i'm done", 'i want to end it',
    "life isn't worth it", 'i want to kill myself'
  ];

  private containsCrisisKeyword(text: string): boolean {
    if (!text) return false;
    const lower = text.toLowerCase().trim();
    return this.CRISIS_KEYWORDS.some(keyword => lower.includes(keyword));
  }

  closeCrisisPopup(): void {
    this.showCrisisPopup = false;
    this.searchinp = '';
    this.isSearchActive = false;
    this.commonService.setSearchActive(false);
    this.updateHeaderDisplay();
    this.toggleBodyScroll(false);
  }
  constructor(
    private router: Router,
    private commonService: CommonService,
    private homeStateService: HomeStateService,
    private onboardingService: OnboardingService,
    public logeventservice: LogEventService,
    private navigationService: NavigationService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {
 
    this.navigationItems = SharedService.getPreferenceDataForHome();
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

    // Handle authtoken query parameter
    this.route.queryParams.subscribe(params => {
      const authtoken = params?.authtoken;
      if (authtoken) {
        this.handleAuthToken(authtoken);
      }
    });

  }

  private handleAuthToken(authtoken: string): void {
    // Check if authtoken is valid
    if (!authtoken || authtoken.trim() === '') {
      console.log('Invalid or empty authtoken');
      return;
    }

    // Check if token is already in localStorage
    let storedToken = '';
    try {
      storedToken = JSON.parse(localStorage.getItem("token"));
    } catch(e) { 
      storedToken = localStorage.getItem("token");
    }

    const isProgrwamSwitch = localStorage.getItem('isProgrwamSwitch');
    if (authtoken || isProgrwamSwitch == 'T') {
      localStorage.setItem("IsProgramSwitch", "F");
      this.onboardingService.setDataRecievedState(false);
      localStorage.setItem('socialLogin', 'T');
      
      this.commonService.verifytoken(authtoken).subscribe((res) => {
        if (res) {
          localStorage.setItem("email", res['Email']);
          localStorage.setItem("name", res['Name']);
          let namedata = localStorage.getItem('name').split(' ');
          localStorage.setItem("FnName", namedata[0]);
          localStorage.setItem("LName", namedata[1] ? namedata[1] : '');
          localStorage.setItem("Subscriber", res['Subscriber']);
          
          // Update component state
          this.isSubscriber = SharedService.isSubscriber();
          this.isloggedIn = SharedService.isLoggedIn();
          
          // Update username display
          this.loadUsername();
          this.fetchUserNameFromApi();
          
          this.onboardingService.setDataRecievedState(true);
          console.log('User authenticated via authtoken:', res['Name'], 'Subscriber:', this.isSubscriber);
          this.cdr.detectChanges();
        } else {
          // Token verification failed, set guest user
          localStorage.setItem("email", 'guest@humanwisdom.me');
          localStorage.setItem("pswd", '12345');
          localStorage.setItem('guest', 'T');
          localStorage.setItem('isloggedin', 'F');
          this.isloggedIn = false;
          this.isSubscriber = false;
          this.username = '';
          this.streak = '';
          this.onboardingService.setDataRecievedState(true);
          this.cdr.detectChanges();
        }
      }, error => {
        // Error in token verification, set guest user
        localStorage.setItem("email", 'guest@humanwisdom.me');
        localStorage.setItem("pswd", '12345');
        localStorage.setItem('guest', 'T');
        localStorage.setItem('isloggedin', 'F');
        this.isloggedIn = false;
        this.isSubscriber = false;
        this.username = '';
        this.streak = '';
        this.onboardingService.setDataRecievedState(true);
        console.error('Error verifying authtoken:', error);
        this.cdr.detectChanges();
      });
    } else {
      this.onboardingService.setDataRecievedState(true);
    }
  }

  ngOnInit(): void {
    SharedService.setDataInLocalStorage('NaviagtedFrom', this.router.url);
    this.logeventservice.logEvent('view_homepage');
    this.isSubscriber = SharedService.isSubscriber();
    console.log('Is Subscriber:', this.isSubscriber);

    this.loadUsername();
    if (this.isloggedIn) {
      this.subscribeToUserDetails();
      this.fetchUserNameFromApi();
    }

    // Restore state from store
    this.restoreStateFromStore();

    // Load module list for search dropdown
    this.getModuleList();
    
    // Fetch audio meditation list for ID lookup
    this.commonService.GetAudioMeditation().subscribe(res => {
      if (res) {
        this.audioMeditationList = res;
      }
    });

    // Fetch all events for ID lookup fallback
    this.commonService.getAllEvents().subscribe(x => {
      if (x) {
        const future = x.FutureEvents || [];
        const past = x.PastEvents || [];
        this.eventList = [...future, ...past];
        console.log('DEBUG: Event list loaded for fallback lookup:', this.eventList.length);
      }
    });

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

    setTimeout(() => this.updatePlaystoreBannerPadding(), 0);

    // Initialize wisdom exercise as hidden
   // this.showWisdomExercise = false;

    // Show Explore popup only on first visit after signup
    const userId = localStorage.getItem('userId') || '';
    const key = userId ? `hasSeenExplorePopup_${userId}` : 'hasSeenExplorePopup';
    const hasSeen = localStorage.getItem(key) === 'true';

    if (!hasSeen) {
      this.showExplorePopup = true;
      localStorage.setItem(key, 'true');
    } else {
      this.showExplorePopup = false;
    }
  }

  closeExplorePopup(): void {
    this.showExplorePopup = false;
    const userId = localStorage.getItem('userId') || '';
    const key = userId ? `hasSeenExplorePopup_${userId}` : 'hasSeenExplorePopup';
    localStorage.setItem(key, 'true');
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
    if (this.YourTopicofChoice && this.YourTopicofChoice[0]) {
      this.updateUrlFragment(this.YourTopicofChoice[0]);
    }

    setTimeout(() => {
      this.scrollToActiveList();
    }, 400);
  }

  ngAfterViewInit(): void {
    // Ensure navigation container has horizontal scrolling
    this.setupHorizontalScrolling();
    this.setupPlaystoreBannerObserver();

    // Scroll to active personalized list after view is initialized
    setTimeout(() => {
      this.scrollToActiveList();
    }, 100);
  }

  private updatePlaystoreBannerPadding(): void {
    const shouldApplyPadding = !!document.querySelector('.dtn_playstore_banner');
    if (this.enableBanner !== shouldApplyPadding) {
      this.enableBanner = shouldApplyPadding;
      this.cdr.detectChanges();
    }
  }

  private setupPlaystoreBannerObserver(): void {
    this.updatePlaystoreBannerPadding();
    this.playstoreBannerObserver = new MutationObserver(() => {
      this.updatePlaystoreBannerPadding();
    });
    this.playstoreBannerObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  private teardownPlaystoreBannerObserver(): void {
    if (this.playstoreBannerObserver) {
      this.playstoreBannerObserver.disconnect();
      this.playstoreBannerObserver = null;
    }
  }

  /**
   * Setup horizontal scrolling for navigation container
   */
  private setupHorizontalScrolling(): void {
    const navContainer = document.querySelector('.nav-menu') as HTMLElement;
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
      const idA = Number.parseInt(a.id) || 0;
      const idB = Number.parseInt(b.id) || 0;
      return idA - idB;
    });

    console.log('Filtered sections (only those with cards):', sections.map(s => ({ title: s.title, id: s.id, cardCount: s.cards?.length || 0 })));
    console.log('Sections sorted by ID:', sections.map(s => ({ title: s.title, id: s.id })));
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
    if (section.isVerticalCards)
    {
      return Math.min(this.DEFAULT_VerticalVISIBLE_CARD_COUNT, totalCards);
    
    }
    else
      return Math.min(this.DEFAULT_VISIBLE_CARD_COUNT, totalCards);
  }

  private getVisibleCount(section: ContentSection): number {
    const totalCards = section.cards?.length || 0;
    if (!totalCards) {
      return 0;
    }

    if (this.showAllCards[this.getScopedSectionId(section.id)]) {
      return totalCards;
    }
/* looks like not working right 
    const storedCount = this.visibleCardCount[section.id];
    if (storedCount) {
      return Math.min(storedCount, totalCards);
    } */

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
  private isValidPreference(preferenceId: string, preferenceList: any[]): boolean {
    if (!preferenceId) {
      return false;
    }
    return preferenceList.some(item => item.id === preferenceId);
  }

  async getUserPreference() {
    this.commonService.getUserpreference().subscribe({
      next: (res) => {
        let perd = SharedService.getPreferenceDataForHome();
        this.personalisedList = []

        // Check if we have a stored active preference from our state service
        const storedActivePreference = this.homeStateService.getActivePreference();

        if (res) {
          // User has a saved preference
          localStorage.setItem('userPreference', res);

          // Use stored preference if available and valid, otherwise use the API response
          let preferenceToUse = storedActivePreference || res;
          
          // Validate preference - if invalid, default to Mental health (ID "2")
          if (!this.isValidPreference(preferenceToUse, perd)) {
            console.warn(`Invalid preference "${preferenceToUse}", defaulting to Mental health (ID: 2)`);
            preferenceToUse = "2"; // Mental health ID
            this.homeStateService.setActivePreference("2");
          }

          perd.forEach((r) => {
            if (preferenceToUse === r.id) {
              r['active'] = true;
              this.personalisedList.push(r);
            } else {
              r['active'] = false;
              this.personalisedList.push(r);
            }
          })

          // Handle Self Awareness (id: 19) specially
          if (preferenceToUse === "19" ||preferenceToUse === "20" ) {
            this.showWisdomExercise = true;
            this.preference = preferenceToUse;
            this.YourTopicofChoice = this.personalisedList.filter((d) => d['active']);
            console.log('User preference loaded (Self Awareness):', this.YourTopicofChoice);
          } else {
            this.showWisdomExercise = false;
            this.loadHomeContents(Number(preferenceToUse));
            this.YourTopicofChoice = this.personalisedList.filter((d) => d['active']);
            console.log('User preference loaded:', this.YourTopicofChoice);
          }

          if (this.YourTopicofChoice && this.YourTopicofChoice[0]) {
            this.updateUrlFragment(this.YourTopicofChoice[0]);
          }

          // Scroll to the selected section after preference is loaded
          setTimeout(() => {
            this.scrollToActiveList();
          }, 400);
        } else {
          // Guest user or no preference - check if we have stored state
          if (storedActivePreference && this.isValidPreference(storedActivePreference, perd)) {
            // Use stored preference for guest users too (only if valid)
            perd.forEach((r) => {
              if (storedActivePreference === r.id) {
                r['active'] = true;
                this.personalisedList.push(r);
              } else {
                r['active'] = false;
                this.personalisedList.push(r);
              }
            });

            if (storedActivePreference === "19" || storedActivePreference === "20") {
              this.showWisdomExercise = true;
              this.preference = storedActivePreference;
              this.YourTopicofChoice = this.personalisedList.filter((d) => d['active']);
              console.log('Guest user with stored preference (Self Awareness):', this.YourTopicofChoice);
            } else {
              this.showWisdomExercise = false;
              this.loadHomeContents(Number(storedActivePreference));
              this.YourTopicofChoice = this.personalisedList.filter((d) => d['active']);
              console.log('Guest user with stored preference:', this.YourTopicofChoice);
            }

            if (this.YourTopicofChoice && this.YourTopicofChoice[0]) {
              this.updateUrlFragment(this.YourTopicofChoice[0]);
            }

            setTimeout(() => {
              this.scrollToActiveList();
            }, 400);
          } else {
            // No stored preference or invalid preference - default to Mental health
            if (storedActivePreference && !this.isValidPreference(storedActivePreference, perd)) {
              console.warn(`Invalid stored preference "${storedActivePreference}", defaulting to Mental health`);
            }
            this.handleGuestUserDefault(perd);
          }
        }
      },
      error: (error) => {
        console.error('Error loading user preference:', error);
        // On error (e.g., guest user, API failure), use default behavior
        let perd = SharedService.getPreferenceDataForHome();
        const storedActivePreference = this.homeStateService.getActivePreference();

        if (storedActivePreference && this.isValidPreference(storedActivePreference, perd)) {
          // Use stored preference if available and valid
          perd.forEach((r) => {
            if (storedActivePreference === r.id) {
              r['active'] = true;
              this.personalisedList.push(r);
            } else {
              r['active'] = false;
              this.personalisedList.push(r);
            }
          });

          if (storedActivePreference === "19") {
            this.preference = storedActivePreference;
            this.showWisdomExercise = true;
            this.YourTopicofChoice = this.personalisedList.filter((d) => d['active']);
          } else {
            this.showWisdomExercise = false;
            this.loadHomeContents(Number(storedActivePreference));
            this.YourTopicofChoice = this.personalisedList.filter((d) => d['active']);
          }

          setTimeout(() => {
            this.scrollToActiveList();
          }, 400);
        } else {
          // No valid stored preference - default to Mental health
          if (storedActivePreference && !this.isValidPreference(storedActivePreference, perd)) {
            console.warn(`Invalid stored preference "${storedActivePreference}", defaulting to Mental health`);
          }
          this.handleGuestUserDefault(perd);
        }
      }
    });
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
      isRead: card.isRead,
      dailyPractiseID: card.dailyPractiseID || card.DailyPractiseID || card.dailyPracticeID || card.DailyPracticeID
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
      isRead: card.isRead,
      dailyPractiseID: card.dailyPractiseID || card.DailyPractiseID || card.dailyPracticeID || card.DailyPracticeID
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
      id: card.RowID?.toString() || card.rowID?.toString() || card.EventID?.toString() || card.eventID?.toString() || card.id?.toString() || card.title || `card-${Date.now()}`,
      imageUrl: card.imgUrl || card.image_path || card.imageUrl || card.ImagePath || '',
      title: card.title || card.Title || '',
      subtitle: card.Subtitle || card.subtitle || '',
      mediaType: card.cardtype,
      duration: card.Timing || card.timing || card.duration || '',
      overlayIcon: card.overlayIcon || card.icon_path || '',
      path: card.URL || card.path || '',
      moduleType: card.cardtype || card.module || card.moduleType || '',
      isFree: card.isFree,
      isRead: card.isRead,
      dailyPractiseID: card.dailyPractiseID || card.DailyPractiseID || card.dailyPracticeID || card.DailyPracticeID
    };
  }

  onNavigationClick(item): void {
    console.log(item);
    if(item && item.displayName){
      this.logeventservice.logEvent('select_category_' + item.displayName.replace(/\s+/g, '').toLowerCase());
    }

    if (this.isAdults && item && item.id) {
      switch (item.id.toString()) {
        case '2':
          this.logeventservice.logEvent('adult_click_mentalhealth');
          break;
        case '1':
          this.logeventservice.logEvent('adult_Click_success_at_work');
          break;
        case '3':
          this.logeventservice.logEvent('adult_click_relationship');
          break;
        case '4':
          this.logeventservice.logEvent('adult_click_happiness');
          break;
        case '8':
          this.logeventservice.logEvent('adult_click_emotions');
          break;
        case '18':
          this.logeventservice.logEvent('adult_click_forparents');
          break;
        case '19':
          this.logeventservice.logEvent('adult_click_selfawareness');
          break;
        case '7':
          this.logeventservice.logEvent('adult_click_meditation');
          break;
        case '6':
          this.logeventservice.logEvent('adult_Click_sorrowandloss');
          break;
        case '5':
          this.logeventservice.logEvent('adult_click_addiction');
          break;
      }
    }

    if (!this.isAdults && item && item.id) {
      switch (item.id.toString()) {
        case '10':
          this.logeventservice.logEvent('teenager_click_mentalhealth');
          break;
        case '17':
          this.logeventservice.logEvent('teenager_Click_success_at_work');
          break;
        case '11':
          this.logeventservice.logEvent('teenager_click_relationship');
          break;
        case '13':
          this.logeventservice.logEvent('teenager_click_happiness');
          break;
        case '14':
          this.logeventservice.logEvent('teenager_click_emotions');
          break;
        case '20':
          this.logeventservice.logEvent('teenager_click_selfawareness');
          break;
        case '12':
          this.logeventservice.logEvent('teenager_click_freecalm');
          break;
        case '15':
          this.logeventservice.logEvent('teenager_Click_habits');
          break;
        case '16':
          this.logeventservice.logEvent('teenager_click_understandyourself');
          break;
      }
    }

    // Update URL fragment on manual tab switch so URL reflects selected tab (e.g. #meditation, #self-awareness)
    this.updateUrlFragment(item);

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
      // Scroll the active tab to center
      setTimeout(() => {
        this.scrollToActiveList();
      }, 500);
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
    if (id) {
      localStorage.setItem('userPreference', id.toString());
    }
    this.commonService.AddUserPreference(id).subscribe(res => {
      if (res) {
        console.log(res)
      }
    })
  };

  onCardClick(card: ContentCard, section?: ContentSection): void {
    console.log('DEBUG: Card clicked:', card);

    if (section && section.title && card && card.id) {
      const sectionName = section.title.replace(/\s+/g, '').toLowerCase();
      const tabPrefix = this.getTabNamePrefix();
      const prefix = tabPrefix ? `${tabPrefix}_` : '';
      const eventName = `click_${prefix}${sectionName}_${card.id}`;
      console.log(`%c [ANALYTICS EVENT] Triggering Card Click: ${eventName}`, 'color: #bada55; font-size: 14px');
      this.logeventservice.logEvent(eventName);
    }

    const cardType = (card.moduleType || card.mediaType || '').toUpperCase();
    if (!this.isAdults && cardType.includes('WELLNESS SURVEY')) {
      this.logeventservice.logEvent('teenager_click_takethesurvey');
    }
    if (this.isAdults && cardType.includes('WELLNESS SURVEY')) {
      this.logeventservice.logEvent('adult_click_takethesurvey');
    }

    this.trackTeenagerCardClick(card, section);

    const type = (card.moduleType || card.mediaType || '').toUpperCase();
    const isEvent = type.includes('EVENT') || (card.path || '').includes('/events/') || (card.path || '').includes('youtubelink');
    const isMicroLearning = !!(card.path && (card.path.includes('micro-learning') || card.path.includes('microlearning')));
    const isShortVideo = type === 'VIDEO' || type === 'SHORT';

    console.log('DEBUG: Is Event:', isEvent);

    if (isEvent) {
      let id = this.extractNumericId(card.id) ?? this.extractQueryIdFromPath(card.path, 'eid') ?? this.extractIdFromPath(card.path);
      
      // Fallback: look up in eventList by title if ID not found
      if (!id && this.eventList.length > 0 && card.title) {
        const title = card.title.trim().toLowerCase();
        const match = this.eventList.find(e => e.Title && e.Title.trim().toLowerCase() === title);
        if (match && match.RowID) {
           id = Number(match.RowID);
           console.log('DEBUG: Found Event ID from fallback list:', id);
        }
      }

      console.log('DEBUG: Extracted Event ID:', id);

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

        // Optimistic update for Events before returning
        const isUnseen = card && card.id && (
          card.isRead === undefined ||
          card.isRead === null ||
          card.isRead === '0' ||
          card.isRead === 0
        );
        if (isUnseen && !isShortVideo) {
          this.homeStateService.markCardAsSeen(card.id);
          card.isRead = '1';
        }

        this.cardClick.emit(card);
        return;
      }
    }
    this.trackCardClick(card);
    console.log('Card clicked:', card);

    // Check if card is locked BEFORE marking as seen
    // Only mark as seen if user can actually access the content
    const isLocked = card && (card.isFree === '0' || card.isFree === 0);
    if (!this.isSubscriber && isLocked) {
      const tabPrefix = this.getTabNamePrefix();
      const prefix = tabPrefix ? `${tabPrefix}_` : '';
      this.logeventservice.logEvent(`click_${prefix}locked_content`);
      // Card is locked and user is not subscriber - don't mark as seen
      this.showModal = true;
      this.cardClick.emit(card);
      return;
    }

    // Mark card as seen in state management if it's currently unseen
    // Only mark if card is not locked OR user is subscriber (can access it)
    const isUnseen = card && card.id && (
      card.isRead === undefined ||
      card.isRead === null ||
      card.isRead === '0' ||
      card.isRead === 0
    );

    if (isUnseen && !isMicroLearning && !isShortVideo) {
      console.log('Marking card as seen in state:', card.id);
      this.homeStateService.markCardAsSeen(card.id);
      // Update the card immediately for UI feedback
      card.isRead = '1';
    }
    // Persist selected short video info so s3-video can play exact clicked item
    try {
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
      if (isMicroLearning) {
        const parts = card.path.split('/');
        const id = parts[parts.length - 1]?.split('?')[0];
        if (id) {
          localStorage.removeItem('ml_index_' + id);
          localStorage.removeItem('persist_ml_index');
        }
      }
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
      if (isMicroLearning) {
        const parts = card.path.split('/');
        const id = parts[parts.length - 1];
        if (id) {
          localStorage.removeItem('ml_index_' + id);
          localStorage.removeItem('persist_ml_index');
        }
      }
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
    if (type.includes('EVENT') || (card.path || '').includes('/events/') || (card.path || '').includes('youtubelink')) {
      const id = this.extractNumericId(card.id) ?? this.extractQueryIdFromPath(card.path, 'eid') ?? this.extractIdFromPath(card.path);
      if (id != null) {
        this.commonService.clickEvents(id).subscribe({ next: () => { }, error: () => { } });
      }
      return;
    }
    if (type.includes('VIDEO') || type.includes('SHORT')) {
      this.logeventservice.logEvent('play_video');
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
      let id = card.dailyPractiseID ? Number(card.dailyPractiseID) : null;
      
      // Fallback: look up dailyPractiseID
      if (!id && this.audioMeditationList.length > 0) {
        
        // 1. Try matching by Title (most reliable)
        if (card.title) {
           const title = card.title.trim().toLowerCase();
           const match = this.audioMeditationList.find(m => m.Title && m.Title.trim().toLowerCase() === title);
           if (match) {
             const matchedId = match.dailyPractiseID || match.DailyPractiseID || match.dailyPracticeID || match.DailyPracticeID;
             if (matchedId) id = Number(matchedId);
           }
        }

        // 2. If no title match, try RowID
        if (!id) {
           let rowId = this.extractNumericId(card.id);
           if (!rowId) rowId = this.extractIdFromPath(card.path);
           
           if (rowId !== null) {
              const match = this.audioMeditationList.find(m => m.RowID == rowId);
              if (match) {
                 const matchedId = match.dailyPractiseID || match.DailyPractiseID || match.dailyPracticeID || match.DailyPracticeID;
                 if (matchedId) id = Number(matchedId);
              }
           } 
        }
      }

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

  getTabNamePrefix(): string {
    if (this.YourTopicofChoice && this.YourTopicofChoice.length > 0) {
      const activeTopic = this.YourTopicofChoice[0];
      if (activeTopic && activeTopic.displayName && activeTopic.displayName !== 'All') {
        const name = activeTopic.displayName.trim();
        const words = name.split(/[\s-]+/);
        if (words.length > 1) {
          return words.map(w => w.charAt(0).toUpperCase()).join('');
        } else {
          return name.substring(0, 3).toLowerCase();
        }
      }
    }
    return '';
  }

  trackTeenagerSectionClick(title: string): void {
    if (!title) return;
    const t = title.toLowerCase().trim();

    if (this.isAdults) {
      // Adults section button events
      if (t.includes('begin here')) {
        this.logeventservice.logEvent('adult_Click_beginhere');
      } else if (t.includes('feel better now')) {
        this.logeventservice.logEvent('adult_Click_feelbetternow');
      } else if (t.includes('microlearning') || t.includes('micro-learning')) {
        this.logeventservice.logEvent('adult_Click_microlearning');
      } else if (t.includes('dive deeper')) {
        this.logeventservice.logEvent('adult_Click_divedeeperforlastingchange');
      } else if (t.includes('get to know your mind') || t.includes('understand your mind')) {
        this.logeventservice.logEvent('adult_Click_gettoknowyourmind');
      } else if (t.includes('short video') || t.includes('shorts')) {
        this.logeventservice.logEvent('adult_Click_shortvideos');
      } else if (t.includes('podcast')) {
        this.logeventservice.logEvent('adult_Click_podcasts');
      } else if (t.includes('life storie') || t.includes('storie')) {
        this.logeventservice.logEvent('adult_click_lifestories');
      } else if (t.includes('blog')) {
        this.logeventservice.logEvent('adult_click_blogs');
      } else if (t.includes('guided meditation') || t.includes('meditation') || t.includes('audio')) {
        this.logeventservice.logEvent('adult_Click_guidedmeditation');
      } else if (t.includes('guided journal') || t.includes('journal')) {
        this.logeventservice.logEvent('adult_Click_guidedjournaling');
      }
      return;
    }

    // Teenagers section button events
    if (t.includes('begin here')) {
      this.logeventservice.logEvent('teenager_Click_beginhere');
    } else if (t.includes('feel better now')) {
      this.logeventservice.logEvent('teenager_Click_feelbetternow');
    } else if (t.includes('microlearning') || t.includes('micro-learning')) {
      this.logeventservice.logEvent('teenager_Click_microlearning');
    } else if (t.includes('dive deeper')) {
      this.logeventservice.logEvent('teenager_Click_divedeeperforlastingchange');
    } else if (t.includes('teen talk')) {
      this.logeventservice.logEvent('teenager_Click_teentalk');
    } else if (t.includes('get to know your mind') || t.includes('understand your mind')) {
      this.logeventservice.logEvent('teenager_Click_gettoknowyourmind');
    } else if (t.includes('short video') || t.includes('shorts')) {
      this.logeventservice.logEvent('teenager_Click_shortvideos');
    } else if (t.includes('podcast')) {
      this.logeventservice.logEvent('teenager_Click_podcasts');
    } else if (t.includes('life storie') || t.includes('storie')) {
      this.logeventservice.logEvent('teenager_Click_lifestories');
    } else if (t.includes('blog')) {
      this.logeventservice.logEvent('teenager_Click_blogs');
    } else if (t.includes('meditation') || t.includes('audio')) {
      this.logeventservice.logEvent('teenager_Click_guidedmeditation');
    } else if (t.includes('journal')) {
      this.logeventservice.logEvent('teenager_Click_guidedjournaling');
    }
  }

  trackTeenagerCardClick(card: ContentCard, section?: ContentSection): void {
    if (!card) return;

    const title = (card.title || '').toLowerCase();
    const path = (card.path || '').toLowerCase();
    const secTitle = (section?.title || '').toLowerCase().trim();
    const type = (card.moduleType || card.mediaType || '').toUpperCase();
    const isVideo = type.includes('VIDEO') || type.includes('SHORT');
    const isAudio = type.includes('AUDIO') || type.includes('BREATHING') || type.includes('SOUNDSCAPE');
    const isPodcast = type.includes('PODCAST') || path.includes('podcast');
    const isStory = type.includes('STORY') || path.includes('wisdom-stories') || path.includes('lifestory');
    const isBlog = type.includes('BLOG') || path.includes('blogs') || path.includes('blog-article');

    if (this.isAdults) {
      // Adults specific card click events
      if (title.includes('deal with your inner critic') || title.includes('inner critic') || path.includes('inner-critic') || path.includes('inner_critic')) {
        this.logeventservice.logEvent('adult_click_dealwithyourinnercritic');
        return;
      }
      if (title.includes('be less stressed') || title.includes('less stressed') || path.includes('be-less-stressed') || path.includes('belessstressed')) {
        this.logeventservice.logEvent('adult_click_belessstressed');
        return;
      }

      if (secTitle.includes('begin here')) {
        if (isVideo) this.logeventservice.logEvent('adult_click_video');
      } else if (secTitle.includes('feel better now')) {
        if (isVideo) this.logeventservice.logEvent('adult_click_video_feelbetternow');
      } else if (secTitle.includes('microlearning') || secTitle.includes('micro-learning')) {
        if (isVideo) this.logeventservice.logEvent('adult_click_video_microlearning');
      } else if (secTitle.includes('dive deeper')) {
        if (isVideo) this.logeventservice.logEvent('adult_click_video_divedeeperforlastingchange');
      } else if (secTitle.includes('get to know your mind') || secTitle.includes('understand your mind')) {
        if (isVideo) this.logeventservice.logEvent('adult_click_video_gettoknowyourmind');
      } else if (secTitle.includes('short video') || secTitle.includes('shorts')) {
        if (isVideo) this.logeventservice.logEvent('adult_click_video_shortvideos');
      } else if (secTitle.includes('podcast') || isPodcast) {
        this.logeventservice.logEvent('adult_click_podcasts_icon');
      } else if (secTitle.includes('life storie') || secTitle.includes('storie') || isStory) {
        this.logeventservice.logEvent('adult_click_stories');
      } else if (secTitle.includes('blog') || isBlog) {
        this.logeventservice.logEvent('adult_click_blogsicon');
      } else if (secTitle.includes('meditation') || secTitle.includes('audio') || isAudio) {
        this.logeventservice.logEvent('adult_click_audio');
      }
      return;
    }

    // Teenagers specific card click events
    if (title.includes('deal with your inner critic') || title.includes('inner critic') || path.includes('inner-critic') || path.includes('inner_critic')) {
      this.logeventservice.logEvent('teenager_click_dealwithyourinnercritic');
      return;
    }
    if (title.includes('be less stressed') || title.includes('less stressed') || path.includes('be-less-stressed') || path.includes('belessstressed')) {
      this.logeventservice.logEvent('teenager_click_belessstressed');
      return;
    }

    if (secTitle.includes('begin here')) {
      if (isVideo) this.logeventservice.logEvent('teenager_click_video');
    } else if (secTitle.includes('feel better now')) {
      if (isVideo) this.logeventservice.logEvent('teenager_click_video_feelbetternow');
    } else if (secTitle.includes('microlearning') || secTitle.includes('micro-learning')) {
      if (isVideo) this.logeventservice.logEvent('teenager_click_video_microlearning');
    } else if (secTitle.includes('dive deeper')) {
      if (isVideo) this.logeventservice.logEvent('teenager_click_video_divedeeperforlasting change');
    } else if (secTitle.includes('teen talk')) {
      if (isVideo) this.logeventservice.logEvent('teenager_click_video_teentalk');
    } else if (secTitle.includes('get to know your mind') || secTitle.includes('understand your mind')) {
      if (isVideo) this.logeventservice.logEvent('teenager_click_video_gettoknowyourmind');
    } else if (secTitle.includes('short video') || secTitle.includes('shorts')) {
      if (isVideo) this.logeventservice.logEvent('teenager_click_video_shortvideos');
    } else if (secTitle.includes('podcast') || isPodcast) {
      this.logeventservice.logEvent('teenager_click_podcasts_icon');
    } else if (secTitle.includes('life storie') || secTitle.includes('storie') || isStory) {
      this.logeventservice.logEvent('teenager_click_stories');
    } else if (secTitle.includes('blog') || isBlog) {
      this.logeventservice.logEvent('teenager_click_blogsicon');
    } else if (secTitle.includes('meditation') || secTitle.includes('audio') || isAudio) {
      this.logeventservice.logEvent('teenager_click_audio');
    }
  }

  onSectionToggle(section: ContentSection): void {
    // Only toggle for normal accordion sections (not inline)
    if (section.isInlineSection) {
      return;
    }

    if (!section.isExpanded) {
        if (section.title) {
            const sectionName = section.title.replace(/\s+/g, '').toLowerCase();
            const tabPrefix = this.getTabNamePrefix();
            const prefix = tabPrefix ? `${tabPrefix}_` : '';
            const eventName = `click_${prefix}${sectionName}`;
            console.log(`%c [ANALYTICS EVENT] Triggering Accordion Expand: ${eventName}`, 'color: #bada55; font-size: 14px');
            this.logeventservice.logEvent(eventName);
            this.trackTeenagerSectionClick(section.title);
        }
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

    if (section.isVerticalCards &&( totalCards <= this.DEFAULT_VerticalVISIBLE_CARD_COUNT)) {
      return false;
    }
    if (!section.isVerticalCards &&( totalCards <= this.DEFAULT_VISIBLE_CARD_COUNT)) {
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
    if (section && section.title) {
      this.trackTeenagerSectionClick(section.title);
    }
    const totalCards = section.cards?.length || 0;
    if (!totalCards) {
      return;
    }

    const currentVisible = this.getVisibleCount(section);
    // const newVisibleCount = Math.min(currentVisible + this.VIEW_MORE_INCREMENT, totalCards);
    const newVisibleCount = totalCards; // Show all cards on "View More" click

    this.visibleCardCount[section.id] = newVisibleCount;

    const reachedEnd = newVisibleCount >= totalCards;
    this.showAllCards[this.getScopedSectionId(section.id)] = reachedEnd;
    this.homeStateService.setShowAllCards(this.getScopedSectionId(section.id), reachedEnd);

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
    console.log('=== HORIZONTAL SCROLL DEBUG START ===');
    console.log('YourTopicofChoice:', this.YourTopicofChoice);
    console.log('personalisedList:', this.personalisedList);

    if (this.YourTopicofChoice && this.YourTopicofChoice.length > 0) {
      const activeItem = this.YourTopicofChoice[0];
      console.log('Active item:', activeItem);

      // Find the active navigation item in the DOM
      const navItems = document.querySelectorAll('.nav-item');
      console.log('Found nav items:', navItems.length);

      let targetNavItem: HTMLElement | null = null;

      // Find the navigation item that matches the active item
      for (let i = 0; i < navItems.length; i++) {
        const navItem = navItems[i] as HTMLElement;
        const navText = navItem.textContent?.trim();
        console.log('Nav item text:', navText, 'Active item displayName:', activeItem.displayName);

        if (navText === activeItem.displayName) {
          targetNavItem = navItem;
          console.log('Found matching nav item:', navItem);
          break;
        }
      }

      if (targetNavItem) {
        // Get the navigation container
        const navContainer = document.querySelector('.nav-menu') as HTMLElement;
        if (navContainer) {
          console.log('Found nav container:', navContainer);

          // Calculate scroll position to center the active item
          const containerRect = navContainer.getBoundingClientRect();
          const itemRect = targetNavItem.getBoundingClientRect();

          // Calculate the scroll position to center the item
          const scrollLeft = targetNavItem.offsetLeft - (containerRect.width / 2) + (itemRect.width / 2);

          console.log('Scrolling to position:', scrollLeft);

          // Smooth horizontal scroll
          navContainer.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
          });

          console.log('Horizontally scrolled to active nav item:', activeItem.displayName);
        } else {
          console.warn('Navigation container not found');
        }
      } else {
        console.warn('Active navigation item not found in DOM');
        console.log('Available nav items:', Array.from(navItems).map(item => item.textContent?.trim()));
      }
    } else {
      console.log('No active topic choice found');
    }
    console.log('=== HORIZONTAL SCROLL DEBUG END ===');
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
    if (!section.viewall_Url) {
      return;
    }

    if (section.title) {
      this.trackTeenagerSectionClick(section.title);
    }

    const title = (section.title || '').toLowerCase();
    const url = (section.viewall_Url || '').toLowerCase();
    let targetUrl = section.viewall_Url;

    if ((title.includes('podcast') || title.includes('short') || title.includes('micro-learning') || title.includes('microlearning') || 
         url.includes('podcast') || url.includes('short') || url.includes('micro-learning')) 
        && !title.includes('understand your mind') && !url.includes('understand-your-mind') && !url.includes('understand your mind')
        && this.YourTopicofChoice && this.YourTopicofChoice.length > 0) {
      const activeTopic = this.YourTopicofChoice[0];
      if (activeTopic && activeTopic.displayName && activeTopic.displayName !== 'All') {
        // Append fragment to URL manually to ensure it appears
        targetUrl += '#' + activeTopic.displayName;
      }
    }

    this.router.navigateByUrl(targetUrl);
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
    // Initialize visible card count for horizontal sections (default 4)
    // Could restore from store if needed in future
    console.log('Restored state from store:', state);
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
    const hash = window.location.hash;
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
      const normalizedDisplayName = this.normalizeHash(item.displayName);
      return normalizedDisplayName === normalizedHash;
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
   * Converts to lowercase, removes all spaces and hyphens for consistent matching
   */
  private normalizeHash(hash: string): string {
    return hash.toLowerCase()
      .replace(/[-_]/g, '')
      .replace(/%20/g, '')
      .replace(/\s+/g, '')
      .trim();
  }

  updateHeaderDisplay(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const isHidden = scrollTop > 50 || this.isSearchActive;
    this.isHeaderHidden = isHidden;
    const dtnEl = document.querySelector('.dtn') as HTMLElement;
    if (dtnEl) {
      dtnEl.style.display = isHidden ? 'none' : 'block';
    }
    this.cdr.detectChanges();
  }

  /**
   * Handle scroll events to show/hide greeting
   * Using HostListener for better performance
   * Hide greeting when scroll exceeds 20% of viewport height
   */
  @HostListener('window:scroll', ['$event'])
  handleScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const threshold = viewportHeight * 0.2; // 20% of viewport height

    // Hide greeting when scroll exceeds 20% of screen height
    if (scrollTop > threshold) {
      this.showGreeting = false;
    } else {
      this.showGreeting = true;
    }

    // Toggle header visibility based on scroll threshold and search active state
    this.updateHeaderDisplay();

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  ngOnDestroy(): void {
    // Always release any scroll lock set by search box or other interactions
    document.body.style.removeProperty('overflow');
    document.documentElement.style.removeProperty('overflow');
    // Restore header visibility when leaving home page
    const dtnEl = document.querySelector('.dtn') as HTMLElement;
    if (dtnEl) { dtnEl.style.display = 'block'; }
    this.teardownPlaystoreBannerObserver();
    // Clean up event listeners
    if (this.hashChangeHandler) {
      window.removeEventListener('hashchange', this.hashChangeHandler);
    }
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    if (this.userDetailsSubscription) {
      this.userDetailsSubscription.unsubscribe();
    }
  }

  private loadUsername(): void {
    SharedService.syncUserDisplayNameFromLogin();
    const userName = SharedService.FnName();

    if (!userName || userName === 'null' || userName === 'undefined') {
      this.username = '';
      this.streak = '';
      return;
    }

    this.username = userName;
    if (this.isloggedIn) {
      this.getStreak();
    }
  }

  private subscribeToUserDetails(): void {
    this.userDetailsSubscription = this.onboardingService.getUserDetails.subscribe(res => {
      if (res?.[0]) {
        this.applyUserNameFromApi(res[0]);
      }
    });
  }

  private fetchUserNameFromApi(): void {
    const userId = SharedService.getUserId();
    if (!userId) {
      return;
    }

    this.onboardingService.getuser(userId).subscribe((res: any) => {
      if (res?.[0]) {
        this.applyUserNameFromApi(res[0]);
      }
    });
  }

  private applyUserNameFromApi(user: any): void {
    const fullName = (user?.Name || [user?.FName, user?.LName].filter(Boolean).join(' ')).trim();
    if (!fullName || fullName.toLowerCase() === 'guest') {
      return;
    }

    SharedService.syncUserDisplayName(fullName);

    try {
      const loginResponse = localStorage.getItem('loginResponse');
      if (loginResponse) {
        const loginData = JSON.parse(loginResponse);
        loginData.Name = fullName;
        localStorage.setItem('loginResponse', JSON.stringify(loginData));
      }
    } catch {
      // ignore malformed loginResponse
    }

    this.username = SharedService.FnName();
    this.cdr.detectChanges();
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
   * Update the URL fragment (hash) using window.history.replaceState
   * Keeps browser URL bar in sync with active tab without triggering page reload
   */
  private updateUrlFragment(item: NavigationItem): void {
    if (!item || !item.displayName) return;

    const fragment = item.displayName.toLowerCase().trim().replace(/\s+/g, '-');
    const targetHash = '#' + fragment;

    if (window.location.hash.toLowerCase() !== targetHash.toLowerCase()) {
      const newUrl = window.location.pathname + window.location.search + targetHash;
      window.history.replaceState(null, '', newUrl);
      this.navigationService.replaceLastHistory(newUrl);
      console.log('URL Fragment updated to:', targetHash);
    }
  }

  /**
   * Clear the URL fragment (hash) using window.history.replaceState for immediate browser-level history update
   */
  private clearUrlFragment(): void {
    if (window.location.hash) {
      const url = window.location.pathname + window.location.search;
      window.history.replaceState(null, '', url);
      // Sync internal app history with the cleaned URL to fix back navigation issues
      this.navigationService.replaceLastHistory(url);
      console.log('URL Fragment cleared immediately via replaceState and history synced');
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
      this.preference = item.id;
      this.showWisdomExercise = true;
      this.YourTopicofChoice = [item];
      // Save user preference for Self Awareness
      this.update(item.id);
      console.log('Activated Self Awareness from hash');
      // Scroll the active tab to center
      setTimeout(() => {
        this.scrollToActiveList();
      }, 500);
      this.updateUrlFragment(item);
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

    // Sync URL fragment to item's canonical hash (e.g., #self-awareness or #meditation)
    this.updateUrlFragment(item);
  }

  /**
   * Get module list from API for search dropdown
   */
  getModuleList(): void {
    this.commonService.getModuleList().subscribe(res => {
      if (res) {
        this.moduleList = res;
        this.moduleList.push({"ModuleName":"Events"},{"ModuleName":"Blogs"},{"ModuleName":"Life stories"},{"ModuleName":"Stories"},{"ModuleName":"Podcast"}, {"ModuleName":"Microlearning"}, {"ModuleName":"Guided journeys"}, {"ModuleName":"Short videos"}, {"ModuleName":"Videos"}, {"ModuleName":"Audio meditations"},{"ModuleName":"Soundscapes"},{"ModuleName":"Journal"},{"ModuleName":"Forum"}, {"ModuleName":"Exercises"},{"ModuleName":"Awareness Exercises"},{"ModuleName":"Self Awareness"},
                            {"ModuleName":"Develop a calm mind"},{"ModuleName":"Manage your emotions"},
                            {"ModuleName":"Understand yourself"},{"ModuleName":"Succeed in life"},
                            {"ModuleName":"Understand how your mind works"},{"ModuleName":"Mental Health"} )
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
    if (this.containsCrisisKeyword(value)) {
      this.showCrisisPopup = true;
      return;
    }
    if (this.moduleList.length > 0) {
      if (value == null || value == "") {
        this.searchResult = this.moduleList;
      } else {
        this.isSearchActive = true;
        this.commonService.setSearchActive(true);
        this.updateHeaderDisplay();
        this.searchResult = this.moduleList.filter(x =>
          (x.ModuleName?.toLocaleLowerCase() || '').includes(value?.toLocaleLowerCase() || '')
        );
      }
      // Toggle body scroll based on search result visibility
      if (this.isSearchActive) {
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
    this.isSearchActive = true;
    this.commonService.setSearchActive(true);
    this.updateHeaderDisplay();
    this.toggleBodyScroll(true);
    const prefix = this.getTabNamePrefix();
    const eventName = `click_${prefix}search_bar`;
    this.logeventservice.logEvent(eventName);
    if (!this.isAdults) {
      this.logeventservice.logEvent('teenager_click_searchbar_explore');
    } else {
      this.logeventservice.logEvent('adult_click_searchbar_explore');
    }
    
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
    if (this.isSearchActive) {
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
  getinp(searchTerm: string, fromDropdown: boolean = false): void {
    if (this.containsCrisisKeyword(searchTerm)) {
      this.showCrisisPopup = true;
      return;
    }
    this.isSearchActive = false;
    this.commonService.setSearchActive(false);
    this.updateHeaderDisplay();
    if (searchTerm && searchTerm.trim() !== '') {
      if (!fromDropdown) {
        const eventName = `search_${searchTerm.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}`;
        console.log(`%c [ANALYTICS EVENT] Triggering Search Submit: ${eventName}`, 'color: #bada55; font-size: 14px');
        this.logeventservice.logEvent(eventName);
      }

      let url = "";
      let fragment: string | undefined = undefined;
      this.searchinp = searchTerm;

      switch(searchTerm.toLowerCase())
      {
        case "events":{
            url = `/${SharedService.getprogramName()}/events`
            break;
        }
        case "blogs":{
          url =`/${SharedService.getprogramName()}/blogs`
          break;
        }
        case "life stories":
        case "stories":{
          url = `/${SharedService.getprogramName()}/wisdom-stories`
          break;
        }
        case "podcast":{
          url = `/${SharedService.getprogramName()}/podcast`
          break;
        }
        case "microlearning":{
          url = `/${SharedService.getprogramName()}/micro-learning`
          break;
        }
        case "guided journeys":{
          url = `/${SharedService.getprogramName()}/guided-journeys`
          break;
        }
        case "audio meditations":{
          url = `/${SharedService.getprogramName()}/audio-meditation`
          break;
        }
        case "soundscapes":{
          url = `/${SharedService.getprogramName()}/soundscapes`
          break;
        }
        case "guided audio meditation":{
          url = `/${SharedService.getprogramName()}/audio-meditation`
          break;
        }
        case ("short videos"):
        case ("videos"):
          {
          url = `/${SharedService.getprogramName()}/wisdom-shorts`
          break;
        }
        case "exercises":
        case "awareness exercises":
        case "self awareness":
        case "self-awareness":
          {
          // If already on the home page, directly activate the Self Awareness nav item
          // instead of relying on router.navigate (which ignores same-URL navigation)
          const currentUrl = this.router.url.split('#')[0].split('?')[0];
          const homeUrl = `/${SharedService.getprogramName()}/home`;
          if (currentUrl === homeUrl) {
            // Find the Self Awareness item from the UI-bound personalisedList
            // so that onNavigationClick updates the correct active state in the template
            const selfAwarenessItem = this.personalisedList.find(item => 
              this.normalizeHash(item.displayName) === 'selfawareness'
            );
            if (selfAwarenessItem) {
              this.searchResult = [];
              this.toggleBodyScroll(false);
              (document.activeElement as HTMLElement)?.blur();
              this.onNavigationClick(selfAwarenessItem);
              // Scroll to top so the Self Awareness content is visible
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                this.scrollToActiveList();
              }, 300);
              return;
            }
          }
          // Fallback: navigate via router (when on a different page)
          url = `/${SharedService.getprogramName()}/home`
          fragment = "self-awareness"
          break;
        }
        case "journal":{
          url = `/${SharedService.getprogramName()}/journal`
          break;
        }
        case "forum":{
          url = `/${SharedService.getprogramName()}/forum`
          break;
        }
        case "develop a calm mind":{
          url =`/${SharedService.getprogramName()}/pathway/develop-a-calm-mind`
          break;
        }
        case "understand yourself":{
          url = `/${SharedService.getprogramName()}/pathway/understand-yourself`
          break;
        }
        case "understand how your mind works":{
          url = `/${SharedService.getprogramName()}/pathway/understand-how-your-mind-works`
          break;
        }
        case "manage your emotions":{
          url = `/${SharedService.getprogramName()}/pathway/manage-your-emotions`
          break;
        }
        case "succeed in life":{
          url = `/${SharedService.getprogramName()}/pathway/live-your-best-life`
          break;
        }
        case "mental health":{
          url = `/${SharedService.getprogramName()}/curated/overcome-stress-anxiety`
          break;
        }
       default: {
        let regexp =  this.searchinp.repeat(1);
        let searchInpt = regexp;
        searchInpt = searchInpt.replace(/[^a-zA-Z 0-9-]/g, "");
         url=`/${SharedService.getprogramName()}/site-search/${searchInpt}`
          break;
        }
      }
      
      this.searchResult = [];
      this.toggleBodyScroll(false);
      (document.activeElement as HTMLElement)?.blur();
      this.router.navigate([url], { fragment: fragment })
    }
  }

  /**
   * Handle search result click - navigate to search page
   */
  searchEvent(moduleName: string): void {
    this.isSearchActive = false;
    this.commonService.setSearchActive(false);
    this.updateHeaderDisplay();
    const eventName = `search_dropdown_${moduleName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}`;
    console.log(`%c [ANALYTICS EVENT] Triggering Search Dropdown: ${eventName}`, 'color: #bada55; font-size: 14px');
    this.logeventservice.logEvent(eventName);

    this.searchinp = moduleName;
    this.searchResult = [];
    this.toggleBodyScroll(false);
    this.getinp(moduleName, true);
  }

  /**
   * Clear search and hide dropdown
   */
  clearSearch(): void {
    this.isSearchActive = false;
    this.commonService.setSearchActive(false);
    this.updateHeaderDisplay();
    const eventName = 'click_search_clear';
    console.log(`%c [ANALYTICS EVENT] Triggering Search Clear: ${eventName}`, 'color: #bada55; font-size: 14px');
    this.logeventservice.logEvent(eventName);

    this.searchinp = '';
    this.searchResult = [];
    this.toggleBodyScroll(false);
  }

  toggleBodyScroll(lock: boolean): void {
    if (lock) {
      document.body.style.setProperty('overflow', 'hidden', 'important');
      document.documentElement.style.setProperty('overflow', 'hidden', 'important');
    } else {
      document.body.style.removeProperty('overflow');
      document.documentElement.style.removeProperty('overflow');
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
    if (this.navMenu && this.navMenu.nativeElement) {
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
    if (this.navMenu && this.navMenu.nativeElement) {
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

  routeToCoach(){
    this.logeventservice.logEvent("click_contact_a_coach");
    if (!this.isAdults) {
      this.logeventservice.logEvent('teenager_click_contactacoach');
    }
      this.router.navigate([SharedService.getprogramName(), 'coach']);


  }
}
