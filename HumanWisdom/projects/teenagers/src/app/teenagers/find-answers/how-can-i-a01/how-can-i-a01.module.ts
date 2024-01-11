import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA01PageRoutingModule } from './how-can-i-a01-routing.module';

import { HowCanIA01Page } from './how-can-i-a01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HowCanIA01PageRoutingModule
  ],
  declarations: [HowCanIA01Page]
})
export class HowCanIA01PageModule {}
