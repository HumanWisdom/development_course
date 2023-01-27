import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S78016PageRoutingModule } from './s78016-routing.module';

import { S78016Page } from './s78016.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S78016PageRoutingModule
  ],
  declarations: [S78016Page]
})
export class S78016PageModule {}
