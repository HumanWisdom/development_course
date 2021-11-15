import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54053Page } from './s54053.page';

describe('S54053Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54053Page;
  let fixture: ComponentFixture<S54053Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54053Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54053Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
