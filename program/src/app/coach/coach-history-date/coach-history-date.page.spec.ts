import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoachHistoryDatePage } from './coach-history-date.page';

describe('CoachHistoryDatePage', () => {
  let component: CoachHistoryDatePage;
  let fixture: ComponentFixture<CoachHistoryDatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachHistoryDatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoachHistoryDatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
