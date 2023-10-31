import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56042Page } from './s56042.page';

describe('S56042Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56042Page;
  let fixture: ComponentFixture<S56042Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56042Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56042Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
