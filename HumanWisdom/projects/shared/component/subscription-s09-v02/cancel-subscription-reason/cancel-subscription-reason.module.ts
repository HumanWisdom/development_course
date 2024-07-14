import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelSubscriptionReasonPageRoutingModule } from './cancel-subscription-reason-routing.module';

import { CancelSubscriptionReasonPage } from './cancel-subscription-reason.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancelSubscriptionReasonPageRoutingModule
  ],
  declarations: [CancelSubscriptionReasonPage]
})
export class CancelSubscriptionReasonPageModule {}
