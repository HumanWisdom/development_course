import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54064Page } from './s54064.page';

describe('S54064Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54064Page;
  let fixture: ComponentFixture<S54064Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54064Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54064Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
