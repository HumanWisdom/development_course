import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { WhyDoIA14PageRoutingModule } from './why-do-i-a14-routing.module';

import { WhyDoIA14Page } from './why-do-i-a14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WhyDoIA14PageRoutingModule
  ],
  declarations: [WhyDoIA14Page]
})
export class WhyDoIA14PageModule {}
