import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumThreadStartNewPage } from './forum-thread-start-new.page';

const routes: Routes = [
  {
    path: '',
    component: ForumThreadStartNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForumThreadStartNewPageRoutingModule {}
