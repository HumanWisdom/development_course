import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S21001Page } from './s21001/s21001.page';  
import { S21002Page } from './s21002/s21002.page';  
import { S21003Page } from './s21003/s21003.page';  
import { S21003tPage } from './s21003t/s21003t.page';  
import { S21004Page } from './s21004/s21004.page';  
import { S21005Page } from './s21005/s21005.page';  
import { S21006Page } from './s21006/s21006.page';  
import { S21006tPage } from './s21006t/s21006t.page';  
import { S21007Page } from './s21007/s21007.page';  
import { S21008Page } from './s21008/s21008.page';  
import { S21009Page } from './s21009/s21009.page';  
import { S21010Page } from './s21010/s21010.page';  
import { S21011Page } from './s21011/s21011.page'; 
import { S21012Page } from './s21012/s21012.page';  
import { S21013Page } from './s21013/s21013.page';  
import { S21014Page } from './s21014/s21014.page';  
import { S21015Page } from './s21015/s21015.page';  
import { S21016Page } from './s21016/s21016.page';  
import { S21017Page } from './s21017/s21017.page';  
import { S21017tPage } from './s21017t/s21017t.page';  
import { S21018Page } from './s21018/s21018.page'; 
import { S21019Page } from './s21019/s21019.page';  
import { S21020Page } from './s21020/s21020.page';
import { S21020tPage } from './s21020t/s21020t.page';  
import { S21021Page } from './s21021/s21021.page';  
import { S21022Page } from './s21022/s21022.page';  
import { S21023Page } from './s21023/s21023.page';  
import { S21024Page } from './s21024/s21024.page';  
import { S21025Page } from './s21025/s21025.page';  
import { S21026Page } from './s21026/s21026.page'; 
import { S21026tPage } from './s21026t/s21026t.page'; 
import { S21027Page } from './s21027/s21027.page';  
import { S21028Page } from './s21028/s21028.page';  
import { S21029Page } from './s21029/s21029.page';  
import { S21030Page } from './s21030/s21030.page';  
import { S21031Page } from './s21031/s21031.page';  
import { S21032Page } from './s21032/s21032.page'; 
import { S21032tPage } from './s21032t/s21032t.page';  
import { S21033Page } from './s21033/s21033.page';  
import { S21034Page } from './s21034/s21034.page';  
import { S21035Page } from './s21035/s21035.page';  
import { S21036Page } from './s21036/s21036.page';  
import { S21037Page } from './s21037/s21037.page';  
import { S21038Page } from './s21038/s21038.page';  
import { S21039Page } from './s21039/s21039.page';  
import { S21040Page } from './s21040/s21040.page';  
import { S21041Page } from './s21041/s21041.page';  
import { S21042Page } from './s21042/s21042.page';  
import { S21043Page } from './s21043/s21043.page';  
import { S21043p1Page } from './s21043p1/s21043p1.page';  
import { S21043p2Page } from './s21043p2/s21043p2.page'; 
import { S21043p3Page } from './s21043p3/s21043p3.page'; 
import { S21043p4Page } from './s21043p4/s21043p4.page'; 
import { S21043p5Page } from './s21043p5/s21043p5.page'; 
import { S21043p6Page } from './s21043p6/s21043p6.page'; 
import { S21043p7Page } from './s21043p7/s21043p7.page'; 
import { S21044Page } from './s21044/s21044.page'; 
import { S21044tPage } from './s21044t/s21044t.page';  
import { S21045Page } from './s21045/s21045.page';  
import { S21046Page } from './s21046/s21046.page';  
import { S21047Page } from './s21047/s21047.page';  
import { S21048Page } from './s21048/s21048.page';  
import { S21048tPage } from './s21048t/s21048t.page';  
import { S21049Page } from './s21049/s21049.page';  
import { S21050Page } from './s21050/s21050.page';  
import { S21051Page } from './s21051/s21051.page';  
import { S21052Page } from './s21052/s21052.page';  
import { S21053Page } from './s21053/s21053.page'; 
import { S21053tPage } from './s21053t/s21053t.page';   
import { S21054Page } from './s21054/s21054.page';  
import { S21055Page } from './s21055/s21055.page';  
import { S21055tPage } from './s21055t/s21055t.page';  
import { S21056Page } from './s21056/s21056.page';  
import { S21057Page } from './s21057/s21057.page';  
import { S21058Page } from './s21058/s21058.page';  
import { S21059Page } from './s21059/s21059.page'; 
import { S21059tPage } from './s21059t/s21059t.page';   
import { S21060Page } from './s21060/s21060.page'; 
import { S21061Page } from './s21061/s21061.page';   
import { S21061p1Page } from './s21061p1/s21061p1.page'; 
import { S21061p2Page } from './s21061p2/s21061p2.page'; 
import { S21061p3Page } from './s21061p3/s21061p3.page'; 
import { S21061p4Page } from './s21061p4/s21061p4.page'; 
import { S21061p5Page } from './s21061p5/s21061p5.page';  
import { S21062Page } from './s21062/s21062.page';  
import { S21063Page } from './s21063/s21063.page'; 
import { S21063tPage } from './s21063t/s21063t.page';   
import { S21064Page } from './s21064/s21064.page';  
import { S21065Page } from './s21065/s21065.page';  
import { S21066Page } from './s21066/s21066.page';  
import { S21066p1Page } from './s21066p1/s21066p1.page';  
import { S21066p2Page } from './s21066p2/s21066p2.page';  
import { S21066p3Page } from './s21066p3/s21066p3.page';  
import { S21066p4Page } from './s21066p4/s21066p4.page';  
import { S21067Page } from './s21067/s21067.page';  
import { S21068Page } from './s21068/s21068.page';  

