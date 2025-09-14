import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SharedService } from '../../services/shared.service';

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
export class HomeComponent implements OnInit {
  @Input() navigationItems= [];
  @Input() description: string = 'Deal with stress and anxiety. Go deeper to understand the root cause for long-term benefit.';

  @Input() contentSections: ContentSection[] = [];

  @Output() navigationChange = new EventEmitter<string>();
  @Output() cardClick = new EventEmitter<ContentCard>();
  @Output() sectionToggle = new EventEmitter<ContentSection>();
  personalisedList = [];
  YourTopicofChoice;
  // Track which sections are showing all cards
  showAllCards: { [sectionId: string]: boolean } = {};
   mainheader:string='';
  constructor(private router: Router, private commonService: CommonService) {
    this.navigationItems = SharedService.getPreferenceData();
   }

  ngOnInit(): void {
    this.loadHomeContents(2);
     this.getUserPreference();
    console.log('Home component initialized');
  }

   loadHomeContents(id): void {
    this.commonService.GetHomeContents(9, id).subscribe((res: HomeContentResponse) => {
      if (res) {
        this.mainheader =res.MainHeader;
        console.log('Raw API response:', res);
        this.contentSections = this.transformApiResponseToContentSections(res);
        console.log('Transformed content sections:', this.contentSections);
      } else {
        console.warn('API response is empty or null');
      }
    });
  }

  /**
   * Transform API response to ContentSection format
   * Combines Modules1/2/3 under a single parent "Modules" accordion whose children are inline module panels.
   */
  transformApiResponseToContentSections(apiResponse: HomeContentResponse): ContentSection[] {
    const sections: ContentSection[] = [];

    if (apiResponse.Introduction) {
      sections.push(this.transformSection(apiResponse.Introduction, 'introduction'));
    }

    // Handle Long term solutions as parent with Modules2 and Modules3 as children
    if (apiResponse.Modules1) {
      const longTermSolutions = this.transformSection(apiResponse.Modules1, 'modules1');
      
      // Add Modules2 and Modules3 as child sections
      const childSections: ContentSection[] = [];
      
      if (apiResponse.Modules2) {
        const module2 = this.transformSection(apiResponse.Modules2, 'modules2');
        module2.isInlineSection = true;
        module2.isExpanded = true;
        childSections.push(module2);
      }
      
      if (apiResponse.Modules3) {
        const module3 = this.transformSection(apiResponse.Modules3, 'modules3');
        module3.isInlineSection = true;
        module3.isExpanded = true;
        childSections.push(module3);
      }
      
      longTermSolutions.childSections = childSections;
      sections.push(longTermSolutions);
    }

    if (apiResponse.Blogs) sections.push(this.transformSection(apiResponse.Blogs, 'blogs'));
    if (apiResponse.Stories) sections.push(this.transformSection(apiResponse.Stories, 'stories'));
    if (apiResponse.Podcast) sections.push(this.transformSection(apiResponse.Podcast, 'podcast'));
    if (apiResponse.Shorts) sections.push(this.transformSection(apiResponse.Shorts, 'shorts'));

    const knownKeys = ['Introduction','Modules1','Modules2','Modules3','Blogs','Stories','Podcast','Shorts'];
    Object.keys(apiResponse).forEach(key => {
      if (!knownKeys.includes(key) && apiResponse[key] && apiResponse[key].title) {
        sections.push(this.transformSection(apiResponse[key], key.toLowerCase()));
      }
    });

    return sections;
  }

