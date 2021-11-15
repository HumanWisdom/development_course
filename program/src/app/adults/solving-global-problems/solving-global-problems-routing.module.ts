import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { S72001Page } from './s72001/s72001.page';
import { S72002Page } from './s72002/s72002.page';
import { S72003Page } from './s72003/s72003.page';
import { S72004Page } from './s72004/s72004.page';
import { S72005Page } from './s72005/s72005.page';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolvingGlobalProblemsRoutingModule { }
