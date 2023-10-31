import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54078Page } from './s54078.page';

describe('S54078Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54078Page;
  let fixture: ComponentFixture<S54078Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54078Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54078Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