  /**
   * Create a parent Modules section that contains Modules1/2/3 as inline child panels (not accordions).
   */
  private createCombinedModulesSection(apiResponse: HomeContentResponse, parentSectionType = 'modules'): ContentSection | undefined {
    const modulesList: { section: HomeSection, type: string }[] = [];
    if (apiResponse.Modules1) modulesList.push({ section: apiResponse.Modules1, type: 'modules1' });
    if (apiResponse.Modules2) modulesList.push({ section: apiResponse.Modules2, type: 'modules2' });
    if (apiResponse.Modules3) modulesList.push({ section: apiResponse.Modules3, type: 'modules3' });

    if (!modulesList.length) return undefined;

    // Convert each module to a ContentSection but mark as inline (so template renders title + cards)
    const childSections = modulesList.map(({ section, type }) => {
      const transformed = this.transformSection(section, type);
      transformed.isInlineSection = true; // IMPORTANT: render as non-accordion inline panel
      // ensure inline sections show cards (we'll ignore their isExpanded for inline)
      transformed.isExpanded = true;

      // copy raw sectionType -> isVerticalCards
      const rawType = typeof section.sectionType === 'string' ? Number(section.sectionType) : section.sectionType;
      transformed.rawSectionType = rawType;
      transformed.isVerticalCards = rawType === 2;

      return transformed;
    });

    const parentTitle =
      (apiResponse.Modules1 && apiResponse.Modules1.title) ||
      (apiResponse.Modules2 && apiResponse.Modules2.title) ||
      (apiResponse.Modules3 && apiResponse.Modules3.title) ||
      'Modules';

    const parentSubtitle =
      (apiResponse.Modules1 && apiResponse.Modules1.Subtitle) ||
      (apiResponse.Modules2 && apiResponse.Modules2.Subtitle) ||
      (apiResponse.Modules3 && apiResponse.Modules3.Subtitle) ||
      '';

    const parent: ContentSection = {
      id: `combined-modules-${Date.now()}`,
      title: parentTitle,
      subtitle: parentSubtitle,
      isExpanded: false,
      cards: [], // top-level cards empty; children are inline panels
      cssClass: 'modules-combined',
      overlayIcon: undefined,
      childSections: childSections,
      isInlineSection: false,
      rawSectionType: undefined,
      isVerticalCards: false
    };

    return parent;
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

    const childSections = nestedSources.map((s) => this.transformSection(s, sectionType));

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

   getUserPreference() {
    this.commonService.getUserpreference().subscribe((res) => {
      let perd = this.commonService.getperList();
      this.personalisedList = []
      if (res) {
        localStorage.setItem('userPreference', res);
        perd.forEach((r) => {
          if (res === r.id) {
            r['active'] = true;
            this.personalisedList.push(r);
          } else {
            r['active'] = false;
            this.personalisedList.push(r);
          }
        })
        this.YourTopicofChoice = this.personalisedList.filter((d) => d['active']);
      console.log('YourTopicofChoice', this.YourTopicofChoice);
        console.log(this.YourTopicofChoice);
        
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
      mediaType: this.mapModuleToMediaType(card.cardtype || card.module),
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
      mediaType: this.mapModuleToMediaType(card.cardtype || 'MODULE'),
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
      mediaType: this.mapModuleToMediaType(card.cardtype || 'BLOG'),
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
      mediaType: this.mapModuleToMediaType(card.cardtype || 'SHORT'),
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
      mediaType: this.mapModuleToMediaType(card.cardtype || 'PODCAST'),
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
      mediaType: this.mapModuleToMediaType(card.cardtype || 'VIDEO'),
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
      mediaType: this.mapModuleToMediaType(card.cardtype || card.module || 'VIDEO'),
      duration: card.Timing || card.timing || card.duration || '',
      overlayIcon: card.overlayIcon || card.icon_path || '',
      path: card.URL || card.path || '',
      moduleType: card.cardtype || card.module || card.moduleType || '',
      isFree: card.isFree,
      isRead: card.isRead
    };
  }

  private mapModuleToMediaType(module: string): 'VIDEO' | 'AUDIO' | 'BLOG' | 'FORUM' | 'BREATHING EXERCISE' | 'WELLNESS SURVEY' | 'PODCAST' | 'SHORT' {
    if (!module) return 'VIDEO';
    const upperModule = module.toUpperCase();
    switch (upperModule) {
      case 'VIDEO':
        return 'VIDEO';
      case 'AUDIO':
      case 'PODCAST':
        return 'PODCAST';
      case 'BLOG':
        return 'BLOG';
      case 'FORUM':
        return 'FORUM';
      case 'BREATHING EXERCISE':
        return 'BREATHING EXERCISE';
      case 'WELLNESS SURVEY':
        return 'WELLNESS SURVEY';
      case 'SHORT':
        return 'SHORT';
      case 'MODULE':
        return 'VIDEO'; // Modules are typically video content
      default:
        return 'VIDEO';
    }
  }

  onNavigationClick(item): void {
    console.log(item);
    this.navigationItems.forEach(nav => nav.active = false);
    item.active = true;
    this.loadHomeContents(item.id);
  }

  onCardClick(card: ContentCard): void {
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
    this.sectionToggle.emit(section);
  }


  getDisplayCards(section: ContentSection): any[] {
    const isStoriesOrBlogs = section.rawSectionType === 2;
    const isQuickAnswers = section.rawSectionType === 3;
    const showAll = this.showAllCards[section.id];

    if ((isStoriesOrBlogs || isQuickAnswers) && !showAll) {
      return section.cards?.slice(0, 3) || [];
    }

    return section.cards || [];
  }

  onViewAllClick(section: ContentSection): void {
    this.showAllCards[section.id] = true;
  }

  onViewLessClick(section: ContentSection): void {
    this.showAllCards[section.id] = false;
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
}
