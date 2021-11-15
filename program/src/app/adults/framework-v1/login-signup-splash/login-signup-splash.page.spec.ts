import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginSignupSplashPage } from './login-signup-splash.page';

describe('LoginSignupSplashPage', () => {
  let component: LoginSignupSplashPage;
  let fixture: ComponentFixture<LoginSignupSplashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSignupSplashPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginSignupSplashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
