import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CopingWithIllnessAtPage } from './coping-with-illness-at.page';

const routes: Routes = [
  {
    path: '',
    component: CopingWithIllnessAtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CopingWithIllnessAtPageRoutingModule {}
