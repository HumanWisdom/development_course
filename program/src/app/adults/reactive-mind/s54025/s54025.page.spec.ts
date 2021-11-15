import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54025Page } from './s54025.page';

describe('S54025Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54025Page;
  let fixture: ComponentFixture<S54025Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54025Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54025Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
