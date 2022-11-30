import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58079Page } from './s58079.page';

describe('S58079Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58079Page;
  let fixture: ComponentFixture<S58079Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58079Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58079Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
