import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnershipSubscribedPageRoutingModule } from './partnership-subscribed-routing.module';

import { PartnershipSubscribedPage } from './partnership-subscribed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartnershipSubscribedPageRoutingModule
  ],
  declarations: [PartnershipSubscribedPage]
})
export class PartnershipSubscribedPageModule {}
