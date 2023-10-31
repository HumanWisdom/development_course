import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HaveCalmMindTranscriptPage } from './have-calm-mind-transcript.page';

describe('HaveCalmMindTranscriptPage', () => {
  let component: HaveCalmMindTranscriptPage;
  let fixture: ComponentFixture<HaveCalmMindTranscriptPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HaveCalmMindTranscriptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HaveCalmMindTranscriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
