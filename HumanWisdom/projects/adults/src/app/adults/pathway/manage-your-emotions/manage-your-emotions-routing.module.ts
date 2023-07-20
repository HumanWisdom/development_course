import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageYourEmotionsPage } from './manage-your-emotions.page';

const routes: Routes = [
  {
    path: '',
    component: ManageYourEmotionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageYourEmotionsPageRoutingModule {}
