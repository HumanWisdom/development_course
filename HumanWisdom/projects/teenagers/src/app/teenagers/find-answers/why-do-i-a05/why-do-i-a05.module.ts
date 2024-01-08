import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA05PageRoutingModule } from './why-do-i-a05-routing.module';

import { WhyDoIA05Page } from './why-do-i-a05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WhyDoIA05PageRoutingModule
  ],
  declarations: [WhyDoIA05Page]
})
export class WhyDoIA05PageModule {}
