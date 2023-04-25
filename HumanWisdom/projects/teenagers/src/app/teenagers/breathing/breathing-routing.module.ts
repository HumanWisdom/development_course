import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { S107001Page } from './s107001/s107001.page';
import { S107002Page } from './s107002/s107002.page';
import { S107003Page } from './s107003/s107003.page';
import { S107004Page } from './s107004/s107004.page';
import { S107005Page } from './s107005/s107005.page';
import { S107006Page } from './s107006/s107006.page';
import { S107007Page } from './s107007/s107007.page';
import { S107008Page } from './s107008/s107008.page';
import { S107009Page } from './s107009/s107009.page';
import { S107010Page } from './s107010/s107010.page';
import { S107011Page } from './s107011/s107011.page';

const routes: Routes = [
  {
    path: '',  
    component: S107001Page,
  }, 
  {
    
    path: 's107001',    
    component: S107001Page,
  }, 
  {
    
    path: 's107002',    
    component: S107002Page,
  }, 
  {
    
    path: 's107003',
    component: S107003Page,
  },
  {
    
    path: 's107004',
    component: S107004Page,
  },  
  {
    
    path: 's107005',
    component: S107005Page,
  },
  {  
    
    path: 's107006',
    component: S107006Page,
  },
  {
    
    path: 's107007',
    component: S107007Page,
  },
  {
    path: 's107008',
    
    component: S107008Page,
  },
  {
    path: 's107009',
    
    component: S107009Page,
  },
  { 
    path: 's107010',
    
    component: S107010Page,
  },
  {
    path: 's107011',
    
    component: S107011Page,
  },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreathingRoutingModule { }
