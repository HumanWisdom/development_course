import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58057Page } from './s58057.page';

describe('S58057Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58057Page;
  let fixture: ComponentFixture<S58057Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58057Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58057Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
