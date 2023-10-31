import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56027Page } from './s56027.page';

describe('S56027Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56027Page;
  let fixture: ComponentFixture<S56027Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56027Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56027Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
