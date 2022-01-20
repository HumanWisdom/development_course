import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { CoachPaymentInfoPageRoutingModule } from './coach-payment-info-routing.module';

import { CoachPaymentInfoPage } from './coach-payment-info.page';
import { RouterModule, Routes } from '@angular/router';


const app: Routes = [
  {
      path: '',
      component: CoachPaymentInfoPage
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(app)
    // CoachPaymentInfoPageRoutingModule
  ],
  declarations: [CoachPaymentInfoPage],
  exports:[RouterModule]
})
export class CoachPaymentInfoPageModule {}
