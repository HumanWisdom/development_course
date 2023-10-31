import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58030Page } from './s58030.page';

describe('S58030Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58030Page;
  let fixture: ComponentFixture<S58030Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58030Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58030Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
