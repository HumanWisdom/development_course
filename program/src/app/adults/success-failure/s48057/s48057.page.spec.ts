import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48057Page } from './s48057.page';

describe('S48057Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48057Page;
  let fixture: ComponentFixture<S48057Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48057Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48057Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
