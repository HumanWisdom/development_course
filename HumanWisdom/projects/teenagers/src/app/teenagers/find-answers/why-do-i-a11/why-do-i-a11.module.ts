import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA11PageRoutingModule } from './why-do-i-a11-routing.module';

import { WhyDoIA11Page } from './why-do-i-a11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WhyDoIA11PageRoutingModule
  ],
  declarations: [WhyDoIA11Page]
})
export class WhyDoIA11PageModule {}
