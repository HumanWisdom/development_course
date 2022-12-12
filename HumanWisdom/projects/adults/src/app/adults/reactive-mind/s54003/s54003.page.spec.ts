import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54003Page } from './s54003.page';

describe('S54003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54003Page;
  let fixture: ComponentFixture<S54003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
