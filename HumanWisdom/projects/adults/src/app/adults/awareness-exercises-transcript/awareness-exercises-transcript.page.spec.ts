import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AwarenessExercisesTranscriptPage } from './awareness-exercises-transcript.page';

describe('AwarenessExercisesTranscriptPage', () => {
  let component: AwarenessExercisesTranscriptPage;
  let fixture: ComponentFixture<AwarenessExercisesTranscriptPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AwarenessExercisesTranscriptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AwarenessExercisesTranscriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
