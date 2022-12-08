import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncomeActivityPage } from './income-activity.page';

describe('IncomeActivityPage', () => {
  let component: IncomeActivityPage;
  let fixture: ComponentFixture<IncomeActivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeActivityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncomeActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
