import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeHappierTranscriptPage } from './be-happier-transcript.page';

describe('BeHappierTranscriptPage', () => {
  let component: BeHappierTranscriptPage;
  let fixture: ComponentFixture<BeHappierTranscriptPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BeHappierTranscriptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeHappierTranscriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
