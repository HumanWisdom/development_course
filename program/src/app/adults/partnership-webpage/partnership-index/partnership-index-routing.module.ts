import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';

import { PartnershipIndexPage } from './partnership-index.page';

const routes: Routes = [
  {
    path: '',
    component: PartnershipIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnershipIndexPageRoutingModule {}
