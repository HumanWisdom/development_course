import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56050Page } from './s56050.page';

describe('S56050Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56050Page;
  let fixture: ComponentFixture<S56050Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56050Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56050Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
