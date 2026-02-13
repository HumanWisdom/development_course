import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MicroLearningListingPage } from './micro-learning-listing/micro-learning-listing.page';
import { MicroLearningInnerPage } from './micro-learning-inner/micro-learning-inner.page';
import { MicroLearningEndPage } from './micro-learning-end/micro-learning-end.page';
import { MicroLearningGuard } from '../../guard/micro-learning.guard';

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
    component: MicroLearningInnerPage,
    canActivate: [MicroLearningGuard]
  },
  {
    path: 'end',
    component: MicroLearningEndPage,
    canActivate: [MicroLearningGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MicroLearningRoutingModule { }
