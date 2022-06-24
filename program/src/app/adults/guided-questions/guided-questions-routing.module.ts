import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./index/index.module").then( m => m.IndexPageModule)
  },
  {
    path: "journal",
    loadChildren: () => import("./index/index.module").then( m => m.IndexPageModule)
  },
  {
    path: 'questions',
    loadChildren: () => import('./questions/questions.module').then( m => m.QuestionsPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidedQuestionsRoutingModule { }
