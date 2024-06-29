import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteSavePageRoutingModule } from './note-save-routing.module';

import { NoteSavePage } from './note-save.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteSavePageRoutingModule
  ],
  declarations: [NoteSavePage]
})
export class NoteSavePageModule {}
