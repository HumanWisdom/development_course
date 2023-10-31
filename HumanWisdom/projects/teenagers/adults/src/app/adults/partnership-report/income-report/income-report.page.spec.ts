import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncomeReportPage } from './income-report.page';

describe('IncomeReportPage', () => {
  let component: IncomeReportPage;
  let fixture: ComponentFixture<IncomeReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncomeReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
