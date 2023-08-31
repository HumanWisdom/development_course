import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnderstandYourselfTranscriptPage } from './understand-yourself-transcript.page';

describe('UnderstandYourselfTranscriptPage', () => {
  let component: UnderstandYourselfTranscriptPage;
  let fixture: ComponentFixture<UnderstandYourselfTranscriptPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderstandYourselfTranscriptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnderstandYourselfTranscriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
