import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54075Page } from './s54075.page';

describe('S54075Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54075Page;
  let fixture: ComponentFixture<S54075Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54075Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54075Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
