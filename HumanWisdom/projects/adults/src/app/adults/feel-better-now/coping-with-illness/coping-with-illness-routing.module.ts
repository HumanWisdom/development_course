import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CopingWithIllnessPage } from './coping-with-illness.page';

const routes: Routes = [
  {
    path: '',
    component: CopingWithIllnessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CopingWithIllnessPageRoutingModule {}
