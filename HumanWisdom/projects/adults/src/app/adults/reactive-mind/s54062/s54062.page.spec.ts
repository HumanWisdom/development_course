import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54062Page } from './s54062.page';

describe('S54062Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54062Page;
  let fixture: ComponentFixture<S54062Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54062Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54062Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
