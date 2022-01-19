import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachPaymentInfoPageRoutingModule } from './coach-payment-info-routing.module';

import { CoachPaymentInfoPage } from './coach-payment-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CoachPaymentInfoPageRoutingModule
  ],
  declarations: [CoachPaymentInfoPage]
})
export class CoachPaymentInfoPageModule {}
