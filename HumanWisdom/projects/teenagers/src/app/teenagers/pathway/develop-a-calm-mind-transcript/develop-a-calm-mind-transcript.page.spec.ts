import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DevelopACalmMindTranscriptPage } from './develop-a-calm-mind-transcript.page';

describe('DevelopACalmMindTranscriptPage', () => {
  let component: DevelopACalmMindTranscriptPage;
  let fixture: ComponentFixture<DevelopACalmMindTranscriptPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopACalmMindTranscriptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DevelopACalmMindTranscriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
