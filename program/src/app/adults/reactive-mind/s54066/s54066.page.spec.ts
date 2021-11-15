import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54066Page } from './s54066.page';

describe('S54066Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54066Page;
  let fixture: ComponentFixture<S54066Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54066Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54066Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
