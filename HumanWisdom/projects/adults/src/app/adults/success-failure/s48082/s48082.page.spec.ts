import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48082Page } from './s48082.page';

describe('S48082Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48082Page;
  let fixture: ComponentFixture<S48082Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48082Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48082Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
