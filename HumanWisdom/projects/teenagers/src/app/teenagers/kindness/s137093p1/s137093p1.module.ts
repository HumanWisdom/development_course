import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S137093p1PageRoutingModule } from './s137093p1-routing.module';

import { S137093p1Page } from './s137093p1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S137093p1PageRoutingModule
  ],
  declarations: [S137093p1Page]
})
export class S137093p1PageModule {}
