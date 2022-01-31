import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { CoachDirectoryFilterPage } from './coach-directory-filter.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CoachDirectoryFilterPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],                            
  declarations: [CoachDirectoryFilterPage],
  exports: [RouterModule],
})
export class CoachDirectoryFilterPageModule {}
