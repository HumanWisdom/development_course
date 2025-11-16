import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SharedService } from '../../services/shared.service';
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
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
 navigationItems= [];
  description: string = 'Deal with stress and anxiety. Go deeper to understand the root cause for long-term benefit.';

 contentSections: ContentSection[] = [];
  isSubscriber = false;
navigationChange = new EventEmitter<string>();
 cardClick = new EventEmitter<ContentCard>();
 sectionToggle = new EventEmitter<ContentSection>();
  @ViewChild('sectionElement', { static: false }) sectionElement: ElementRef;
  personalisedList = [];
  YourTopicofChoice;
  isAdults = false;
  showWisdomExercise: boolean = false;
  username:string = 'Guest';   // Track which sections are showing all cards
  showAllCards: { [sectionId: string]: boolean } = {};
  // Track visible card count for horizontal sections (View More functionality)
  visibleCardCount: { [sectionId: string]: number } = {};
   mainheader:string='';
  searchinp: string = '';
  searchResult: any[] = [];
  moduleList: any[] = [];
  showSearchBox: boolean = true;
  private routerSubscription: Subscription;
  private hashChangeHandler: () => void;
  private lastScrollTop: number = 0;
  
  constructor(
    private router: Router, 
    private commonService: CommonService,
    private homeStateService: HomeStateService
  ) {
    this.navigationItems = SharedService.getPreferenceDataForHome();
    // Listen to hash changes dynamically
    this.hashChangeHandler = () => {
      this.handleHashChange();
    };
    window.addEventListener('hashchange', this.hashChangeHandler);
    
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
     this.username=SharedService.FnName();
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
    // Check cache first
    const cachedContent = this.homeStateService.getCachedContent(id.toString());
    if (cachedContent) {
      console.log('Using cached content for preference:', id);
      this.mainheader = cachedContent.MainHeader;
      this.contentSections = this.transformApiResponseToContentSections(cachedContent);
      this.restoreExpandedState();
      
      // Scroll to active list after content is loaded
      setTimeout(() => {
        this.scrollToActiveList();
      }, 300);
      return;
    }

    // Fetch from API if not cached
    this.commonService.GetHomeContents(9, id).subscribe((res: HomeContentResponse) => {
      if (res) {
        this.mainheader = res.MainHeader;
        console.log('Raw API response:', res);
        
        // Cache the response
        this.homeStateService.setCachedContent(id.toString(), res);
        
        this.contentSections = this.transformApiResponseToContentSections(res);
        console.log('Transformed content sections:', this.contentSections);
        
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
        const module2 = this.transformSection(apiResponse.Modules2, 'modules2');
        module2.isInlineSection = true;
        module2.isExpanded = true;
        childSections.push(module2);
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
    const knownKeys = ['Introduction','Modules1','Modules2','Modules3','Blogs','Stories','Podcast','Shorts'];
    Object.keys(apiResponse).forEach(key => {
      if (!knownKeys.includes(key) && apiResponse[key] && apiResponse[key].title && this.hasCards(apiResponse[key])) {
        sections.push(this.transformSection(apiResponse[key], key.toLowerCase()));
      }
    });

    // Sort sections by ID in ascending order (1, 2, 3, etc.)
    sections.sort((a, b) => {
      const idA = parseInt(a.id) || 0;
      const idB = parseInt(b.id) || 0;
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

    const transformedCards = this.transformCards(cardsArray, sectionType);

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
      isVerticalCards: isVertical
    };
  }

   async getUserPreference() {
    this.commonService.getUserpreference().subscribe((res) => {
      let perd = SharedService.getPreferenceDataForHome();
      this.personalisedList = []
      
      // Check if we have a stored active preference from our state service
      const storedActivePreference = this.homeStateService.getActivePreference();
      
      if (res) {
        // User has a saved preference
        localStorage.setItem('userPreference', res);
        
        // Use stored preference if available, otherwise use the API response
        const preferenceToUse = storedActivePreference || res;
        
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
        if (preferenceToUse === "19") {
          this.showWisdomExercise = true;
          this.YourTopicofChoice = this.personalisedList.filter((d) => d['active']);
          console.log('User preference loaded (Self Awareness):', this.YourTopicofChoice);
        } else {
          this.showWisdomExercise = false;
          this.loadHomeContents(Number(preferenceToUse));
          this.YourTopicofChoice = this.personalisedList.filter((d) => d['active']);
          console.log('User preference loaded:', this.YourTopicofChoice);
        }
        
        // Scroll to the selected section after preference is loaded
        setTimeout(() => {
          this.scrollToActiveList();
        }, 400);
      } else {
        // Guest user or no preference - check if we have stored state
        if (storedActivePreference) {
          // Use stored preference for guest users too
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
            this.showWisdomExercise = true;
            this.YourTopicofChoice = this.personalisedList.filter((d) => d['active']);
            console.log('Guest user with stored preference (Self Awareness):', this.YourTopicofChoice);
          } else {
            this.showWisdomExercise = false;
            this.loadHomeContents(Number(storedActivePreference));
            this.YourTopicofChoice = this.personalisedList.filter((d) => d['active']);
            console.log('Guest user with stored preference:', this.YourTopicofChoice);
          }
          
          setTimeout(() => {
            this.scrollToActiveList();
          }, 400);
        } else {
          // No stored preference - default to Mental health
          this.handleGuestUserDefault(perd);
        }
      }
    })
  }

  /**
   * Transform cards based on section type
   */
  transformCards(cards: any[], sectionType: string): ContentCard[] {
    if (!Array.isArray(cards)) {
      return [];
    }

    return cards.map((card, index) => {
      switch (sectionType) {
        case 'introduction':
          return this.transformIntroductionCard(card);
        case 'modules1':
        case 'modules2':
        case 'modules3':
          return this.transformModuleCard(card);
        case 'blogs':
          return this.transformBlogCard(card);
        case 'stories':
          return this.transformStoryCard(card);
        case 'podcast':
          return this.transformPodcastCard(card);
        case 'shorts':
          return this.transformShortCard(card);
        default:
          return this.transformGenericCard(card);
      }
    });
  }

  transformIntroductionCard(card: any): ContentCard {
    return {
      id: card.title || `intro-${Date.now()}`,
      imageUrl: card.imgUrl || card.image_path || card.imageUrl || '',
      title: card.title || '',
      subtitle: card.Subtitle || card.subtitle || '',
      mediaType:card.cardtype,
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
      id: card.id || card.title || `card-${Date.now()}`,
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
    if (item.id === "19") {
      this.showWisdomExercise = true;
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
     }})
    };

  onCardClick(card: ContentCard): void {
    console.log('Card clicked:', card);
   if(card.path && card.path.includes('?')) 
   {
      const [basePath, queryString] = card.path.split('?');
      const queryParams = new URLSearchParams(queryString);
      const queryObj: any = {};
      queryParams.forEach((value, key) => {
        queryObj[key] = value;
      });
      try {
        this.router.navigate([basePath], { queryParams: queryObj });
      } catch (e) {
        console.warn('Navigation failed for path with query params:', card.path, e);
      }
    return;
   }
    if (card.path) {
      try {
        this.router.navigate([card.path]);
      } catch (e) {
        console.warn('Navigation failed for path:', card.path, e);
      }
    }
    this.cardClick.emit(card);
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
    const isStoriesOrBlogs = section.rawSectionType === 2;
    const isQuickAnswers = section.rawSectionType === 3;
    const showAll = this.showAllCards[section.id];
    const isHorizontal = !section.isVerticalCards;

    // Handle vertical sections (stories/blogs/quick answers)
    if ((isStoriesOrBlogs || isQuickAnswers) && !showAll) {
      return section.cards?.slice(0, 3) || [];
    }

    // Handle horizontal sections - limit to visible count (default 4 if more than 4 cards exist)
    if (isHorizontal && section.cards && section.cards.length > 4) {
      const visibleCount = this.visibleCardCount[section.id] || 4;
      return section.cards.slice(0, visibleCount);
    }

    return section.cards || [];
  }

  onViewAllClick(section: ContentSection): void {
    this.showAllCards[section.id] = true;
    this.homeStateService.setShowAllCards(section.id, true);
  }

  onViewLessClick(section: ContentSection): void {
    this.showAllCards[section.id] = false;
    this.homeStateService.setShowAllCards(section.id, false);
  }

  shouldShowViewAll(section: ContentSection): boolean {
    const isStoriesOrBlogs = section.rawSectionType === 2;
    const isQuickAnswers = section.rawSectionType === 3;
    const showAll = this.showAllCards[section.id];
    const hasMoreThan3Cards = (section.cards?.length || 0) > 3;

    return (isStoriesOrBlogs || isQuickAnswers) && !showAll && hasMoreThan3Cards;
  }

  shouldShowViewLess(section: ContentSection): boolean {
    const isStoriesOrBlogs = section.rawSectionType === 2;
    const isQuickAnswers = section.rawSectionType === 3;
    const showAll = this.showAllCards[section.id];
    const hasMoreThan3Cards = (section.cards?.length || 0) > 3;

    return (isStoriesOrBlogs || isQuickAnswers) && showAll && hasMoreThan3Cards;
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
    if (totalCards <= 4) {
      return false;
    }

    const visibleCount = this.visibleCardCount[section.id] || 4;
    return visibleCount < totalCards;
  }

  /**
   * Handle "View More" click for horizontal sections
   * Incrementally loads 4 more cards each time
   */
  onViewMoreClick(section: ContentSection): void {
    const totalCards = section.cards?.length || 0;
    const currentVisible = this.visibleCardCount[section.id] || 4;
    const increment = 4;
    const newVisibleCount = Math.min(currentVisible + increment, totalCards);
    
    this.visibleCardCount[section.id] = newVisibleCount;
    
    // Save state to store if needed (optional, for persistence)
    // this.homeStateService.setVisibleCardCount(section.id, newVisibleCount);
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

   onViewAll(section):void{
     this.router.navigate([section.viewall_Url]);
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
      const idA = parseInt(a.id) || 0;
      const idB = parseInt(b.id) || 0;
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
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const threshold = viewportHeight * 0.2; // 20% of viewport height
    
    // Hide search box when scroll exceeds 20% of screen height
    if (scrollTop > threshold) {
      this.showSearchBox = false;
      this.searchResult = []; // Close dropdown when hiding search box
    } else {
      // Show search box when scroll is within 20% of screen height
      this.showSearchBox = true;
    }
    
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
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
    if (item.id === "19") {
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
  }

  /**
   * Handle focus out event - hide dropdown after delay
   */
  onFocusOutEvent(): void {
    setTimeout(() => {
      this.searchResult = [];
    }, 400);
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
    this.getinp(moduleName);
  }

  /**
   * Clear search and hide dropdown
   */
  clearSearch(): void {
    this.searchinp = '';
    this.searchResult = [];
  }
}
