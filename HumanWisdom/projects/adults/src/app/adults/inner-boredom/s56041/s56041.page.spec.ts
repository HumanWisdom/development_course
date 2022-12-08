import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56041Page } from './s56041.page';

describe('S56041Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56041Page;
  let fixture: ComponentFixture<S56041Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56041Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56041Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
