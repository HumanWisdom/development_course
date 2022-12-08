import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54032Page } from './s54032.page';

describe('S54032Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54032Page;
  let fixture: ComponentFixture<S54032Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54032Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54032Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
