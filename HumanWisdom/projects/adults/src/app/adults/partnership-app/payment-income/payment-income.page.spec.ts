import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentIncomePage } from './payment-income.page';

describe('PaymentIncomePage', () => {
  let component: PaymentIncomePage;
  let fixture: ComponentFixture<PaymentIncomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentIncomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentIncomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
