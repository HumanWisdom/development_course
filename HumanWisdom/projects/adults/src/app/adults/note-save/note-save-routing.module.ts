import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteSavePage } from './note-save.page';

const routes: Routes = [
  {
    path: '',
    component: NoteSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteSavePageRoutingModule {}
