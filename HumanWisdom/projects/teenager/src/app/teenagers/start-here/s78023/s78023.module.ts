import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S78023PageRoutingModule } from './s78023-routing.module';

import { S78023Page } from './s78023.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S78023PageRoutingModule
  ],
  declarations: [S78023Page]
})
export class S78023PageModule {}
