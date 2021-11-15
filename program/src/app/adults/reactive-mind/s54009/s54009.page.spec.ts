import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54009Page } from './s54009.page';

describe('S54009Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54009Page;
  let fixture: ComponentFixture<S54009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
