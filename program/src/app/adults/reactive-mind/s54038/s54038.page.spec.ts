import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54038Page } from './s54038.page';

describe('S54038Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54038Page;
  let fixture: ComponentFixture<S54038Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54038Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54038Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
