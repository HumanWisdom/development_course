import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45143Page } from './s45143.page';

describe('S45143Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45143Page;
  let fixture: ComponentFixture<S45143Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45143Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45143Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
