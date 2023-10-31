import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54006Page } from './s54006.page';

describe('S54006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54006Page;
  let fixture: ComponentFixture<S54006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
