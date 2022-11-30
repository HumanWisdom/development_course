import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { S54011Page } from './s54011.page';

describe('S54011Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S54011Page;
  let fixture: ComponentFixture<S54011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S54011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S54011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
