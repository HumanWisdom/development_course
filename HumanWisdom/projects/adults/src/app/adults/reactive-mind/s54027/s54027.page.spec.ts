import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54027Page } from './s54027.page';

describe('S54027Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54027Page;
  let fixture: ComponentFixture<S54027Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54027Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54027Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
