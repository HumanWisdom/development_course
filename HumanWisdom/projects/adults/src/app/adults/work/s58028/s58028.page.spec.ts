import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58028Page } from './s58028.page';

describe('S58028Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58028Page;
  let fixture: ComponentFixture<S58028Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58028Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58028Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
