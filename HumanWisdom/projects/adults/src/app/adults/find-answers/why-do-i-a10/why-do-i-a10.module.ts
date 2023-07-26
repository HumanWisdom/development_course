import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA10PageRoutingModule } from './why-do-i-a10-routing.module';

import { WhyDoIA10Page } from './why-do-i-a10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WhyDoIA10PageRoutingModule
  ],
  declarations: [WhyDoIA10Page]
})
export class WhyDoIA10PageModule {}
