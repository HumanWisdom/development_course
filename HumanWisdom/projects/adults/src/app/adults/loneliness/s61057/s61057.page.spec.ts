import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61057Page } from './s61057.page';

describe('S61057Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61057Page;
  let fixture: ComponentFixture<S61057Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61057Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61057Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
