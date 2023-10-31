import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA16Page } from './how-can-i-a16.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA16PageRoutingModule {}
