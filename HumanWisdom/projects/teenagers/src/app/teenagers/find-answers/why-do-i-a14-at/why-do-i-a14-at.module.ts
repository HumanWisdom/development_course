import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA14AtPageRoutingModule } from './why-do-i-a14-at-routing.module';

import { WhyDoIA14AtPage } from './why-do-i-a14-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    WhyDoIA14AtPageRoutingModule
  ],
  declarations: [WhyDoIA14AtPage]
})
export class WhyDoIA14AtPageModule {}
