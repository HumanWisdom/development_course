import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteSaveSmileyPageRoutingModule } from './note-save-smiley-routing.module';

import { NoteSaveSmileyPage } from './note-save-smiley.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteSaveSmileyPageRoutingModule
  ],
  declarations: [NoteSaveSmileyPage]
})
export class NoteSaveSmileyPageModule {}
