import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA07PageRoutingModule } from './why-do-i-a07-routing.module';

import { WhyDoIA07Page } from './why-do-i-a07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WhyDoIA07PageRoutingModule
  ],
  declarations: [WhyDoIA07Page]
})
export class WhyDoIA07PageModule {}
