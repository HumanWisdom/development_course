import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48005Page } from './s48005.page';

describe('S48005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48005Page;
  let fixture: ComponentFixture<S48005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
