import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54061Page } from './s54061.page';

describe('S54061Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54061Page;
  let fixture: ComponentFixture<S54061Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54061Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54061Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
