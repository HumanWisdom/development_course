import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WisdomExerciseS75001Component } from './wisdom-exercise-s75001.component';

describe('WisdomExerciseS75001Component', () => {
  let component: WisdomExerciseS75001Component;
  let fixture: ComponentFixture<WisdomExerciseS75001Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomExerciseS75001Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WisdomExerciseS75001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
