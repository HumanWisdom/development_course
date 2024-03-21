import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomForWorkplacePage } from './wisdom-for-workplace.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomForWorkplacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomForWorkplacePageRoutingModule {}
