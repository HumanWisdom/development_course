import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA08AtPageRoutingModule } from './why-do-i-a08-at-routing.module';

import { WhyDoIA08AtPage } from './why-do-i-a08-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    WhyDoIA08AtPageRoutingModule
  ],
  declarations: [WhyDoIA08AtPage]
})
export class WhyDoIA08AtPageModule {}
