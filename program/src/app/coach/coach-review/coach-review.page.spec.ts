import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoachReviewPage } from './coach-review.page';

describe('CoachReviewPage', () => {
  let component: CoachReviewPage;
  let fixture: ComponentFixture<CoachReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachReviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoachReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
