import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA15PageRoutingModule } from './how-can-i-a15-routing.module';

import { HowCanIA15Page } from './how-can-i-a15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HowCanIA15PageRoutingModule
  ],
  declarations: [HowCanIA15Page]
})
export class HowCanIA15PageModule {}
