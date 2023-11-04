import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S157012PageRoutingModule } from './s157012-routing.module';

import { S157012Page } from './s157012.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S157012PageRoutingModule,
    SharedModule
  ],
  declarations: [S157012Page]
})
export class S157012PageModule {}
