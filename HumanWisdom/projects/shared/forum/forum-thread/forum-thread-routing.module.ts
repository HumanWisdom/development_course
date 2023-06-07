import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumThreadPage } from './forum-thread.page';

const routes: Routes = [
  {
    path: '',
    component: ForumThreadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForumThreadPageRoutingModule {}
