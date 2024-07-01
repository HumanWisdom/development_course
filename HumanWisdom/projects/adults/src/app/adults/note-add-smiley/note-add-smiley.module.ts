import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteAddSmileyPageRoutingModule } from './note-add-smiley-routing.module';

import { NoteAddSmileyPage } from './note-add-smiley.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteAddSmileyPageRoutingModule
  ],
  declarations: [NoteAddSmileyPage]
})
export class NoteAddSmileyPageModule {}
