import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ContentCard } from '../home/home.component';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  @Input() card: ContentCard;
  @Output() cardClick = new EventEmitter<ContentCard>();

  onCardClick(): void {
    this.cardClick.emit(this.card);
  }

  getOverlayIconClass(overlayIcon: string): string {
    // Handle both simple strings and full URLs
    if (this.isOverlayIconUrl(overlayIcon)) {
      // If it's a URL, extract the icon type from the URL
      if (overlayIcon.includes('play')) {
        return 'fas fa-play';
      } else if (overlayIcon.includes('audio') || overlayIcon.includes('volume')) {
        return 'fas fa-volume-up';
      }
      // Default to play icon for unknown URLs
      return 'fas fa-play';
    } else {
      // Handle simple string values
      switch (overlayIcon) {
        case 'play': return 'fas fa-play';
        case 'audio': return 'fas fa-volume-up';
        default: return 'fas fa-play';
      }
    }
  }

  /**
   * Check if the overlayIcon is a URL or a simple string
   */
  isOverlayIconUrl(overlayIcon: string): boolean {
    return overlayIcon && (overlayIcon.startsWith('http://') || overlayIcon.startsWith('https://') || overlayIcon.includes('/'));
  }

  /**
   * Get the overlay icon source - either the URL or null for FontAwesome icons
   */
  getOverlayIconSrc(overlayIcon: string): string | null {
    return this.isOverlayIconUrl(overlayIcon) ? overlayIcon : null;
  }

  /**
   * Check if this card is from the Begin Here section
   */
  isBeginHereCard(): boolean {
    // Check if the card's subtitle contains the play outline SVG path
    return this.card.subtitle && this.card.subtitle.includes('/assets/svgs/v1_3/play_outline.svg');
  }
}
