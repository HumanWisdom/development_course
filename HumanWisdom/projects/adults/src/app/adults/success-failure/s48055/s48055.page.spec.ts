import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48055Page } from './s48055.page';

describe('S48055Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48055Page;
  let fixture: ComponentFixture<S48055Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48055Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48055Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
