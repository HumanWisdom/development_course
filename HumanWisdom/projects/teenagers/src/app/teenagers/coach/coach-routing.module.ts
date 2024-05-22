import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./index/index.module").then(m => m.IndexPageModule)
  },
  {
    path: "index",
    loadChildren: () => import("./index/index.module").then(m => m.IndexPageModule)
  },
  {
    path: "profile",
    loadChildren: () => import("./profile/profile.module").then(m => m.ProfilePageModule)
  },
  {
    path: "contact",
    loadChildren: () => import("./contact/contact.module").then(m => m.ContactPageModule)
  },
  {
    path: "submitted",
    loadChildren: () => import("./submitted/submitted.module").then(m => m.SubmittedPageModule)
  },
  {
    path: "contact/:id",
    loadChildren: () => import("./contact/contact.module").then(m => m.ContactPageModule)
  },
  {
    path: "profile/:id",
    loadChildren: () => import("./profile/profile.module").then(m => m.ProfilePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachRoutingModule { }
