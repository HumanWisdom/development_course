import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54002Page } from './s54002.page';

describe('S54002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54002Page;
  let fixture: ComponentFixture<S54002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
