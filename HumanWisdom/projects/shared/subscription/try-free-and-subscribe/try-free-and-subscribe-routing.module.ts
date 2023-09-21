import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TryFreeAndSubscribePage } from './try-free-and-subscribe.page';

const routes: Routes = [
  {
    path: '',
    component: TryFreeAndSubscribePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TryFreeAndSubscribePageRoutingModule {}
