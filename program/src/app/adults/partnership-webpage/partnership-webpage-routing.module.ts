import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./partnership-index/partnership-index.module').then( m => m.PartnershipIndexPageModule)
  },
  {
    path: 'partnership-index',
    loadChildren: () => import('./partnership-index/partnership-index.module').then( m => m.PartnershipIndexPageModule)
  },
  {
    path: 'illustration',
    loadChildren: () => import('./illustration/illustration.module').then( m => m.IllustrationPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnershipWebpageRoutingModule { }
