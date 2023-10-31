import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54047Page } from './s54047.page';

describe('S54047Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54047Page;
  let fixture: ComponentFixture<S54047Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54047Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54047Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
