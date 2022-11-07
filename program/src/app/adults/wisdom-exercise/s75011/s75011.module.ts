import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S75011PageRoutingModule } from './s75011-routing.module';

import { S75011Page } from './s75011.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S75011PageRoutingModule,
    SharedModule
  ],
  declarations: [S75011Page]
})
export class S75011PageModule {}
