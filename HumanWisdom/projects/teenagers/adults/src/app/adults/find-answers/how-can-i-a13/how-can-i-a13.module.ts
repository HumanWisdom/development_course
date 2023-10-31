import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA13PageRoutingModule } from './how-can-i-a13-routing.module';

import { HowCanIA13Page } from './how-can-i-a13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HowCanIA13PageRoutingModule
  ],
  declarations: [HowCanIA13Page]
})
export class HowCanIA13PageModule {}
