import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA05AtPageRoutingModule } from './why-do-i-a05-at-routing.module';

import { WhyDoIA05AtPage } from './why-do-i-a05-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    WhyDoIA05AtPageRoutingModule
  ],
  declarations: [WhyDoIA05AtPage]
})
export class WhyDoIA05AtPageModule {}
