import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S54001Page } from './s54001/s54001.page';  
import { S54002Page } from './s54002/s54002.page';  
import { S54003Page } from './s54003/s54003.page';  
import { S54003tPage } from './s54003t/s54003t.page';  
import { S54004Page } from './s54004/s54004.page';  
import { S54005Page } from './s54005/s54005.page';  
import { S54006Page } from './s54006/s54006.page';  
import { S54007Page } from './s54007/s54007.page';  
import { S54008Page } from './s54008/s54008.page';  
import { S54009Page } from './s54009/s54009.page';  
import { S54010Page } from './s54010/s54010.page';  
import { S54010tPage } from './s54010t/s54010t.page';  
import { S54011Page } from './s54011/s54011.page'; 
import { S54012Page } from './s54012/s54012.page';  
import { S54012tPage } from './s54012t/s54012t.page';  
import { S54013Page } from './s54013/s54013.page';  
import { S54014Page } from './s54014/s54014.page';  
import { S54014tPage } from './s54014t/s54014t.page';  
import { S54015Page } from './s54015/s54015.page';  
import { S54016Page } from './s54016/s54016.page';  
import { S54017Page } from './s54017/s54017.page';  
import { S54018Page } from './s54018/s54018.page'; 
import { S54019Page } from './s54019/s54019.page';  
import { S54020Page } from './s54020/s54020.page';  
import { S54021Page } from './s54021/s54021.page';  
import { S54022Page } from './s54022/s54022.page';  
import { S54023Page } from './s54023/s54023.page';  
import { S54024Page } from './s54024/s54024.page';  
import { S54025Page } from './s54025/s54025.page';  
import { S54026Page } from './s54026/s54026.page';  
import { S54027Page } from './s54027/s54027.page';  
import { S54028Page } from './s54028/s54028.page';  
import { S54029Page } from './s54029/s54029.page';  
import { S54030Page } from './s54030/s54030.page';  
import { S54031Page } from './s54031/s54031.page';  
import { S54032Page } from './s54032/s54032.page';  
import { S54033Page } from './s54033/s54033.page';  
import { S54034Page } from './s54034/s54034.page';  
import { S54035Page } from './s54035/s54035.page';  
import { S54036Page } from './s54036/s54036.page';  
import { S54037Page } from './s54037/s54037.page';  
import { S54038Page } from './s54038/s54038.page';  
import { S54039Page } from './s54039/s54039.page';  
import { S54040Page } from './s54040/s54040.page';  
import { S54041Page } from './s54041/s54041.page';  
import { S54042Page } from './s54042/s54042.page';  
import { S54043Page } from './s54043/s54043.page';  
import { S54044Page } from './s54044/s54044.page';  
import { S54045Page } from './s54045/s54045.page';  
import { S54046Page } from './s54046/s54046.page';  
import { S54047Page } from './s54047/s54047.page';  
import { S54047tPage } from './s54047t/s54047t.page';  
import { S54048Page } from './s54048/s54048.page';  
import { S54049Page } from './s54049/s54049.page';  
import { S54050Page } from './s54050/s54050.page';  
import { S54051Page } from './s54051/s54051.page';  
import { S54052Page } from './s54052/s54052.page';  
import { S54053Page } from './s54053/s54053.page';  
import { S54054Page } from './s54054/s54054.page';  
import { S54055Page } from './s54055/s54055.page';  
import { S54056Page } from './s54056/s54056.page';  
import { S54057Page } from './s54057/s54057.page';  
import { S54058Page } from './s54058/s54058.page';  
import { S54059Page } from './s54059/s54059.page';  
import { S54060Page } from './s54060/s54060.page';  
import { S54061Page } from './s54061/s54061.page';  
import { S54062Page } from './s54062/s54062.page';  
import { S54063Page } from './s54063/s54063.page';  
import { S54064Page } from './s54064/s54064.page';  
import { S54065Page } from './s54065/s54065.page';  
import { S54066Page } from './s54066/s54066.page';  
import { S54067Page } from './s54067/s54067.page';  
import { S54068Page } from './s54068/s54068.page';  
import { S54069Page } from './s54069/s54069.page';  
import { S54070Page } from './s54070/s54070.page';  
import { S54071Page } from './s54071/s54071.page';  
import { S54072Page } from './s54072/s54072.page';  
import { S54073Page } from './s54073/s54073.page';  
import { S54074Page } from './s54074/s54074.page'; 
import { S54074tPage } from './s54074t/s54074t.page';  
import { S54075Page } from './s54075/s54075.page';  
import { S54076Page } from './s54076/s54076.page';  
import { S54077Page } from './s54077/s54077.page';  
import { S54078Page } from './s54078/s54078.page';  
import { S54079Page } from './s54079/s54079.page';  
import { S54080Page } from './s54080/s54080.page';  
import { S54081Page } from './s54081/s54081.page';  
import { S54082Page } from './s54082/s54082.page';  
import { S54083Page } from './s54083/s54083.page';  
import { S54084Page } from './s54084/s54084.page';  

