import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58042Page } from './s58042.page';

describe('S58042Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58042Page;
  let fixture: ComponentFixture<S58042Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58042Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58042Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
