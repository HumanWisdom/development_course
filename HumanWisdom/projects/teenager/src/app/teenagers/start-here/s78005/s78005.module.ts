import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S78005PageRoutingModule } from './s78005-routing.module';

import { S78005Page } from './s78005.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S78005PageRoutingModule
  ],
  declarations: [S78005Page]
})
export class S78005PageModule {}
