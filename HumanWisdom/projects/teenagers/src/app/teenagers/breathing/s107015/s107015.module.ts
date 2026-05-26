import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S107015PageRoutingModule } from './s107015-routing.module';

import { S107015Page } from './s107015.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S107015PageRoutingModule
  ],
  declarations: [S107015Page]
})
export class S107015PageModule {}
