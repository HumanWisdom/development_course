import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionS01V04PageRoutingModule } from './subscription-s01-v04-routing.module';

import { SubscriptionS01V04Page } from './subscription-s01-v04.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionS01V04PageRoutingModule,
    SharedModule
  ],
  declarations: [SubscriptionS01V04Page]
})
export class SubscriptionS01V04PageModule {}
