import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TryFreeAndSubscribePage } from './try-free-and-subscribe.page';

describe('TryFreeAndSubscribePage', () => {
  let component: TryFreeAndSubscribePage;
  let fixture: ComponentFixture<TryFreeAndSubscribePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TryFreeAndSubscribePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TryFreeAndSubscribePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
