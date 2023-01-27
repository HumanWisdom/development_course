import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S78022PageRoutingModule } from './s78022-routing.module';

import { S78022Page } from './s78022.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S78022PageRoutingModule
  ],
  declarations: [S78022Page]
})
export class S78022PageModule {}
