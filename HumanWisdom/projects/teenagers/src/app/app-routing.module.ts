import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch:'full',
    redirectTo:'teenagers'
  },
  {
    path: "teenagers",
    loadChildren: () => import('./teenagers/teenagers.module').then(m => m.TeenagersModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules,  scrollPositionRestoration: 'top'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


