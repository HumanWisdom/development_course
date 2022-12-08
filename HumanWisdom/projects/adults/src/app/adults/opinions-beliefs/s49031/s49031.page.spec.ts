import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49031Page } from './s49031.page';

describe('S49031Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49031Page;
  let fixture: ComponentFixture<S49031Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49031Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49031Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
