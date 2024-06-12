import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/authGuard/active.guard';

import { S113001Page } from './s113001/s113001.page';
import { S113002Page } from './s113002/s113002.page';
import { S113003Page } from './s113003/s113003.page';
import { S113003tPage } from './s113003t/s113003t.page';
import { S113004Page } from './s113004/s113004.page';
import { S113005Page } from './s113005/s113005.page';
import { S113006Page } from './s113006/s113006.page';
import { S113007Page } from './s113007/s113007.page';
import { S113008Page } from './s113008/s113008.page';
import { S113009Page } from './s113009/s113009.page';
import { S113010Page } from './s113010/s113010.page';
import { S113011Page } from './s113011/s113011.page';
import { S113011tPage } from './s113011t/s113011t.page';
import { S113012Page } from './s113012/s113012.page';
import { S113013Page } from './s113013/s113013.page';
import { S113013tPage } from './s113013t/s113013t.page';
import { S113014Page } from './s113014/s113014.page';
import { S113015Page } from './s113015/s113015.page';
import { S113015tPage } from './s113015t/s113015t.page';
import { S113016Page } from './s113016/s113016.page';
import { S113017Page } from './s113017/s113017.page';
import { S113018Page } from './s113018/s113018.page';
import { S113019Page } from './s113019/s113019.page';
import { S113020Page } from './s113020/s113020.page';
import { S113021Page } from './s113021/s113021.page';
import { S113022Page } from './s113022/s113022.page';
import { S113023Page } from './s113023/s113023.page';
import { S113024Page } from './s113024/s113024.page';
import { S113025Page } from './s113025/s113025.page';
import { S113026Page } from './s113026/s113026.page';
import { S113027Page } from './s113027/s113027.page';
import { S113028Page } from './s113028/s113028.page';
import { S113029Page } from './s113029/s113029.page';
import { S113030Page } from './s113030/s113030.page';
import { S113031Page } from './s113031/s113031.page';
import { S113032Page } from './s113032/s113032.page';
import { S113033Page } from './s113033/s113033.page';
import { S113034Page } from './s113034/s113034.page';
import { S113035Page } from './s113035/s113035.page';
import { S113036Page } from './s113036/s113036.page';
import { S113037Page } from './s113037/s113037.page';
import { S113038Page } from './s113038/s113038.page';
import { S113039Page } from './s113039/s113039.page';
import { S113040Page } from './s113040/s113040.page';
import { S113041Page } from './s113041/s113041.page';
import { S113042Page } from './s113042/s113042.page';
import { S113043Page } from './s113043/s113043.page';
import { S113044Page } from './s113044/s113044.page';
import { S113045Page } from './s113045/s113045.page';
import { S113046Page } from './s113046/s113046.page';
import { S113047Page } from './s113047/s113047.page';
import { S113048Page } from './s113048/s113048.page';
import { S113049Page } from './s113049/s113049.page';
import { S113049tPage } from './s113049t/s113049t.page';
import { S113050Page } from './s113050/s113050.page';
import { S113051Page } from './s113051/s113051.page';
import { S113052Page } from './s113052/s113052.page';
import { S113053Page } from './s113053/s113053.page';
import { S113054Page } from './s113054/s113054.page';
import { S113055Page } from './s113055/s113055.page';
import { S113056Page } from './s113056/s113056.page';
import { S113057Page } from './s113057/s113057.page';
import { S113058Page } from './s113058/s113058.page';
import { S113059Page } from './s113059/s113059.page';
import { S113060Page } from './s113060/s113060.page';
import { S113061Page } from './s113061/s113061.page';
import { S113062Page } from './s113062/s113062.page';
import { S113063Page } from './s113063/s113063.page';
import { S113064Page } from './s113064/s113064.page';
import { S113065Page } from './s113065/s113065.page';
import { S113066Page } from './s113066/s113066.page';
import { S113067Page } from './s113067/s113067.page';
import { S113068Page } from './s113068/s113068.page';
import { S113069Page } from './s113069/s113069.page';
import { S113070Page } from './s113070/s113070.page';
import { S113071Page } from './s113071/s113071.page';
import { S113072Page } from './s113072/s113072.page';
import { S113073Page } from './s113073/s113073.page';
import { S113074Page } from './s113074/s113074.page';
import { S113075Page } from './s113075/s113075.page';
import { S113076Page } from './s113076/s113076.page';
import { S113076tPage } from './s113076t/s113076t.page';
import { S113077Page } from './s113077/s113077.page';
import { S113078Page } from './s113078/s113078.page';
import { S113079Page } from './s113079/s113079.page';
import { S113080Page } from './s113080/s113080.page';
import { S113081Page } from './s113081/s113081.page';
import { S113082Page } from './s113082/s113082.page';
import { S113083Page } from './s113083/s113083.page';
import { S113084Page } from './s113084/s113084.page';
import { S113085Page } from './s113085/s113085.page';
import { S113086Page } from './s113086/s113086.page';
import { S113087Page } from './s113087/s113087.page';

