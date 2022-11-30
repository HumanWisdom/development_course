import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54031Page } from './s54031.page';

describe('S54031Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54031Page;
  let fixture: ComponentFixture<S54031Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54031Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54031Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
