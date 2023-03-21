import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S92006PageRoutingModule } from './s92006-routing.module';

import { S92006Page } from './s92006.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S92006PageRoutingModule
  ],
  declarations: [S92006Page]
})
export class S92006PageModule {}
