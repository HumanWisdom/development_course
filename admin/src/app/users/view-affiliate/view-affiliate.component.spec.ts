import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAffiliate } from './view-affiliate.component';

describe('ViewAffiliate', () => {
  let component: ViewAffiliate;
  let fixture: ComponentFixture<ViewAffiliate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAffiliate ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAffiliate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
