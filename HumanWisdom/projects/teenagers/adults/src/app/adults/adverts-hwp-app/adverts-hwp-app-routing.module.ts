import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertsHwpAppPage } from './adverts-hwp-app.page';

const routes: Routes = [
  {
    path: '',
    component: AdvertsHwpAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertsHwpAppPageRoutingModule {}
