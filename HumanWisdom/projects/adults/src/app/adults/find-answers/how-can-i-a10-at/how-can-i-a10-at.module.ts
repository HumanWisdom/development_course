import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA10AtPageRoutingModule } from './how-can-i-a10-at-routing.module';

import { HowCanIA10AtPage } from './how-can-i-a10-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    HowCanIA10AtPageRoutingModule
  ],
  declarations: [HowCanIA10AtPage]
})
export class HowCanIA10AtPageModule {}
