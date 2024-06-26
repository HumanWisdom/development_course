import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelationshipProblemsAtPage } from './relationship-problems-at.page';

const routes: Routes = [
  {
    path: '',
    component: RelationshipProblemsAtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelationshipProblemsAtPageRoutingModule {}
