import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56029Page } from './s56029.page';

describe('S56029Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56029Page;
  let fixture: ComponentFixture<S56029Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56029Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56029Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
