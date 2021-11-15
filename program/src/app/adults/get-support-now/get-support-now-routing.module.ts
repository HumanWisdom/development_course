import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { S71001Page } from './s71001/s71001.page';
import { S71002Page } from './s71002/s71002.page';
import { S71003Page } from './s71003/s71003.page';
import { S71004Page } from './s71004/s71004.page';
import { S71005Page } from './s71005/s71005.page';

const routes: Routes = [
  {
    path: '',    
    component: S71001Page,
  }, 
  {
    path: 's71001',    
    component: S71001Page,
  },
  {
    path: 's71002',
    component: S71002Page,
  },
  {
    path: 's71003',    
    component: S71003Page,
  },   
  {
    path: 's71004',
    component: S71004Page,
  },
  {
    path: 's71005',
    component: S71005Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetSupportNowRoutingModule { }
