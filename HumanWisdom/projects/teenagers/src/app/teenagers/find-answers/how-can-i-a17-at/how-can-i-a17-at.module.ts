import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA17AtPageRoutingModule } from './how-can-i-a17-at-routing.module';

import { HowCanIA17AtPage } from './how-can-i-a17-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    HowCanIA17AtPageRoutingModule
  ],
  declarations: [HowCanIA17AtPage]
})
export class HowCanIA17AtPageModule {}
