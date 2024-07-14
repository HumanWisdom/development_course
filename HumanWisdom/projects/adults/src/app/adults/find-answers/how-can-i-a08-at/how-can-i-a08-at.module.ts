import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA08AtPageRoutingModule } from './how-can-i-a08-at-routing.module';

import { HowCanIA08AtPage } from './how-can-i-a08-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    HowCanIA08AtPageRoutingModule
  ],
  declarations: [HowCanIA08AtPage]
})
export class HowCanIA08AtPageModule {}
