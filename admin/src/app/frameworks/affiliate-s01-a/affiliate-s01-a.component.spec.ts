import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateS01AComponent } from './affiliate-s01-a.component';

describe('AffiliateS01AComponent', () => {
  let component: AffiliateS01AComponent;
  let fixture: ComponentFixture<AffiliateS01AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliateS01AComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliateS01AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
