import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TnCrossComponent } from './tn-cross.component';

describe('TnCrossComponent', () => {
  let component: TnCrossComponent;
  let fixture: ComponentFixture<TnCrossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TnCrossComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TnCrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
