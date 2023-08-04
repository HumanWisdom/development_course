import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdultsAudioMeditationComponent } from './adults-audio-meditation.component';

describe('AdultsAudioMeditationComponent', () => {
  let component: AdultsAudioMeditationComponent;
  let fixture: ComponentFixture<AdultsAudioMeditationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdultsAudioMeditationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdultsAudioMeditationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
