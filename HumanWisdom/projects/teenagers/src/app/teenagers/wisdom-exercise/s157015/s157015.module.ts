import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S157015PageRoutingModule } from './s157015-routing.module';

import { S157015Page } from './s157015.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S157015PageRoutingModule,
    SharedModule
  ],
  declarations: [S157015Page]
})
export class S157015PageModule {}
