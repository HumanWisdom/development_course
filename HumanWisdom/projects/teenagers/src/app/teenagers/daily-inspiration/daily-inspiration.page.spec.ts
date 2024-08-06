import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailyPracticePage } from './daily-inspiration.page';

describe('DailyPracticePage', () => {
  let component: DailyPracticePage;
  let fixture: ComponentFixture<DailyPracticePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyPracticePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailyPracticePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
