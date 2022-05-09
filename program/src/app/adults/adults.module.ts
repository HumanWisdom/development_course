import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import {ComparisonModule} from './comparison/comparison.module'
import { AdultsRoutingModule } from './adults-routing.module';
import {TokenInterceptorService} from '../token-interceptor.service'
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {ShareButtonsModule} from 'ngx-sharebuttons/buttons'
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //ComparisonModule,
    AdultsRoutingModule,  
    HttpClientModule,
    ShareButtonsModule.withConfig({
        debug:true
       }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
 
})
export class AdultsModule { }
