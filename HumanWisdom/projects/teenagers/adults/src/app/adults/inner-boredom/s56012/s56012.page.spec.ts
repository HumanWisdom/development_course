import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56012Page } from './s56012.page';

describe('S56012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56012Page;
  let fixture: ComponentFixture<S56012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
