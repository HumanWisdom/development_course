import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NewsletterComponent } from '../../../shared/component/newsletter/newsletter.component';

const routes: Routes = [
  {
    path: "teenagers",
    loadChildren: () => import('./teenagers/teenagers.module').then(m => m.TeenagersModule)
  },
  {
    path: 'newsletter-signup',
    component: NewsletterComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules,  scrollPositionRestoration: 'top'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


