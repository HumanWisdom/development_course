import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageYourEmotionsTranscriptPage } from './manage-your-emotions-transcript.page';

describe('ManageYourEmotionsTranscriptPage', () => {
  let component: ManageYourEmotionsTranscriptPage;
  let fixture: ComponentFixture<ManageYourEmotionsTranscriptPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageYourEmotionsTranscriptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageYourEmotionsTranscriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
