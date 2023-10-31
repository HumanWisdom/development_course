import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56046Page } from './s56046.page';

describe('S56046Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56046Page;
  let fixture: ComponentFixture<S56046Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56046Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56046Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
