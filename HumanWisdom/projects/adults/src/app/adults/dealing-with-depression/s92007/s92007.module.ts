import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S92007PageRoutingModule } from './s92007-routing.module';

import { S92007Page } from './s92007.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S92007PageRoutingModule
  ],
  declarations: [S92007Page]
})
export class S92007PageModule {}
