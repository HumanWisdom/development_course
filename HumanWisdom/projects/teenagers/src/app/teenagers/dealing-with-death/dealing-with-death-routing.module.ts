import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/authGuard/active.guard';

import { S130001Page } from './s130001/s130001.page';
import { S130002Page } from './s130002/s130002.page';
import { S130003Page } from './s130003/s130003.page';
import { S130004Page } from './s130004/s130004.page';
import { S130004tPage } from './s130004t/s130004t.page';
import { S130005Page } from './s130005/s130005.page';
import { S130006Page } from './s130006/s130006.page';
import { S130007Page } from './s130007/s130007.page';
import { S130007tPage } from './s130007t/s130007t.page';
import { S130008Page } from './s130008/s130008.page';
import { S130009Page } from './s130009/s130009.page';
import { S130010Page } from './s130010/s130010.page';
import { S130010tPage } from './s130010t/s130010t.page';
import { S130011Page } from './s130011/s130011.page';
import { S130012Page } from './s130012/s130012.page';
import { S130013Page } from './s130013/s130013.page';
import { S130014Page } from './s130014/s130014.page';
import { S130015Page } from './s130015/s130015.page';
import { S130016Page } from './s130016/s130016.page';
import { S130017Page } from './s130017/s130017.page';
import { S130018Page } from './s130018/s130018.page';
import { S130019Page } from './s130019/s130019.page';
import { S130020Page } from './s130020/s130020.page';
import { S130021Page } from './s130021/s130021.page';
import { S130022Page } from './s130022/s130022.page';
import { S130023Page } from './s130023/s130023.page';
import { S130024Page } from './s130024/s130024.page';
import { S130024tPage } from './s130024t/s130024t.page';
import { S130025Page } from './s130025/s130025.page';
import { S130026Page } from './s130026/s130026.page';
import { S130027Page } from './s130027/s130027.page';
import { S130028Page } from './s130028/s130028.page';
import { S130029Page } from './s130029/s130029.page';
import { S130030Page } from './s130030/s130030.page';
import { S130031Page } from './s130031/s130031.page';
import { S130032Page } from './s130032/s130032.page';
import { S130033Page } from './s130033/s130033.page';
import { S130034Page } from './s130034/s130034.page';
import { S130035Page } from './s130035/s130035.page';
import { S130036Page } from './s130036/s130036.page';
import { S130037Page } from './s130037/s130037.page';
import { S130038Page } from './s130038/s130038.page';
import { S130039Page } from './s130039/s130039.page';
import { S130039tPage } from './s130039t/s130039t.page';
import { S130040Page } from './s130040/s130040.page';
import { S130041Page } from './s130041/s130041.page';
import { S130042Page } from './s130042/s130042.page';
import { S130043Page } from './s130043/s130043.page';
import { S130044Page } from './s130044/s130044.page';
import { S130045Page } from './s130045/s130045.page';
import { S130046Page } from './s130046/s130046.page';
import { S130047Page } from './s130047/s130047.page';
import { S130048Page } from './s130048/s130048.page';
import { S130049Page } from './s130049/s130049.page';
import { S130050Page } from './s130050/s130050.page';
import { S130051Page } from './s130051/s130051.page';
import { S130052Page } from './s130052/s130052.page';
import { S130053Page } from './s130053/s130053.page';
import { S130054Page } from './s130054/s130054.page';
import { S130055Page } from './s130055/s130055.page';
import { S130056Page } from './s130056/s130056.page';
import { S130056tPage } from './s130056t/s130056t.page';
import { S130057Page } from './s130057/s130057.page';
import { S130058Page } from './s130058/s130058.page';
import { S130059Page } from './s130059/s130059.page';
import { S130060Page } from './s130060/s130060.page';
import { S130061Page } from './s130061/s130061.page';
import { S130062Page } from './s130062/s130062.page';
import { S130063Page } from './s130063/s130063.page';
import { S130064Page } from './s130064/s130064.page';
import { S130065Page } from './s130065/s130065.page';
import { S130066Page } from './s130066/s130066.page';
import { S130067Page } from './s130067/s130067.page';
import { S130068Page } from './s130068/s130068.page';
import { S130069Page } from './s130069/s130069.page';
import { S130070Page } from './s130070/s130070.page';
import { S130071Page } from './s130071/s130071.page';