const routes: Routes = [
  {
    path: '',   
   canActivate:[ActiveGuard],  
    component: S54001Page,
  },
  {
    path: 's54001',   
   canActivate:[ActiveGuard],  
    component: S54001Page,
  },
  {
    path: 's54002',   
   canActivate:[ActiveGuard],  
    component: S54002Page,
  },
  {
    path: 's54003',   
   canActivate:[ActiveGuard],  
    component: S54003Page,
  },
  {
    path: 's54003t',   
   canActivate:[ActiveGuard],  
    component: S54003tPage,
  },
  {
    path: 's54004',   
   canActivate:[ActiveGuard],  
    component: S54004Page,
  },
  {
    path: 's54005',   
   canActivate:[ActiveGuard],  
    component: S54005Page,
  },
  {
    path: 's54006',   
   canActivate:[ActiveGuard],  
    component: S54006Page,
  },
  {
    path: 's54007',   
   canActivate:[ActiveGuard],  
    component: S54007Page,
  },
  {
    path: 's54008',   
   canActivate:[ActiveGuard],  
    component: S54008Page,
  },
  {
    path: 's54009',   
   canActivate:[ActiveGuard],  
    component: S54009Page,
  },
  {
    path: 's54010',   
   canActivate:[ActiveGuard],  
    component: S54010Page,
  },
  {
    path: 's54010t',   
   canActivate:[ActiveGuard],  
    component: S54010tPage,
  },
  {
    path: 's54011',   
   canActivate:[ActiveGuard],  
    component: S54011Page,
  },
  {
    path: 's54012',   
   canActivate:[ActiveGuard],  
    component: S54012Page,
  },
  {
    path: 's54012t',   
   canActivate:[ActiveGuard],  
    component: S54012tPage,
  },
  {
    path: 's54013',   
   canActivate:[ActiveGuard],  
    component: S54013Page,
  },
  {
    path: 's54014',   
   canActivate:[ActiveGuard],  
    component: S54014Page,
  },
  {
    path: 's54014t',   
   canActivate:[ActiveGuard],  
    component: S54014tPage,
  },
  
  {
    path: 's54015',   
   canActivate:[ActiveGuard],  
    component: S54015Page,
  },
  {
    path: 's54016',   
   canActivate:[ActiveGuard],  
    component: S54016Page,
  },
  {
    path: 's54017',   
   canActivate:[ActiveGuard],  
    component: S54017Page,
  },
  {
    path: 's54018',   
   canActivate:[ActiveGuard],  
    component: S54018Page,
  },
 
  {
    path: 's54019',   
   canActivate:[ActiveGuard],  
    component: S54019Page,
  },
  {
    path: 's54020',   
   canActivate:[ActiveGuard],  
    component: S54020Page,
  },
  {
    path: 's54021',   
   canActivate:[ActiveGuard],  
    component: S54021Page,
  },
  {
    path: 's54022',   
   canActivate:[ActiveGuard],  
    component: S54022Page,
  },
  {
    path: 's54023',   
   canActivate:[ActiveGuard],  
    component: S54023Page,
  },
  {
    path: 's54024',   
   canActivate:[ActiveGuard],  
    component: S54024Page,
  },
  {
    path: 's54025',   
   canActivate:[ActiveGuard],  
    component: S54025Page,
  },
  {
    path: 's54026',   
   canActivate:[ActiveGuard],  
    component: S54026Page,
  },
  {
    path: 's54027',   
   canActivate:[ActiveGuard],  
    component: S54027Page,
  },
  {
    path: 's54028',   
   canActivate:[ActiveGuard],  
    component: S54028Page,
  },
  {
    path: 's54029',   
   canActivate:[ActiveGuard],  
    component: S54029Page,
  },
  {
    path: 's54030',   
   canActivate:[ActiveGuard],  
    component: S54030Page,
  },
  {
    path: 's54031',   
   canActivate:[ActiveGuard],  
    component: S54031Page,
  },
  {
    path: 's54032',   
   canActivate:[ActiveGuard],  
    component: S54032Page,
  },
  {
    path: 's54033',   
   canActivate:[ActiveGuard],  
    component: S54033Page,
  },
  
  {
    path: 's54034',   
   canActivate:[ActiveGuard],  
    component: S54034Page,
  },
  
  {
    path: 's54035',   
   canActivate:[ActiveGuard],  
    component: S54035Page,
  },
 
  {
    path: 's54036',   
   canActivate:[ActiveGuard],  
    component: S54036Page,
  },
  {
    path: 's54037',   
   canActivate:[ActiveGuard],  
    component: S54037Page,
  },
 
  {
    path: 's54038',   
   canActivate:[ActiveGuard],  
    component: S54038Page,
  },
  
  {
    path: 's54039',   
   canActivate:[ActiveGuard],  
    component: S54039Page,
  },
  {
    path: 's54040',   
   canActivate:[ActiveGuard],  
    component: S54040Page,
  },
  {
    path: 's54041',   
   canActivate:[ActiveGuard],  
    component: S54041Page,
  },
  {
    path: 's54042',   
   canActivate:[ActiveGuard],  
    component: S54042Page,
  },
  {
    path: 's54043',   
   canActivate:[ActiveGuard],  
    component: S54043Page,
  },
  {
    path: 's54044',   
   canActivate:[ActiveGuard],  
    component: S54044Page,
  },
  {
    path: 's54045',   
   canActivate:[ActiveGuard],  
    component: S54045Page,
  },
  {
    path: 's54046',   
   canActivate:[ActiveGuard],  
    component: S54046Page,
  },
  {
    path: 's54047',   
   canActivate:[ActiveGuard],  
    component: S54047Page,
  },
  {
    path: 's54047t',   
   canActivate:[ActiveGuard],  
    component: S54047tPage,
  },
  
  {
    path: 's54048',   
   canActivate:[ActiveGuard],  
    component: S54048Page,
  },
  {
    path: 's54049',   
   canActivate:[ActiveGuard],  
    component: S54049Page,
  },
  {
    path: 's54050',   
   canActivate:[ActiveGuard],  
    component: S54050Page,
  },
  {
    path: 's54051',   
   canActivate:[ActiveGuard],  
    component: S54051Page,
  },
  
  {
    path: 's54052',   
   canActivate:[ActiveGuard],  
    component: S54052Page,
  },
  {
    path: 's54053',   
   canActivate:[ActiveGuard],  
    component: S54053Page,
  },
  {
    path: 's54054',   
   canActivate:[ActiveGuard],  
    component: S54054Page,
  },
  {
    path: 's54055',   
   canActivate:[ActiveGuard],  
    component: S54055Page,
  },
  {
    path: 's54056',   
   canActivate:[ActiveGuard],  
    component: S54056Page,
  },
  {
    path: 's54057',   
   canActivate:[ActiveGuard],  
    component: S54057Page,
  },
  {
    path: 's54058',   
   canActivate:[ActiveGuard],  
    component: S54058Page,
  },
  {
    path: 's54059',   
   canActivate:[ActiveGuard],  
    component: S54059Page,
  },
  {
    path: 's54060',   
   canActivate:[ActiveGuard],  
    component: S54060Page,
  },
  {
    path: 's54061',   
   canActivate:[ActiveGuard],  
    component: S54061Page,
  },
  {
    path: 's54062',   
   canActivate:[ActiveGuard],  
    component: S54062Page,
  },
  {
    path: 's54063',   
   canActivate:[ActiveGuard],  
    component: S54063Page,
  },
  {
    path: 's54064',   
   canActivate:[ActiveGuard],  
    component: S54064Page,
  },
  {
    path: 's54065',   
   canActivate:[ActiveGuard],  
    component: S54065Page,
  },
  {
    path: 's54066',   
   canActivate:[ActiveGuard],  
    component: S54066Page,
  },
  {
    path: 's54067',   
   canActivate:[ActiveGuard],  
    component: S54067Page,
  },
  {
    path: 's54068',   
   canActivate:[ActiveGuard],  
    component: S54068Page,
  },
  
  {
    path: 's54069',   
   canActivate:[ActiveGuard],  
    component: S54069Page,
  },
  {
    path: 's54070',   
   canActivate:[ActiveGuard],  
    component: S54070Page,
  },
  {
    path: 's54071',   
   canActivate:[ActiveGuard],  
    component: S54071Page,
  },
  {
    path: 's54072',   
   canActivate:[ActiveGuard],  
    component: S54072Page,
  },
  {
    path: 's54073',   
   canActivate:[ActiveGuard],  
    component: S54073Page,
  },
  {
    path: 's54074',   
   canActivate:[ActiveGuard],  
    component: S54074Page,
  },
  {
    path: 's54074t',   
   canActivate:[ActiveGuard],  
    component: S54074tPage,
  },
  {
    path: 's54075',   
   canActivate:[ActiveGuard],  
    component: S54075Page,
  },
  {
    path: 's54076',   
   canActivate:[ActiveGuard],  
    component: S54076Page,
  },
 
  {
    path: 's54077',   
   canActivate:[ActiveGuard],  
    component: S54077Page,
  },
  {
    path: 's54078',   
   canActivate:[ActiveGuard],  
    component: S54078Page,
  },
  {
    path: 's54079',   
   canActivate:[ActiveGuard],  
    component: S54079Page,
  },
  {
    path: 's54080',   
   canActivate:[ActiveGuard],  
    component: S54080Page,
  },
 
  {
    path: 's54081',   
   canActivate:[ActiveGuard],  
    component: S54081Page,
  },
  {
    path: 's54082',   
   canActivate:[ActiveGuard],  
    component: S54082Page,
  },
  
  {
    path: 's54083',   
   canActivate:[ActiveGuard],  
    component: S54083Page,
  },
  {
    path: 's54084',   
   canActivate:[ActiveGuard],  
    component: S54084Page,
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveMindRoutingModule { }
