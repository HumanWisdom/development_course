import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54040Page } from './s54040.page';

describe('S54040Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54040Page;
  let fixture: ComponentFixture<S54040Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54040Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54040Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
