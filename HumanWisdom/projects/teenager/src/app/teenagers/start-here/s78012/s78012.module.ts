import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S78012PageRoutingModule } from './s78012-routing.module';

import { S78012Page } from './s78012.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S78012PageRoutingModule
  ],
  declarations: [S78012Page]
})
export class S78012PageModule {}
