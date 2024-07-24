import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA14AtPageRoutingModule } from './how-can-i-a14-at-routing.module';

import { HowCanIA14AtPage } from './how-can-i-a14-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    HowCanIA14AtPageRoutingModule
  ],
  declarations: [HowCanIA14AtPage]
})
export class HowCanIA14AtPageModule {}
