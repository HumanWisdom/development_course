import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContentCardComponent } from './content-card.component';
import { ContentCard } from '../home/home.component';

describe('ContentCardComponent', () => {
  let component: ContentCardComponent;
  let fixture: ComponentFixture<ContentCardComponent>;

  const mockCard: ContentCard = {
    id: 'test-card',
    imageUrl: 'test-image.jpg',
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    mediaType: 'VIDEO',
    duration: '02:30',
    overlayIcon: 'play'
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContentCardComponent);
    component = fixture.componentInstance;
    component.card = mockCard;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display card title', () => {
    const titleElement = fixture.nativeElement.querySelector('.card-title');
    expect(titleElement.textContent).toContain('Test Title');
  });

  it('should display card subtitle when provided', () => {
    const subtitleElement = fixture.nativeElement.querySelector('.card-subtitle');
    expect(subtitleElement.textContent).toContain('Test Subtitle');
  });

  it('should display media type and duration', () => {
    const mediaTypeElement = fixture.nativeElement.querySelector('.media-type');
    const durationElement = fixture.nativeElement.querySelector('.duration');
    
    expect(mediaTypeElement.textContent).toContain('VIDEO');
    expect(durationElement.textContent).toContain('02:30');
  });

  it('should emit card click event', () => {
    spyOn(component.cardClick, 'emit');
    
    component.onCardClick();
    
    expect(component.cardClick.emit).toHaveBeenCalledWith(mockCard);
  });

  it('should return correct overlay icon class', () => {
    expect(component.getOverlayIconClass('play')).toBe('fas fa-play');
    expect(component.getOverlayIconClass('audio')).toBe('fas fa-volume-up');
    expect(component.getOverlayIconClass('unknown')).toBe('fas fa-play');
  });
});
