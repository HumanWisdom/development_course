import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA07PageRoutingModule } from './how-can-i-a07-routing.module';

import { HowCanIA07Page } from './how-can-i-a07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HowCanIA07PageRoutingModule
  ],
  declarations: [HowCanIA07Page]
})
export class HowCanIA07PageModule {}
