import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54035Page } from './s54035.page';

describe('S54035Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54035Page;
  let fixture: ComponentFixture<S54035Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54035Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54035Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
