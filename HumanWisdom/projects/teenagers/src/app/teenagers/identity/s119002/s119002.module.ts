import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S119002PageRoutingModule } from './s119002-routing.module';

import { S119002Page } from './s119002.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S119002PageRoutingModule
  ],
  declarations: [S119002Page]
})
export class S119002PageModule {}
