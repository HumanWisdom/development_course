import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA13AtPageRoutingModule } from './why-do-i-a13-at-routing.module';

import { WhyDoIA13AtPage } from './why-do-i-a13-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    WhyDoIA13AtPageRoutingModule
  ],
  declarations: [WhyDoIA13AtPage]
})
export class WhyDoIA13AtPageModule {}
