import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumThreadReplyPage } from './forum-thread-reply.page';

const routes: Routes = [
  {
    path: '',
    component: ForumThreadReplyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForumThreadReplyPageRoutingModule {}
