import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiftAFriendPage } from './gift-a-friend.page';

const routes: Routes = [
  {
    path: '',
    component: GiftAFriendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiftAFriendPageRoutingModule {}
