import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA05AtPageRoutingModule } from './how-can-i-a05-at-routing.module';

import { HowCanIA05AtPage } from './how-can-i-a05-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    HowCanIA05AtPageRoutingModule
  ],
  declarations: [HowCanIA05AtPage]
})
export class HowCanIA05AtPageModule {}
