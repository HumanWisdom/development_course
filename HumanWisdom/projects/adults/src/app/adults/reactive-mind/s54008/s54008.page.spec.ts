import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54008Page } from './s54008.page';

describe('S54008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54008Page;
  let fixture: ComponentFixture<S54008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
