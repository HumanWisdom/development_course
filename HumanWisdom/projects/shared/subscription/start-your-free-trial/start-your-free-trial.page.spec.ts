import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartYourFreeTrialPage } from './start-your-free-trial.page';

describe('StartYourFreeTrialPage', () => {
  let component: StartYourFreeTrialPage;
  let fixture: ComponentFixture<StartYourFreeTrialPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StartYourFreeTrialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartYourFreeTrialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
