import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46079Page } from './s46079.page';

describe('S46079Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46079Page;
  let fixture: ComponentFixture<S46079Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46079Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46079Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
