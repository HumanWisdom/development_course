import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54015Page } from './s54015.page';

describe('S54015Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54015Page;
  let fixture: ComponentFixture<S54015Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54015Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54015Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
