import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA15AtPageRoutingModule } from './how-can-i-a15-at-routing.module';

import { HowCanIA15AtPage } from './how-can-i-a15-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    HowCanIA15AtPageRoutingModule
  ],
  declarations: [HowCanIA15AtPage]
})
export class HowCanIA15AtPageModule {}
