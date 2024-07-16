import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA02AtPageRoutingModule } from './why-do-i-a02-at-routing.module';

import { WhyDoIA02AtPage } from './why-do-i-a02-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    WhyDoIA02AtPageRoutingModule
  ],
  declarations: [WhyDoIA02AtPage]
})
export class WhyDoIA02AtPageModule {}
