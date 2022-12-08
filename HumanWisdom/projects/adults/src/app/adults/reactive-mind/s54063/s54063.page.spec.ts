import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54063Page } from './s54063.page';

describe('S54063Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54063Page;
  let fixture: ComponentFixture<S54063Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54063Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54063Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
