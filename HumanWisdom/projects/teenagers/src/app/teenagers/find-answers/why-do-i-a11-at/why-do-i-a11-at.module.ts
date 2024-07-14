import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA11AtPageRoutingModule } from './why-do-i-a11-at-routing.module';

import { WhyDoIA11AtPage } from './why-do-i-a11-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    WhyDoIA11AtPageRoutingModule
  ],
  declarations: [WhyDoIA11AtPage]
})
export class WhyDoIA11AtPageModule {}
