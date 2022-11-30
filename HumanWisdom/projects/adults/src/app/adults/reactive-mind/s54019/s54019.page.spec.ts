import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54019Page } from './s54019.page';

describe('S54019Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54019Page;
  let fixture: ComponentFixture<S54019Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54019Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54019Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
