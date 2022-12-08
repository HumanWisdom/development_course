import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53143Page } from './s53143.page';

describe('S53143Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53143Page;
  let fixture: ComponentFixture<S53143Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53143Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53143Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
