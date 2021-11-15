import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileUploadPage } from './profile-upload.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileUploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileUploadPageRoutingModule {}
