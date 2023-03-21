import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S92004PageRoutingModule } from './s92004-routing.module';

import { S92004Page } from './s92004.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S92004PageRoutingModule
  ],
  declarations: [S92004Page]
})
export class S92004PageModule {}
