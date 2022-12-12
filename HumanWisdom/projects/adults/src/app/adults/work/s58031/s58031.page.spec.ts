import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58031Page } from './s58031.page';

describe('S58031Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58031Page;
  let fixture: ComponentFixture<S58031Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58031Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58031Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
