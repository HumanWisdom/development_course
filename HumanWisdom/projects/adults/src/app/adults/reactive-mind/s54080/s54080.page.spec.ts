import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../../../../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54080Page } from './s54080.page';

describe('S54080Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54080Page;
  let fixture: ComponentFixture<S54080Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54080Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54080Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
