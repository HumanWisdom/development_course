import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA10AtPageRoutingModule } from './why-do-i-a10-at-routing.module';

import { WhyDoIA10AtPage } from './why-do-i-a10-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    WhyDoIA10AtPageRoutingModule
  ],
  declarations: [WhyDoIA10AtPage]
})
export class WhyDoIA10AtPageModule {}
