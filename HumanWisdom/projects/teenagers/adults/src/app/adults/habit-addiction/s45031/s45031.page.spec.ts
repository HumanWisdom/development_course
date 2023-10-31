import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45031Page } from './s45031.page';

describe('S45031Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45031Page;
  let fixture: ComponentFixture<S45031Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45031Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45031Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
