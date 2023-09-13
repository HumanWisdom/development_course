import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiveYourBestLifeTranscriptPage } from './live-your-best-life-transcript.page';

describe('LiveYourBestLifeTranscriptPage', () => {
  let component: LiveYourBestLifeTranscriptPage;
  let fixture: ComponentFixture<LiveYourBestLifeTranscriptPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveYourBestLifeTranscriptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiveYourBestLifeTranscriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
