import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OvercomeStressAnxietyTranscriptPage } from './overcome-stress-anxiety-transcript.page';

describe('OvercomeStressAnxietyTranscriptPage', () => {
  let component: OvercomeStressAnxietyTranscriptPage;
  let fixture: ComponentFixture<OvercomeStressAnxietyTranscriptPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OvercomeStressAnxietyTranscriptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OvercomeStressAnxietyTranscriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
