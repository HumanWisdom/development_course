import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeenagersService } from './teenagers/teenagers.service';
import { TeenagerOnboardingService } from './teenagerOnboarding/teenager-onboarding.service';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TokenInterceptorService } from './teenagerOnboarding/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
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
    TeenagerOnboardingService,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
