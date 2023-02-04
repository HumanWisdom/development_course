import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./start-here/start-here.module').then(m => m.StartHereModule)
  },
  {
    path: 'start-here',
    loadChildren: () => import('./start-here/start-here.module').then(m => m.StartHereModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeenagersRoutingModule { }
