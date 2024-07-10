import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/authGuard/active.guard';

import { S109001Page } from './s109001/s109001.page';
import { S109002Page } from './s109002/s109002.page';
import { S109003Page } from './s109003/s109003.page';
import { S109003tPage } from './s109003t/s109003t.page';
import { S109004Page } from './s109004/s109004.page';
import { S109005Page } from './s109005/s109005.page';
import { S109006Page } from './s109006/s109006.page';
import { S109007Page } from './s109007/s109007.page';
import { S109008Page } from './s109008/s109008.page';
import { S109009Page } from './s109009/s109009.page';
import { S109010Page } from './s109010/s109010.page';
import { S109011Page } from './s109011/s109011.page';
import { S109011tPage } from './s109011t/s109011t.page';
import { S109012Page } from './s109012/s109012.page';
import { S109013Page } from './s109013/s109013.page';
import { S109013tPage } from './s109013t/s109013t.page';
import { S109014Page } from './s109014/s109014.page';
import { S109015Page } from './s109015/s109015.page';
import { S109016Page } from './s109016/s109016.page';
import { S109017Page } from './s109017/s109017.page';
import { S109018Page } from './s109018/s109018.page';
import { S109019Page } from './s109019/s109019.page';
import { S109020Page } from './s109020/s109020.page';
import { S109021Page } from './s109021/s109021.page';
import { S109021tPage } from './s109021t/s109021t.page';
import { S109022Page } from './s109022/s109022.page';
import { S109023Page } from './s109023/s109023.page';
import { S109024Page } from './s109024/s109024.page';
import { S109025Page } from './s109025/s109025.page';
import { S109026Page } from './s109026/s109026.page';
import { S109027Page } from './s109027/s109027.page';
import { S109028Page } from './s109028/s109028.page';
import { S109029Page } from './s109029/s109029.page';
import { S109030Page } from './s109030/s109030.page';
import { S109031Page } from './s109031/s109031.page';
import { S109032Page } from './s109032/s109032.page';
import { S109033Page } from './s109033/s109033.page';
import { S109034Page } from './s109034/s109034.page';
import { S109035Page } from './s109035/s109035.page';
import { S109036Page } from './s109036/s109036.page';
import { S109037Page } from './s109037/s109037.page';
import { S109038Page } from './s109038/s109038.page';
import { S109039Page } from './s109039/s109039.page';
import { S109040Page } from './s109040/s109040.page';
import { S109041Page } from './s109041/s109041.page';
import { S109041tPage } from './s109041t/s109041t.page';
import { S109042Page } from './s109042/s109042.page';
import { S109043Page } from './s109043/s109043.page';
import { S109044Page } from './s109044/s109044.page';
import { S109045Page } from './s109045/s109045.page';
import { S109046Page } from './s109046/s109046.page';
import { S109047Page } from './s109047/s109047.page';
import { S109047tPage } from './s109047t/s109047t.page';
import { S109048Page } from './s109048/s109048.page';
import { S109049Page } from './s109049/s109049.page';
import { S109050Page } from './s109050/s109050.page';
import { S109051Page } from './s109051/s109051.page';
import { S109052Page } from './s109052/s109052.page';
import { S109053Page } from './s109053/s109053.page';
import { S109054Page } from './s109054/s109054.page';
import { S109055Page } from './s109055/s109055.page';
import { S109056Page } from './s109056/s109056.page';
import { S109057Page } from './s109057/s109057.page';
import { S109058Page } from './s109058/s109058.page';
import { S109059Page } from './s109059/s109059.page';
import { S109060Page } from './s109060/s109060.page';
import { S109061Page } from './s109061/s109061.page';
import { S109062Page } from './s109062/s109062.page';
import { S109062tPage } from './s109062t/s109062t.page';
import { S109063Page } from './s109063/s109063.page';
import { S109064Page } from './s109064/s109064.page';

import { S109066Page } from './s109066/s109066.page';
import { S109067Page } from './s109067/s109067.page';
import { S109068Page } from './s109068/s109068.page';
import { S109069Page } from './s109069/s109069.page';
import { S109069pPage } from './s109069p/s109069p.page';
import { S109070Page } from './s109070/s109070.page';
import { S109071Page } from './s109071/s109071.page';
import { S109072Page } from './s109072/s109072.page';
import { S109073Page } from './s109073/s109073.page';
import { S109074Page } from './s109074/s109074.page';
import { S109075Page } from './s109075/s109075.page';
import { S109076Page } from './s109076/s109076.page';
import { S109077Page } from './s109077/s109077.page';

const routes: Routes = [
  {
    path: '',     
    component: S109001Page,
  },  
  {
    path: 's109001',
    component: S109001Page,
  },
  {
    path: 's109002',
    canActivate: [ActiveGuard],     
    component: S109002Page,
  },
  {
    path: 's109003',
    canActivate: [ActiveGuard],     
    component: S109003Page,
  },
  {
    path: 's109003t',
    canActivate: [ActiveGuard],     
    component: S109003tPage,
  },
  {
    path: 's109004',
    canActivate: [ActiveGuard],     
    component: S109004Page,
  },
  {
    path: 's109005',
    canActivate: [ActiveGuard],     
    component: S109005Page,
  },
  {
    path: 's109006',
    canActivate: [ActiveGuard],     
    component: S109006Page,
  },
  {
    path: 's109007',
    canActivate: [ActiveGuard],     
    component: S109007Page,
  },
  {
    path: 's109008',
    canActivate: [ActiveGuard],     
    component: S109008Page,
  },
  {
    path: 's109009',
    canActivate: [ActiveGuard],     
    component: S109009Page,
  },
  {
    path: 's109010',
    canActivate: [ActiveGuard],     
    component: S109010Page,
  },
  {
    path: 's109011',
    canActivate: [ActiveGuard],     
    component: S109011Page,
  },
  {
    path: 's109011t',
    canActivate: [ActiveGuard],     
    component: S109011tPage,
  },
  {
    path: 's109012',
    canActivate: [ActiveGuard],     
    component: S109012Page,
  },
  {
    path: 's109013',
    canActivate: [ActiveGuard],     
    component: S109013Page,
  },
  {
    path: 's109013t',
    canActivate: [ActiveGuard],     
    component: S109013tPage,
  },
  {
    path: 's109014',
    canActivate: [ActiveGuard],     
    component: S109014Page,
  },
  {
    path: 's109015',
    canActivate: [ActiveGuard],     
    component: S109015Page,
  },
  {
    path: 's109016',
    canActivate: [ActiveGuard],     
    component: S109016Page,
  },
  {
    path: 's109017',
    canActivate: [ActiveGuard],     
    component: S109017Page,
  },
  {
    path: 's109018',
    canActivate: [ActiveGuard],     
    component: S109018Page,
  },
  {
    path: 's109019',
    canActivate: [ActiveGuard],     
    component: S109019Page,
  },
  {
    path: 's109020',
    canActivate: [ActiveGuard],     
    component: S109020Page,
  },  
  {
    path: 's109021',
    canActivate: [ActiveGuard],     
    component: S109021Page,
  },
  {
    path: 's109021t',
    canActivate: [ActiveGuard],     
    component: S109021tPage,
  },
  {
    path: 's109022',
    canActivate: [ActiveGuard],     
    component: S109022Page,
  },
  {
    path: 's109023',
    canActivate: [ActiveGuard],     
    component: S109023Page,
  },
  {
    path: 's109024',
    canActivate: [ActiveGuard],     
    component: S109024Page,
  },
  {
    path: 's109025',
    canActivate: [ActiveGuard],     
    component: S109025Page,
  },
  {
    path: 's109026',
    canActivate: [ActiveGuard],     
    component: S109026Page,
  },
  {
    path: 's109027',
    canActivate: [ActiveGuard],     
    component: S109027Page,
  },
  {
    path: 's109028',
    canActivate: [ActiveGuard],     
    component: S109028Page,
  },
  {
    path: 's109029',
    canActivate: [ActiveGuard],     
    component: S109029Page,
  },
  {
    path: 's109030',
    canActivate: [ActiveGuard],     
    component: S109030Page,
  },
  {
    path: 's109031',
    canActivate: [ActiveGuard],     
    component: S109031Page,
  },
  {
    path: 's109032',
    canActivate: [ActiveGuard],     
    component: S109032Page,
  },
  {
    path: 's109033',
    canActivate: [ActiveGuard],     
    component: S109033Page,
  },
  {
    path: 's109034',
    canActivate: [ActiveGuard],     
    component: S109034Page,
  },
  {
    path: 's109035',
    canActivate: [ActiveGuard],     
    component: S109035Page,
  },
  {
    path: 's109036',
    canActivate: [ActiveGuard],     
    component: S109036Page,
  },
  {
    path: 's109037',
    canActivate: [ActiveGuard],     
    component: S109037Page,
  },
  {
    path: 's109038',
    canActivate: [ActiveGuard],     
    component: S109038Page,
  },
  {
    path: 's109039',
    canActivate: [ActiveGuard],     
    component: S109039Page,
  },
  {
    path: 's109040',
    canActivate: [ActiveGuard],     
    component: S109040Page,
  },
  {
    path: 's109041',
    canActivate: [ActiveGuard],     
    component: S109041Page,
  },
  {
    path: 's109041t',
    canActivate: [ActiveGuard],     
    component: S109041tPage,
  },
  {
    path: 's109042',
    canActivate: [ActiveGuard],     
    component: S109042Page,
  },
  {
    path: 's109043',
    canActivate: [ActiveGuard],     
    component: S109043Page,
  },
  {
    path: 's109044',
    canActivate: [ActiveGuard],     
    component: S109044Page,
  },
  {
    path: 's109045',
    canActivate: [ActiveGuard],     
    component: S109045Page,
  },
  {
    path: 's109046',
    canActivate: [ActiveGuard],     
    component: S109046Page,
  },

  {
    path: 's109047',
    canActivate: [ActiveGuard],     
    component: S109047Page,
  },
  {
    path: 's109047t',
    canActivate: [ActiveGuard],     
    component: S109047tPage,
  },
  {
    path: 's109048',
    canActivate: [ActiveGuard],     
    component: S109048Page,
  },
  {
    path: 's109049',
    canActivate: [ActiveGuard],     
    component: S109049Page,
  },
  {
    path: 's109050',
    canActivate: [ActiveGuard],     
    component: S109050Page,
  },
  {
    path: 's109051',
    canActivate: [ActiveGuard],     
    component: S109051Page,
  },
  {
    path: 's109052',
    canActivate: [ActiveGuard],     
    component: S109052Page,
  },
  {
    path: 's109053',
    canActivate: [ActiveGuard],     
    component: S109053Page,
  },
  {
    path: 's109054',
    canActivate: [ActiveGuard],     
    component: S109054Page,
  },
  {
    path: 's109055',
    canActivate: [ActiveGuard],     
    component: S109055Page,
  },
  {
    path: 's109056',
    canActivate: [ActiveGuard],     
    component: S109056Page,
  },
  {
    path: 's109057',
    canActivate: [ActiveGuard],     
    component: S109057Page,
  },
  {
    path: 's109058',
    canActivate: [ActiveGuard],     
    component: S109058Page,
  },
  {
    path: 's109059',
    canActivate: [ActiveGuard],     
    component: S109059Page,
  },
  {
    path: 's109060',
    canActivate: [ActiveGuard],     
    component: S109060Page,
  },
  {
    path: 's109061',
    canActivate: [ActiveGuard],     
    component: S109061Page,
  },
  {
    path: 's109062',
    canActivate: [ActiveGuard],     
    component: S109062Page,
  },
  {
    path: 's109062t',
    canActivate: [ActiveGuard],     
    component: S109062tPage,
  },
  {
    path: 's109063',
    canActivate: [ActiveGuard],     
    component: S109063Page,
  },
  {
    path: 's109064',
    canActivate: [ActiveGuard],     
    component: S109064Page,
  },
 
  {
    path: 's109066',
    canActivate: [ActiveGuard],     
    component: S109066Page,
  },
  {
    path: 's109067',
    canActivate: [ActiveGuard],     
    component: S109067Page,
  },
  {
    path: 's109068',
    canActivate: [ActiveGuard],     
    component: S109068Page,
  },
  {
    path: 's109069',
    canActivate: [ActiveGuard],     
    component: S109069Page,
  },
  {
    path: 's109069p',
    canActivate: [ActiveGuard],     
    component: S109069pPage,
  },
  {
    path: 's109070',
    canActivate: [ActiveGuard],     
    component: S109070Page,
  },
  {
    path: 's109071',
    canActivate: [ActiveGuard],     
    component: S109071Page,
  },
  {
    path: 's109072',
    canActivate: [ActiveGuard],     
    component: S109072Page,
  },
  {
    path: 's109073',
    canActivate: [ActiveGuard],     
    component: S109073Page,
  },
  {
    path: 's109074',
    canActivate: [ActiveGuard],     
    component: S109074Page,
  },
  {
    path: 's109075',
    canActivate: [ActiveGuard],     
    component: S109075Page,
  },
  {
    path: 's109076',
    canActivate: [ActiveGuard],     
    component: S109076Page,
  },
  {
    path: 's109077',
    canActivate: [ActiveGuard],     
    component: S109077Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeditationRoutingModule { }
