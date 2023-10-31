import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58035Page } from './s58035.page';

describe('S58035Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58035Page;
  let fixture: ComponentFixture<S58035Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58035Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58035Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
