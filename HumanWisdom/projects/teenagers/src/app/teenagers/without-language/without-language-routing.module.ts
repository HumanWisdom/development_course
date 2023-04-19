import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S103001Page } from './s103001/s103001.page';
import { S103002Page } from './s103002/s103002.page';
import { S103003Page } from './s103003/s103003.page';
import { S103003tPage } from './s103003t/s103003t.page';
import { S103004Page } from './s103004/s103004.page';
import { S103005Page } from './s103005/s103005.page';
import { S103006Page } from './s103006/s103006.page';
import { S103007Page } from './s103007/s103007.page';
import { S103008Page } from './s103008/s103008.page';
import { S103009Page } from './s103009/s103009.page';
import { S103010Page } from './s103010/s103010.page';
import { S103011Page } from './s103011/s103011.page';
import { S103012Page } from './s103012/s103012.page';
import { S103013Page } from './s103013/s103013.page';
import { S103014Page } from './s103014/s103014.page';
import { S103015Page } from './s103015/s103015.page';
import { S103016Page } from './s103016/s103016.page';
import { S103016tPage } from './s103016t/s103016t.page';
import { S103017Page } from './s103017/s103017.page';
import { S103018Page } from './s103018/s103018.page';
import { S103019Page } from './s103019/s103019.page';
import { S103019tPage } from './s103019t/s103019t.page';
import { S103020Page } from './s103020/s103020.page';
import { S103021Page } from './s103021/s103021.page';
import { S103022Page } from './s103022/s103022.page';
import { S103023Page } from './s103023/s103023.page';
import { S103024Page } from './s103024/s103024.page';
import { S103025Page } from './s103025/s103025.page';
import { S103026Page } from './s103026/s103026.page';

const routes: Routes = [
  {
    path: '',
     component: S103001Page,
  },  
  {
    path: 's103001',
    component: S103001Page,
  },  
  {
    path: 's103002',
    component: S103002Page,
  },
  {
    path: 's103003',
    component: S103003Page,
  }, 
  {
    path: 's103003t',
    component: S103003tPage,
  },
  {
    path: 's103004',
    component: S103004Page,
  },
  {
    path: 's103005',
    component: S103005Page,
  },
  {
    path: 's103006',
    component: S103006Page,
  },
  {
    path: 's103007',
    component: S103007Page,
  },
  {
    path: 's103008',
    component: S103008Page,
  },
    {
    path: 's103009',
    component: S103009Page,
  },
  {
    path: 's103010',
    component: S103010Page,
  },
  {
    path: 's103011',
    component: S103011Page,
  },
  {
    path: 's103012',
    component: S103012Page,
  },
  {
    path: 's103013',
    component: S103013Page,
  },
  {
    path: 's103014',
    component: S103014Page,
  },
  {
    path: 's103015',
    component: S103015Page,
  },
  {
    path: 's103016',
    component: S103016Page,
  },
  {
    path: 's103016t',
    component: S103016tPage,
  },
  {
    path: 's103017',
    component: S103017Page,
  },
  {
    path: 's103018',
    component: S103018Page,
  },
  {
    path: 's103019',
    component: S103019Page,
  },
  {
    path: 's103019t',
    component: S103019tPage,
  },
  {
    path: 's103020',
    component: S103020Page,
  }, 
  {
    path: 's103021',
    component: S103021Page,
  },
  {
    path: 's103022',
    component: S103022Page,
  },
  {
    path: 's103023',
    component: S103023Page,
  },
  {
    path: 's103024',
    component: S103024Page,
  },
  {
    path: 's103025',
    component: S103025Page,
  },
  {
    path: 's103026',
    component: S103026Page,
  },
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithoutLanguageRoutingModule { }
