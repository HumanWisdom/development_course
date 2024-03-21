import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangeUnhelpfulHabitsPage } from './change-unhelpful-habits.page';

describe('ChangeUnhelpfulHabitsPage', () => {
  let component: ChangeUnhelpfulHabitsPage;
  let fixture: ComponentFixture<ChangeUnhelpfulHabitsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeUnhelpfulHabitsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeUnhelpfulHabitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
