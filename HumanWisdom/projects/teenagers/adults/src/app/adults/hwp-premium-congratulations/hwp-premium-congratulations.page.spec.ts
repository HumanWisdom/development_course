import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HwpPremiumCongratulationsPage } from './hwp-premium-congratulations.page';

describe('HwpPremiumCongratulationsPage', () => {
  let component: HwpPremiumCongratulationsPage;
  let fixture: ComponentFixture<HwpPremiumCongratulationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HwpPremiumCongratulationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HwpPremiumCongratulationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
