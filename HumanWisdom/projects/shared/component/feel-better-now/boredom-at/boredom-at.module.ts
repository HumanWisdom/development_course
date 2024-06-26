import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../shared.module';

import { BoredomAtPageRoutingModule } from './boredom-at-routing.module';

import { BoredomAtPage } from './boredom-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    BoredomAtPageRoutingModule
  ],
  declarations: [BoredomAtPage]
})
export class BoredomAtPageModule {}
