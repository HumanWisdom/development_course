import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelationshipProblemsPage } from './relationship-problems.page';

const routes: Routes = [
  {
    path: '',
    component: RelationshipProblemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelationshipProblemsPageRoutingModule {}
