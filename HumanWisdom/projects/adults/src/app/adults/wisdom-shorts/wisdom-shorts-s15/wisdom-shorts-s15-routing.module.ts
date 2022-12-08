import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomShortsS15Page } from './wisdom-shorts-s15.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomShortsS15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomShortsS15PageRoutingModule {}
