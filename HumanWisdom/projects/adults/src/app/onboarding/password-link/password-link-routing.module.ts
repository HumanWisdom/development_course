import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordLinkPage } from './password-link.page';

const routes: Routes = [
  {
    path: '',
    component: PasswordLinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordLinkPageRoutingModule {}
