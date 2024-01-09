import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA12PageRoutingModule } from './how-can-i-a12-routing.module';

import { HowCanIA12Page } from './how-can-i-a12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HowCanIA12PageRoutingModule
  ],
  declarations: [HowCanIA12Page]
})
export class HowCanIA12PageModule {}
