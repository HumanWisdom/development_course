import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S63001Page } from './s63001/s63001.page';
import { S63002Page } from './s63002/s63002.page';
import { S63003Page } from './s63003/s63003.page';
import { S63004Page } from './s63004/s63004.page';
import { S63005Page } from './s63005/s63005.page';
import { S63006Page } from './s63006/s63006.page';
import { S63006tPage } from './s63006t/s63006t.page';
import { S63007Page } from './s63007/s63007.page';
import { S63008Page } from './s63008/s63008.page';
import { S63008tPage } from './s63008t/s63008t.page';
import { S63009Page } from './s63009/s63009.page';
import { S63009tPage } from './s63009t/s63009t.page';
import { S63010Page } from './s63010/s63010.page';
import { S63011Page } from './s63011/s63011.page';
import { S63012Page } from './s63012/s63012.page';
import { S63013Page } from './s63013/s63013.page';
import { S63014Page } from './s63014/s63014.page';
import { S63015Page } from './s63015/s63015.page';
import { S63016Page } from './s63016/s63016.page';
import { S63017Page } from './s63017/s63017.page';
import { S63018Page } from './s63018/s63018.page';
import { S63019Page } from './s63019/s63019.page';
import { S63020Page } from './s63020/s63020.page';
import { S63021Page } from './s63021/s63021.page';
import { S63022Page } from './s63022/s63022.page';
import { S63023Page } from './s63023/s63023.page';
import { S63024Page } from './s63024/s63024.page';
import { S63025Page } from './s63025/s63025.page';
import { S63026Page } from './s63026/s63026.page';
import { S63027Page } from './s63027/s63027.page';
import { S63028Page } from './s63028/s63028.page';
import { S63029Page } from './s63029/s63029.page';
import { S63030Page } from './s63030/s63030.page';
import { S63031Page } from './s63031/s63031.page';
import { S63032Page } from './s63032/s63032.page';
import { S63033Page } from './s63033/s63033.page';
import { S63034Page } from './s63034/s63034.page';
import { S63034tPage } from './s63034t/s63034t.page';
import { S63035Page } from './s63035/s63035.page';
import { S63036Page } from './s63036/s63036.page';
import { S63037Page } from './s63037/s63037.page';
import { S63038Page } from './s63038/s63038.page';
import { S63039Page } from './s63039/s63039.page';
import { S63040Page } from './s63040/s63040.page';
import { S63041Page } from './s63041/s63041.page';
import { S63041tPage } from './s63041t/s63041t.page';
import { S63042Page } from './s63042/s63042.page';
import { S63043Page } from './s63043/s63043.page';
import { S63044Page } from './s63044/s63044.page';
import { S63044tPage } from './s63044t/s63044t.page';
import { S63045Page } from './s63045/s63045.page';
import { S63046Page } from './s63046/s63046.page';
import { S63046tPage } from './s63046t/s63046t.page';
import { S63047Page } from './s63047/s63047.page';
import { S63048Page } from './s63048/s63048.page';
import { S63049Page } from './s63049/s63049.page';
import { S63050Page } from './s63050/s63050.page';
import { S63050tPage } from './s63050t/s63050t.page';
import { S63051Page } from './s63051/s63051.page';
import { S63052Page } from './s63052/s63052.page';
import { S63053Page } from './s63053/s63053.page';
import { S63054Page } from './s63054/s63054.page';
import { S63055Page } from './s63055/s63055.page';
import { S63055tPage } from './s63055t/s63055t.page';
import { S63056Page } from './s63056/s63056.page';
import { S63057Page } from './s63057/s63057.page';
import { S63058Page } from './s63058/s63058.page';
import { S63059Page } from './s63059/s63059.page';
import { S63060Page } from './s63060/s63060.page';
import { S63061Page } from './s63061/s63061.page';
import { S63062Page } from './s63062/s63062.page';
import { S63063Page } from './s63063/s63063.page';
import { S63064Page } from './s63064/s63064.page';
import { S63065Page } from './s63065/s63065.page';
import { S63066Page } from './s63066/s63066.page';
import { S63066tPage } from './s63066t/s63066t.page';
import { S63067Page } from './s63067/s63067.page';
import { S63067tPage } from './s63067t/s63067t.page';
import { S63068Page } from './s63068/s63068.page';
import { S63069Page } from './s63069/s63069.page';
import { S63069tPage } from './s63069t/s63069t.page';
import { S63070Page } from './s63070/s63070.page';
import { S63071Page } from './s63071/s63071.page';
import { S63072Page } from './s63072/s63072.page';
import { S63073Page } from './s63073/s63073.page';
import { S63074Page } from './s63074/s63074.page';
import { S63075Page } from './s63075/s63075.page';
import { S63076Page } from './s63076/s63076.page';
import { S63077Page } from './s63077/s63077.page';
import { S63078Page } from './s63078/s63078.page';
import { S63079Page } from './s63079/s63079.page';

