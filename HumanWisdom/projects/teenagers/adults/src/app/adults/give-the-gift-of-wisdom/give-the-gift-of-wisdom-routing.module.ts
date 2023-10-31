import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiveTheGiftOfWisdomPage } from './give-the-gift-of-wisdom.page';

const routes: Routes = [
  {
    path: '',
    component: GiveTheGiftOfWisdomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiveTheGiftOfWisdomPageRoutingModule {}
