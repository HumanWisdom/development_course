import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA02AtPageRoutingModule } from './how-can-i-a02-at-routing.module';

import { HowCanIA02AtPage } from './how-can-i-a02-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    HowCanIA02AtPageRoutingModule
  ],
  declarations: [HowCanIA02AtPage]
})
export class HowCanIA02AtPageModule {}
