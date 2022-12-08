import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import {TokenInterceptorService} from '../token-interceptor.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OnboardingRoutingModule,
    HttpClientModule,
  ] ,
 
})
export class OnboardingModule { }
