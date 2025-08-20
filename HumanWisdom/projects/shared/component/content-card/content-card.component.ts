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
    switch (overlayIcon) {
      case 'play': return 'fas fa-play';
      case 'audio': return 'fas fa-volume-up';
      default: return 'fas fa-play';
    }
  }
}
