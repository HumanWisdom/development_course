import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56053Page } from './s56053.page';

describe('S56053Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56053Page;
  let fixture: ComponentFixture<S56053Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56053Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56053Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
