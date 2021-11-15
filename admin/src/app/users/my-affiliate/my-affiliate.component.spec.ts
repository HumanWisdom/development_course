import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAffiliate } from './my-affiliate.component';

describe('MyAffiliate', () => {
  let component: MyAffiliate;
  let fixture: ComponentFixture<MyAffiliate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAffiliate ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAffiliate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
