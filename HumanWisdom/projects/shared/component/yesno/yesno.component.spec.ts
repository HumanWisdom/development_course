import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YesnoComponent } from './yesno.component';

describe('YesnoComponent', () => {
  let component: YesnoComponent;
  let fixture: ComponentFixture<YesnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YesnoComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(YesnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
