import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54026Page } from './s54026.page';

describe('S54026Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54026Page;
  let fixture: ComponentFixture<S54026Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54026Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54026Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
