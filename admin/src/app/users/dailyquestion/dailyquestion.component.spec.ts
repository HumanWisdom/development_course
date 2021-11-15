import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyquestionComponent } from './dailyquestion.component';

describe('DailyquestionComponent', () => {
  let component: DailyquestionComponent;
  let fixture: ComponentFixture<DailyquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