const routes: Routes = [
  {
    path: '',    
    component: S113001Page,
  },  
  {
    path: 's113001',
    component: S113001Page,
  },
  {
    path: 's113002',
    canActivate: [ActiveGuard],
    component: S113002Page,
  },
  {
    path: 's113003',
    canActivate: [ActiveGuard],
    component: S113003Page,
  },
  {
    path: 's113003t',
    canActivate: [ActiveGuard],
    component: S113003tPage,
  },
  {
    path: 's113004',
    canActivate: [ActiveGuard],
    component: S113004Page,
  },
  {
    path: 's113005',
    canActivate: [ActiveGuard],
    component: S113005Page,
  },
  {
    path: 's113006',
    canActivate: [ActiveGuard],
    component: S113006Page,
  },
  {
    path: 's113007',
    canActivate: [ActiveGuard],
    component: S113007Page,
  },
  {
    path: 's113008',
    canActivate: [ActiveGuard],
    component: S113008Page,
  },
  {
    path: 's113009',
    canActivate: [ActiveGuard],
    component: S113009Page,
  },
  {
    path: 's113010',
    canActivate: [ActiveGuard],
    component: S113010Page,
  },
  {
    path: 's113011',
    canActivate: [ActiveGuard],
    component: S113011Page,
  },
  {
    path: 's113011t',
    canActivate: [ActiveGuard],
    component: S113011tPage,
  },
  {
    path: 's113012',
    canActivate: [ActiveGuard],
    component: S113012Page,
  },
  {
    path: 's113013',
    canActivate: [ActiveGuard],
    component: S113013Page,
  },
  {
    path: 's113013t',
    canActivate: [ActiveGuard],
    component: S113013tPage,
  },
  {
    path: 's113014',
    canActivate: [ActiveGuard],
    component: S113014Page,
  },
  {
    path: 's113015',
    canActivate: [ActiveGuard],
    component: S113015Page,
  },
  {
    path: 's113015t',
    canActivate: [ActiveGuard],
    component: S113015tPage,
  },
  {
    path: 's113016',
    canActivate: [ActiveGuard],
    component: S113016Page,
  },
  {
    path: 's113017',
    canActivate: [ActiveGuard],
    component: S113017Page,
  },
  {
    path: 's113018',
    canActivate: [ActiveGuard],
    component: S113018Page,
  },
  {
    path: 's113019',
    canActivate: [ActiveGuard],
    component: S113019Page,
  },
  {
    path: 's113020',
    canActivate: [ActiveGuard],
    component: S113020Page,
  },
  {
    path: 's113021',
    canActivate: [ActiveGuard],
    component: S113021Page,
  },
  {
    path: 's113022',
    canActivate: [ActiveGuard],
    component: S113022Page,
  },
  {
    path: 's113023',
    canActivate: [ActiveGuard],
    component: S113023Page,
  },
  {
    path: 's113024',
    canActivate: [ActiveGuard],
    component: S113024Page,
  },
  {
    path: 's113025',
    canActivate: [ActiveGuard],
    component: S113025Page,
  },
  {
    path: 's113026',
    canActivate: [ActiveGuard],
    component: S113026Page,
  },
  {
    path: 's113027',
    canActivate: [ActiveGuard],
    component: S113027Page,
  },
  {
    path: 's113028',
    canActivate: [ActiveGuard],
    component: S113028Page,
  },
  {
    path: 's113029',
    canActivate: [ActiveGuard],
    component: S113029Page,
  },
  {
    path: 's113030',
    canActivate: [ActiveGuard],
    component: S113030Page,
  },
  {
    path: 's113031',
    canActivate: [ActiveGuard],
    component: S113031Page,
  },
  {
    path: 's113032',
    canActivate: [ActiveGuard],
    component: S113032Page,
  },
  {
    path: 's113033',
    canActivate: [ActiveGuard],
    component: S113033Page,
  },
  {
    path: 's113034',
    canActivate: [ActiveGuard],
    component: S113034Page,
  },
  {
    path: 's113035',
    canActivate: [ActiveGuard],
    component: S113035Page,
  },
  {
    path: 's113036',
    canActivate: [ActiveGuard],
    component: S113036Page,
  },
  {
    path: 's113037',
    canActivate: [ActiveGuard],
    component: S113037Page,
  },
  {
    path: 's113038',
    canActivate: [ActiveGuard],
    component: S113038Page,
  },
  {
    path: 's113039',
    canActivate: [ActiveGuard],
    component: S113039Page,
  },
  {
    path: 's113040',
    canActivate: [ActiveGuard],
    component: S113040Page,
  },
  {
    path: 's113041',
    canActivate: [ActiveGuard],
    component: S113041Page,
  },
  {
    path: 's113042',
    canActivate: [ActiveGuard],
    component: S113042Page,
  },
  {
    path: 's113043',
    canActivate: [ActiveGuard],
    component: S113043Page,
  },
  {
    path: 's113044',
    canActivate: [ActiveGuard],
    component: S113044Page,
  },
  {
    path: 's113045',
    canActivate: [ActiveGuard],
    component: S113045Page,
  },
  {
    path: 's113046',
    canActivate: [ActiveGuard],
    component: S113046Page,
  },
  {
    path: 's113047',
    canActivate: [ActiveGuard],
    component: S113047Page,
  },
  {
    path: 's113048',
    canActivate: [ActiveGuard],
    component: S113048Page,
  },
  {
    path: 's113049',
    canActivate: [ActiveGuard],
    component: S113049Page,
  },
  {
    path: 's113049t',
    canActivate: [ActiveGuard],
    component: S113049tPage,
  },
  {
    path: 's113050',
    canActivate: [ActiveGuard],
    component: S113050Page,
  },
  {
    path: 's113051',
    canActivate: [ActiveGuard],
    component: S113051Page,
  },
  {
    path: 's113052',
    canActivate: [ActiveGuard],
    component: S113052Page,
  },
  {
    path: 's113053',
    canActivate: [ActiveGuard],
    component: S113053Page,
  },
  {
    path: 's113054',
    canActivate: [ActiveGuard],
    component: S113054Page,
  },
  {
    path: 's113055',
    canActivate: [ActiveGuard],
    component: S113055Page,
  },
  {
    path: 's113056',
    canActivate: [ActiveGuard],
    component: S113056Page,
  },
  {
    path: 's113057',
    canActivate: [ActiveGuard],
    component: S113057Page,
  },
  {
    path: 's113058',
    canActivate: [ActiveGuard],
    component: S113058Page,
  },
  {
    path: 's113059',
    canActivate: [ActiveGuard],
    component: S113059Page,
  },
  {
    path: 's113060',
    canActivate: [ActiveGuard],
    component: S113060Page,
  },
  {
    path: 's113061',
    canActivate: [ActiveGuard],
    component: S113061Page,
  },
  {
    path: 's113062',
    canActivate: [ActiveGuard],
    component: S113062Page,
  },
  {
    path: 's113063',
    canActivate: [ActiveGuard],
    component: S113063Page,
  },
  {
    path: 's113064',
    canActivate: [ActiveGuard],
    component: S113064Page,
  },
  {
    path: 's113065',
    canActivate: [ActiveGuard],
    component: S113065Page,
  },
  {
    path: 's113066',
    canActivate: [ActiveGuard],
    component: S113066Page,
  },
  {
    path: 's113067',
    canActivate: [ActiveGuard],
    component: S113067Page,
  },
  {
    path: 's113068',
    canActivate: [ActiveGuard],
    component: S113068Page,
  },
  {
    path: 's113069',
    canActivate: [ActiveGuard],
    component: S113069Page,
  },
  {
    path: 's113070',
    canActivate: [ActiveGuard],
    component: S113070Page,
  },
  {
    path: 's113071',
    canActivate: [ActiveGuard],
    component: S113071Page,
  },
  {
    path: 's113072',
    canActivate: [ActiveGuard],
    component: S113072Page,
  },
  {
    path: 's113073',
    canActivate: [ActiveGuard],
    component: S113073Page,
  },
  {
    path: 's113074',
    canActivate: [ActiveGuard],
    component: S113074Page,
  },
  {
    path: 's113075',
    canActivate: [ActiveGuard],
    component: S113075Page,
  },
  {
    path: 's113076',
    canActivate: [ActiveGuard],
    component: S113076Page,
  },
  {
    path: 's113076t',
    canActivate: [ActiveGuard],
    component: S113076tPage,
  },
  {
    path: 's113077',
    canActivate: [ActiveGuard],
    component: S113077Page,
  },
  {
    path: 's113078',
    canActivate: [ActiveGuard],
    component: S113078Page,
  },
  {
    path: 's113079',
    canActivate: [ActiveGuard],
    component: S113079Page,
  },
  {
    path: 's113080',
    canActivate: [ActiveGuard],
    component: S113080Page,
  },
  {
    path: 's113081',
    canActivate: [ActiveGuard],
    component: S113081Page,
  },
  {
    path: 's113082',
    canActivate: [ActiveGuard],
    component: S113082Page,
  },
  {
    path: 's113083',
    canActivate: [ActiveGuard],
    component: S113083Page,
  },
  {
    path: 's113084',
    canActivate: [ActiveGuard],
    component: S113084Page,
  },
  {
    path: 's113085',
    canActivate: [ActiveGuard],
    component: S113085Page,
  },
  {
    path: 's113086',
    canActivate: [ActiveGuard],
    component: S113086Page,
  },
  {
    path: 's113087',
    canActivate: [ActiveGuard],
    component: S113087Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveMindRoutingModule { }
