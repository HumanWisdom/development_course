import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54059Page } from './s54059.page';

describe('S54059Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54059Page;
  let fixture: ComponentFixture<S54059Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54059Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54059Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
