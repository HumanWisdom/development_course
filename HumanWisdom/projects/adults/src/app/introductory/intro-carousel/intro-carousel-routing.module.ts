import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroCarouselPage } from './intro-carousel.page';

const routes: Routes = [
  {
    path: '',
    component: IntroCarouselPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroCarouselPageRoutingModule {}
