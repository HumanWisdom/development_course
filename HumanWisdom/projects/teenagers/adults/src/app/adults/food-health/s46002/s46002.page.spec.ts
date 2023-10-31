import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46002Page } from './s46002.page';

describe('S46002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46002Page;
  let fixture: ComponentFixture<S46002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
