import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { S78001Page } from './s78001/s78001.page'; 

const routes: Routes = [
  {
    path: '',    
    component:  S78001Page ,
  },
  {
    path: 's78001',    
    component:  S78001Page ,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartHereRoutingModule { }
