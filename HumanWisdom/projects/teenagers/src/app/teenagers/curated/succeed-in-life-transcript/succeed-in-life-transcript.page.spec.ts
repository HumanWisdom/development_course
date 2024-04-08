import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SucceedInLifeTranscriptPage } from './succeed-in-life-transcript.page';

describe('SucceedInLifeTranscriptPage', () => {
  let component: SucceedInLifeTranscriptPage;
  let fixture: ComponentFixture<SucceedInLifeTranscriptPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SucceedInLifeTranscriptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SucceedInLifeTranscriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
