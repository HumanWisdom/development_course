import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubscriptionS01V04Page } from './subscription-s01-v04.page';

describe('SubscriptionS01V04Page', () => {
  let component: SubscriptionS01V04Page;
  let fixture: ComponentFixture<SubscriptionS01V04Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionS01V04Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubscriptionS01V04Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
