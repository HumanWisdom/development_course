import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S25001Page } from './s25001/s25001.page';  
import { S25002Page } from './s25002/s25002.page';  
import { S25002p1Page } from './s25002p1/s25002p1.page';  
import { S25003Page } from './s25003/s25003.page'; 
import { S25003tPage } from './s25003t/s25003t.page';  
import { S25004Page } from './s25004/s25004.page';  
import { S25005Page } from './s25005/s25005.page';  
import { S25006Page } from './s25006/s25006.page';  
import { S25007Page } from './s25007/s25007.page';  
import { S25008Page } from './s25008/s25008.page';  
import { S25009Page } from './s25009/s25009.page';  
import { S25010Page } from './s25010/s25010.page';  
import { S25010tPage } from './s25010t/s25010t.page';  
import { S25011Page } from './s25011/s25011.page'; 
import { S25012Page } from './s25012/s25012.page';  
import { S25013Page } from './s25013/s25013.page';  
import { S25014Page } from './s25014/s25014.page';  
import { S25015Page } from './s25015/s25015.page';  
import { S25016Page } from './s25016/s25016.page';  
import { S25017Page } from './s25017/s25017.page';  
import { S25018Page } from './s25018/s25018.page'; 
import { S25019Page } from './s25019/s25019.page';  
import { S25020Page } from './s25020/s25020.page';  
import { S25021Page } from './s25021/s25021.page';  
import { S25021tPage } from './s25021t/s25021t.page';  
import { S25022Page } from './s25022/s25022.page';  
import { S25023Page } from './s25023/s25023.page'; 
import { S25023p1Page } from './s25023p1/s25023p1.page';   
import { S25024Page } from './s25024/s25024.page';  
import { S25024tPage } from './s25024t/s25024t.page';  
import { S25025Page } from './s25025/s25025.page';
import { S25025p1Page } from './s25025p1/s25025p1.page';    
import { S25026Page } from './s25026/s25026.page';  
import { S25027Page } from './s25027/s25027.page'; 
import { S25027tPage } from './s25027t/s25027t.page';   
import { S25028Page } from './s25028/s25028.page';  
import { S25029Page } from './s25029/s25029.page';
import { S25029p1Page } from './s25029p1/s25029p1.page';
import { S25029tPage } from './s25029t/s25029t.page';      
import { S25030Page } from './s25030/s25030.page';  
import { S25030tPage } from './s25030t/s25030t.page';  
import { S25030p1Page } from './s25030p1/s25030p1.page';  
import { S25031Page } from './s25031/s25031.page';  
import { S25032Page } from './s25032/s25032.page'; 
import { S25032tPage } from './s25032t/s25032t.page';   
import { S25033Page } from './s25033/s25033.page';  
import { S25034Page } from './s25034/s25034.page';  
import { S25035Page } from './s25035/s25035.page';  
import { S25036Page } from './s25036/s25036.page';  
import { S25037Page } from './s25037/s25037.page';  
import { S25038Page } from './s25038/s25038.page';  
import { S25039Page } from './s25039/s25039.page';  
import { S25040Page } from './s25040/s25040.page';  
import { S25041Page } from './s25041/s25041.page';  

