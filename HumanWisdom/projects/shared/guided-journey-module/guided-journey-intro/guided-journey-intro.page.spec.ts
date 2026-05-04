import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidedJourneyIntroPage } from './guided-journey-intro.page';

describe('GuidedJourneyIntroPage', () => {
  let component: GuidedJourneyIntroPage;
  let fixture: ComponentFixture<GuidedJourneyIntroPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidedJourneyIntroPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidedJourneyIntroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
