import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S157011PageRoutingModule } from './s157011-routing.module';

import { S157011Page } from './s157011.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S157011PageRoutingModule,
    SharedModule
  ],
  declarations: [S157011Page]
})
export class S157011PageModule {}
