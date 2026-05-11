import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuidedJourneyListingPage } from './guided-journey-listing/guided-journey-listing.page';
import { GuidedJourneyIntroPage } from './guided-journey-intro/guided-journey-intro.page';
import { GuidedJourneyDaysPage } from './guided-journey-days/guided-journey-days.page';
import { GuidedJourneyEndPage } from './guided-journey-end/guided-journey-end.page';

const routes: Routes = [
  {
    path: '',
    component: GuidedJourneyListingPage
  },
  {
    path: 'intro',
    component: GuidedJourneyIntroPage
  },
  {
    path: 'days',
    component: GuidedJourneyDaysPage
  },
  {
    path: 'end',
    component: GuidedJourneyEndPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidedJourneyModuleRoutingModule { }
