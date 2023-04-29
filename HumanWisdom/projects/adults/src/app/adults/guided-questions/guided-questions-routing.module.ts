import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalGuard } from 'src/app/journal.guard';

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
