import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54070Page } from './s54070.page';

describe('S54070Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54070Page;
  let fixture: ComponentFixture<S54070Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54070Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54070Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
