import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnershipIndexPageRoutingModule } from './partnership-index-routing.module';

import { PartnershipIndexPage } from './partnership-index.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartnershipIndexPageRoutingModule,
    SharedModule
  ],
  declarations: [PartnershipIndexPage]
})
export class PartnershipIndexPageModule {}
