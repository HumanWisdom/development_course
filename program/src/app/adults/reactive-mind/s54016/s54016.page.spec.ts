import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54016Page } from './s54016.page';

describe('S54016Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54016Page;
  let fixture: ComponentFixture<S54016Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54016Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54016Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
