import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54055Page } from './s54055.page';

describe('S54055Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54055Page;
  let fixture: ComponentFixture<S54055Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54055Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54055Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
