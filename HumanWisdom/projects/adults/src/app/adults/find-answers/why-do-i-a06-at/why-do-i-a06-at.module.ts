import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA06AtPageRoutingModule } from './why-do-i-a06-at-routing.module';

import { WhyDoIA06AtPage } from './why-do-i-a06-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    WhyDoIA06AtPageRoutingModule
  ],
  declarations: [WhyDoIA06AtPage]
})
export class WhyDoIA06AtPageModule {}
