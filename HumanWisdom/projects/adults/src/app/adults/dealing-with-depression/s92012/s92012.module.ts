import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S92012PageRoutingModule } from './s92012-routing.module';

import { S92012Page } from './s92012.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S92012PageRoutingModule
  ],
  declarations: [S92012Page]
})
export class S92012PageModule {}
