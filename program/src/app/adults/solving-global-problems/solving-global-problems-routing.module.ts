import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { S72001Page } from './s72001/s72001.page';
import { S72002Page } from './s72002/s72002.page';
import { S72003Page } from './s72003/s72003.page';
import { S72004Page } from './s72004/s72004.page';
import { S72005Page } from './s72005/s72005.page';
import { S72001p1Page } from './s72001p1/s72001p1.page';
import { S72002p1Page } from './s72002p1/s72002p1.page';
import { S72003p1Page } from './s72003p1/s72003p1.page';
import { S72004p1Page } from './s72004p1/s72004p1.page';
import { S72005p1Page } from './s72005p1/s72005p1.page';

const routes: Routes = [
  {
    path: '',    
    component: S72001Page,
  },  
  {
    path: 's72001',
    component: S72001Page,
  },
  {
    path: 's72002',
    component: S72002Page,
  },
  {
    path: 's72003',
    component: S72003Page,
  },
  {
    path: 's72004',
    component: S72004Page,
  }, 
  {
    path: 's72005',
    component: S72005Page,
  },
  {
    path: 's72001p1',
    component: S72001p1Page,
  },
  {
    path: 's72002p1',
    component: S72002p1Page,
  },
  {
    path: 's72003p1',
    component: S72003p1Page,
  },
  {
    path: 's72004p1',
    component: S72004p1Page,
  },
  {
    path: 's72005p1',
    component: S72005p1Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolvingGlobalProblemsRoutingModule { }
