import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnershipTreesistersPageRoutingModule } from './partnership-treesisters-routing.module';

import { PartnershipTreesistersPage } from './partnership-treesisters.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartnershipTreesistersPageRoutingModule,
    SharedModule
  ],
  declarations: [PartnershipTreesistersPage]
})
export class PartnershipTreesistersPageModule {}
