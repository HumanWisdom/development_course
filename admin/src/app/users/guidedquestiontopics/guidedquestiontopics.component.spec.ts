import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidedquestiontopicsComponent } from './guidedquestiontopics.component';

describe('GuidedquestiontopicsComponent', () => {
  let component: GuidedquestiontopicsComponent;
  let fixture: ComponentFixture<GuidedquestiontopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidedquestiontopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidedquestiontopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
