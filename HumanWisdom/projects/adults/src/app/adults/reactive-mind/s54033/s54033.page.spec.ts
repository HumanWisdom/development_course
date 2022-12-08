import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54033Page } from './s54033.page';

describe('S54033Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54033Page;
  let fixture: ComponentFixture<S54033Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54033Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54033Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
