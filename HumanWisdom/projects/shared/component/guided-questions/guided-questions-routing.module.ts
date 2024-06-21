import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    // canActivate: [JournalGuard],
    loadChildren: () => import("./index/index.module").then(m => m.IndexPageModule)
  },
  {
    path: "journal",
    // canActivate: [JournalGuard],
    loadChildren: () => import("./index/index.module").then(m => m.IndexPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidedQuestionsRoutingModule { }
