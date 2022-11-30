import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54039Page } from './s54039.page';

describe('S54039Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54039Page;
  let fixture: ComponentFixture<S54039Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54039Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54039Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
