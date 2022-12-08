import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DealWithSorrowLossTranscriptPage } from './deal-with-sorrow-loss-transcript.page';

describe('DealWithSorrowLossTranscriptPage', () => {
  let component: DealWithSorrowLossTranscriptPage;
  let fixture: ComponentFixture<DealWithSorrowLossTranscriptPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DealWithSorrowLossTranscriptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DealWithSorrowLossTranscriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
