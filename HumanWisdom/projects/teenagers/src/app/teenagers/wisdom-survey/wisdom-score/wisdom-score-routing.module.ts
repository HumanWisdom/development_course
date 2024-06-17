import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomScorePage } from './wisdom-score.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomScorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomScorePageRoutingModule {}
