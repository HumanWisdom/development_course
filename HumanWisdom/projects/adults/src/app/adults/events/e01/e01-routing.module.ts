import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { E01Page } from './e01.page';


const routes: Routes = [
  {
    path: '',
    component: E01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E01PageRoutingModule {}
