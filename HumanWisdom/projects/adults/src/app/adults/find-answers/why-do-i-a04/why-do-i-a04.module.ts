import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA04PageRoutingModule } from './why-do-i-a04-routing.module';

import { WhyDoIA04Page } from './why-do-i-a04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WhyDoIA04PageRoutingModule
  ],
  declarations: [WhyDoIA04Page]
})
export class WhyDoIA04PageModule {}
