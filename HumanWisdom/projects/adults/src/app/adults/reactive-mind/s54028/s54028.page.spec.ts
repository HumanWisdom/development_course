import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54028Page } from './s54028.page';

describe('S54028Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54028Page;
  let fixture: ComponentFixture<S54028Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54028Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54028Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
