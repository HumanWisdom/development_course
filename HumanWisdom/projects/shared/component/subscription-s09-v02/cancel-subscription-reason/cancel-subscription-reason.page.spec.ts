import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CancelSubscriptionReasonPage } from './cancel-subscription-reason.page';

describe('CancelSubscriptionReasonPage', () => {
  let component: CancelSubscriptionReasonPage;
  let fixture: ComponentFixture<CancelSubscriptionReasonPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelSubscriptionReasonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CancelSubscriptionReasonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
