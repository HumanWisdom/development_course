import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidedJourneyDaysPage } from './guided-journey-days.page';

describe('GuidedJourneyDaysPage', () => {
  let component: GuidedJourneyDaysPage;
  let fixture: ComponentFixture<GuidedJourneyDaysPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidedJourneyDaysPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidedJourneyDaysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
