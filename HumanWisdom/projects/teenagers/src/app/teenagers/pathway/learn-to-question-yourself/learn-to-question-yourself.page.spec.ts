import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LearnToQuestionYourselfPage } from './learn-to-question-yourself.page';

describe('LearnToQuestionYourselfPage', () => {
  let component: LearnToQuestionYourselfPage;
  let fixture: ComponentFixture<LearnToQuestionYourselfPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnToQuestionYourselfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LearnToQuestionYourselfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
