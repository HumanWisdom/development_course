import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
//import { LoginSignupPage } from '../../../../shared/component/login-signup/login-signup.page';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OnboardingRoutingModule,
    HttpClientModule,
  ] ,
  providers: [
    
  ],
  //exports:[LoginSignupPage]
 
})
export class OnboardingModule { }
