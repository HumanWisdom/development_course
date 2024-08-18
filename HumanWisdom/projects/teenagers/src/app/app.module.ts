import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeenagersService } from './teenagers/teenagers.service';
import { TeenagerOnboardingService } from './teenagerOnboarding/teenager-onboarding.service';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import{ SharedModule } from './../../../shared/shared.module'
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TokenInterceptorService } from './teenagerOnboarding/token-interceptor.service';
import { SharedService } from '../../../shared/services/shared.service';
import { ForumService } from '../../../shared/forum/forum.service';
import { OnboardingService } from '../../../shared/services/onboarding.service';
import { LogEventService } from '../../../shared/services/log-event.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgxCaptureModule } from 'ngx-capture';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlatformModule } from '@angular/cdk/platform';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { environment } from '../../../environments/environment';
import { StripeModule } from "stripe-angular";
import { BlogIndexPage } from '../../../shared/component/blogs/blog-index/blog-index.page';
import{BlogArticlePage}  from './../../../shared/component/blogs/blog-article/blog-article.page';
import { FormsModule } from '@angular/forms';
import { SplashPage } from './teenagers/splash/splash.page';
@NgModule({
  declarations: [
    AppComponent,
    BlogIndexPage,
    BlogArticlePage,
    SplashPage
],
    exports:[
        BlogIndexPage,
        BlogArticlePage,
        SplashPage
    ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxCaptureModule,
    BrowserAnimationsModule,
    PlatformModule,
    SharedModule,
    FormsModule,
    StripeModule.forRoot("sk_test_51IRj1BGKvnjJ88wcKdzqQeXK9jSAsiRwxGw3GOBvuDSwgAXPqXk99gzD9KJnzQnuu2Nw4HOfCjCtIaa4JjALGNaa00eW4xCHjM"),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
  ],
  providers:
  [
    { provide: APP_BASE_HREF, useValue: '/' } ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
  },
  FormsModule,
    TeenagersService,
    AdultsService,
    SharedService,
    TeenagerOnboardingService,
    ForumService,
    OnboardingService,
    LogEventService,
    ToastrService,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
