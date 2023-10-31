import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubscribedUnsubscribedPage } from './subscribed-unsubscribed.page';

describe('SubscribedUnsubscribedPage', () => {
  let component: SubscribedUnsubscribedPage;
  let fixture: ComponentFixture<SubscribedUnsubscribedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribedUnsubscribedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubscribedUnsubscribedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
