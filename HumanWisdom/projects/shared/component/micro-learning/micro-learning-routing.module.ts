import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MicroLearningListingPage } from './micro-learning-listing/micro-learning-listing.page';
import { MicroLearningInnerPage } from './micro-learning-inner/micro-learning-inner.page';
import { MicroLearningEndPage } from './micro-learning-end/micro-learning-end.page';

const routes: Routes = [
  {
    path: '',
    component: MicroLearningListingPage
  },
  {
    path: 'listing',
    component: MicroLearningListingPage
  },
  {
    path: 'inner/:id',
    component: MicroLearningInnerPage
  },
  {
    path: 'end',
    component: MicroLearningEndPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MicroLearningRoutingModule { }
