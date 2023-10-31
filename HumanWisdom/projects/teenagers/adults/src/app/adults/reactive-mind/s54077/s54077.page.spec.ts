import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54077Page } from './s54077.page';

describe('S54077Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54077Page;
  let fixture: ComponentFixture<S54077Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54077Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54077Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
