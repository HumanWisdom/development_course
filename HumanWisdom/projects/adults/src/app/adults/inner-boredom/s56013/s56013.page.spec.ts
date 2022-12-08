import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56013Page } from './s56013.page';

describe('S56013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56013Page;
  let fixture: ComponentFixture<S56013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
