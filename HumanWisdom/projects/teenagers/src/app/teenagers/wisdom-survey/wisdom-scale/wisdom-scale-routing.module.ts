import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomScalePage } from './wisdom-scale.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomScalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomScalePageRoutingModule {}
