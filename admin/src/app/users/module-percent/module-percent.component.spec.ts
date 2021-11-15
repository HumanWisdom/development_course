import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulePercentComponent } from './module-percent.component';

describe('ModulePercentComponent', () => {
  let component: ModulePercentComponent;
  let fixture: ComponentFixture<ModulePercentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulePercentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulePercentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
