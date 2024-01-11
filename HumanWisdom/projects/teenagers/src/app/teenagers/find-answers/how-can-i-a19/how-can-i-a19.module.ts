import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA19PageRoutingModule } from './how-can-i-a19-routing.module';

import { HowCanIA19Page } from './how-can-i-a19.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HowCanIA19PageRoutingModule
  ],
  declarations: [HowCanIA19Page]
})
export class HowCanIA19PageModule {}
