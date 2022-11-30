import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58087Page } from './s58087.page';

describe('S58087Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58087Page;
  let fixture: ComponentFixture<S58087Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58087Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58087Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
