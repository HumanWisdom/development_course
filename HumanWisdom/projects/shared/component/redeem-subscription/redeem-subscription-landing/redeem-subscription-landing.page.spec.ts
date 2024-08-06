import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RedeemSubscriptionLandingPage } from './redeem-subscription-landing.page';

describe('RedeemSubscriptionLandingPage', () => {
  let component: RedeemSubscriptionLandingPage;
  let fixture: ComponentFixture<RedeemSubscriptionLandingPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemSubscriptionLandingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RedeemSubscriptionLandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
