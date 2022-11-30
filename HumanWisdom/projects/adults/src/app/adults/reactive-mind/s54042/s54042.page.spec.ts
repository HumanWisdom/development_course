import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54042Page } from './s54042.page';

describe('S54042Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54042Page;
  let fixture: ComponentFixture<S54042Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54042Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54042Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
