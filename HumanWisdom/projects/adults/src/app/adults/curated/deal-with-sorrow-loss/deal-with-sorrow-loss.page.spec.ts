import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DealWithSorrowLossPage } from './deal-with-sorrow-loss.page';

describe('DealWithSorrowLossPage', () => {
  let component: DealWithSorrowLossPage;
  let fixture: ComponentFixture<DealWithSorrowLossPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DealWithSorrowLossPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DealWithSorrowLossPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
