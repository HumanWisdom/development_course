import { PlatformModule } from '@angular/cdk/platform';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { NgxCaptureModule } from 'ngx-capture';
import { StripeModule } from "stripe-angular";
import { environment } from '../../../environments/environment';
import { ActiveGuard } from './active.guard';
import { AdultsModule } from './adults/adults.module';
import { SplashPageModule } from './adults/splash/splash.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authLoginGuard } from './auth-login.guard';
import { AuthGuard } from './auth.guard';
import { LogEventService } from '../../../shared/services/log-event.service';
import { OnboardingModule } from './onboarding/onboarding.module';
import { TokenInterceptorService } from './token-interceptor.service';
import * as Hammer from 'hammerjs';
import{ SharedModule } from './../../../shared/shared.module'
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import{BlogIndexPage}  from './../../../shared/component/blogs/blog-index/blog-index.page';
import{BlogArticlePage}  from './../../../shared/component/blogs/blog-article/blog-article.page';
// Import library module
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { SharedService } from '../../../shared/services/shared.service';
import { ToastrModule } from 'ngx-toastr';
import { MoengageService } from './moengage.service';
import { AdultsService } from './adults/adults.service';
import { initDependency } from './initdependency';
import { AudioVideoGuard } from './audio-video.guard';
import { EnableRouteGuard } from './enable-route.guard';
import { NavigationService } from '../../../shared/services/navigation.service';
export class MyHammerConfig extends HammerGestureConfig {
    overrides = <any> {
      swipe: { direction: Hammer.DIRECTION_ALL },
    };
  }
@NgModule({
    declarations: [AppComponent,
        BlogIndexPage,
        BlogArticlePage,
    ],
        exports:[
            BlogIndexPage,
            BlogArticlePage
        ],
    imports: [BrowserModule,
        CommonModule,
        IonicModule.forRoot(), AppRoutingModule,
        AdultsModule,
        OnboardingModule,
        FormsModule,
        HammerModule,
        SharedModule,
        HttpClientModule,
        SocialLoginModule,
        SplashPageModule,
        StripeModule.forRoot("sk_test_51IRj1BGKvnjJ88wcKdzqQeXK9jSAsiRwxGw3GOBvuDSwgAXPqXk99gzD9KJnzQnuu2Nw4HOfCjCtIaa4JjALGNaa00eW4xCHjM"),
        NgxCaptureModule,
        BrowserAnimationsModule,
        PlatformModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAnalyticsModule,
        NgxJsonLdModule,
        ToastrModule.forRoot()
    ],
    providers: [
        StatusBar,
        FormsModule,
        AuthGuard,
        authLoginGuard,
        ActiveGuard,
        LogEventService,
        ReactiveFormsModule,
        SharedService,
        MoengageService,
        NavigationService,
            { provide: APP_BASE_HREF, useValue: '/' } ,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
        },
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
        {
          provide: APP_INITIALIZER,
          useFactory: initDependency,
          deps: [AdultsService],
          multi: true,
        },
        AudioVideoGuard,
        EnableRouteGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
