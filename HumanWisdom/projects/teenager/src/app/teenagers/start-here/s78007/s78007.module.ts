import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S78007PageRoutingModule } from './s78007-routing.module';

import { S78007Page } from './s78007.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S78007PageRoutingModule
  ],
  declarations: [S78007Page]
})
export class S78007PageModule {}
