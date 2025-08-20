import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

export interface NavigationItem {
  id: string;
  label: string;
  isActive: boolean;
}

export interface ContentCard {
  id: string;
  imageUrl: string;
  title: string;
  subtitle?: string;
  mediaType: 'VIDEO' | 'AUDIO';
  duration?: string;
  overlayIcon?: string;
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
          overlayIcon: 'play'
        },
        {
          id: 'look-without-judgement',
          imageUrl: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/tiles/pathway/30.png',
          title: 'Look at yourself without judgement',
          mediaType: 'AUDIO',
          duration: '01:35',
          overlayIcon: 'audio'
        },
        {
          id: 'overcome-anxiety',
          imageUrl: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/tiles/pathway/30.png',
          title: 'Overcome anxiety',
          mediaType: 'VIDEO',
          overlayIcon: 'play'
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
          overlayIcon: 'play'
        },
        {
          id: 'mindfulness',
          imageUrl: 'https://d1tenzemoxuh75.cloudfront.net/assets/images/tiles/pathway/30.png',
          title: 'Mindfulness practice',
          mediaType: 'AUDIO',
          duration: '03:45',
          overlayIcon: 'audio'
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

  onNavigationClick(item: NavigationItem): void {
    this.navigationItems.forEach(nav => nav.isActive = false);
    item.isActive = true;
    this.navigationChange.emit(item.id);
  }

  onCardClick(card: ContentCard): void {
    this.cardClick.emit(card);
  }

  onSectionToggle(section: ContentSection): void {
    section.isExpanded = !section.isExpanded;
    this.sectionToggle.emit(section);
  }

  getOverlayIconClass(overlayIcon: string): string {
    switch (overlayIcon) {
      case 'play': return 'fas fa-play';
      case 'audio': return 'fas fa-volume-up';
      default: return 'fas fa-play';
    }
  }
}
