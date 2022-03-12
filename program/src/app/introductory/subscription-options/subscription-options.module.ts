import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionOptionsPageRoutingModule } from './subscription-options-routing.module';

import { SubscriptionOptionsPage } from './subscription-options.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    SubscriptionOptionsPageRoutingModule
  ],
  declarations: [SubscriptionOptionsPage]
})
export class SubscriptionOptionsPageModule {}
