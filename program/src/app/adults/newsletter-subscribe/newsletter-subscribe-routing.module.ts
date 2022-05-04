import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsletterSubscribePage } from './newsletter-subscribe.page';

const routes: Routes = [
  {
    path: '',
    component: NewsletterSubscribePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsletterSubscribePageRoutingModule {}
