import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49101Page } from './s49101.page';

describe('S49101Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49101Page;
  let fixture: ComponentFixture<S49101Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49101Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49101Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
