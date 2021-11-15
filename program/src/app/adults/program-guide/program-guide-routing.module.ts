import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S35001Page } from './s35001/s35001.page';
import { S35002Page } from './s35002/s35002.page';
import { S35003Page } from './s35003/s35003.page';
import { S35003p0Page } from './s35003p0/s35003p0.page';
import { S35004Page } from './s35004/s35004.page';
import { S35004tPage } from './s35004t/s35004t.page';
import { S35005Page } from './s35005/s35005.page';
import { S35005p0Page } from './s35005p0/s35005p0.page';
import { S35006Page } from './s35006/s35006.page';
import { S35007Page } from './s35007/s35007.page';
import { S35008Page } from './s35008/s35008.page';
import { S35008tPage } from './s35008t/s35008t.page';
import { S35009Page } from './s35009/s35009.page';
import { S35009p1Page } from './s35009p1/s35009p1.page';
import { S35009p2Page } from './s35009p2/s35009p2.page';
import { S35009p3Page } from './s35009p3/s35009p3.page';
import { S35009p4Page } from './s35009p4/s35009p4.page';
import { S35009p5Page } from './s35009p5/s35009p5.page';
import { S35009p6Page } from './s35009p6/s35009p6.page';
import { S35009p7Page } from './s35009p7/s35009p7.page';
import { S35009p8Page } from './s35009p8/s35009p8.page';
import { S35009p9Page } from './s35009p9/s35009p9.page';
import { S35009p10Page } from './s35009p10/s35009p10.page';
import { S35009p11Page } from './s35009p11/s35009p11.page';
import { S35010Page } from './s35010/s35010.page';
import { S35011Page } from './s35011/s35011.page';
import { S35011p0Page } from './s35011p0/s35011p0.page';
import { S35012Page } from './s35012/s35012.page';
import { S35013Page } from './s35013/s35013.page';
import { S35014Page } from './s35014/s35014.page';
import { S35015Page } from './s35015/s35015.page';
import { S35016Page } from './s35016/s35016.page';
import { S35017Page } from './s35017/s35017.page';
import { S35018Page } from './s35018/s35018.page';
import { S35019Page } from './s35019/s35019.page';

const routes: Routes = [
  {
    path: '',    
    component: S35001Page,
  },  
  {
    path: 's35001',
    component: S35001Page,
  },
  {
    path: 's35002',
    component: S35002Page,
  },
  {
    path: 's35003',
    component: S35003Page,
  },
  {
    path: 's35003p0',
    component: S35003p0Page,
  },
  {
    path: 's35004',
    component: S35004Page,
  },
  {
    path: 's35004t',
    component: S35004tPage,
  },
  {
    path: 's35005',
    component: S35005Page,
  },
  {
    path: 's35005p0',
    component: S35005p0Page,
  },
  {
    path: 's35006',
    component: S35006Page,
  },
  {
    path: 's35007',
    component: S35007Page,
  },
  {
    path: 's35008',
    component: S35008Page,
  },
  {
    path: 's35008t',
    component: S35008tPage,
  },
  {
    path: 's35009',
    component: S35009Page,
  },
  {
    path: 's35009p1',
    component: S35009p1Page,
  },
  {
    path: 's35009p2',
    component: S35009p2Page,
  },
  {
    path: 's35009p3',
    component: S35009p3Page,
  },
  {
    path: 's35009p4',
    component: S35009p4Page,
  },
  {
    path: 's35009p5',
    component: S35009p5Page,
  },
  {
    path: 's35009p6',
    component: S35009p6Page,
  },
  {
    path: 's35009p7',
    component: S35009p7Page,
  },
  {
    path: 's35009p8',
    component: S35009p8Page,
  },
  {
    path: 's35009p9',
    component: S35009p9Page,
  },
  {
    path: 's35009p10',
    component: S35009p10Page,
  },
  {
    path: 's35009p11',
    component: S35009p11Page,
  },
  {
    path: 's35010',
    component: S35010Page,
  },
  {
    path: 's35011',
    component: S35011Page,
  },
  {
    path: 's35011p0',
    component: S35011p0Page,
  }, 
  {
    path: 's35012',
    component: S35012Page,
  },
  {
    path: 's35013',
    component: S35013Page,
  },
  {
    path: 's35014',
    component: S35014Page,
  },
  {
    path: 's35015',
    component: S35015Page,
  },
  {
    path: 's35016',
    component: S35016Page,
  },  
  {
    path: 's35017',
    component: S35017Page,
  },
  {
    path: 's35018',
    component: S35018Page,
  },
  {
    path: 's35019',
    component: S35019Page,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramGuideRoutingModule { }
