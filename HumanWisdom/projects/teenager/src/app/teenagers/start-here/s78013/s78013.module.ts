import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S78013PageRoutingModule } from './s78013-routing.module';

import { S78013Page } from './s78013.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S78013PageRoutingModule
  ],
  declarations: [S78013Page]
})
export class S78013PageModule {}
