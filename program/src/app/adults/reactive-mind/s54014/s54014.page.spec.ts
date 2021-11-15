import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54014Page } from './s54014.page';

describe('S54014Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54014Page;
  let fixture: ComponentFixture<S54014Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54014Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54014Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
