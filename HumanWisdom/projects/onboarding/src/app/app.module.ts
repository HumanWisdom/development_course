import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as Hammer from 'hammerjs';
import { SharedService } from '../../../shared/services/shared.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authLoginGuard } from 'src/auth-login.guard';
import { EnableRouteGuard } from 'src/enable-route.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { OnboardingModule } from './onboarding/onboarding.module';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../shared/shared.module';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { NgxCaptureModule } from 'ngx-capture';
import { AngularFireModule } from '@angular/fire';
import { PlatformModule } from '@angular/cdk/platform';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../../../environments/environment';
import {HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NavigationService } from '../../../shared/services/navigation.service';
import { LogEventService } from '../../../shared/services/log-event.service';
import { MoengageService } from './moengage.service';
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(), AppRoutingModule,
    OnboardingModule,
    FormsModule,
    HammerModule,
    SharedModule,
    HttpClientModule,
    SocialLoginModule,
    NgxCaptureModule,
    BrowserAnimationsModule,
    PlatformModule,
    AngularFireModule.initializeApp(environment.firebase),
    ToastrModule.forRoot()
  ],
  providers: [
    FormsModule,
    authLoginGuard,
    LogEventService,
    ReactiveFormsModule,
    SharedService,
    MoengageService,
    NavigationService,
    { provide: APP_BASE_HREF, useValue: '/' },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
    //{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
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
  bootstrap: [AppComponent]
})
export class AppModule { }
