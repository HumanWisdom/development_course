import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { DailyCheckinNoteSavePageRoutingModule } from './daily-check-note-save-routing.module';
import { DailyCheckinNoteSavePage } from './daily-check-note-save.page';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    DailyCheckinNoteSavePageRoutingModule
  ],
  declarations: [DailyCheckinNoteSavePage]
})
export class DailyCheckinNoteSavePageModule {}
