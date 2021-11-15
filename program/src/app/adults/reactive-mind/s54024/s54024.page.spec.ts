import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54024Page } from './s54024.page';

describe('S54024Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54024Page;
  let fixture: ComponentFixture<S54024Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54024Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54024Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
