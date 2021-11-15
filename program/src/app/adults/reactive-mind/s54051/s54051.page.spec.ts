import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54051Page } from './s54051.page';

describe('S54051Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54051Page;
  let fixture: ComponentFixture<S54051Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54051Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54051Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
