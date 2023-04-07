import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeenagersService } from './teenagers/teenagers.service';
import { TeenagerOnboardingService } from './teenagerOnboarding/teenager-onboarding.service';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers:
  [
    {
      provide: LocationStrategy,
       useClass: HashLocationStrategy,
    },
    TeenagersService,
    TeenagerOnboardingService,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
