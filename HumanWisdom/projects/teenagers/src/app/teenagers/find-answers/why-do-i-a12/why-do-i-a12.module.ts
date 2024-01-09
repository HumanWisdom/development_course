import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA12PageRoutingModule } from './why-do-i-a12-routing.module';

import { WhyDoIA12Page } from './why-do-i-a12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WhyDoIA12PageRoutingModule
  ],
  declarations: [WhyDoIA12Page]
})
export class WhyDoIA12PageModule {}
