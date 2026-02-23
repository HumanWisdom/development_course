import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextComponent } from './text.component';

describe('TextComponent', () => {
  let component: TextComponent;
  let fixture: ComponentFixture<TextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TextComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept quote and author inputs', () => {
    component.quote = 'Test quote';
    component.author = 'Test Author';
    fixture.detectChanges();
    expect(component.quote).toBe('Test quote');
    expect(component.author).toBe('Test Author');
  });
});
