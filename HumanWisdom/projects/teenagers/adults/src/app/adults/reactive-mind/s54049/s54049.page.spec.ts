import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54049Page } from './s54049.page';

describe('S54049Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54049Page;
  let fixture: ComponentFixture<S54049Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54049Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54049Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
