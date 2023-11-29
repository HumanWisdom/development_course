import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA02PageRoutingModule } from './why-do-i-a02-routing.module';

import { WhyDoIA02Page } from './why-do-i-a02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WhyDoIA02PageRoutingModule
  ],
  declarations: [WhyDoIA02Page]
})
export class WhyDoIA02PageModule {}
