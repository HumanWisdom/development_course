import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DuplicateSubscriptionPaymentComponent } from './duplicate-subscription-payment.component';

describe('DuplicateSubscriptionPaymentComponent', () => {
  let component: DuplicateSubscriptionPaymentComponent;
  let fixture: ComponentFixture<DuplicateSubscriptionPaymentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicateSubscriptionPaymentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DuplicateSubscriptionPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
