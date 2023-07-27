import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA05PageRoutingModule } from './how-can-i-a05-routing.module';

import { HowCanIA05Page } from './how-can-i-a05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HowCanIA05PageRoutingModule
  ],
  declarations: [HowCanIA05Page]
})
export class HowCanIA05PageModule {}
