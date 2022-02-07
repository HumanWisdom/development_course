import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachDirectoryPage } from './coach-directory.page';
import { RouterModule, Routes } from '@angular/router';
import { CoachSearchPipe } from '../Pipe/coach-search.pipe';


const routes: Routes = [
  {
    path: '',
    component: CoachDirectoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoachDirectoryPage, CoachSearchPipe],
  exports: [RouterModule]
})
export class CoachDirectoryPageModule {}
