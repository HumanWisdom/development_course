import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54058Page } from './s54058.page';

describe('S54058Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54058Page;
  let fixture: ComponentFixture<S54058Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54058Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54058Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
