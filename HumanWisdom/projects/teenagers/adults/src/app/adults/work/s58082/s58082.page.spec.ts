import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58082Page } from './s58082.page';

describe('S58082Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58082Page;
  let fixture: ComponentFixture<S58082Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58082Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58082Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
