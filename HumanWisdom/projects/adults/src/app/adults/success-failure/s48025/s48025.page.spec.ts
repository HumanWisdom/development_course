import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48025Page } from './s48025.page';

describe('S48025Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48025Page;
  let fixture: ComponentFixture<S48025Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48025Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48025Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
