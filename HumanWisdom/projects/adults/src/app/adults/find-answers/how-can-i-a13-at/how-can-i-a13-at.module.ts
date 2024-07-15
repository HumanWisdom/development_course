import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA13AtPageRoutingModule } from './how-can-i-a13-at-routing.module';

import { HowCanIA13AtPage } from './how-can-i-a13-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    HowCanIA13AtPageRoutingModule
  ],
  declarations: [HowCanIA13AtPage]
})
export class HowCanIA13AtPageModule {}
