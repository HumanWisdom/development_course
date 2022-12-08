import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54072Page } from './s54072.page';

describe('S54072Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54072Page;
  let fixture: ComponentFixture<S54072Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54072Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54072Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
