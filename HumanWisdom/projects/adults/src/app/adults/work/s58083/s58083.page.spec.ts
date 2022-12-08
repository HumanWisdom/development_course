import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58083Page } from './s58083.page';

describe('S58083Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58083Page;
  let fixture: ComponentFixture<S58083Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58083Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58083Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
