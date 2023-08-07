import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveYourBestLifePage } from './live-your-best-life.page';

const routes: Routes = [
  {
    path: '',
    component: LiveYourBestLifePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveYourBestLifePageRoutingModule {}
