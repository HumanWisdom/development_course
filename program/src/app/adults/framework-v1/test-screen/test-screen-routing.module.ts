import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestScreenPage } from './test-screen.page';

const routes: Routes = [
  {
    path: '',
    component: TestScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestScreenPageRoutingModule {}
