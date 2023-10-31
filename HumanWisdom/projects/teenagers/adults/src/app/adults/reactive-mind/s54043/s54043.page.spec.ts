import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54043Page } from './s54043.page';

describe('S54043Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54043Page;
  let fixture: ComponentFixture<S54043Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54043Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54043Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
