import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58066Page } from './s58066.page';

describe('S58066Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58066Page;
  let fixture: ComponentFixture<S58066Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58066Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58066Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
