import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReferralCodePage } from './referral-code.page';

describe('ReferralCodePage', () => {
  let component: ReferralCodePage;
  let fixture: ComponentFixture<ReferralCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReferralCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
