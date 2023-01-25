import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./teenagers/teenagers.module").then(m => m.TeenagersModule)
  },
  {
    path: "teenagers",
    loadChildren: () => import("./teenagers/teenagers.module").then(m => m.TeenagersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
