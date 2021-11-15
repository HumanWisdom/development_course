import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubscriptionS01V03Page } from './subscription-s01-v03.page';

describe('SubscriptionS01V03Page', () => {
  let component: SubscriptionS01V03Page;
  let fixture: ComponentFixture<SubscriptionS01V03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionS01V03Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubscriptionS01V03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
