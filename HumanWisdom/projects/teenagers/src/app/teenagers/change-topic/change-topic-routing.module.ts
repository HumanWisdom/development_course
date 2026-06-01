import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeTopicPage } from './change-topic.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeTopicPage
  },
  {
    path: 'cards/:id',
    loadChildren: () => import('./cards/cards.module').then( m => m.CardsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeTopicPageRoutingModule {}
