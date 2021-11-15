import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S57001Page } from './s57001/s57001.page';  
import { S57002Page } from './s57002/s57002.page';  
import { S57003Page } from './s57003/s57003.page';  
import { S57004Page } from './s57004/s57004.page'; 
import { S57004tPage } from './s57004t/s57004t.page';  
import { S57005Page } from './s57005/s57005.page';  
import { S57005tPage } from './s57005t/s57005t.page';  
import { S57006Page } from './s57006/s57006.page';  
import { S57007Page } from './s57007/s57007.page'; 
import { S57007p1Page } from './s57007p1/s57007p1.page';  
import { S57007p2Page } from './s57007p2/s57007p2.page';  
import { S57007p3Page } from './s57007p3/s57007p3.page';  
import { S57007p4Page } from './s57007p4/s57007p4.page';  
import { S57007p5Page } from './s57007p5/s57007p5.page';  
import { S57007p6Page } from './s57007p6/s57007p6.page'; 
import { S57007tPage } from './s57007t/s57007t.page';   
import { S57008Page } from './s57008/s57008.page';  
import { S57009Page } from './s57009/s57009.page';  
import { S57009tPage } from './s57009t/s57009t.page';  
import { S57010Page } from './s57010/s57010.page';  
import { S57011Page } from './s57011/s57011.page'; 
import { S57011tPage } from './s57011t/s57011t.page'; 
import { S57012Page } from './s57012/s57012.page';  
import { S57013Page } from './s57013/s57013.page';  
import { S57013tPage } from './s57013t/s57013t.page';  
import { S57014Page } from './s57014/s57014.page';  
import { S57015Page } from './s57015/s57015.page';  
import { S57016Page } from './s57016/s57016.page'; 
import { S57016tPage } from './s57016t/s57016t.page';   
import { S57017Page } from './s57017/s57017.page';  
import { S57018Page } from './s57018/s57018.page'; 
import { S57019Page } from './s57019/s57019.page';  
import { S57019tPage } from './s57019t/s57019t.page';  
import { S57020Page } from './s57020/s57020.page';  
import { S57021Page } from './s57021/s57021.page';  
import { S57022Page } from './s57022/s57022.page';  
import { S57023Page } from './s57023/s57023.page';  
import { S57023tPage } from './s57023t/s57023t.page';  
import { S57024Page } from './s57024/s57024.page';  
import { S57025Page } from './s57025/s57025.page';  
import { S57026Page } from './s57026/s57026.page';  
import { S57026tPage } from './s57026t/s57026t.page';  
import { S57027Page } from './s57027/s57027.page';  
import { S57028Page } from './s57028/s57028.page';  
import { S57029Page } from './s57029/s57029.page';  
import { S57030Page } from './s57030/s57030.page';  
import { S57031Page } from './s57031/s57031.page';  
import { S57031tPage } from './s57031t/s57031t.page';  
import { S57032Page } from './s57032/s57032.page';  
import { S57033Page } from './s57033/s57033.page';  
import { S57033tPage } from './s57033t/s57033t.page';  
import { S57034Page } from './s57034/s57034.page';  
import { S57035Page } from './s57035/s57035.page';  
import { S57036Page } from './s57036/s57036.page';  
import { S57037Page } from './s57037/s57037.page';  
import { S57038Page } from './s57038/s57038.page';  
import { S57039Page } from './s57039/s57039.page';  
import { S57040Page } from './s57040/s57040.page';  
import { S57041Page } from './s57041/s57041.page';  
import { S57042Page } from './s57042/s57042.page';  
import { S57043Page } from './s57043/s57043.page';  
import { S57043tPage } from './s57043t/s57043t.page';  
import { S57044Page } from './s57044/s57044.page';  
import { S57045Page } from './s57045/s57045.page';  
import { S57046Page } from './s57046/s57046.page';  
import { S57047Page } from './s57047/s57047.page';  
import { S57048Page } from './s57048/s57048.page';  
import { S57049Page } from './s57049/s57049.page';  
import { S57050Page } from './s57050/s57050.page';  
import { S57051Page } from './s57051/s57051.page';  
import { S57052Page } from './s57052/s57052.page';  
import { S57053Page } from './s57053/s57053.page';  
import { S57054Page } from './s57054/s57054.page';  
import { S57055Page } from './s57055/s57055.page';  
import { S57055tPage } from './s57055t/s57055t.page';  
import { S57056Page } from './s57056/s57056.page';  
import { S57057Page } from './s57057/s57057.page';  
import { S57058Page } from './s57058/s57058.page';  
import { S57059Page } from './s57059/s57059.page';  
import { S57060Page } from './s57060/s57060.page';  
import { S57061Page } from './s57061/s57061.page';  
import { S57062Page } from './s57062/s57062.page';  
import { S57063Page } from './s57063/s57063.page';  
import { S57064Page } from './s57064/s57064.page';  
import { S57065Page } from './s57065/s57065.page';  
import { S57065tPage } from './s57065t/s57065t.page';  
import { S57066Page } from './s57066/s57066.page';  
import { S57067Page } from './s57067/s57067.page';  
import { S57068Page } from './s57068/s57068.page';  
import { S57069Page } from './s57069/s57069.page';  
import { S57070Page } from './s57070/s57070.page';  
import { S57071Page } from './s57071/s57071.page';  
import { S57072Page } from './s57072/s57072.page';  
import { S57073Page } from './s57073/s57073.page';  
import { S57074Page } from './s57074/s57074.page'; 

const routes: Routes = [
  {
    path: '',   
    canActivate:[ActiveGuard],  
    component: S57001Page,
  },
  {
    path: 's57001',   
    canActivate:[ActiveGuard],  
    component: S57001Page,
  },
  {
    path: 's57002',   
    canActivate:[ActiveGuard],  
    component: S57002Page,
  },
  {
    path: 's57003',   
    canActivate:[ActiveGuard],  
    component: S57003Page,
  }, 
  {
    path: 's57004',   
    canActivate:[ActiveGuard],  
    component: S57004Page,
  },
  {
    path: 's57004t',   
    canActivate:[ActiveGuard],  
    component: S57004tPage,
  },
  {
    path: 's57005',   
    canActivate:[ActiveGuard],  
    component: S57005Page,
  },
  {
    path: 's57005t',   
    canActivate:[ActiveGuard],  
    component: S57005tPage,
  },
  {
    path: 's57006',   
    canActivate:[ActiveGuard],  
    component: S57006Page,
  },
  {
    path: 's57007',   
    canActivate:[ActiveGuard],  
    component: S57007Page,
  },
  {
    path: 's57007p1',   
    canActivate:[ActiveGuard],  
    component: S57007p1Page,
  },
  {
    path: 's57007p2',   
    canActivate:[ActiveGuard],  
    component: S57007p2Page,
  },
  {
    path: 's57007p3',   
    canActivate:[ActiveGuard],  
    component: S57007p3Page,
  },
  {
    path: 's57007p4',   
    canActivate:[ActiveGuard],  
    component: S57007p4Page,
  },
  {
    path: 's57007p5',   
    canActivate:[ActiveGuard],  
    component: S57007p5Page,
  },
  {
    path: 's57007p6',   
    canActivate:[ActiveGuard],  
    component: S57007p6Page,
  },
  {
    path: 's57007t',   
    canActivate:[ActiveGuard],  
    component: S57007tPage,
  },
  {
    path: 's57008',   
    canActivate:[ActiveGuard],  
    component: S57008Page,
  },
  {
    path: 's57009',   
    canActivate:[ActiveGuard],  
    component: S57009Page,
  },
  {
    path: 's57009t',   
    canActivate:[ActiveGuard],  
    component: S57009tPage,
  },
  {
    path: 's57010',   
    canActivate:[ActiveGuard],  
    component: S57010Page,
  }, 
  {
    path: 's57011',   
    canActivate:[ActiveGuard],  
    component: S57011Page,
  },
  {
    path: 's57011t',   
    canActivate:[ActiveGuard],  
    component: S57011tPage,
  },
  {
    path: 's57012',   
    canActivate:[ActiveGuard],  
    component: S57012Page,
  }, 
  {
    path: 's57013',   
    canActivate:[ActiveGuard],  
    component: S57013Page,
  },
  {
    path: 's57013t',   
    canActivate:[ActiveGuard],  
    component: S57013tPage,
  },
  {
    path: 's57014',   
    canActivate:[ActiveGuard],  
    component: S57014Page,
  },
  {
    path: 's57015',   
    canActivate:[ActiveGuard],  
    component: S57015Page,
  },
  {
    path: 's57016',   
    canActivate:[ActiveGuard],  
    component: S57016Page,
  },
  {
    path: 's57016t',   
    canActivate:[ActiveGuard],  
    component: S57016tPage,
  },
  {
    path: 's57017',   
    canActivate:[ActiveGuard],  
    component: S57017Page,
  },
  {
    path: 's57018',   
    canActivate:[ActiveGuard],  
    component: S57018Page,
  }, 
  {
    path: 's57019',   
    canActivate:[ActiveGuard],  
    component: S57019Page,
  },
  {
    path: 's57019t',   
    canActivate:[ActiveGuard],  
    component: S57019tPage,
  },
  {
    path: 's57020',   
    canActivate:[ActiveGuard],  
    component: S57020Page,
  },
  {
    path: 's57021',   
    canActivate:[ActiveGuard],  
    component: S57021Page,
  },
  {
    path: 's57022',   
    canActivate:[ActiveGuard],  
    component: S57022Page,
  },
  {
    path: 's57023',   
    canActivate:[ActiveGuard],  
    component: S57023Page,
  },
  {
    path: 's57023t',   
    canActivate:[ActiveGuard],  
    component: S57023tPage,
  },
  {
    path: 's57024',   
    canActivate:[ActiveGuard],  
    component: S57024Page,
  },
  {
    path: 's57025',   
    canActivate:[ActiveGuard],  
    component: S57025Page,
  },
  {
    path: 's57026',   
    canActivate:[ActiveGuard],  
    component: S57026Page,
  },
  {
    path: 's57026t',   
    canActivate:[ActiveGuard],  
    component: S57026tPage,
  },
  {
    path: 's57027',   
    canActivate:[ActiveGuard],  
    component: S57027Page,
  },
  {
    path: 's57028',   
    canActivate:[ActiveGuard],  
    component: S57028Page,
  },
  {
    path: 's57029',   
    canActivate:[ActiveGuard],  
    component: S57029Page,
  },
  {
    path: 's57030',   
    canActivate:[ActiveGuard],  
    component: S57030Page,
  },
  {
    path: 's57031',   
    canActivate:[ActiveGuard],  
    component: S57031Page,
  },
  {
    path: 's57031t',   
    canActivate:[ActiveGuard],  
    component: S57031tPage,
  },
  {
    path: 's57032',   
    canActivate:[ActiveGuard],  
    component: S57032Page,
  },
  {
    path: 's57033',   
    canActivate:[ActiveGuard],  
    component: S57033Page,
  },
  {
    path: 's57033t',   
    canActivate:[ActiveGuard],  
    component: S57033tPage,
  },  
  {
    path: 's57034',   
    canActivate:[ActiveGuard],  
    component: S57034Page,
  },  
  {
    path: 's57035',   
    canActivate:[ActiveGuard],  
    component: S57035Page,
  }, 
  {
    path: 's57036',   
    canActivate:[ActiveGuard],  
    component: S57036Page,
  },
  {
    path: 's57037',   
    canActivate:[ActiveGuard],  
    component: S57037Page,
  }, 
  {
    path: 's57038',   
    canActivate:[ActiveGuard],  
    component: S57038Page,
  },  
  {
    path: 's57039',   
    canActivate:[ActiveGuard],  
    component: S57039Page,
  },
  {
    path: 's57040',   
    canActivate:[ActiveGuard],  
    component: S57040Page,
  },
  {
    path: 's57041',   
    canActivate:[ActiveGuard],  
    component: S57041Page,
  },
  {
    path: 's57042',   
    canActivate:[ActiveGuard],  
    component: S57042Page,
  },
  {
    path: 's57043',   
    canActivate:[ActiveGuard],  
    component: S57043Page,
  },
  {
    path: 's57043t',   
    canActivate:[ActiveGuard],  
    component: S57043tPage,
  },
  {
    path: 's57044',   
    canActivate:[ActiveGuard],  
    component: S57044Page,
  },
  {
    path: 's57045',   
    canActivate:[ActiveGuard],  
    component: S57045Page,
  },
  {
    path: 's57046',   
    canActivate:[ActiveGuard],  
    component: S57046Page,
  },
  {
    path: 's57047',   
    canActivate:[ActiveGuard],  
    component: S57047Page,
  }, 
  {
    path: 's57048',   
    canActivate:[ActiveGuard],  
    component: S57048Page,
  },
  {
    path: 's57049',   
    canActivate:[ActiveGuard],  
    component: S57049Page,
  },
  {
    path: 's57050',   
    canActivate:[ActiveGuard],  
    component: S57050Page,
  },
  {
    path: 's57051',   
    canActivate:[ActiveGuard],  
    component: S57051Page,
  },  
  {
    path: 's57052',   
    canActivate:[ActiveGuard],  
    component: S57052Page,
  },
  {
    path: 's57053',   
    canActivate:[ActiveGuard],  
    component: S57053Page,
  },
  {
    path: 's57054',   
    canActivate:[ActiveGuard],  
    component: S57054Page,
  },
  {
    path: 's57055',   
    canActivate:[ActiveGuard],  
    component: S57055Page,
  },
  {
    path: 's57055t',   
    canActivate:[ActiveGuard],  
    component: S57055tPage,
  },
  {
    path: 's57056',   
    canActivate:[ActiveGuard],  
    component: S57056Page,
  },
  {
    path: 's57057',   
    canActivate:[ActiveGuard],  
    component: S57057Page,
  },
  {
    path: 's57058',   
    canActivate:[ActiveGuard],  
    component: S57058Page,
  },
  {
    path: 's57059',   
    canActivate:[ActiveGuard],  
    component: S57059Page,
  },
  {
    path: 's57060',   
    canActivate:[ActiveGuard],  
    component: S57060Page,
  },
  {
    path: 's57061',   
    canActivate:[ActiveGuard],  
    component: S57061Page,
  },
  {
    path: 's57062',   
    canActivate:[ActiveGuard],  
    component: S57062Page,
  },
  {
    path: 's57063',   
    canActivate:[ActiveGuard],  
    component: S57063Page,
  },
  {
    path: 's57064',   
    canActivate:[ActiveGuard],  
    component: S57064Page,
  },
  {
    path: 's57065',   
    canActivate:[ActiveGuard],  
    component: S57065Page,
  },
  {
    path: 's57065t',   
    canActivate:[ActiveGuard],  
    component: S57065tPage,
  },
  {
    path: 's57066',   
    canActivate:[ActiveGuard],  
    component: S57066Page,
  },
  {
    path: 's57067',   
    canActivate:[ActiveGuard],  
    component: S57067Page,
  },
  {
    path: 's57068',   
    canActivate:[ActiveGuard],  
    component: S57068Page,
  },  
  {
    path: 's57069',   
    canActivate:[ActiveGuard],  
    component: S57069Page,
  },
  {
    path: 's57070',   
    canActivate:[ActiveGuard],  
    component: S57070Page,
  },
  {
    path: 's57071',   
    canActivate:[ActiveGuard],  
    component: S57071Page,
  },
  {
    path: 's57072',   
    canActivate:[ActiveGuard],  
    component: S57072Page,
  },
  {
    path: 's57073',   
    canActivate:[ActiveGuard],  
    component: S57073Page,
  },
  {
    path: 's57074',   
    canActivate:[ActiveGuard],  
    component: S57074Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NatureOfIRoutingModule { }
