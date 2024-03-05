import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LearnToQuestionYourselfTranscriptPage } from './learn-to-question-yourself-transcript.page';

describe('LearnToQuestionYourselfTranscriptPage', () => {
  let component: LearnToQuestionYourselfTranscriptPage;
  let fixture: ComponentFixture<LearnToQuestionYourselfTranscriptPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnToQuestionYourselfTranscriptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LearnToQuestionYourselfTranscriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