const routes: Routes = [
  {
    path: '',
    component: S130001Page,
  },
  {
    path: 's130001',
    component: S130001Page,
  },
  {
    path: 's130002',
    canActivate: [ActiveGuard],
    component: S130002Page,
  },
  {
    path: 's130003',

    canActivate: [ActiveGuard],
    component: S130003Page,
  },
  {
    path: 's130004',

    canActivate: [ActiveGuard],
    component: S130004Page,
  },
  {
    path: 's130004t',
    canActivate: [ActiveGuard],

    component: S130004tPage,
  },
  {
    path: 's130005',

    canActivate: [ActiveGuard],
    component: S130005Page,
  },
  {
    path: 's130006',

    canActivate: [ActiveGuard],
    component: S130006Page,
  },
  {
    path: 's130007',

    canActivate: [ActiveGuard],
    component: S130007Page,
  },
  {
    path: 's130007t',
    canActivate: [ActiveGuard],

    component: S130007tPage,
  },
  {
    path: 's130008',

    canActivate: [ActiveGuard],
    component: S130008Page,
  },
  {
    path: 's130009',

    canActivate: [ActiveGuard],
    component: S130009Page,
  },
  {
    path: 's130010',

    canActivate: [ActiveGuard],
    component: S130010Page,
  },
  {
    path: 's130010t',
    canActivate: [ActiveGuard],

    component: S130010tPage,
  },
  {
    path: 's130011',

    canActivate: [ActiveGuard],
    component: S130011Page,
  },
  {
    path: 's130012',

    canActivate: [ActiveGuard],
    component: S130012Page,
  },
  {
    path: 's130013',

    canActivate: [ActiveGuard],
    component: S130013Page,
  },
  {
    path: 's130014',

    canActivate: [ActiveGuard],
    component: S130014Page,
  },
  {
    path: 's130015',

    canActivate: [ActiveGuard],
    component: S130015Page,
  },
  {
    path: 's130016',

    canActivate: [ActiveGuard],
    component: S130016Page,
  },
  {
    path: 's130017',

    canActivate: [ActiveGuard],
    component: S130017Page,
  },
  {
    path: 's130018',

    canActivate: [ActiveGuard],
    component: S130018Page,
  },
  {
    path: 's130019',

    canActivate: [ActiveGuard],
    component: S130019Page,
  },
  {
    path: 's130020',

    canActivate: [ActiveGuard],
    component: S130020Page,
  },
  {
    path: 's130021',

    canActivate: [ActiveGuard],
    component: S130021Page,
  },
  {
    path: 's130022',

    canActivate: [ActiveGuard],
    component: S130022Page,
  },
  {
    path: 's130023',

    canActivate: [ActiveGuard],
    component: S130023Page,
  },
  {
    path: 's130024',

    canActivate: [ActiveGuard],
    component: S130024Page,
  },
  {
    path: 's130024t',
    canActivate: [ActiveGuard],

    component: S130024tPage,
  },
  {
    path: 's130025',

    canActivate: [ActiveGuard],
    component: S130025Page,
  },
  {
    path: 's130026',

    canActivate: [ActiveGuard],
    component: S130026Page,
  },
  {
    path: 's130027',

    canActivate: [ActiveGuard],
    component: S130027Page,
  },
  {
    path: 's130028',

    canActivate: [ActiveGuard],
    component: S130028Page,
  },
  {
    path: 's130029',

    canActivate: [ActiveGuard],
    component: S130029Page,
  },
  {
    path: 's130030',

    canActivate: [ActiveGuard],
    component: S130030Page,
  },
  {
    path: 's130031',

    canActivate: [ActiveGuard],
    component: S130031Page,
  },
  {
    path: 's130032',

    canActivate: [ActiveGuard],
    component: S130032Page,
  },
  {
    path: 's130033',

    canActivate: [ActiveGuard],
    component: S130033Page,
  },
  {
    path: 's130034',

    canActivate: [ActiveGuard],
    component: S130034Page,
  },
  {
    path: 's130035',

    canActivate: [ActiveGuard],
    component: S130035Page,
  },
  {
    path: 's130036',

    canActivate: [ActiveGuard],
    component: S130036Page,
  },
  {
    path: 's130037',

    canActivate: [ActiveGuard],
    component: S130037Page,
  },
  {
    path: 's130038',

    canActivate: [ActiveGuard],
    component: S130038Page,
  },
  {
    path: 's130039',

    canActivate: [ActiveGuard],
    component: S130039Page,
  },
  {
    path: 's130039t',
    canActivate: [ActiveGuard],

    component: S130039tPage,
  },
  {
    path: 's130040',

    canActivate: [ActiveGuard],
    component: S130040Page,
  },
  {
    path: 's130041',

    canActivate: [ActiveGuard],
    component: S130041Page,
  },
  {
    path: 's130042',

    canActivate: [ActiveGuard],
    component: S130042Page,
  },
  {
    path: 's130043',

    canActivate: [ActiveGuard],
    component: S130043Page,
  },
  {
    path: 's130044',

    canActivate: [ActiveGuard],
    component: S130044Page,
  },
  {
    path: 's130045',

    canActivate: [ActiveGuard],
    component: S130045Page,
  },
  {
    path: 's130046',

    canActivate: [ActiveGuard],
    component: S130046Page,
  },
  {
    path: 's130047',

    canActivate: [ActiveGuard],
    component: S130047Page,
  },
  {
    path: 's130048',

    canActivate: [ActiveGuard],
    component: S130048Page,
  },
  {
    path: 's130049',

    canActivate: [ActiveGuard],
    component: S130049Page,
  },
  {
    path: 's130050',

    canActivate: [ActiveGuard],
    component: S130050Page,
  },
  {
    path: 's130051',

    canActivate: [ActiveGuard],
    component: S130051Page,
  },
  {
    path: 's130052',

    canActivate: [ActiveGuard],
    component: S130052Page,
  },
  {
    path: 's130053',

    canActivate: [ActiveGuard],
    component: S130053Page,
  },
  {
    path: 's130054',

    canActivate: [ActiveGuard],
    component: S130054Page,
  },
  {
    path: 's130055',

    canActivate: [ActiveGuard],
    component: S130055Page,
  },
  {
    path: 's130056',

    canActivate: [ActiveGuard],
    component: S130056Page,
  },
  {
    path: 's130056t',
    canActivate: [ActiveGuard],

    component: S130056tPage,
  },
  {
    path: 's130057',

    canActivate: [ActiveGuard],
    component: S130057Page,
  },
  {
    path: 's130058',

    canActivate: [ActiveGuard],
    component: S130058Page,
  },
  {
    path: 's130059',

    canActivate: [ActiveGuard],
    component: S130059Page,
  },
  {
    path: 's130060',

    canActivate: [ActiveGuard],
    component: S130060Page,
  },
  {
    path: 's130061',

    canActivate: [ActiveGuard],
    component: S130061Page,
  },
  {
    path: 's130062',

    canActivate: [ActiveGuard],
    component: S130062Page,
  },
  {
    path: 's130063',

    canActivate: [ActiveGuard],
    component: S130063Page,
  },
  {
    path: 's130064',

    canActivate: [ActiveGuard],
    component: S130064Page,
  },
  {
    path: 's130065',

    canActivate: [ActiveGuard],
    component: S130065Page,
  },
  {
    path: 's130066',

    canActivate: [ActiveGuard],
    component: S130066Page,
  },
  {
    path: 's130067',

    canActivate: [ActiveGuard],
    component: S130067Page,
  },
  {
    path: 's130068',

    canActivate: [ActiveGuard],
    component: S130068Page,
  },
  {
    path: 's130069',

    canActivate: [ActiveGuard],
    component: S130069Page,
  },
  {
    path: 's130070',

    canActivate: [ActiveGuard],
    component: S130070Page,
  },
  {
    path: 's130071',

    canActivate: [ActiveGuard],
    component: S130071Page,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealingWithDeathRoutingModule { }
