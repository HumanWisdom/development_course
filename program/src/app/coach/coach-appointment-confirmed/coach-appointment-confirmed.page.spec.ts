import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoachAppointmentConfirmedPage } from './coach-appointment-confirmed.page';

describe('CoachAppointmentConfirmedPage', () => {
  let component: CoachAppointmentConfirmedPage;
  let fixture: ComponentFixture<CoachAppointmentConfirmedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachAppointmentConfirmedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoachAppointmentConfirmedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
