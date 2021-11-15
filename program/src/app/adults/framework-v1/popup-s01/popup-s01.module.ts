import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupS01PageRoutingModule } from './popup-s01-routing.module';

import { PopupS01Page } from './popup-s01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopupS01PageRoutingModule
  ],
  declarations: [PopupS01Page]
})
export class PopupS01PageModule {}
