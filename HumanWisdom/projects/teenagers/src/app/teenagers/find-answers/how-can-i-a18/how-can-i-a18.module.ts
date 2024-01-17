import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA18PageRoutingModule } from './how-can-i-a18-routing.module';

import { HowCanIA18Page } from './how-can-i-a18.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HowCanIA18PageRoutingModule
  ],
  declarations: [HowCanIA18Page]
})
export class HowCanIA18PageModule {}
