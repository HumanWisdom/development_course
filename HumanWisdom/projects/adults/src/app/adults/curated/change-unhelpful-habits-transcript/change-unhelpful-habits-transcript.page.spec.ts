import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangeUnhelpfulHabitsTranscriptPage } from './change-unhelpful-habits-transcript.page';

describe('ChangeUnhelpfulHabitsTranscriptPage', () => {
  let component: ChangeUnhelpfulHabitsTranscriptPage;
  let fixture: ComponentFixture<ChangeUnhelpfulHabitsTranscriptPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeUnhelpfulHabitsTranscriptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeUnhelpfulHabitsTranscriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
