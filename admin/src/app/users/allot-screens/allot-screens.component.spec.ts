import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllotScreensComponent } from './allot-screens.component';

describe('AllotScreensComponent', () => {
  let component: AllotScreensComponent;
  let fixture: ComponentFixture<AllotScreensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllotScreensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllotScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
