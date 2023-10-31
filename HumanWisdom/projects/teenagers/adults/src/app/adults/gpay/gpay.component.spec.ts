import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpayPage } from './gpay.page';

describe('GpayComponent', () => {
  let component: GpayPage;
  let fixture: ComponentFixture<GpayPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpayPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GpayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
