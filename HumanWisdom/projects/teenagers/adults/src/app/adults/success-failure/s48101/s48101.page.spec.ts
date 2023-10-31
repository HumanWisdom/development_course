import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48101Page } from './s48101.page';

describe('S48101Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48101Page;
  let fixture: ComponentFixture<S48101Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48101Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48101Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
