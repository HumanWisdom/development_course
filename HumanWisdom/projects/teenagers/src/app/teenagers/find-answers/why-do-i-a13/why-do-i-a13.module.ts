import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA13PageRoutingModule } from './why-do-i-a13-routing.module';

import { WhyDoIA13Page } from './why-do-i-a13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WhyDoIA13PageRoutingModule
  ],
  declarations: [WhyDoIA13Page]
})
export class WhyDoIA13PageModule {}
