import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

export interface NavigationItem {
  id: string;
  label: string;
  isActive: boolean;
}

// New interface to match your incoming data format
export interface RawContentData {
  icon_path: string;
  image_path: string;
  module: string;
  path: string;
  section_name: string;
  subtitle: string;
  timing: string;
  title: string;
}

export interface ContentCard {
  id: string;
  imageUrl: string;
  title: string;
  subtitle?: string;
  mediaType: 'VIDEO' | 'AUDIO';
  duration?: string;
  overlayIcon?: string;
  path?: string; // Added to store the navigation path
}

export interface ContentSection {
  id: string;
  title: string;
  isExpanded: boolean;
  cards: ContentCard[];
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
  
  @Input() contentSections: ContentSection[] = [
    {
      id: 'begin-here',
      title: 'Begin here',
      isExpanded: true,
      cards: [
        {
          id: 'intro-mental-health',
          imageUrl: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/tiles/pathway/30.png',
          title: 'Introduction to mental health',
          mediaType: 'VIDEO',
          duration: '00:58',
          overlayIcon: 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/play.svg'
        },
        {
          id: 'look-without-judgement',
          imageUrl: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/tiles/pathway/30.png',
          title: 'Look at yourself without judgement',
          mediaType: 'AUDIO',
          duration: '01:35',
          overlayIcon: 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/audio.svg'
        },
        {
          id: 'overcome-anxiety',
          imageUrl: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/tiles/pathway/30.png',
          title: 'Overcome anxiety',
          mediaType: 'VIDEO',
          overlayIcon: 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/play.svg'
        }
      ]
    },
    {
      id: 'feel-better-now',
      title: 'Feel better now',
      isExpanded: true,
      cards: [
        {
          id: 'meditation',
          imageUrl: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/tiles/pathway/30.png',
          title: 'Quick meditation',
          mediaType: 'VIDEO',
          duration: '02:15',
          overlayIcon: 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/play.svg'
        },
        {
          id: 'mindfulness',
          imageUrl: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/tiles/pathway/30.png',
          title: 'Mindfulness practice',
          mediaType: 'AUDIO',
          duration: '03:45',
          overlayIcon: 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/audio.svg'
        }
      ]
    }
  ];

  @Output() navigationChange = new EventEmitter<string>();
  @Output() cardClick = new EventEmitter<ContentCard>();
  @Output() sectionToggle = new EventEmitter<ContentSection>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('Home component initialized');
  }

  /**
   * Transform raw content data to ContentCard format
   */
  transformRawDataToContentCard(rawData: RawContentData): ContentCard {
    return {
      id: this.generateId(rawData.title),
      imageUrl: rawData.image_path,
      title: rawData.title,
      subtitle: rawData.subtitle || undefined,
      mediaType: this.mapModuleToMediaType(rawData.module),
      duration: this.formatTiming(rawData.timing),
      overlayIcon: this.mapIconPathToOverlayIcon(rawData.icon_path),
      path: rawData.path
    };
  }

  /**
   * Transform raw content data array to ContentSection format
   */
  transformRawDataToContentSections(rawDataArray: RawContentData[]): ContentSection[] {
    // Group by section_name
    const sectionsMap = new Map<string, RawContentData[]>();
    
    rawDataArray.forEach(item => {
      const sectionName = item.section_name || 'Other';
      if (!sectionsMap.has(sectionName)) {
        sectionsMap.set(sectionName, []);
      }
      sectionsMap.get(sectionName)!.push(item);
    });

    // Convert to ContentSection array
    return Array.from(sectionsMap.entries()).map(([sectionName, items]) => ({
      id: this.generateId(sectionName),
      title: sectionName,
      isExpanded: true,
      cards: items.map(item => this.transformRawDataToContentCard(item))
    }));
  }

  /**
   * Generate a unique ID from title
   */
  private generateId(title: string): string {
    return title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  }

  /**
   * Map module field to mediaType
   */
  private mapModuleToMediaType(module: string): 'VIDEO' | 'AUDIO' {
    const upperModule = module.toUpperCase();
    if (upperModule === 'VIDEO' || upperModule === 'AUDIO') {
      return upperModule as 'VIDEO' | 'AUDIO';
    }
    // Default to VIDEO if unknown
    return 'VIDEO';
  }

  /**
   * Format timing to duration format
   */
  private formatTiming(timing: string): string {
    // Remove "min" suffix and ensure proper format
    return timing.replace(/\s*min\s*$/i, '').trim();
  }

  /**
   * Map icon_path to overlayIcon
   */
  private mapIconPathToOverlayIcon(iconPath: string): string {
    if (iconPath.includes('play')) {
      return 'play';
    } else if (iconPath.includes('audio') || iconPath.includes('volume')) {
      return 'audio';
    }
    // Default to play icon
    return 'play';
  }

  /**
   * Set content sections from raw data
   */
  setContentFromRawData(rawDataArray: RawContentData[]): void {
    this.contentSections = this.transformRawDataToContentSections(rawDataArray);
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
