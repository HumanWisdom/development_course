import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoredomPageRoutingModule } from './boredom-routing.module';

import { BoredomPage } from './boredom.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    BoredomPageRoutingModule
  ],
  declarations: [BoredomPage]
})
export class BoredomPageModule {}
