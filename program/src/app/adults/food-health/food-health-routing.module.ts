import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S46001Page } from './s46001/s46001.page';  
import { S46002Page } from './s46002/s46002.page';  
import { S46003Page } from './s46003/s46003.page';  
import { S46003tPage } from './s46003t/s46003t.page';  
import { S46004Page } from './s46004/s46004.page';  
import { S46005Page } from './s46005/s46005.page';  
import { S46006Page } from './s46006/s46006.page';  
import { S46007Page } from './s46007/s46007.page';  
import { S46008Page } from './s46008/s46008.page';  
import { S46009Page } from './s46009/s46009.page';  
import { S46010Page } from './s46010/s46010.page';  
import { S46011Page } from './s46011/s46011.page'; 
import { S46011tPage } from './s46011t/s46011t.page'; 
import { S46012Page } from './s46012/s46012.page';  
import { S46013Page } from './s46013/s46013.page';  
import { S46014Page } from './s46014/s46014.page';  
import { S46015Page } from './s46015/s46015.page';  
import { S46016Page } from './s46016/s46016.page';  
import { S46017Page } from './s46017/s46017.page';  
import { S46018Page } from './s46018/s46018.page'; 
import { S46019Page } from './s46019/s46019.page';  
import { S46020Page } from './s46020/s46020.page';  
import { S46021Page } from './s46021/s46021.page';  
import { S46022Page } from './s46022/s46022.page';  
import { S46023Page } from './s46023/s46023.page';  
import { S46024Page } from './s46024/s46024.page';  
import { S46025Page } from './s46025/s46025.page';  
import { S46026Page } from './s46026/s46026.page';  
import { S46027Page } from './s46027/s46027.page';  
import { S46028Page } from './s46028/s46028.page';  
import { S46029Page } from './s46029/s46029.page';  
import { S46030Page } from './s46030/s46030.page';  
import { S46031Page } from './s46031/s46031.page';  
import { S46031tPage } from './s46031t/s46031t.page';  
import { S46032Page } from './s46032/s46032.page';  
import { S46033Page } from './s46033/s46033.page';  
import { S46034Page } from './s46034/s46034.page';  
import { S46035Page } from './s46035/s46035.page';  
import { S46036Page } from './s46036/s46036.page';  
import { S46037Page } from './s46037/s46037.page';  
import { S46038Page } from './s46038/s46038.page';  
import { S46038tPage } from './s46038t/s46038t.page';  
import { S46039Page } from './s46039/s46039.page';  
import { S46040Page } from './s46040/s46040.page';  
import { S46041Page } from './s46041/s46041.page';  
import { S46042Page } from './s46042/s46042.page';  
import { S46043Page } from './s46043/s46043.page';  
import { S46044Page } from './s46044/s46044.page';  
import { S46045Page } from './s46045/s46045.page';  
import { S46046Page } from './s46046/s46046.page';  
import { S46047Page } from './s46047/s46047.page';  
import { S46048Page } from './s46048/s46048.page';  
import { S46049Page } from './s46049/s46049.page';  
import { S46050Page } from './s46050/s46050.page';  
import { S46051Page } from './s46051/s46051.page';  
import { S46052Page } from './s46052/s46052.page';  
import { S46053Page } from './s46053/s46053.page';  
import { S46054Page } from './s46054/s46054.page';  
import { S46055Page } from './s46055/s46055.page';  
import { S46056Page } from './s46056/s46056.page';  
import { S46057Page } from './s46057/s46057.page';  
import { S46058Page } from './s46058/s46058.page';  
import { S46059Page } from './s46059/s46059.page';  
import { S46060Page } from './s46060/s46060.page';  
import { S46061Page } from './s46061/s46061.page';  
import { S46062Page } from './s46062/s46062.page';  
import { S46063Page } from './s46063/s46063.page';  
import { S46064Page } from './s46064/s46064.page'; 
import { S46064tPage } from './s46064t/s46064t.page';   
import { S46065Page } from './s46065/s46065.page';  
import { S46065p1Page } from './s46065p1/s46065p1.page';  
import { S46066Page } from './s46066/s46066.page';  
import { S46066tPage } from './s46066t/s46066t.page';  
import { S46067Page } from './s46067/s46067.page';  
import { S46068Page } from './s46068/s46068.page';  
import { S46069Page } from './s46069/s46069.page'; 
import { S46069tPage } from './s46069t/s46069t.page';   
import { S46070Page } from './s46070/s46070.page';  
import { S46070tPage } from './s46070t/s46070t.page';  
import { S46071Page } from './s46071/s46071.page';  
import { S46072Page } from './s46072/s46072.page';  
import { S46073Page } from './s46073/s46073.page';  
import { S46074Page } from './s46074/s46074.page'; 
import { S46075Page } from './s46075/s46075.page';  
import { S46076Page } from './s46076/s46076.page';  
import { S46077Page } from './s46077/s46077.page';  
import { S46078Page } from './s46078/s46078.page';  
import { S46079Page } from './s46079/s46079.page';  

