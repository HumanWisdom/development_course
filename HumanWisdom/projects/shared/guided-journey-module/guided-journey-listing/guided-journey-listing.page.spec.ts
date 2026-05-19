import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidedJourneyListingPage } from './guided-journey-listing.page';

describe('GuidedJourneyListingPage', () => {
  let component: GuidedJourneyListingPage;
  let fixture: ComponentFixture<GuidedJourneyListingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidedJourneyListingPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidedJourneyListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
