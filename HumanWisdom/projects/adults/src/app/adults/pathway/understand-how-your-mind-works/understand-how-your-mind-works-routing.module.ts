import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnderstandHowYourMindWorksPage } from './understand-how-your-mind-works.page';

const routes: Routes = [
  {
    path: '',
    component: UnderstandHowYourMindWorksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnderstandHowYourMindWorksPageRoutingModule {}
