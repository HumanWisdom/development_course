import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as jQuery from 'jquery';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersModule } from './users/users.module';
import { FrameworksModule } from './frameworks/frameworks.module';

import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
// import { NgxSummernoteModule } from 'node_modules/ngx-summernote';
@NgModule({
  declarations: [
    AppComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    SlickCarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    UsersModule,
    FrameworksModule
  ],
  providers: [{
    provide: LocationStrategy,
     useClass: HashLocationStrategy,

  },{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
