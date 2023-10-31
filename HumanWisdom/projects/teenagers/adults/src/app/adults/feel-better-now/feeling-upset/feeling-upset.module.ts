import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeelingUpsetPageRoutingModule } from './feeling-upset-routing.module';

import { FeelingUpsetPage } from './feeling-upset.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    FeelingUpsetPageRoutingModule
  ],
  declarations: [FeelingUpsetPage]
})
export class FeelingUpsetPageModule {}
