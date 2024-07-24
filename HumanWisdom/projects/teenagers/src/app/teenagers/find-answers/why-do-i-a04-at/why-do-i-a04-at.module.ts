import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA04AtPageRoutingModule } from './why-do-i-a04-at-routing.module';

import { WhyDoIA04AtPage } from './why-do-i-a04-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    WhyDoIA04AtPageRoutingModule
  ],
  declarations: [WhyDoIA04AtPage]
})
export class WhyDoIA04AtPageModule {}
