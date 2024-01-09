import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA08PageRoutingModule } from './how-can-i-a08-routing.module';

import { HowCanIA08Page } from './how-can-i-a08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HowCanIA08PageRoutingModule
  ],
  declarations: [HowCanIA08Page]
})
export class HowCanIA08PageModule {}
