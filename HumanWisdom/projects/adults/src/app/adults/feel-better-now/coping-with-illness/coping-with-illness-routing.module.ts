import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CopingWithIllnessPage } from './coping-with-illness.page';
import { SingleAudioContentComponent } from '../../../../../../shared/component/single-audio-content/single-audio-content.component';

const routes: Routes = [
  {
    path: '',
    component: CopingWithIllnessPage
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
export class CopingWithIllnessPageRoutingModule {}
