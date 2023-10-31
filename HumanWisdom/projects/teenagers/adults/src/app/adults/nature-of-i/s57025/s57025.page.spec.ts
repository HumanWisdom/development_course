import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57025Page } from './s57025.page';

describe('S57025Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57025Page;
  let fixture: ComponentFixture<S57025Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57025Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57025Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
