import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54071Page } from './s54071.page';

describe('S54071Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54071Page;
  let fixture: ComponentFixture<S54071Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54071Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54071Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
