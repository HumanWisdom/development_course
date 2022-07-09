import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidedquestionComponent } from './guidedquestion.component';

describe('GuidedquestionComponent', () => {
  let component: GuidedquestionComponent;
  let fixture: ComponentFixture<GuidedquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidedquestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidedquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
