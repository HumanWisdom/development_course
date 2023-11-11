import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubscribeToPremiumBlockComponent } from './subscribe-to-premium-block.component';

describe('SubscribeToPremiumBlockComponent', () => {
  let component: SubscribeToPremiumBlockComponent;
  let fixture: ComponentFixture<SubscribeToPremiumBlockComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeToPremiumBlockComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubscribeToPremiumBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
