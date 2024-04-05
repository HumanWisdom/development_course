import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OvercomeUnhelpfulHabitsTranscriptPage } from './overcome-unhelpful-habits-transcript.page';

describe('OvercomeUnhelpfulHabitsTranscriptPage', () => {
  let component: OvercomeUnhelpfulHabitsTranscriptPage;
  let fixture: ComponentFixture<OvercomeUnhelpfulHabitsTranscriptPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OvercomeUnhelpfulHabitsTranscriptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OvercomeUnhelpfulHabitsTranscriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
