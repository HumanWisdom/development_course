import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54076Page } from './s54076.page';

describe('S54076Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54076Page;
  let fixture: ComponentFixture<S54076Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54076Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54076Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
