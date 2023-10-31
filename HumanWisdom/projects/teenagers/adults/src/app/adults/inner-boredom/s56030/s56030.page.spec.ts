import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56030Page } from './s56030.page';

describe('S56030Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56030Page;
  let fixture: ComponentFixture<S56030Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56030Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56030Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
