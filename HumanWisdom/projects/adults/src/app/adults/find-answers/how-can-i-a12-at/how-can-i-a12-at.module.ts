import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA12AtPageRoutingModule } from './how-can-i-a12-at-routing.module';

import { HowCanIA12AtPage } from './how-can-i-a12-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    HowCanIA12AtPageRoutingModule
  ],
  declarations: [HowCanIA12AtPage]
})
export class HowCanIA12AtPageModule {}
