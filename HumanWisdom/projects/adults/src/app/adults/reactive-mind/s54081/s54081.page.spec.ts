import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54081Page } from './s54081.page';

describe('S54081Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54081Page;
  let fixture: ComponentFixture<S54081Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54081Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54081Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
