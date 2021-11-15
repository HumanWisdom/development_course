import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54023Page } from './s54023.page';

describe('S54023Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54023Page;
  let fixture: ComponentFixture<S54023Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54023Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54023Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
