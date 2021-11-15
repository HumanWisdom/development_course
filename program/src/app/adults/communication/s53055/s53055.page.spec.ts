import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53055Page } from './s53055.page';

describe('S53055Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53055Page;
  let fixture: ComponentFixture<S53055Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53055Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53055Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
