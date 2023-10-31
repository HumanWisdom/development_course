import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58025Page } from './s58025.page';

describe('S58025Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58025Page;
  let fixture: ComponentFixture<S58025Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58025Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58025Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
