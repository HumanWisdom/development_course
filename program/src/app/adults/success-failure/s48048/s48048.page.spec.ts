import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48048Page } from './s48048.page';

describe('S48048Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48048Page;
  let fixture: ComponentFixture<S48048Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48048Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48048Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
