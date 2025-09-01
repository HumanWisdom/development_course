import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

export interface NavigationItem {
  id: string;
  label: string;
  isActive: boolean;
}

// Interface for the API response structure
export interface HomeContentResponse {
  Introduction?: HomeSection;
  Modules1?: HomeSection;
  Modules2?: HomeSection;
  Modules3?: HomeSection;
  Blogs?: HomeSection;
  Stories?: HomeSection;
  Podcast?: HomeSection;
  Shorts?: HomeSection;
}

export interface HomeSection {
  id: string;
  title: string;
  Subtitle: string;
  isExpanded: boolean;
  overlayIcon: string | null;
  cssClass: string;
  cards: any[];
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
   */
  transformApiResponseToContentSections(apiResponse: HomeContentResponse): ContentSection[] {
    const sections: ContentSection[] = [];

    // Process Introduction section
    if (apiResponse.Introduction) {
      sections.push(this.transformSection(apiResponse.Introduction, 'introduction'));
    }

    // Process Modules1 section
    if (apiResponse.Modules1) {
      sections.push(this.transformSection(apiResponse.Modules1, 'modules1'));
    }

    // Process Modules2 section
    if (apiResponse.Modules2) {
      sections.push(this.transformSection(apiResponse.Modules2, 'modules2'));
    }

    // Process Modules3 section
    if (apiResponse.Modules3) {
      sections.push(this.transformSection(apiResponse.Modules3, 'modules3'));
    }

    // Process Blogs section
    if (apiResponse.Blogs) {
      sections.push(this.transformSection(apiResponse.Blogs, 'blogs'));
    }

    // Process Stories section
    if (apiResponse.Stories) {
      sections.push(this.transformSection(apiResponse.Stories, 'stories'));
    }

    // Process Podcast section
    if (apiResponse.Podcast) {
      sections.push(this.transformSection(apiResponse.Podcast, 'podcast'));
    }

    // Process Shorts section
    if (apiResponse.Shorts) {
      sections.push(this.transformSection(apiResponse.Shorts, 'shorts'));
    }

    return sections;
  }

  /**
   * Transform individual section
   */
  transformSection(section: HomeSection, sectionType: string): ContentSection {
    return {
      id: section.id,
      title: section.title,
      subtitle: section.Subtitle,
      isExpanded: section.isExpanded,
      cards: this.transformCards(section.cards, sectionType),
      overlayIcon: section.overlayIcon,
      cssClass: section.cssClass
    };
  }

  /**
   * Transform cards based on section type
   */
  transformCards(cards: any[], sectionType: string): ContentCard[] {
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

  /**
   * Transform Introduction card
   */
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

  /**
   * Transform Module card
   */
  transformModuleCard(card: any): ContentCard {
    return {
      id: card.moduleId?.toString() || `module-${Date.now()}`,
      imageUrl: '', // Modules don't have images in the current response
      title: card.moduleName || '',
      subtitle: card.sectionName || '',
      mediaType: 'VIDEO', // Default for modules
      duration: card.SessionCnt ? `${card.SessionCnt} sessions` : '',
      overlayIcon: '',
      path: card.path || '',
      moduleType: 'MODULE'
    };
  }

  /**
   * Transform Blog card
   */
  transformBlogCard(card: any): ContentCard {
    return {
      id: card.BlogID?.toString() || `blog-${Date.now()}`,
      imageUrl: card.ImagePath || '',
      title: card.Title || '',
      subtitle: card.LikeCnt ? `${card.LikeCnt} likes` : '',
      mediaType: 'BLOG',
      duration: '',
      overlayIcon: '',
      path: `/adults/blog-article?sId=${card.BlogID}`,
      moduleType: 'BLOG'
    };
  }

  /**
   * Transform Story card
   */
  transformStoryCard(card: any): ContentCard {
    return {
      id: card.ScenarioID?.toString() || `story-${Date.now()}`,
      imageUrl: card.Img || '',
      title: card.Title || '',
      subtitle: card.PublishedOn ? new Date(card.PublishedOn).toLocaleDateString() : '',
      mediaType: 'SHORT',
      duration: '',
      overlayIcon: '',
      path: `/adults/wisdom-stories/${card.ScenarioID}`,
      moduleType: 'STORY'
    };
  }

  /**
   * Transform Podcast card
   */
  transformPodcastCard(card: any): ContentCard {
    return {
      id: card.PodcastID?.toString() || `podcast-${Date.now()}`,
      imageUrl: card.ImageUrl || '',
      title: card.Title || '',
      subtitle: card.Timing || '',
      mediaType: 'PODCAST',
      duration: card.Timing || '',
      overlayIcon: 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/audio.svg',
      path: `/adults/podcast/${card.URL || card.PodcastID}`,
      moduleType: 'PODCAST'
    };
  }

  /**
   * Transform Short card
   */
  transformShortCard(card: any): ContentCard {
    return {
      id: card.RowID?.toString() || `short-${Date.now()}`,
      imageUrl: card.ImgUrl || '',
      title: card.Title || '',
      subtitle: card.Timing ? `${card.Timing} min` : '',
      mediaType: 'SHORT',
      duration: card.Timing || '',
      overlayIcon: 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/play.svg',
      path: card.VideoUrl || '',
      moduleType: 'SHORT'
    };
  }

  /**
   * Transform generic card
   */
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

  /**
   * Map module field to mediaType
   */
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
    // If card has a path, navigate to it
    if (card.path) {
      this.router.navigate([card.path]);
    }
    this.cardClick.emit(card);
  }

  onSectionToggle(section: ContentSection): void {
    section.isExpanded = !section.isExpanded;
    this.sectionToggle.emit(section);
  }
}
