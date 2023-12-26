import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./cafe-free/cafe-free.module").then(m => m.CafeFreePageModule)
  },
  {
    path: "cafe-free",
    loadChildren: () => import("./cafe-free/cafe-free.module").then(m => m.CafeFreePageModule)
  },
  {
    path: "cafe-paid",
    loadChildren: () => import("./cafe-paid/cafe-paid.module").then(m => m.CafePaidPageModule)
  },
  {
    path: 'cafe-confirmation',
    loadChildren: () => import('./cafe-confirmation/cafe-confirmation.module').then( m => m.CafeConfirmationPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafeRoutingModule { }
