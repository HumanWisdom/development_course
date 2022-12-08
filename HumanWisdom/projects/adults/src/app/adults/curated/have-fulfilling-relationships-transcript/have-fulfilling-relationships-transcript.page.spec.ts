import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HaveFulfillingRelationshipsTranscriptPage } from './have-fulfilling-relationships-transcript.page';

describe('HaveFulfillingRelationshipsTranscriptPage', () => {
  let component: HaveFulfillingRelationshipsTranscriptPage;
  let fixture: ComponentFixture<HaveFulfillingRelationshipsTranscriptPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HaveFulfillingRelationshipsTranscriptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HaveFulfillingRelationshipsTranscriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
