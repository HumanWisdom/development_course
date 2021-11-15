import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54037Page } from './s54037.page';

describe('S54037Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54037Page;
  let fixture: ComponentFixture<S54037Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54037Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54037Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
