import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubscriptionS10V02Page } from './subscription-s10-v02.page';

describe('SubscriptionS10V02Page', () => {
  let component: SubscriptionS10V02Page;
  let fixture: ComponentFixture<SubscriptionS10V02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionS10V02Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubscriptionS10V02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
