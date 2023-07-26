import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA03PageRoutingModule } from './why-do-i-a03-routing.module';

import { WhyDoIA03Page } from './why-do-i-a03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WhyDoIA03PageRoutingModule
  ],
  declarations: [WhyDoIA03Page]
})
export class WhyDoIA03PageModule {}
