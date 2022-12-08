import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertsAboutPage } from './adverts-about.page';

const routes: Routes = [
  {
    path: '',
    component: AdvertsAboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertsAboutPageRoutingModule {}
