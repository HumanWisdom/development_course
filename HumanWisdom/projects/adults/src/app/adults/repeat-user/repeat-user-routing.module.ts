import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepeatUserPage } from './repeat-user.page';

const routes: Routes = [
  {
    path: '',
    component: RepeatUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepeatUserPageRoutingModule {}
