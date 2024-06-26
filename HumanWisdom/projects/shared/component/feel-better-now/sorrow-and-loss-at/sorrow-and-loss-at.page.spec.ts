import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SorrowAndLossAtPage } from './sorrow-and-loss-at.page';

describe('SorrowAndLossAtPage', () => {
  let component: SorrowAndLossAtPage;
  let fixture: ComponentFixture<SorrowAndLossAtPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SorrowAndLossAtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SorrowAndLossAtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
