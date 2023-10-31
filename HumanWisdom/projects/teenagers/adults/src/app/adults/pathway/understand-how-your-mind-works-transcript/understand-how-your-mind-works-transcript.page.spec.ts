import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnderstandHowYourMindWorksTranscriptPage } from './understand-how-your-mind-works-transcript.page';

describe('UnderstandHowYourMindWorksTranscriptPage', () => {
  let component: UnderstandHowYourMindWorksTranscriptPage;
  let fixture: ComponentFixture<UnderstandHowYourMindWorksTranscriptPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderstandHowYourMindWorksTranscriptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnderstandHowYourMindWorksTranscriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