const routes: Routes = [
  {
    path: '',   
   canActivate:[ActiveGuard],  
    component: S25001Page,
  },
  {
    path: 's25001',   
   canActivate:[ActiveGuard],  
    component: S25001Page,
  },
  {
    path: 's25002',   
   canActivate:[ActiveGuard],  
    component: S25002Page,
  },
  {
    path: 's25002p1',   
   canActivate:[ActiveGuard],  
    component: S25002p1Page,
  },
  {
    path: 's25003',   
   canActivate:[ActiveGuard],  
    component: S25003Page,
  },
  {
    path: 's25003t',   
   canActivate:[ActiveGuard],  
    component: S25003tPage,
  },
  {
    path: 's25004',   
   canActivate:[ActiveGuard],  
    component: S25004Page,
  },
  {
    path: 's25005',   
   canActivate:[ActiveGuard],  
    component: S25005Page,
  },
  {
    path: 's25006',   
   canActivate:[ActiveGuard],  
    component: S25006Page,
  },
  {
    path: 's25007',   
   canActivate:[ActiveGuard],  
    component: S25007Page,
  },
  {
    path: 's25008',   
   canActivate:[ActiveGuard],  
    component: S25008Page,
  },
  {
    path: 's25009',   
   canActivate:[ActiveGuard],  
    component: S25009Page,
  },
  {
    path: 's25010',   
   canActivate:[ActiveGuard],  
    component: S25010Page,
  },
  {
    path: 's25010t',   
   canActivate:[ActiveGuard],  
    component: S25010tPage,
  },
  {
    path: 's25011',   
   canActivate:[ActiveGuard],  
    component: S25011Page,
  },
  {
    path: 's25012',   
   canActivate:[ActiveGuard],  
    component: S25012Page,
  },  
  {
    path: 's25013',   
   canActivate:[ActiveGuard],  
    component: S25013Page,
  },
  {
    path: 's25014',   
   canActivate:[ActiveGuard],  
    component: S25014Page,
  },
  {
    path: 's25015',   
   canActivate:[ActiveGuard],  
    component: S25015Page,
  },
  {
    path: 's25016',   
   canActivate:[ActiveGuard],  
    component: S25016Page,
  },
  {
    path: 's25017',   
   canActivate:[ActiveGuard],  
    component: S25017Page,
  },
  {
    path: 's25018',   
   canActivate:[ActiveGuard],  
    component: S25018Page,
  }, 
  {
    path: 's25019',   
   canActivate:[ActiveGuard],  
    component: S25019Page,
  },
  {
    path: 's25020',   
   canActivate:[ActiveGuard],  
    component: S25020Page,
  },
  {
    path: 's25021',   
   canActivate:[ActiveGuard],  
    component: S25021Page,
  },
  {
    path: 's25021t',   
   canActivate:[ActiveGuard],  
    component: S25021tPage,
  },
  {
    path: 's25022',   
   canActivate:[ActiveGuard],  
    component: S25022Page,
  },
  {
    path: 's25023',   
   canActivate:[ActiveGuard],  
    component: S25023Page,
  },
  {
    path: 's25023p1',   
   canActivate:[ActiveGuard],  
    component: S25023p1Page,
  },
  {
    path: 's25024',   
   canActivate:[ActiveGuard],  
    component: S25024Page,
  },
  {
    path: 's25024t',   
   canActivate:[ActiveGuard],  
    component: S25024tPage,
  },
  {
    path: 's25025',   
   canActivate:[ActiveGuard],  
    component: S25025Page,
  },
  {
    path: 's25025p1',   
   canActivate:[ActiveGuard],  
    component: S25025p1Page,
  },
  {
    path: 's25026',   
   canActivate:[ActiveGuard],  
    component: S25026Page,
  },
  {
    path: 's25027',   
   canActivate:[ActiveGuard],  
    component: S25027Page,
  },
  {
    path: 's25027t',   
   canActivate:[ActiveGuard],  
    component: S25027tPage,
  },
  {
    path: 's25028',   
   canActivate:[ActiveGuard],  
    component: S25028Page,
  },
  {
    path: 's25029',   
   canActivate:[ActiveGuard],  
    component: S25029Page,
  },
  {
    path: 's25029p1',   
   canActivate:[ActiveGuard],  
    component: S25029p1Page,
  },
  {
    path: 's25029t',   
   canActivate:[ActiveGuard],  
    component: S25029tPage,
  },
  {
    path: 's25030',   
   canActivate:[ActiveGuard],  
    component: S25030Page,
  },
  {
    path: 's25030t',   
   canActivate:[ActiveGuard],  
    component: S25030tPage,
  },
  {
    path: 's25030p1',   
   canActivate:[ActiveGuard],  
    component: S25030p1Page,
  },
  {
    path: 's25031',   
   canActivate:[ActiveGuard],  
    component: S25031Page,
  },
  {
    path: 's25032',   
   canActivate:[ActiveGuard],  
    component: S25032Page,
  },
  {
    path: 's25032t',   
   canActivate:[ActiveGuard],  
    component: S25032tPage,
  },
  {
    path: 's25033',   
   canActivate:[ActiveGuard],  
    component: S25033Page,
  },  
  {
    path: 's25034',   
   canActivate:[ActiveGuard],  
    component: S25034Page,
  },  
  {
    path: 's25035',   
   canActivate:[ActiveGuard],  
    component: S25035Page,
  }, 
  {
    path: 's25036',   
   canActivate:[ActiveGuard],  
    component: S25036Page,
  },
  {
    path: 's25037',   
   canActivate:[ActiveGuard],  
    component: S25037Page,
  }, 
  {
    path: 's25038',   
   canActivate:[ActiveGuard],  
    component: S25038Page,
  },  
  {
    path: 's25039',   
   canActivate:[ActiveGuard],  
    component: S25039Page,
  },
  {
    path: 's25040',   
   canActivate:[ActiveGuard],  
    component: S25040Page,
  },
  {
    path: 's25041',   
   canActivate:[ActiveGuard],  
    component: S25041Page,
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelfImageRoutingModule { }
