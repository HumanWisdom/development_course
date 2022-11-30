import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54030Page } from './s54030.page';

describe('S54030Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54030Page;
  let fixture: ComponentFixture<S54030Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54030Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54030Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
