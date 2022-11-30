import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54020Page } from './s54020.page';

describe('S54020Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54020Page;
  let fixture: ComponentFixture<S54020Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54020Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54020Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
