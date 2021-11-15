import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54029Page } from './s54029.page';

describe('S54029Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54029Page;
  let fixture: ComponentFixture<S54029Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54029Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54029Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
