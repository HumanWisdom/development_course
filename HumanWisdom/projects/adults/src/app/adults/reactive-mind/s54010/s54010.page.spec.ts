import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54010Page } from './s54010.page';

describe('S54010Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54010Page;
  let fixture: ComponentFixture<S54010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
