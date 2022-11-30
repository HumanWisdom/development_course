import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54045Page } from './s54045.page';

describe('S54045Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54045Page;
  let fixture: ComponentFixture<S54045Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54045Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54045Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
