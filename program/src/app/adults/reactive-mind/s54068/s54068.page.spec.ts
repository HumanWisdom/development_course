import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54068Page } from './s54068.page';

describe('S54068Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54068Page;
  let fixture: ComponentFixture<S54068Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54068Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54068Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
