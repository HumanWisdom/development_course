import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoachHistoryPatientNamePage } from './coach-history-patient-name.page';

describe('CoachHistoryPatientNamePage', () => {
  let component: CoachHistoryPatientNamePage;
  let fixture: ComponentFixture<CoachHistoryPatientNamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachHistoryPatientNamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoachHistoryPatientNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
