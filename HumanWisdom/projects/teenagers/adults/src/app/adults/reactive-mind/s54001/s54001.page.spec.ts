import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54001Page } from './s54001.page';

describe('S54001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54001Page;
  let fixture: ComponentFixture<S54001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
