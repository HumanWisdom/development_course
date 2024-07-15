import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA03AtPageRoutingModule } from './why-do-i-a03-at-routing.module';

import { WhyDoIA03AtPage } from './why-do-i-a03-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    WhyDoIA03AtPageRoutingModule
  ],
  declarations: [WhyDoIA03AtPage]
})
export class WhyDoIA03AtPageModule {}
