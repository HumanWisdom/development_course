import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA14PageRoutingModule } from './how-can-i-a14-routing.module';

import { HowCanIA14Page } from './how-can-i-a14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HowCanIA14PageRoutingModule
  ],
  declarations: [HowCanIA14Page]
})
export class HowCanIA14PageModule {}
