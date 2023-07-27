import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA02PageRoutingModule } from './how-can-i-a02-routing.module';

import { HowCanIA02Page } from './how-can-i-a02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HowCanIA02PageRoutingModule
  ],
  declarations: [HowCanIA02Page]
})
export class HowCanIA02PageModule {}
