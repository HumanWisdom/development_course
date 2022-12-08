import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58051Page } from './s58051.page';

describe('S58051Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58051Page;
  let fixture: ComponentFixture<S58051Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58051Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58051Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
