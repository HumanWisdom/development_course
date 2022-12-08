import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TnTranscriptListenComponent } from './tn-transcript-listen.component';

describe('TnTranscriptListenComponent', () => {
  let component: TnTranscriptListenComponent;
  let fixture: ComponentFixture<TnTranscriptListenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TnTranscriptListenComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TnTranscriptListenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
