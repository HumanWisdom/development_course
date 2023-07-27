import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA06PageRoutingModule } from './why-do-i-a06-routing.module';

import { WhyDoIA06Page } from './why-do-i-a06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WhyDoIA06PageRoutingModule
  ],
  declarations: [WhyDoIA06Page]
})
export class WhyDoIA06PageModule {}
