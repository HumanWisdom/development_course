import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S107016PageRoutingModule } from './s107016-routing.module';

import { S107016Page } from './s107016.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S107016PageRoutingModule
  ],
  declarations: [S107016Page]
})
export class S107016PageModule {}
