import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import {ComparisonModule} from './comparison/comparison.module'
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons'
import { BrowserModule } from '@angular/platform-browser';
import { TeenagersRoutingModule } from './teenagers-routing.module';
import { TokenInterceptorService } from '../teenagerOnboarding/token-interceptor.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TeenagersRoutingModule,  
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
export class TeenagersModule { }
