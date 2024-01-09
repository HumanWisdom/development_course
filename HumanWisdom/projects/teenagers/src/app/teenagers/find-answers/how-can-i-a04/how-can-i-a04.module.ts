import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA04PageRoutingModule } from './how-can-i-a04-routing.module';

import { HowCanIA04Page } from './how-can-i-a04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HowCanIA04PageRoutingModule
  ],
  declarations: [HowCanIA04Page]
})
export class HowCanIA04PageModule {}
