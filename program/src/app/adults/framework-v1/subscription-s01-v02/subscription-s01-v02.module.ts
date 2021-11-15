import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionS01V02PageRoutingModule } from './subscription-s01-v02-routing.module';

import { SubscriptionS01V02Page } from './subscription-s01-v02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionS01V02PageRoutingModule
  ],
  declarations: [SubscriptionS01V02Page]
})
export class SubscriptionS01V02PageModule {}
