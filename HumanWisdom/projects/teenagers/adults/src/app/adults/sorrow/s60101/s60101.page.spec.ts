import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60101Page } from './s60101.page';

describe('S60101Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60101Page;
  let fixture: ComponentFixture<S60101Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60101Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60101Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
