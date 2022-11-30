import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54084Page } from './s54084.page';

describe('S54084Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54084Page;
  let fixture: ComponentFixture<S54084Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54084Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54084Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
