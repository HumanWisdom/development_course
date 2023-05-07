import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { S109003Page } from './s109003.page';

describe('S109003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S109003Page;
  let fixture: ComponentFixture<S109003Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ S109003Page ],
        }).compileComponents();

    fixture = TestBed.createComponent(S109003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
