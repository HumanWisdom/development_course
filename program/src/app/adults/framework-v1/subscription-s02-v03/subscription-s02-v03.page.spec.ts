import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubscriptionS02V03Page } from './subscription-s02-v03.page';

describe('SubscriptionS02V03Page', () => {
  let component: SubscriptionS02V03Page;
  let fixture: ComponentFixture<SubscriptionS02V03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionS02V03Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubscriptionS02V03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
