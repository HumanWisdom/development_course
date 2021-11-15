import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54073Page } from './s54073.page';

describe('S54073Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54073Page;
  let fixture: ComponentFixture<S54073Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54073Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54073Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
