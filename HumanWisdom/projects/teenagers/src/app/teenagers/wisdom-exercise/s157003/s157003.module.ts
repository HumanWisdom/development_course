import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S157003PageRoutingModule } from './s157003-routing.module';

import { S157003Page } from './s157003.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S157003PageRoutingModule,
    SharedModule
  ],
  declarations: [S157003Page]
})
export class S157003PageModule {}
