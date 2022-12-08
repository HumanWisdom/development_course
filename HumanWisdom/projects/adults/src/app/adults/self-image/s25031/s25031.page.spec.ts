import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25031Page } from './s25031.page';

describe('S25031Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25031Page;
  let fixture: ComponentFixture<S25031Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25031Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25031Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
