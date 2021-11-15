import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54034Page } from './s54034.page';

describe('S54034Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54034Page;
  let fixture: ComponentFixture<S54034Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54034Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54034Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
