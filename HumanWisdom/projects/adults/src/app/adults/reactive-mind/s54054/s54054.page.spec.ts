import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54054Page } from './s54054.page';

describe('S54054Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54054Page;
  let fixture: ComponentFixture<S54054Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54054Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54054Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
