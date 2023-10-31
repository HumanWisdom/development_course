import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54056Page } from './s54056.page';

describe('S54056Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54056Page;
  let fixture: ComponentFixture<S54056Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54056Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54056Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
