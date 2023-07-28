import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA01PageRoutingModule } from './why-do-i-a01-routing.module';

import { WhyDoIA01Page } from './why-do-i-a01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WhyDoIA01PageRoutingModule
  ],
  declarations: [WhyDoIA01Page]
})
export class WhyDoIA01PageModule {}
