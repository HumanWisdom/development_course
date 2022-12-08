import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54013Page } from './s54013.page';

describe('S54013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54013Page;
  let fixture: ComponentFixture<S54013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
