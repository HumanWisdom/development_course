import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionS01V03PageRoutingModule } from './subscription-s01-v03-routing.module';

import { SubscriptionS01V03Page } from './subscription-s01-v03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionS01V03PageRoutingModule
  ],
  declarations: [SubscriptionS01V03Page]
})
export class SubscriptionS01V03PageModule {}
