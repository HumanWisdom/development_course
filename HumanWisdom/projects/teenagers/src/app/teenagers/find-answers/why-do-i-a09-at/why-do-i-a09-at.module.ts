import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA09AtPageRoutingModule } from './why-do-i-a09-at-routing.module';

import { WhyDoIA09AtPage } from './why-do-i-a09-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    WhyDoIA09AtPageRoutingModule
  ],
  declarations: [WhyDoIA09AtPage]
})
export class WhyDoIA09AtPageModule {}
