import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 's75001',
    loadChildren: () => import('./s75001/s75001.module').then( m => m.S75001PageModule)
  },
  {
    path: 's75002',
    loadChildren: () => import('./s75002/s75002.module').then( m => m.S75002PageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WisdomExerciseRoutingModule { }
