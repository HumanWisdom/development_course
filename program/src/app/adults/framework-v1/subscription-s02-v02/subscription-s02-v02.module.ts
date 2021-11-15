import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionS02V02PageRoutingModule } from './subscription-s02-v02-routing.module';

import { SubscriptionS02V02Page } from './subscription-s02-v02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionS02V02PageRoutingModule
  ],
  declarations: [SubscriptionS02V02Page]
})
export class SubscriptionS02V02PageModule {}
