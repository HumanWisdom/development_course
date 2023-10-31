import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58086Page } from './s58086.page';

describe('S58086Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58086Page;
  let fixture: ComponentFixture<S58086Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58086Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58086Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