const routes: Routes = [
  {
    path: '',    
     canActivate:[ActiveGuard],  
    component: S63001Page,
  },  
  {
    path: 's63001',    
     canActivate:[ActiveGuard],  
    component: S63001Page,
  },  
  {
    path: 's63002',    
     canActivate:[ActiveGuard],  
    component: S63002Page,
  },   
  {
    path: 's63003',
     canActivate:[ActiveGuard],  
    component: S63003Page,
  },
  {
    path: 's63004',
     canActivate:[ActiveGuard],  
    component: S63004Page,
  },
  {
    path: 's63005',
     canActivate:[ActiveGuard],  
    component: S63005Page,
  },
  {
    path: 's63006',
     canActivate:[ActiveGuard],  
    component: S63006Page,
  },
  {
    path: 's63006t',
     canActivate:[ActiveGuard],  
    component: S63006tPage,
  },
  {
    path: 's63007',
     canActivate:[ActiveGuard],  
    component: S63007Page,
  },
  {
    path: 's63008',
     canActivate:[ActiveGuard],  
    component: S63008Page,
  },
  {
    path: 's63008t',
     canActivate:[ActiveGuard],  
    component: S63008tPage,
  },
  {
    path: 's63009',
     canActivate:[ActiveGuard],  
    component: S63009Page,
  },
  {
    path: 's63009t',
     canActivate:[ActiveGuard],  
    component: S63009tPage,
  },
  {
    path: 's63010',
     canActivate:[ActiveGuard],  
    component: S63010Page,
  },
  {
    path: 's63011',
     canActivate:[ActiveGuard],  
    component: S63011Page,
  },
  {
    path: 's63012',
     canActivate:[ActiveGuard],  
    component: S63012Page,
  },
  {
    path: 's63013',
     canActivate:[ActiveGuard],  
    component: S63013Page,
  },
  {
    path: 's63014',
     canActivate:[ActiveGuard],  
    component: S63014Page,
  },
  {
    path: 's63015',
     canActivate:[ActiveGuard],  
    component: S63015Page,
  },
  {
    path: 's63016',
     canActivate:[ActiveGuard],  
    component: S63016Page,
  },
  {
    path: 's63017',
     canActivate:[ActiveGuard],  
    component: S63017Page,
  },
  {
    path: 's63018',
     canActivate:[ActiveGuard],  
    component: S63018Page,
  },
  {
    path: 's63019',
     canActivate:[ActiveGuard],  
    component: S63019Page,
  },
  {
    path: 's63020',
     canActivate:[ActiveGuard],  
    component: S63020Page,
  },
  {
    path: 's63021',
     canActivate:[ActiveGuard],  
    component: S63021Page,
  },
  {
    path: 's63022',
     canActivate:[ActiveGuard],  
    component: S63022Page,
  },
  {
    path: 's63023',
     canActivate:[ActiveGuard],  
    component: S63023Page,
  },
  {
    path: 's63024',
     canActivate:[ActiveGuard],  
    component: S63024Page,
  },
  {
    path: 's63025',
     canActivate:[ActiveGuard],  
    component: S63025Page,
  },
  {
    path: 's63026',
     canActivate:[ActiveGuard],  
    component: S63026Page,
  },
  {
    path: 's63027',
     canActivate:[ActiveGuard],  
    component: S63027Page,
  },
  {
    path: 's63028',
     canActivate:[ActiveGuard],  
    component: S63028Page,
  },
  {
    path: 's63029',
     canActivate:[ActiveGuard],  
    component: S63029Page,
  },
  {
    path: 's63030',
     canActivate:[ActiveGuard],  
    component: S63030Page,
  },
  {
    path: 's63031',
     canActivate:[ActiveGuard],  
    component: S63031Page,
  },
  {
    path: 's63032',
     canActivate:[ActiveGuard],  
    component: S63032Page,
  },
  {
    path: 's63033',
     canActivate:[ActiveGuard],  
    component: S63033Page,
  },
  {
    path: 's63034',
     canActivate:[ActiveGuard],  
    component: S63034Page,
  },
  {
    path: 's63034t',
     canActivate:[ActiveGuard],  
    component: S63034tPage,
  },
  {
    path: 's63035',
     canActivate:[ActiveGuard],  
    component: S63035Page,
  },
  {
    path: 's63036',
     canActivate:[ActiveGuard],  
    component: S63036Page,
  },
  {
    path: 's63037',
     canActivate:[ActiveGuard],  
    component: S63037Page,
  },
  {
    path: 's63038',
     canActivate:[ActiveGuard],  
    component: S63038Page,
  },
  {
    path: 's63039',
     canActivate:[ActiveGuard],  
    component: S63039Page,
  },
  {
    path: 's63040',
     canActivate:[ActiveGuard],  
    component: S63040Page,
  },
  {
    path: 's63041',
     canActivate:[ActiveGuard],  
    component: S63041Page,
  },
  {
    path: 's63041t',
     canActivate:[ActiveGuard],  
    component: S63041tPage,
  },
  {
    path: 's63042',
     canActivate:[ActiveGuard],  
    component: S63042Page,
  },
  {
    path: 's63043',
     canActivate:[ActiveGuard],  
    component: S63043Page,
  },
  {
    path: 's63044',
     canActivate:[ActiveGuard],  
    component: S63044Page,
  },
  {
    path: 's63044t',
     canActivate:[ActiveGuard],  
    component: S63044tPage,
  },
  {
    path: 's63045',
     canActivate:[ActiveGuard],  
    component: S63045Page,
  },
  {
    path: 's63046',
     canActivate:[ActiveGuard],  
    component: S63046Page,
  },
  {
    path: 's63046t',
     canActivate:[ActiveGuard],  
    component: S63046tPage,
  },
  {
    path: 's63047',
     canActivate:[ActiveGuard],  
    component: S63047Page,
  },
  {
    path: 's63048',
     canActivate:[ActiveGuard],  
    component: S63048Page,
  },
  {
    path: 's63049',
     canActivate:[ActiveGuard],  
    component: S63049Page,
  },
  {
    path: 's63050',
     canActivate:[ActiveGuard],  
    component: S63050Page,
  },
  {
    path: 's63050t',
     canActivate:[ActiveGuard],  
    component: S63050tPage,
  },
  {
    path: 's63051',
     canActivate:[ActiveGuard],  
    component: S63051Page,
  },
  {
    path: 's63052',
     canActivate:[ActiveGuard],  
    component: S63052Page,
  },
  {
    path: 's63053',
     canActivate:[ActiveGuard],  
    component: S63053Page,
  },
  {
    path: 's63054',
     canActivate:[ActiveGuard],  
    component: S63054Page,
  },
  {
    path: 's63055',
     canActivate:[ActiveGuard],  
    component: S63055Page,
  },
  {
    path: 's63055t',
     canActivate:[ActiveGuard],  
    component: S63055tPage,
  },
  {
    path: 's63056',
     canActivate:[ActiveGuard],  
    component: S63056Page,
  },
  {
    path: 's63057',
     canActivate:[ActiveGuard],  
    component: S63057Page,
  },
  {
    path: 's63058',
     canActivate:[ActiveGuard],  
    component: S63058Page,
  },
  {
    path: 's63059',
     canActivate:[ActiveGuard],  
    component: S63059Page,
  },
  {
    path: 's63060',
     canActivate:[ActiveGuard],  
    component: S63060Page,
  },
  {
    path: 's63061',
     canActivate:[ActiveGuard],  
    component: S63061Page,
  },
  {
    path: 's63062',
     canActivate:[ActiveGuard],  
    component: S63062Page,
  },
  {
    path: 's63063',
     canActivate:[ActiveGuard],  
    component: S63063Page,
  },
  {
    path: 's63064',
     canActivate:[ActiveGuard],  
    component: S63064Page,
  },
  {
    path: 's63065',
     canActivate:[ActiveGuard],  
    component: S63065Page,
  },
  {
    path: 's63066',
     canActivate:[ActiveGuard],  
    component: S63066Page,
  },
  {
    path: 's63066t',
     canActivate:[ActiveGuard],  
    component: S63066tPage,
  },
  {
    path: 's63067',
     canActivate:[ActiveGuard],  
    component: S63067Page,
  },
  {
    path: 's63067t',
     canActivate:[ActiveGuard],  
    component: S63067tPage,
  },
  {
    path: 's63068',
     canActivate:[ActiveGuard],  
    component: S63068Page,
  },
  {
    path: 's63069',
     canActivate:[ActiveGuard],  
    component: S63069Page,
  },
  {
    path: 's63069t',
     canActivate:[ActiveGuard],  
    component: S63069tPage,
  },
  {
    path: 's63070',
     canActivate:[ActiveGuard],  
    component: S63070Page,
  },
  {
    path: 's63071',
     canActivate:[ActiveGuard],  
    component: S63071Page,
  },
  {
    path: 's63072',
     canActivate:[ActiveGuard],  
    component: S63072Page,
  },
  {
    path: 's63073',
     canActivate:[ActiveGuard],  
    component: S63073Page,
  },
  {
    path: 's63074',
     canActivate:[ActiveGuard],  
    component: S63074Page,
  },
  {
    path: 's63075',
     canActivate:[ActiveGuard],  
    component: S63075Page,
  },
  {
    path: 's63076',
     canActivate:[ActiveGuard],  
    component: S63076Page,
  },
  {
    path: 's63077',
     canActivate:[ActiveGuard],  
    component: S63077Page,
  },
  {
    path: 's63078',
     canActivate:[ActiveGuard],  
    component: S63078Page,
  },
  {
    path: 's63079',
     canActivate:[ActiveGuard],  
    component: S63079Page,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivingWithPeaceRoutingModule { }
