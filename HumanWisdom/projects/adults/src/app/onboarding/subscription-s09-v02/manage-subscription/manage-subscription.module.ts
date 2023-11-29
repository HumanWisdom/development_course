import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageSubscriptionPageRoutingModule } from './manage-subscription-routing.module';

import { ManageSubscriptionPage } from './manage-subscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageSubscriptionPageRoutingModule
  ],
  providers:[DatePipe],
  declarations: [ManageSubscriptionPage]
})
export class ManageSubscriptionPageModule {}
