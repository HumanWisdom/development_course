import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA01AtPageRoutingModule } from './how-can-i-a01-at-routing.module';

import { HowCanIA01AtPage } from './how-can-i-a01-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    HowCanIA01AtPageRoutingModule
  ],
  declarations: [HowCanIA01AtPage]
})
export class HowCanIA01AtPageModule {}
