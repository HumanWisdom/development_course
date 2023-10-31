import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54057Page } from './s54057.page';

describe('S54057Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54057Page;
  let fixture: ComponentFixture<S54057Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54057Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54057Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
