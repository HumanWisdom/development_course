import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54004Page } from './s54004.page';

describe('S54004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54004Page;
  let fixture: ComponentFixture<S54004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
