import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TryFreeAndSubscribePageRoutingModule } from './try-free-and-subscribe-routing.module';

import { TryFreeAndSubscribePage } from './try-free-and-subscribe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TryFreeAndSubscribePageRoutingModule
  ],
  declarations: [TryFreeAndSubscribePage]
})
export class TryFreeAndSubscribePageModule {}
