import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "teenagers",
    loadChildren: () => import('./teenagers/teenagers.module').then(m => m.TeenagersModule)
  },
  {
    path: 'testimonials',
    loadChildren: () => import('./teenagers/testimonials/testimonials.module').then( m => m.TestimonialsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules,  scrollPositionRestoration: 'top'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


