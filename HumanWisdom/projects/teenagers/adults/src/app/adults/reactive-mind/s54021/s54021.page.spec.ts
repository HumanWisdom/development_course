import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54021Page } from './s54021.page';

describe('S54021Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54021Page;
  let fixture: ComponentFixture<S54021Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54021Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54021Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
