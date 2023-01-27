import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S78006PageRoutingModule } from './s78006-routing.module';

import { S78006Page } from './s78006.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S78006PageRoutingModule
  ],
  declarations: [S78006Page]
})
export class S78006PageModule {}
