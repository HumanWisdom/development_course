import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S78020PageRoutingModule } from './s78020-routing.module';

import { S78020Page } from './s78020.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S78020PageRoutingModule
  ],
  declarations: [S78020Page]
})
export class S78020PageModule {}
