import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA16AtPageRoutingModule } from './how-can-i-a16-at-routing.module';

import { HowCanIA16AtPage } from './how-can-i-a16-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    HowCanIA16AtPageRoutingModule
  ],
  declarations: [HowCanIA16AtPage]
})
export class HowCanIA16AtPageModule {}
