import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60025Page } from './s60025.page';

describe('S60025Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60025Page;
  let fixture: ComponentFixture<S60025Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60025Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60025Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
