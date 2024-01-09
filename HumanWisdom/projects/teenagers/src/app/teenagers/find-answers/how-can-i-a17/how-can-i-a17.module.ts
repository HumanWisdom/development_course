import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { HowCanIA17PageRoutingModule } from './how-can-i-a17-routing.module';

import { HowCanIA17Page } from './how-can-i-a17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HowCanIA17PageRoutingModule
  ],
  declarations: [HowCanIA17Page]
})
export class HowCanIA17PageModule {}
