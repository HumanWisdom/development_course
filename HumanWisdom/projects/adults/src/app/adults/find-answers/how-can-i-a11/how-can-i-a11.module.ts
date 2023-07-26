import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA11PageRoutingModule } from './how-can-i-a11-routing.module';

import { HowCanIA11Page } from './how-can-i-a11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HowCanIA11PageRoutingModule
  ],
  declarations: [HowCanIA11Page]
})
export class HowCanIA11PageModule {}
