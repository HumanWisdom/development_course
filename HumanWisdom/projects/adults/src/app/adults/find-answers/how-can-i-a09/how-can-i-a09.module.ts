import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA09PageRoutingModule } from './how-can-i-a09-routing.module';

import { HowCanIA09Page } from './how-can-i-a09.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HowCanIA09PageRoutingModule
  ],
  declarations: [HowCanIA09Page]
})
export class HowCanIA09PageModule {}
