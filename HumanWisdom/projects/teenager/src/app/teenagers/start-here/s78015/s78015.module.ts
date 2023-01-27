import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S78015PageRoutingModule } from './s78015-routing.module';

import { S78015Page } from './s78015.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S78015PageRoutingModule
  ],
  declarations: [S78015Page]
})
export class S78015PageModule {}
