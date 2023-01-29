import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S78019PageRoutingModule } from './s78019-routing.module';

import { S78019Page } from './s78019.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S78019PageRoutingModule
  ],
  declarations: [S78019Page]
})
export class S78019PageModule {}
