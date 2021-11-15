import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54041Page } from './s54041.page';

describe('S54041Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54041Page;
  let fixture: ComponentFixture<S54041Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54041Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54041Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
