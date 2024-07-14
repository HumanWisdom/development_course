import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA19AtPageRoutingModule } from './how-can-i-a19-at-routing.module';

import { HowCanIA19AtPage } from './how-can-i-a19-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    HowCanIA19AtPageRoutingModule
  ],
  declarations: [HowCanIA19AtPage]
})
export class HowCanIA19AtPageModule {}
