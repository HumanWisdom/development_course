import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S119003PageRoutingModule } from './s119003-routing.module';

import { S119003Page } from './s119003.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S119003PageRoutingModule
  ],
  declarations: [S119003Page]
})
export class S119003PageModule {}
