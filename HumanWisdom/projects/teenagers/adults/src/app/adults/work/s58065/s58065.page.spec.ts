import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58065Page } from './s58065.page';

describe('S58065Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58065Page;
  let fixture: ComponentFixture<S58065Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58065Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58065Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
