import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailypractiseComponent } from './dailypractise.component';

describe('DailypractiseComponent', () => {
  let component: DailypractiseComponent;
  let fixture: ComponentFixture<DailypractiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailypractiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailypractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
