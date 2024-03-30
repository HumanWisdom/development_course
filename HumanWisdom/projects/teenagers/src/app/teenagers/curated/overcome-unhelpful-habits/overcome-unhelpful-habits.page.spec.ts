import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OvercomeUnhelpfulHabitsPage } from './overcome-unhelpful-habits.page';

describe('OvercomeUnhelpfulHabitsPage', () => {
  let component: OvercomeUnhelpfulHabitsPage;
  let fixture: ComponentFixture<OvercomeUnhelpfulHabitsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OvercomeUnhelpfulHabitsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OvercomeUnhelpfulHabitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
