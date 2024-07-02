import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { DailyCheckinNoteSavePageRoutingModule } from './daily-check-note-save-routing.module';
import { DailyCheckinNoteSavePage } from './daily-check-note-save.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyCheckinNoteSavePageRoutingModule
  ],
  declarations: [DailyCheckinNoteSavePage]
})
export class DailyCheckinNoteSavePageModule {}
