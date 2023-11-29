import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RedeemActivateNowPage } from './redeem-activate-now.page';

describe('RedeemActivateNowPage', () => {
  let component: RedeemActivateNowPage;
  let fixture: ComponentFixture<RedeemActivateNowPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemActivateNowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RedeemActivateNowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
