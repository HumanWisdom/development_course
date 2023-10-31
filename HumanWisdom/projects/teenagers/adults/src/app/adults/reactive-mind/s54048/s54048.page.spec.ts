import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54048Page } from './s54048.page';

describe('S54048Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54048Page;
  let fixture: ComponentFixture<S54048Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54048Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54048Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
