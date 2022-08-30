import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnershipTreesistersPageRoutingModule } from './partnership-treesisters-routing.module';

import { PartnershipTreesistersPage } from './partnership-treesisters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartnershipTreesistersPageRoutingModule
  ],
  declarations: [PartnershipTreesistersPage]
})
export class PartnershipTreesistersPageModule {}
