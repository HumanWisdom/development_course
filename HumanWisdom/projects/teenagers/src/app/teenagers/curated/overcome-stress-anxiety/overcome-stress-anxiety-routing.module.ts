import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OvercomeStressAnxietyPage } from './overcome-stress-anxiety.page';

const routes: Routes = [
  {
    path: '',
    component: OvercomeStressAnxietyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OvercomeStressAnxietyPageRoutingModule {}
