import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA04AtPageRoutingModule } from './how-can-i-a04-at-routing.module';

import { HowCanIA04AtPage } from './how-can-i-a04-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    HowCanIA04AtPageRoutingModule
  ],
  declarations: [HowCanIA04AtPage]
})
export class HowCanIA04AtPageModule {}
