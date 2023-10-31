import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncomePartnerPage } from './income-partner.page';

describe('IncomePartnerPage', () => {
  let component: IncomePartnerPage;
  let fixture: ComponentFixture<IncomePartnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomePartnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncomePartnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
