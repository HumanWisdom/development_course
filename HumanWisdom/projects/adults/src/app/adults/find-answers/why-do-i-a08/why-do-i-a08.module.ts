import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA08PageRoutingModule } from './why-do-i-a08-routing.module';

import { WhyDoIA08Page } from './why-do-i-a08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WhyDoIA08PageRoutingModule
  ],
  declarations: [WhyDoIA08Page]
})
export class WhyDoIA08PageModule {}
