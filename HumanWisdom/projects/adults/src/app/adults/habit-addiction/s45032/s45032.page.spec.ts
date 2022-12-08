import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45032Page } from './s45032.page';

describe('S45032Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45032Page;
  let fixture: ComponentFixture<S45032Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45032Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45032Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
