import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S92001PageRoutingModule } from './s92001-routing.module';

import { S92001Page } from './s92001.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S92001PageRoutingModule
  ],
  declarations: [S92001Page]
})
export class S92001PageModule {}
