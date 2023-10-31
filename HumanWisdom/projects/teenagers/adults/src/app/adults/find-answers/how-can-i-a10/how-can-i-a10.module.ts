import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA10PageRoutingModule } from './how-can-i-a10-routing.module';

import { HowCanIA10Page } from './how-can-i-a10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HowCanIA10PageRoutingModule
  ],
  declarations: [HowCanIA10Page]
})
export class HowCanIA10PageModule {}
