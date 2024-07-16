import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA18AtPageRoutingModule } from './how-can-i-a18-at-routing.module';

import { HowCanIA18AtPage } from './how-can-i-a18-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    HowCanIA18AtPageRoutingModule
  ],
  declarations: [HowCanIA18AtPage]
})
export class HowCanIA18AtPageModule {}
