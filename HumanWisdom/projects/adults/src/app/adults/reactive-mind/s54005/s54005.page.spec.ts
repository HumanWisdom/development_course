import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54005Page } from './s54005.page';

describe('S54005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54005Page;
  let fixture: ComponentFixture<S54005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
