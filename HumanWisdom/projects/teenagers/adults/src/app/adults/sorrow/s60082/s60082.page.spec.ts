import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60082Page } from './s60082.page';

describe('S60082Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60082Page;
  let fixture: ComponentFixture<S60082Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60082Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60082Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
