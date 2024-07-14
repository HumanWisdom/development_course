import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA12AtPageRoutingModule } from './why-do-i-a12-at-routing.module';

import { WhyDoIA12AtPage } from './why-do-i-a12-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    WhyDoIA12AtPageRoutingModule
  ],
  declarations: [WhyDoIA12AtPage]
})
export class WhyDoIA12AtPageModule {}
