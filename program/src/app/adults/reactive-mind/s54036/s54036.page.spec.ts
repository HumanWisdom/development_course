import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54036Page } from './s54036.page';

describe('S54036Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54036Page;
  let fixture: ComponentFixture<S54036Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54036Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54036Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
