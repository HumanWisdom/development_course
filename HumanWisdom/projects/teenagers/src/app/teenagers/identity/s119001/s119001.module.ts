import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S119001PageRoutingModule } from './s119001-routing.module';

import { S119001Page } from './s119001.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S119001PageRoutingModule
  ],
  declarations: [S119001Page]
})
export class S119001PageModule {}
