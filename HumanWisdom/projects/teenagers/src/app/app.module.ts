import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeenagersService } from './teenagers/teenagers.service';
import { TeenagerOnboardingService } from './teenagerOnboarding/teenager-onboarding.service';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TokenInterceptorService } from './teenagerOnboarding/token-interceptor.service';
import { SharedService } from '../../../shared/services/shared.service';
import { ForumService } from '../../../shared/forum/forum.service';
import { OnboardingService } from '../../../shared/services/onboarding.service';
import { LogEventService } from '../../../shared/services/log-event.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { NgxCaptureModule } from 'ngx-capture';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlatformModule } from '@angular/cdk/platform';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { environment } from '../../../environments/environment';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    SocialLoginModule,
    NgxCaptureModule,
    BrowserAnimationsModule,
    PlatformModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
  ],
  providers:
  [
    {
      provide: LocationStrategy,
       useClass: HashLocationStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
  },
    TeenagersService,
    AdultsService,
    SharedService,
    TeenagerOnboardingService,
    ForumService,
    OnboardingService,
    LogEventService,
    ToastrService,
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
  }

   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
