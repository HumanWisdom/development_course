import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56003Page } from './s56003.page';

describe('S56003Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56003Page;
  let fixture: ComponentFixture<S56003Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56003Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56003Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
