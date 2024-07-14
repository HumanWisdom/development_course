import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA09AtPageRoutingModule } from './how-can-i-a09-at-routing.module';

import { HowCanIA09AtPage } from './how-can-i-a09-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    HowCanIA09AtPageRoutingModule
  ],
  declarations: [HowCanIA09AtPage]
})
export class HowCanIA09AtPageModule {}
