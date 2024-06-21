import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeelingUpsetAtPage } from './feeling-upset-at.page';

describe('FeelingUpsetAtPage', () => {
  let component: FeelingUpsetAtPage;
  let fixture: ComponentFixture<FeelingUpsetAtPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeelingUpsetAtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeelingUpsetAtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
