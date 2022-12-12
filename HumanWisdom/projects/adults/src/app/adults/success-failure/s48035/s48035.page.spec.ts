import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48035Page } from './s48035.page';

describe('S48035Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48035Page;
  let fixture: ComponentFixture<S48035Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48035Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48035Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
