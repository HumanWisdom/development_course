import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA11AtPageRoutingModule } from './how-can-i-a11-at-routing.module';

import { HowCanIA11AtPage } from './how-can-i-a11-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    HowCanIA11AtPageRoutingModule
  ],
  declarations: [HowCanIA11AtPage]
})
export class HowCanIA11AtPageModule {}
