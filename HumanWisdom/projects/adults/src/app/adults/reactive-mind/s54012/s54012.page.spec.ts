import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54012Page } from './s54012.page';

describe('S54012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54012Page;
  let fixture: ComponentFixture<S54012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
