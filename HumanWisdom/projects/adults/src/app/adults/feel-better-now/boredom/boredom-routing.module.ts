import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoredomPage } from './boredom.page';
import { SingleAudioContentComponent } from '../../../../../../shared/component/single-audio-content/single-audio-content.component';

const routes: Routes = [
  {
    path: '',
    component: BoredomPage
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
export class BoredomPageRoutingModule {}
