import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56020Page } from './s56020.page';

describe('S56020Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56020Page;
  let fixture: ComponentFixture<S56020Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56020Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56020Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
