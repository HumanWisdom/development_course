import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoachCongratulationsPage } from './coach-congratulations.page';

describe('CoachCongratulationsPage', () => {
  let component: CoachCongratulationsPage;
  let fixture: ComponentFixture<CoachCongratulationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachCongratulationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoachCongratulationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
