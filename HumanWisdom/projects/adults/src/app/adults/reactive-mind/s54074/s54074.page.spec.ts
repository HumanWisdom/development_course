import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54074Page } from './s54074.page';

describe('S54074Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54074Page;
  let fixture: ComponentFixture<S54074Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54074Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54074Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
