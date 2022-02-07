import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoachHistoryRevenuePage } from './coach-history-revenue.page';

describe('CoachHistoryRevenuePage', () => {
  let component: CoachHistoryRevenuePage;
  let fixture: ComponentFixture<CoachHistoryRevenuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachHistoryRevenuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoachHistoryRevenuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
