import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteAddSmileyPage } from './note-add-smiley.page';

const routes: Routes = [
  {
    path: '',
    component: NoteAddSmileyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteAddSmileyPageRoutingModule {}
