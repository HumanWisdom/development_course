import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertsWorkPage } from './adverts-work.page';

const routes: Routes = [
  {
    path: '',
    component: AdvertsWorkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertsWorkPageRoutingModule {}
