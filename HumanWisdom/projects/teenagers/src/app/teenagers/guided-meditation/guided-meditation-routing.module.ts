import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { S110001Page } from './s110001/s110001.page';
import { S110002Page } from './s110002/s110002.page';
import { S110003Page } from './s110003/s110003.page';
import { S110004Page } from './s110004/s110004.page';
import { S110005Page } from './s110005/s110005.page';
import { S110006Page } from './s110006/s110006.page';
import { S110007Page } from './s110007/s110007.page';
import { S110008Page } from './s110008/s110008.page';
import { S110009Page } from './s110009/s110009.page';
import { S110010Page } from './s110010/s110010.page';
import { S110011Page } from './s110011/s110011.page';

const routes: Routes = [
  {
    path: '',    
     component: S110001Page,
  }, 
  {
    path: 's110001',    
   
    component: S110001Page,
  },   {

    path: 's110002',
   
    component: S110002Page,
  },
  {
    path: 's110003',
   
    component: S110003Page,
  },  
  {
    path: 's110004',
   
    component: S110004Page,
  },  
  {
    path: 's110005',
   
    component: S110005Page,
  },  
  {
    path: 's110006',
   
    component: S110006Page,
  },  
  {
    path: 's110007',
   
    component: S110007Page,
  },
  {
    path: 's110008',
   
    component: S110008Page,
  },    
  {
    path: 's110009',
   
    component: S110009Page,
  },    
  {
    path: 's110010',
   
    component: S110010Page,
  },
  {
    path: 's110011',
   
    component: S110011Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidedMeditationRoutingModule { }
