import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61174Page } from './s61174.page';

describe('S61174Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61174Page;
  let fixture: ComponentFixture<S61174Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61174Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61174Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
