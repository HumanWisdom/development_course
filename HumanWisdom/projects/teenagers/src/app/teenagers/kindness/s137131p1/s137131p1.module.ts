import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S137131p1PageRoutingModule } from './s137131p1-routing.module';

import { S137131p1Page } from './s137131p1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S137131p1PageRoutingModule
  ],
  declarations: [S137131p1Page]
})
export class S137131p1PageModule {}
