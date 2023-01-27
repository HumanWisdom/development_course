import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S78021PageRoutingModule } from './s78021-routing.module';

import { S78021Page } from './s78021.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S78021PageRoutingModule
  ],
  declarations: [S78021Page]
})
export class S78021PageModule {}
