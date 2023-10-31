import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53127Page } from './s53127.page';

describe('S53127Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53127Page;
  let fixture: ComponentFixture<S53127Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53127Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53127Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
