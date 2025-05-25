import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuestionAnswersSelection } from './question-answers-selection.page';

describe('S11Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  QuestionAnswersSelection;
  let fixture: ComponentFixture<QuestionAnswersSelection>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionAnswersSelection ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionAnswersSelection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
