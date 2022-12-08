import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumLandingPage } from './forum-landing.page';

const routes: Routes = [
  {
    path: '',
    component: ForumLandingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForumLandingPageRoutingModule {}
