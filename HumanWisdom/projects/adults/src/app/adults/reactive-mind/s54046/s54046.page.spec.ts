import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54046Page } from './s54046.page';

describe('S54046Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54046Page;
  let fixture: ComponentFixture<S54046Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54046Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54046Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
