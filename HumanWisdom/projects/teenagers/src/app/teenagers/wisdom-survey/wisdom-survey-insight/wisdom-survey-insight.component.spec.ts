import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WisdomSurveyInsightComponent } from './wisdom-survey-insight.component';

describe('WisdomSurveyInsightComponent', () => {
  let component: WisdomSurveyInsightComponent;
  let fixture: ComponentFixture<WisdomSurveyInsightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomSurveyInsightComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WisdomSurveyInsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
