import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58072Page } from './s58072.page';

describe('S58072Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58072Page;
  let fixture: ComponentFixture<S58072Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58072Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58072Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
