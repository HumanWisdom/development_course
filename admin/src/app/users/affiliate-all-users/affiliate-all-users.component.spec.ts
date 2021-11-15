import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateAllUsers } from './affiliate-all-users.component';

describe('AffiliateAllUsers', () => {
  let component: AffiliateAllUsers;
  let fixture: ComponentFixture<AffiliateAllUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliateAllUsers ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliateAllUsers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
