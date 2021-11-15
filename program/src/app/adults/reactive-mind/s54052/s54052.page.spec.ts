import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54052Page } from './s54052.page';

describe('S54052Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54052Page;
  let fixture: ComponentFixture<S54052Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54052Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54052Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
