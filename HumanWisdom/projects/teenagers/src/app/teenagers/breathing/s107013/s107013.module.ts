import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S107013PageRoutingModule } from './s107013-routing.module';

import { S107013Page } from './s107013.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S107013PageRoutingModule
  ],
  declarations: [S107013Page]
})
export class S107013PageModule {}
