import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferFriendPage } from './refer-friend.page';

const routes: Routes = [
  {
    path: '',
    component: ReferFriendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferFriendPageRoutingModule {}
