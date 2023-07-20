import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepressionPage } from './depression.page';
import { SingleAudioContentComponent } from '../../../../../../shared/component/single-audio-content/single-audio-content.component';

const routes: Routes = [
  {
    path: '',
    component: DepressionPage
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
export class DepressionPageRoutingModule {}
