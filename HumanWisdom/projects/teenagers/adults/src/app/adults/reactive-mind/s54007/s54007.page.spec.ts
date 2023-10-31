import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54007Page } from './s54007.page';

describe('S54007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54007Page;
  let fixture: ComponentFixture<S54007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
