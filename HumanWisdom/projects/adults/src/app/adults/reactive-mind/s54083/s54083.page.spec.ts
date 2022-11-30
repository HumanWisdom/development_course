import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54083Page } from './s54083.page';

describe('S54083Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54083Page;
  let fixture: ComponentFixture<S54083Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54083Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54083Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
