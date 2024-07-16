import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA07AtPageRoutingModule } from './why-do-i-a07-at-routing.module';

import { WhyDoIA07AtPage } from './why-do-i-a07-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    WhyDoIA07AtPageRoutingModule
  ],
  declarations: [WhyDoIA07AtPage]
})
export class WhyDoIA07AtPageModule {}
