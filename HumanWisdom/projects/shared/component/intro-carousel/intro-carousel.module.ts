import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroCarouselPageRoutingModule } from './intro-carousel-routing.module';
import { IntroCarouselPage } from './intro-carousel.page';
import { SplashPageModule } from '../../../adults/src/app/adults/splash/splash.module';
import { SharedModule } from '../../shared.module';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SocialLoginModule,
    IonicModule,
    IntroCarouselPageRoutingModule,
    SharedModule,
    SplashPageModule
  ],
  providers:[
    SocialAuthService, 
          {
              provide: 'SocialAuthServiceConfig',
              useValue: {
                  autoLogin: false,
                  providers: [
                      {
                          id: GoogleLoginProvider.PROVIDER_ID,
                          provider: new GoogleLoginProvider('907009432190-v7bpjvuurie68eakqf5neovb5oj3h0b0.apps.googleusercontent.com')
                      },
                      {
                          id: FacebookLoginProvider.PROVIDER_ID,
                          provider: new FacebookLoginProvider('238869214957032')
                      }
                  ]
              } as SocialAuthServiceConfig,
          },
  ],
  declarations: [IntroCarouselPage]
})
export class IntroCarouselPageModule { }