const routes: Routes = [
  {
    path: '',   
    component: S21001Page,
  },
  {
    path: 's21001',   
    canActivate:[ActiveGuard],  
    component: S21001Page,
  },
  {
    path: 's21002',   
    canActivate:[ActiveGuard],  
    component: S21002Page,
  },
  {
    path: 's21003',   
    canActivate:[ActiveGuard],  
    component: S21003Page,
  },
  {
    path: 's21003t',   
    canActivate:[ActiveGuard],  
    component: S21003tPage,
  },
  {
    path: 's21004',   
    canActivate:[ActiveGuard],  
    component: S21004Page,
  },
  {
    path: 's21005',   
    canActivate:[ActiveGuard],  
    component: S21005Page,
  },
  {
    path: 's21006',   
    canActivate:[ActiveGuard],  
    component: S21006Page,
  },
  {
    path: 's21006t',   
    canActivate:[ActiveGuard],  
    component: S21006tPage,
  },
  {
    path: 's21007',   
    canActivate:[ActiveGuard],  
    component: S21007Page,
  },
  {
    path: 's21008',   
    canActivate:[ActiveGuard],  
    component: S21008Page,
  },
  {
    path: 's21009',   
    canActivate:[ActiveGuard],  
    component: S21009Page,
  },
  {
    path: 's21010',   
    canActivate:[ActiveGuard],  
    component: S21010Page,
  },
 
  {
    path: 's21011',   
    canActivate:[ActiveGuard],  
    component: S21011Page,
  },
  {
    path: 's21012',   
    canActivate:[ActiveGuard],  
    component: S21012Page,
  },
  
  {
    path: 's21013',   
    canActivate:[ActiveGuard],  
    component: S21013Page,
  },
  {
    path: 's21014',   
    canActivate:[ActiveGuard],  
    component: S21014Page,
  },
 
  
  {
    path: 's21015',   
    canActivate:[ActiveGuard],  
    component: S21015Page,
  },
  {
    path: 's21016',   
    canActivate:[ActiveGuard],  
    component: S21016Page,
  },
  {
    path: 's21017',   
    canActivate:[ActiveGuard],  
    component: S21017Page,
  },
  {
    path: 's21017t',   
    canActivate:[ActiveGuard],  
    component: S21017tPage,
  },
  {
    path: 's21018',   
    canActivate:[ActiveGuard],  
    component: S21018Page,
  },
 
  {
    path: 's21019',   
    canActivate:[ActiveGuard],  
    component: S21019Page,
  },
  {
    path: 's21020',   
    canActivate:[ActiveGuard],  
    component: S21020Page,
  },
  {
    path: 's21020t',   
    canActivate:[ActiveGuard],  
    component: S21020tPage,
  },
  {
    path: 's21021',   
    canActivate:[ActiveGuard],  
    component: S21021Page,
  },
  {
    path: 's21022',   
    canActivate:[ActiveGuard],  
    component: S21022Page,
  },
  {
    path: 's21023',   
    canActivate:[ActiveGuard],  
    component: S21023Page,
  },
  {
    path: 's21024',   
    canActivate:[ActiveGuard],  
    component: S21024Page,
  },
  {
    path: 's21025',   
    canActivate:[ActiveGuard],  
    component: S21025Page,
  },
  {
    path: 's21026',   
    canActivate:[ActiveGuard],  
    component: S21026Page,
  },
  {
    path: 's21026t',   
    canActivate:[ActiveGuard],  
    component: S21026tPage,
  },
  {
    path: 's21027',   
    canActivate:[ActiveGuard],  
    component: S21027Page,
  },
  {
    path: 's21028',   
    canActivate:[ActiveGuard],  
    component: S21028Page,
  },
  {
    path: 's21029',   
    canActivate:[ActiveGuard],  
    component: S21029Page,
  },
  {
    path: 's21030',   
    canActivate:[ActiveGuard],  
    component: S21030Page,
  },
  {
    path: 's21031',   
    canActivate:[ActiveGuard],  
    component: S21031Page,
  },
  {
    path: 's21032',   
    canActivate:[ActiveGuard],  
    component: S21032Page,
  },
  {
    path: 's21032t',   
    canActivate:[ActiveGuard],  
    component: S21032tPage,
  },
  {
    path: 's21033',   
    canActivate:[ActiveGuard],  
    component: S21033Page,
  },
  
  {
    path: 's21034',   
    canActivate:[ActiveGuard],  
    component: S21034Page,
  },
  
  {
    path: 's21035',   
    canActivate:[ActiveGuard],  
    component: S21035Page,
  },
 
  {
    path: 's21036',   
    canActivate:[ActiveGuard],  
    component: S21036Page,
  },
  {
    path: 's21037',   
    canActivate:[ActiveGuard],  
    component: S21037Page,
  },
 
  {
    path: 's21038',   
    canActivate:[ActiveGuard],  
    component: S21038Page,
  },
  
  {
    path: 's21039',   
    canActivate:[ActiveGuard],  
    component: S21039Page,
  },
  {
    path: 's21040',   
    canActivate:[ActiveGuard],  
    component: S21040Page,
  },
  {
    path: 's21041',   
    canActivate:[ActiveGuard],  
    component: S21041Page,
  },
  {
    path: 's21042',   
    canActivate:[ActiveGuard],  
    component: S21042Page,
  },
  {
    path: 's21043',   
    canActivate:[ActiveGuard],  
    component: S21043Page,
  },
  {
    path: 's21043p1',   
    canActivate:[ActiveGuard],  
    component: S21043p1Page,
  },
  {
    path: 's21043p2',   
    canActivate:[ActiveGuard],  
    component: S21043p2Page,
  },
  {
    path: 's21043p3',   
    canActivate:[ActiveGuard],  
    component: S21043p3Page,
  },
  {
    path: 's21043p4',   
    canActivate:[ActiveGuard],  
    component: S21043p4Page,
  },
  {
    path: 's21043p5',   
    canActivate:[ActiveGuard],  
    component: S21043p5Page,
  },
  {
    path: 's21043p6',   
    canActivate:[ActiveGuard],  
    component: S21043p6Page,
  },
  {
    path: 's21043p7',   
    canActivate:[ActiveGuard],  
    component: S21043p7Page,
  },
  {
    path: 's21044',   
    canActivate:[ActiveGuard],  
    component: S21044Page,
  },
  {
    path: 's21044t',   
    canActivate:[ActiveGuard],  
    component: S21044tPage,
  },
  {
    path: 's21045',   
    canActivate:[ActiveGuard],  
    component: S21045Page,
  },
  {
    path: 's21046',   
    canActivate:[ActiveGuard],  
    component: S21046Page,
  },
  {
    path: 's21047',   
    canActivate:[ActiveGuard],  
    component: S21047Page,
  },
 
  
  {
    path: 's21048',   
    canActivate:[ActiveGuard],  
    component: S21048Page,
  },
  {
    path: 's21048t',   
    canActivate:[ActiveGuard],  
    component: S21048tPage,
  },
  {
    path: 's21049',   
    canActivate:[ActiveGuard],  
    component: S21049Page,
  },
  {
    path: 's21050',   
    canActivate:[ActiveGuard],  
    component: S21050Page,
  },
  {
    path: 's21051',   
    canActivate:[ActiveGuard],  
    component: S21051Page,
  },
  
  {
    path: 's21052',   
    canActivate:[ActiveGuard],  
    component: S21052Page,
  },
  {
    path: 's21053',   
    canActivate:[ActiveGuard],  
    component: S21053Page,
  },
  {
    path: 's21053t',   
    canActivate:[ActiveGuard],  
    component: S21053tPage,
  },
  {
    path: 's21054',   
    canActivate:[ActiveGuard],  
    component: S21054Page,
  },
  {
    path: 's21055',   
    canActivate:[ActiveGuard],  
    component: S21055Page,
  },
  {
    path: 's21055t',   
    canActivate:[ActiveGuard],  
    component: S21055tPage,
  },
  {
    path: 's21056',   
    canActivate:[ActiveGuard],  
    component: S21056Page,
  },
  {
    path: 's21057',   
    canActivate:[ActiveGuard],  
    component: S21057Page,
  },
  {
    path: 's21058',   
    canActivate:[ActiveGuard],  
    component: S21058Page,
  },
  {
    path: 's21059',   
    canActivate:[ActiveGuard],  
    component: S21059Page,
  },
  {
    path: 's21059t',   
    canActivate:[ActiveGuard],  
    component: S21059tPage,
  },
  {
    path: 's21060',   
    canActivate:[ActiveGuard],  
    component: S21060Page,
  },
 
  {
    path: 's21061p1',   
    canActivate:[ActiveGuard],  
    component: S21061p1Page,
  },
  {
    path: 's21061p2',   
    canActivate:[ActiveGuard],  
    component: S21061p2Page,
  },
  {
    path: 's21061p3',   
    canActivate:[ActiveGuard],  
    component: S21061p3Page,
  },
  {
    path: 's21061p4',   
    canActivate:[ActiveGuard],  
    component: S21061p4Page,
  },
  {
    path: 's21061p5',   
    canActivate:[ActiveGuard],  
    component: S21061p5Page,
  },
  {
    path: 's21061',   
    canActivate:[ActiveGuard],  
    component: S21061Page,
  },
  {
    path: 's21062',   
    canActivate:[ActiveGuard],  
    component: S21062Page,
  },
  {
    path: 's21063',   
    canActivate:[ActiveGuard],  
    component: S21063Page,
  },
  {
    path: 's21063t',   
    canActivate:[ActiveGuard],  
    component: S21063tPage,
  },
  {
    path: 's21064',   
    canActivate:[ActiveGuard],  
    component: S21064Page,
  },
  {
    path: 's21065',   
    canActivate:[ActiveGuard],  
    component: S21065Page,
  },
  {
    path: 's21066',   
    canActivate:[ActiveGuard],  
    component: S21066Page,
  },
  {
    path: 's21066p1',   
    canActivate:[ActiveGuard],  
    component: S21066p1Page,
  },
  {
    path: 's21066p2',   
    canActivate:[ActiveGuard],  
    component: S21066p2Page,
  },
  {
    path: 's21066p3',   
    canActivate:[ActiveGuard],  
    component: S21066p3Page,
  },
  {
    path: 's21066p4',   
    canActivate:[ActiveGuard],  
    component: S21066p4Page,
  },
  {
    path: 's21067',   
    canActivate:[ActiveGuard],  
    component: S21067Page,
  },
  {
    path: 's21068',   
    canActivate:[ActiveGuard],  
    component: S21068Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdentityRoutingModule { }
