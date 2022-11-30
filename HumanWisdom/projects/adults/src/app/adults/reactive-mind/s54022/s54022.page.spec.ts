import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54022Page } from './s54022.page';

describe('S54022Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54022Page;
  let fixture: ComponentFixture<S54022Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54022Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54022Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
