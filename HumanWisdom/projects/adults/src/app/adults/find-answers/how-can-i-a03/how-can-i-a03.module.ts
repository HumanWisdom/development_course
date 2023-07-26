import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA03PageRoutingModule } from './how-can-i-a03-routing.module';

import { HowCanIA03Page } from './how-can-i-a03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HowCanIA03PageRoutingModule
  ],
  declarations: [HowCanIA03Page]
})
export class HowCanIA03PageModule {}
