import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S119004PageRoutingModule } from './s119004-routing.module';

import { S119004Page } from './s119004.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S119004PageRoutingModule
  ],
  declarations: [S119004Page]
})
export class S119004PageModule {}
