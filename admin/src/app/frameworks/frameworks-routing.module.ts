import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffiliateS01AComponent } from './affiliate-s01-a/affiliate-s01-a.component';
import { AffiliateS01Component } from './affiliate-s01/affiliate-s01.component';

const routes: Routes = [
  {
    path:'',
    component: AffiliateS01Component
  },
  {
    path: "affiliate-s01",
    component: AffiliateS01Component
  },
  {
    path: "affiliate-s01-a/:id",
    component: AffiliateS01AComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrameworksRoutingModule { }
