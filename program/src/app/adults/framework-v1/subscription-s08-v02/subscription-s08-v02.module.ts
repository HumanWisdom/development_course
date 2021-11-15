import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionS08V02PageRoutingModule } from './subscription-s08-v02-routing.module';

import { SubscriptionS08V02Page } from './subscription-s08-v02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionS08V02PageRoutingModule
  ],
  declarations: [SubscriptionS08V02Page]
})
export class SubscriptionS08V02PageModule {}
