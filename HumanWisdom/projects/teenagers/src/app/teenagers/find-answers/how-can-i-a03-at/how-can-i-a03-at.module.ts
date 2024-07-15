import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA03AtPageRoutingModule } from './how-can-i-a03-at-routing.module';

import { HowCanIA03AtPage } from './how-can-i-a03-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    HowCanIA03AtPageRoutingModule
  ],
  declarations: [HowCanIA03AtPage]
})
export class HowCanIA03AtPageModule {}
