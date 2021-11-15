import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54044Page } from './s54044.page';

describe('S54044Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54044Page;
  let fixture: ComponentFixture<S54044Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54044Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54044Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
