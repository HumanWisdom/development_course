import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeelingUpsetPage } from './feeling-upset.page';
import { SingleAudioContentComponent } from '../../../../../../shared/component/single-audio-content/single-audio-content.component';

const routes: Routes = [
  {
    path: '',
    component: FeelingUpsetPage
  },
  {
    path: 'audiopage/:audiolink/:title/:RowId',
    component: SingleAudioContentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeelingUpsetPageRoutingModule {}
