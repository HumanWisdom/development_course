import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S119004tPageRoutingModule } from './s119004t-routing.module';

import { S119004tPage } from './s119004t.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S119004tPageRoutingModule
  ],
  declarations: [S119004tPage]
})
export class S119004tPageModule {}
