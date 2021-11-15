import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileUploadedPage } from './profile-uploaded.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileUploadedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileUploadedPageRoutingModule {}
