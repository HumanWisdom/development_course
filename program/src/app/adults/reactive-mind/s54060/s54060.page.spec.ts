import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54060Page } from './s54060.page';

describe('S54060Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54060Page;
  let fixture: ComponentFixture<S54060Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54060Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54060Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
