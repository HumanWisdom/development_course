import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HumanwisdomPremiumPage } from './humanwisdom-premium.page';

describe('HumanwisdomPremiumPage', () => {
  let component: HumanwisdomPremiumPage;
  let fixture: ComponentFixture<HumanwisdomPremiumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanwisdomPremiumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HumanwisdomPremiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
