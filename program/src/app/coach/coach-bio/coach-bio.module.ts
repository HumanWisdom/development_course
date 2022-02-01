import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { CoachBioPage } from './coach-bio.page';



const routes: Routes = [
  {
    path: '',
    component: CoachBioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoachBioPage],
  exports: [RouterModule]
})
export class CoachBioPageModule {}
