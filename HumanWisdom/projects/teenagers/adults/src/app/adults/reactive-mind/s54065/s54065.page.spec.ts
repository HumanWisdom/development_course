import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54065Page } from './s54065.page';

describe('S54065Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54065Page;
  let fixture: ComponentFixture<S54065Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54065Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54065Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
