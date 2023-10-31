import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnershipSubscribedPageRoutingModule } from './partnership-subscribed-routing.module';

import { PartnershipSubscribedPage } from './partnership-subscribed.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartnershipSubscribedPageRoutingModule,
    SharedModule
  ],
  declarations: [PartnershipSubscribedPage]
})
export class PartnershipSubscribedPageModule {}
