import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA09PageRoutingModule } from './why-do-i-a09-routing.module';

import { WhyDoIA09Page } from './why-do-i-a09.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WhyDoIA09PageRoutingModule
  ],
  declarations: [WhyDoIA09Page]
})
export class WhyDoIA09PageModule {}
