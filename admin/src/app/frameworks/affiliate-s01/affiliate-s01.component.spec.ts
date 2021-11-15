import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateS01Component } from './affiliate-s01.component';

describe('AffiliateS01Component', () => {
  let component: AffiliateS01Component;
  let fixture: ComponentFixture<AffiliateS01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliateS01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliateS01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
