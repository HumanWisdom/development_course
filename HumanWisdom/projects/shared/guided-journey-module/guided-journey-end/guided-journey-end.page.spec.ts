import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidedJourneyEndPage } from './guided-journey-end.page';

describe('GuidedJourneyEndPage', () => {
  let component: GuidedJourneyEndPage;
  let fixture: ComponentFixture<GuidedJourneyEndPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidedJourneyEndPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidedJourneyEndPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
