import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

export interface NavigationItem {
  id: string;
  label: string;
  isActive: boolean;
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
  overlayIcon: string | null;
  cssClass: string;
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
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() navigationItems: NavigationItem[] = [
    { id: 'work', label: 'Work', isActive: false },
    { id: 'mental-wellbeing', label: 'Mental wellbeing', isActive: true },
    { id: 'relationships', label: 'Relationships', isActive: false },
    { id: 'be', label: 'Be', isActive: false }
  ];

  @Input() description: string = 'Deal with stress and anxiety. Go deeper to understand the root cause for long-term benefit.';

  @Input() contentSections: ContentSection[] = [];

  @Output() navigationChange = new EventEmitter<string>();
  @Output() cardClick = new EventEmitter<ContentCard>();
  @Output() sectionToggle = new EventEmitter<ContentSection>();

  constructor(private router: Router, private commonService: CommonService) { }

  ngOnInit(): void {
    this.loadHomeContents();
    console.log('Home component initialized');
  }

  private loadHomeContents(): void {
    this.commonService.GetHomeContents(9, 2).subscribe((res: HomeContentResponse) => {
      if (res) {
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

    const combinedModules = this.createCombinedModulesSection(apiResponse, 'modules');
    if (combinedModules) {
      sections.push(combinedModules);
    } else {
      if (apiResponse.Modules1) sections.push(this.transformSection(apiResponse.Modules1, 'modules1'));
      if (apiResponse.Modules2) sections.push(this.transformSection(apiResponse.Modules2, 'modules2'));
      if (apiResponse.Modules3) sections.push(this.transformSection(apiResponse.Modules3, 'modules3'));
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
      isInlineSection: false
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

    const cardsArray = Array.isArray(section.cards) ? section.cards : [];

    return {
      id: section.id || `section-${Date.now()}`,
      title: section.title || '',
      subtitle: section.Subtitle || '',
      isExpanded: !!section.isExpanded,
      cards: this.transformCards(cardsArray, sectionType),
      overlayIcon: section.overlayIcon,
      cssClass: section.cssClass,
      childSections: childSections.length ? childSections : undefined,
      isInlineSection: false
    };
  }

  /**
   * Transform cards based on section type
   */
  transformCards(cards: any[], sectionType: string): ContentCard[] {
    if (!Array.isArray(cards)) return [];

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
      imageUrl: card.image_path || '',
      title: card.title || '',
      subtitle: card.subtitle || '',
      mediaType: this.mapModuleToMediaType(card.module),
      duration: card.timing || '',
      overlayIcon: card.icon_path || '',
      path: card.path || '',
      moduleType: card.module || ''
    };
  }

  transformModuleCard(card: any): ContentCard {
    return {
      id: card.moduleId?.toString() || card.id || `module-${Date.now()}`,
      imageUrl: card.image_path || card.ImagePath || '',
      title: card.moduleName || card.Title || card.title || '',
      subtitle: card.sectionName || card.SectionName || card.subtitle || '',
      mediaType: 'VIDEO',
      duration: card.SessionCnt ? `${card.SessionCnt} sessions` : '',
      overlayIcon: '',
      path: card.path || card.modulePath || '',
      moduleType: 'MODULE'
    };
  }

  transformBlogCard(card: any): ContentCard {
    return {
      id: card.BlogID?.toString() || `blog-${Date.now()}`,
      imageUrl: card.ImagePath || card.imageUrl || '',
      title: card.Title || card.title || '',
      subtitle: card.LikeCnt ? `${card.LikeCnt} likes` : '',
      mediaType: 'BLOG',
      duration: '',
      overlayIcon: '',
      path: `/adults/blog-article?sId=${card.BlogID}`,
      moduleType: 'BLOG'
    };
  }

  transformStoryCard(card: any): ContentCard {
    return {
      id: card.ScenarioID?.toString() || `story-${Date.now()}`,
      imageUrl: card.Img || card.image || '',
      title: card.Title || card.title || '',
      subtitle: card.PublishedOn ? new Date(card.PublishedOn).toLocaleDateString() : '',
      mediaType: 'SHORT',
      duration: '',
      overlayIcon: '',
      path: `/adults/wisdom-stories/${card.ScenarioID}`,
      moduleType: 'STORY'
    };
  }

  transformPodcastCard(card: any): ContentCard {
    return {
      id: card.PodcastID?.toString() || `podcast-${Date.now()}`,
      imageUrl: card.ImageUrl || card.image || '',
      title: card.Title || card.title || '',
      subtitle: card.Timing || '',
      mediaType: 'PODCAST',
      duration: card.Timing || '',
      overlayIcon: 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/audio.svg',
      path: `/adults/podcast/${card.URL || card.PodcastID}`,
      moduleType: 'PODCAST'
    };
  }

  transformShortCard(card: any): ContentCard {
    return {
      id: card.RowID?.toString() || `short-${Date.now()}`,
      imageUrl: card.ImgUrl || card.image || '',
      title: card.Title || card.title || '',
      subtitle: card.Timing ? `${card.Timing} min` : '',
      mediaType: 'SHORT',
      duration: card.Timing || '',
      overlayIcon: 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/play.svg',
      path: card.VideoUrl || card.path || '',
      moduleType: 'SHORT'
    };
  }

  transformGenericCard(card: any): ContentCard {
    return {
      id: card.id || card.title || `card-${Date.now()}`,
      imageUrl: card.image_path || card.imageUrl || card.ImagePath || '',
      title: card.title || card.Title || '',
      subtitle: card.subtitle || card.Subtitle || '',
      mediaType: 'VIDEO',
      duration: card.timing || card.duration || '',
      overlayIcon: card.icon_path || card.overlayIcon || '',
      path: card.path || '',
      moduleType: card.module || card.moduleType || ''
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
      default:
        return 'VIDEO';
    }
  }

  onNavigationClick(item: NavigationItem): void {
    this.navigationItems.forEach(nav => nav.isActive = false);
    item.isActive = true;
    this.navigationChange.emit(item.id);
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
}
