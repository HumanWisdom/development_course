import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { S71001Page } from './s71001/s71001.page';
import { S71002Page } from './s71002/s71002.page';
import { S71003Page } from './s71003/s71003.page';
import { S71004Page } from './s71004/s71004.page';
import { S71005Page } from './s71005/s71005.page';
import { S71001p1Page } from './s71001p1/s71001p1.page';
import { S71002p1Page } from './s71002p1/s71002p1.page';
import { S71003p1Page } from './s71003p1/s71003p1.page';
import { S71004p1Page } from './s71004p1/s71004p1.page';
import { S71005p1Page } from './s71005p1/s71005p1.page';

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
  {
    path: 's71001p1',
    component: S71001p1Page,
  },
  {
    path: 's71002p1',
    component: S71002p1Page,
  },
  {
    path: 's71003p1',
    component: S71003p1Page,
  },
  {
    path: 's71004p1',
    component: S71004p1Page,
  },
  {
    path: 's71005p1',
    component: S71005p1Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetSupportNowRoutingModule { }
