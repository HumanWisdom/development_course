import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA07AtPageRoutingModule } from './how-can-i-a07-at-routing.module';

import { HowCanIA07AtPage } from './how-can-i-a07-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    HowCanIA07AtPageRoutingModule
  ],
  declarations: [HowCanIA07AtPage]
})
export class HowCanIA07AtPageModule {}
