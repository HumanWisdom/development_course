import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidedJourneyModuleRoutingModule } from './guided-journey-module-routing.module';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared.module';
import { GuidedJourneyListingPage } from './guided-journey-listing/guided-journey-listing.page';
import { GuidedJourneyIntroPage } from './guided-journey-intro/guided-journey-intro.page';
import { GuidedJourneyDaysPage } from './guided-journey-days/guided-journey-days.page';
import { GuidedJourneyEndPage } from './guided-journey-end/guided-journey-end.page';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GuidedJourneyListingPage,
    GuidedJourneyIntroPage,
    GuidedJourneyDaysPage,
    GuidedJourneyEndPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    FormsModule,
    GuidedJourneyModuleRoutingModule
  ],
  exports: [
    GuidedJourneyListingPage,
    GuidedJourneyIntroPage,
    GuidedJourneyDaysPage,
    GuidedJourneyEndPage
  ]
})
export class GuidedJourneyModuleModule { }
