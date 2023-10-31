import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54067Page } from './s54067.page';

describe('S54067Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54067Page;
  let fixture: ComponentFixture<S54067Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54067Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54067Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
