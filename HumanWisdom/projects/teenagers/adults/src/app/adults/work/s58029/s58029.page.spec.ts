import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58029Page } from './s58029.page';

describe('S58029Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58029Page;
  let fixture: ComponentFixture<S58029Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58029Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58029Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
