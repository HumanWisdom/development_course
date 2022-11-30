import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54018Page } from './s54018.page';

describe('S54018Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54018Page;
  let fixture: ComponentFixture<S54018Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54018Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54018Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
