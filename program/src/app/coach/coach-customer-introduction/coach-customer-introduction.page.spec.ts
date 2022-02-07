import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoachCustomerIntroductionPage } from './coach-customer-introduction.page';

describe('CoachCustomerIntroductionPage', () => {
  let component: CoachCustomerIntroductionPage;
  let fixture: ComponentFixture<CoachCustomerIntroductionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachCustomerIntroductionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoachCustomerIntroductionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
