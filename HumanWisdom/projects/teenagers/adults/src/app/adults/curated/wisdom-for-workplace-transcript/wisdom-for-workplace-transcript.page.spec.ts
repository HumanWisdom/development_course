import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WisdomForWorkplaceTranscriptPage } from './wisdom-for-workplace-transcript.page';

describe('WisdomForWorkplaceTranscriptPage', () => {
  let component: WisdomForWorkplaceTranscriptPage;
  let fixture: ComponentFixture<WisdomForWorkplaceTranscriptPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomForWorkplaceTranscriptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WisdomForWorkplaceTranscriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
