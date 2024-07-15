import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA01AtPageRoutingModule } from './why-do-i-a01-at-routing.module';

import { WhyDoIA01AtPage } from './why-do-i-a01-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    WhyDoIA01AtPageRoutingModule
  ],
  declarations: [WhyDoIA01AtPage]
})
export class WhyDoIA01AtPageModule {}
