import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58041Page } from './s58041.page';

describe('S58041Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58041Page;
  let fixture: ComponentFixture<S58041Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58041Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58041Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
