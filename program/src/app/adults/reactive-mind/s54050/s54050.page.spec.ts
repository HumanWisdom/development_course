import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54050Page } from './s54050.page';

describe('S54050Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54050Page;
  let fixture: ComponentFixture<S54050Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54050Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54050Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
