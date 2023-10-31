import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49025Page } from './s49025.page';

describe('S49025Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49025Page;
  let fixture: ComponentFixture<S49025Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49025Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49025Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
