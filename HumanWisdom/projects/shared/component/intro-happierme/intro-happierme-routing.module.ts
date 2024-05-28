import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroHappiermePage } from './intro-happierme.page';

const routes: Routes = [
  {
    path: '',
    component: IntroHappiermePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroHappiermePageRoutingModule {}
