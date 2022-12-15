import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54069Page } from './s54069.page';

describe('S54069Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54069Page;
  let fixture: ComponentFixture<S54069Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54069Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54069Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
