import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import {ComparisonModule} from './comparison/comparison.module'
import { AdultsRoutingModule } from './adults-routing.module';
import { TokenInterceptorService} from '../token-interceptor.service'
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons'
import { BrowserModule } from '@angular/platform-browser';
import { savedPage } from '../../../../shared/component/guided-questions/saved/saved.page';

@NgModule({
  declarations: [savedPage],
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
