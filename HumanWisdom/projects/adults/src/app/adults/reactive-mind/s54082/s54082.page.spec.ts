import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54082Page } from './s54082.page';

describe('S54082Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54082Page;
  let fixture: ComponentFixture<S54082Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54082Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54082Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
