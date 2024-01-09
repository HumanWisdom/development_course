import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA06PageRoutingModule } from './how-can-i-a06-routing.module';

import { HowCanIA06Page } from './how-can-i-a06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HowCanIA06PageRoutingModule
  ],
  declarations: [HowCanIA06Page]
})
export class HowCanIA06PageModule {}
