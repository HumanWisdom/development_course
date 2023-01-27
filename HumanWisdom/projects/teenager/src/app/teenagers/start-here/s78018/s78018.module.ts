import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S78018PageRoutingModule } from './s78018-routing.module';

import { S78018Page } from './s78018.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S78018PageRoutingModule
  ],
  declarations: [S78018Page]
})
export class S78018PageModule {}
