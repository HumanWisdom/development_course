import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58073Page } from './s58073.page';

describe('S58073Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58073Page;
  let fixture: ComponentFixture<S58073Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58073Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58073Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
