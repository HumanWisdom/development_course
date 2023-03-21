import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S92009PageRoutingModule } from './s92009-routing.module';

import { S92009Page } from './s92009.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S92009PageRoutingModule
  ],
  declarations: [S92009Page]
})
export class S92009PageModule {}
