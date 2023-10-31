import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentBankPage } from './payment-bank.page';

describe('PaymentBankPage', () => {
  let component: PaymentBankPage;
  let fixture: ComponentFixture<PaymentBankPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentBankPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentBankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