const routes: Routes = [
  {
    path: '',   
     canActivate:[ActiveGuard],  
    component: S46001Page,
  },
  {
    path: 's46001',   
     canActivate:[ActiveGuard],  
    component: S46001Page,
  },
  {
    path: 's46002',   
     canActivate:[ActiveGuard],  
    component: S46002Page,
  },
  {
    path: 's46003',   
     canActivate:[ActiveGuard],  
    component: S46003Page,
  },
  {
    path: 's46003t',   
     canActivate:[ActiveGuard],  
    component: S46003tPage,
  },
  {
    path: 's46004',   
     canActivate:[ActiveGuard],  
    component: S46004Page,
  },
  {
    path: 's46005',   
     canActivate:[ActiveGuard],  
    component: S46005Page,
  },
  {
    path: 's46006',   
     canActivate:[ActiveGuard],  
    component: S46006Page,
  },
  {
    path: 's46007',   
     canActivate:[ActiveGuard],  
    component: S46007Page,
  },
  {
    path: 's46008',   
     canActivate:[ActiveGuard],  
    component: S46008Page,
  },
  {
    path: 's46009',   
     canActivate:[ActiveGuard],  
    component: S46009Page,
  },
  {
    path: 's46010',   
     canActivate:[ActiveGuard],  
    component: S46010Page,
  },
 
  {
    path: 's46011',   
     canActivate:[ActiveGuard],  
    component: S46011Page,
  },
  {
    path: 's46011t',   
     canActivate:[ActiveGuard],  
    component: S46011tPage,
  },
  {
    path: 's46012',   
     canActivate:[ActiveGuard],  
    component: S46012Page,
  }, 
  {
    path: 's46013',   
     canActivate:[ActiveGuard],  
    component: S46013Page,
  },
  {
    path: 's46014',   
     canActivate:[ActiveGuard],  
    component: S46014Page,
  },
  {
    path: 's46015',   
     canActivate:[ActiveGuard],  
    component: S46015Page,
  },
  {
    path: 's46016',   
     canActivate:[ActiveGuard],  
    component: S46016Page,
  },
  {
    path: 's46017',   
     canActivate:[ActiveGuard],  
    component: S46017Page,
  },
  {
    path: 's46018',   
     canActivate:[ActiveGuard],  
    component: S46018Page,
  }, 
  {
    path: 's46019',   
     canActivate:[ActiveGuard],  
    component: S46019Page,
  },
  {
    path: 's46020',   
     canActivate:[ActiveGuard],  
    component: S46020Page,
  },
  {
    path: 's46021',   
     canActivate:[ActiveGuard],  
    component: S46021Page,
  },
  {
    path: 's46022',   
     canActivate:[ActiveGuard],  
    component: S46022Page,
  },
  {
    path: 's46023',   
     canActivate:[ActiveGuard],  
    component: S46023Page,
  },
  {
    path: 's46024',   
     canActivate:[ActiveGuard],  
    component: S46024Page,
  },
  {
    path: 's46025',   
     canActivate:[ActiveGuard],  
    component: S46025Page,
  },
  {
    path: 's46026',   
     canActivate:[ActiveGuard],  
    component: S46026Page,
  },
  {
    path: 's46027',   
     canActivate:[ActiveGuard],  
    component: S46027Page,
  },
  {
    path: 's46028',   
     canActivate:[ActiveGuard],  
    component: S46028Page,
  },
  {
    path: 's46029',   
     canActivate:[ActiveGuard],  
    component: S46029Page,
  },
  {
    path: 's46030',   
     canActivate:[ActiveGuard],  
    component: S46030Page,
  },
  {
    path: 's46031',   
     canActivate:[ActiveGuard],  
    component: S46031Page,
  },
  {
    path: 's46031t',   
     canActivate:[ActiveGuard],  
    component: S46031tPage,
  },
  {
    path: 's46032',   
     canActivate:[ActiveGuard],  
    component: S46032Page,
  },
  {
    path: 's46033',   
     canActivate:[ActiveGuard],  
    component: S46033Page,
  },  
  {
    path: 's46034',   
     canActivate:[ActiveGuard],  
    component: S46034Page,
  },  
  {
    path: 's46035',   
     canActivate:[ActiveGuard],  
    component: S46035Page,
  }, 
  {
    path: 's46036',   
     canActivate:[ActiveGuard],  
    component: S46036Page,
  },
  {
    path: 's46037',   
     canActivate:[ActiveGuard],  
    component: S46037Page,
  }, 
  {
    path: 's46038',   
     canActivate:[ActiveGuard],  
    component: S46038Page,
  },
  {
    path: 's46038t',   
     canActivate:[ActiveGuard],  
    component: S46038tPage,
  },  
  {
    path: 's46039',   
     canActivate:[ActiveGuard],  
    component: S46039Page,
  },
  {
    path: 's46040',   
     canActivate:[ActiveGuard],  
    component: S46040Page,
  },
  {
    path: 's46041',   
     canActivate:[ActiveGuard],  
    component: S46041Page,
  },
  {
    path: 's46042',   
     canActivate:[ActiveGuard],  
    component: S46042Page,
  },
  {
    path: 's46043',   
     canActivate:[ActiveGuard],  
    component: S46043Page,
  },
  {
    path: 's46044',   
     canActivate:[ActiveGuard],  
    component: S46044Page,
  },
  {
    path: 's46045',   
     canActivate:[ActiveGuard],  
    component: S46045Page,
  },
  {
    path: 's46046',   
     canActivate:[ActiveGuard],  
    component: S46046Page,
  },
  {
    path: 's46047',   
     canActivate:[ActiveGuard],  
    component: S46047Page,
  },
  {
    path: 's46048',   
     canActivate:[ActiveGuard],  
    component: S46048Page,
  },
  {
    path: 's46049',   
     canActivate:[ActiveGuard],  
    component: S46049Page,
  },
  {
    path: 's46050',   
     canActivate:[ActiveGuard],  
    component: S46050Page,
  },
  {
    path: 's46051',   
     canActivate:[ActiveGuard],  
    component: S46051Page,
  },  
  {
    path: 's46052',   
     canActivate:[ActiveGuard],  
    component: S46052Page,
  },
  {
    path: 's46053',   
     canActivate:[ActiveGuard],  
    component: S46053Page,
  },
  {
    path: 's46054',   
     canActivate:[ActiveGuard],  
    component: S46054Page,
  },
  {
    path: 's46055',   
     canActivate:[ActiveGuard],  
    component: S46055Page,
  },
  {
    path: 's46056',   
     canActivate:[ActiveGuard],  
    component: S46056Page,
  },
  {
    path: 's46057',   
     canActivate:[ActiveGuard],  
    component: S46057Page,
  },
  {
    path: 's46058',   
     canActivate:[ActiveGuard],  
    component: S46058Page,
  },
  {
    path: 's46059',   
     canActivate:[ActiveGuard],  
    component: S46059Page,
  },
  {
    path: 's46060',   
     canActivate:[ActiveGuard],  
    component: S46060Page,
  },
  {
    path: 's46061',   
     canActivate:[ActiveGuard],  
    component: S46061Page,
  },
  {
    path: 's46062',   
     canActivate:[ActiveGuard],  
    component: S46062Page,
  },
  {
    path: 's46063',   
     canActivate:[ActiveGuard],  
    component: S46063Page,
  },
  {
    path: 's46064',   
     canActivate:[ActiveGuard],  
    component: S46064Page,
  },
  {
    path: 's46064t',   
     canActivate:[ActiveGuard],  
    component: S46064tPage,
  },
  {
    path: 's46065',   
     canActivate:[ActiveGuard],  
    component: S46065Page,
  },
  {
    path: 's46065p1',   
     canActivate:[ActiveGuard],  
    component: S46065p1Page,
  },
  {
    path: 's46066',   
     canActivate:[ActiveGuard],  
    component: S46066Page,
  },
  {
    path: 's46066t',   
     canActivate:[ActiveGuard],  
    component: S46066tPage,
  },
  {
    path: 's46067',   
     canActivate:[ActiveGuard],  
    component: S46067Page,
  },
  {
    path: 's46068',   
     canActivate:[ActiveGuard],  
    component: S46068Page,
  },  
  {
    path: 's46069',   
     canActivate:[ActiveGuard],  
    component: S46069Page,
  },
  {
    path: 's46069t',   
     canActivate:[ActiveGuard],  
    component: S46069tPage,
  },
  {
    path: 's46070',   
     canActivate:[ActiveGuard],  
    component: S46070Page,
  },
  {
    path: 's46070t',   
     canActivate:[ActiveGuard],  
    component: S46070tPage,
  },
  {
    path: 's46071',   
     canActivate:[ActiveGuard],  
    component: S46071Page,
  },
  {
    path: 's46072',   
     canActivate:[ActiveGuard],  
    component: S46072Page,
  },
  {
    path: 's46073',   
     canActivate:[ActiveGuard],  
    component: S46073Page,
  },
  {
    path: 's46074',   
     canActivate:[ActiveGuard],  
    component: S46074Page,
  }, 
  {
    path: 's46075',   
     canActivate:[ActiveGuard],  
    component: S46075Page,
  },
  {
    path: 's46076',   
     canActivate:[ActiveGuard],  
    component: S46076Page,
  }, 
  {
    path: 's46077',   
     canActivate:[ActiveGuard],  
    component: S46077Page,
  },
  {
    path: 's46078',   
     canActivate:[ActiveGuard],  
    component: S46078Page,
  },
  {
    path: 's46079',   
     canActivate:[ActiveGuard],  
    component: S46079Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodHealthRoutingModule { }
