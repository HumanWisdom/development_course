import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S22001Page } from './s109001/s109001.page';
import { S22002Page } from './s109002/s109002.page';
import { S22003Page } from './s109003/s109003.page';
import { S22003tPage } from './s109003t/s109003t.page';
import { S22004Page } from './s109004/s109004.page';
import { S22005Page } from './s109005/s109005.page';
import { S22006Page } from './s109006/s109006.page';
import { S22007Page } from './s109007/s109007.page';
import { S22008Page } from './s109008/s109008.page';
import { S22009Page } from './s109009/s109009.page';
import { S22010Page } from './s109010/s109010.page';
import { S22011Page } from './s109011/s109011.page';
import { S22011tPage } from './s109011t/s109011t.page';
import { S22012Page } from './s109012/s109012.page';
import { S22013Page } from './s109013/s109013.page';
import { S22013tPage } from './s109013t/s109013t.page';
import { S22014Page } from './s109014/s22014.page';
import { S22015Page } from './s109014/s109014.page';
import { S22016Page } from './s109015/s109015.page';
import { S22017Page } from './s109017/s22017.page';
import { S22018Page } from './s109017/s109017.page';
import { S22019Page } from './s109018/s109018.page';
import { S22020Page } from './s109019/s109019.page';
import { S22021Page } from './s109020/s109020.page';
import { S22021tPage } from './s109020t/s109020t.page';
import { S22022Page } from './s109021/s109021.page';
import { S22022p1Page } from './s109024/s22022p1.page';
import { S22022p2Page } from './s109025/s22022p2.page';
import { S22022p3Page } from './s109026/s22022p3.page';
import { S22022p4Page } from './s109027/s22022p4.page';
import { S22022p5Page } from './s109028/s22022p5.page';
import { S22022p6Page } from './s109028/s22022p6.page';
import { S22022p7Page } from './s109029/s22022p7.page';
import { S22022p8Page } from './s109030/s22022p8.page';
import { S22022p9Page } from './s109031/s22022p9.page';
import { S22022p10Page } from './s109032/s22022p10.page';
import { S22022p11Page } from './s109033/s22022p11.page';
import { S22023Page } from './s109022/s109022.page';
import { S22024Page } from './s109023/s109023.page';
import { S22024p1Page } from './s109024/s109024.page';
import { S22024p2Page } from './s109025/s109025.page';
import { S22024p3Page } from './s22024p3/s22024p3.page';
import { S22024p4Page } from './s22024p4/s22024p4.page';
import { S22024p5Page } from './s22024p5/s22024p5.page';
import { S22025Page } from './s109029/s109029.page';
import { S22026Page } from './s109030/s109030.page';
import { S22027Page } from './s109031/s109031.page';
import { S22027p1Page } from './s109032/s109032.page';
import { S22027p2Page } from './s109033/s109033.page';
import { S22027p3Page } from './s109034/s109034.page';
import { S22027p4Page } from './s109035/s109035.page';
import { S22027p5Page } from './s109036/s22027p5.page';
import { S22028Page } from './s109036/s109036.page';
import { S22029Page } from './s109037/s109037.page';
import { S22030Page } from './s109038/s22030.page';
import { S22031Page } from './s109039/s22031.page';
import { S22031tPage } from './s109052t/s22031t.page';
import { S22032Page } from './s109053/s22032.page';
import { S22033Page } from './s109038/s109038.page';
import { S22034Page } from './s109039/s109039.page';
import { S22035Page } from './s109040/s109040.page';
import { S22036Page } from './s109041/s22036.page';
import { S22037Page } from './s109042/s22037.page';
import { S22037tPage } from './s109042t/s22037t.page';
import { S22038Page } from './s109043/s22038.page';
import { S22038p1Page } from './s109044/s22038p1.page';
import { S22038p2Page } from './s109045/s22038p2.page';
import { S22038p3Page } from './s109046/s22038p3.page';
import { S22038p4Page } from './s109047/s22038p4.page';
import { S22038p5Page } from './s109048/s22038p5.page';
import { S22038p6Page } from './s109049/s22038p6.page';
import { S22038p7Page } from './s109050/s22038p7.page';
import { S22038p8Page } from './s109051/s22038p8.page';
import { S22038p9Page } from './s109052/s22038p9.page';
import { S22038p10Page } from './s109053/s22038p10.page';
import { S22039Page } from './s109054/s22039.page';
import { S22040Page } from './s109055/s22040.page';
import { S22041Page } from './s109056/s22041.page';
import { S22042Page } from './s109057/s22042.page';
import { S22042tPage } from './s109057t/s22042t.page';
import { S22043Page } from './s109058/s22043.page';
import { S22044Page } from './s22044/s22044.page';
import { S22045Page } from './s109059/s22045.page';
import { S22046Page } from './s22046/s22046.page';
import { S22047Page } from './s109061/s22047.page';
import { S22048Page } from './s109062/s22048.page';
import { S22049Page } from './s109063/s22049.page';
import { S22050Page } from './s109063/s22050.page';
import { S22051Page } from './s109063/s22051.page';
import { S22052Page } from './s109064/s22052.page';
import { S22053Page } from './s109065/s22053.page';
import { S22054Page } from './s109066/s22054.page';
import { S22055Page } from './s109067/s22055.page';
import { S22056Page } from './s109068/s22056.page';
import { S22057Page } from './s109069/s22057.page';
import { S22058Page } from './s109070/s22058.page';
import { S22059Page } from './s109071/s22059.page';
import { S22060Page } from './s109072/s22060.page';

const routes: Routes = [
  {
    path: '',    
    component: S22001Page,
  },  
  {
    path: 's22001',
    canActivate:[ActiveGuard],  
    component: S22001Page,
  },
  {
    path: 's22002',
    canActivate:[ActiveGuard],  
    component: S22002Page,
  },
  {
    path: 's22003',
    canActivate:[ActiveGuard],  
    component: S22003Page,
  },
  {
    path: 's22003t',
    canActivate:[ActiveGuard],  
    component: S22003tPage,
  },
  {
    path: 's22004',
    canActivate:[ActiveGuard],  
    component: S22004Page,
  },
  {
    path: 's22005',
    canActivate:[ActiveGuard],  
    component: S22005Page,
  },
  {
    path: 's22006',
    canActivate:[ActiveGuard],  
    component: S22006Page,
  },
  {
    path: 's22007',
    canActivate:[ActiveGuard],  
    component: S22007Page,
  },
  {
    path: 's22008',
    canActivate:[ActiveGuard],  
    component: S22008Page,
  },
  {
    path: 's22009',
    canActivate:[ActiveGuard],  
    component: S22009Page,
  },
  {
    path: 's22010',
    canActivate:[ActiveGuard],  
    component: S22010Page,
  },
  {
    path: 's22011',
    canActivate:[ActiveGuard],  
    component: S22011Page,
  },
  {
    path: 's22011t',
    canActivate:[ActiveGuard],  
    component: S22011tPage,
  },
  {
    path: 's22012',
    canActivate:[ActiveGuard],  
    component: S22012Page,
  },
  {
    path: 's22013',
    canActivate:[ActiveGuard],  
    component: S22013Page,
  },
  {
    path: 's22013t',
    canActivate:[ActiveGuard],  
    component: S22013tPage,
  },
  {
    path: 's22014',
    canActivate:[ActiveGuard],  
    component: S22014Page,
  },
  {
    path: 's22015',
    canActivate:[ActiveGuard],  
    component: S22015Page,
  },
  {
    path: 's22016',
    canActivate:[ActiveGuard],  
    component: S22016Page,
  },
  {
    path: 's22017',
    canActivate:[ActiveGuard],  
    component: S22017Page,
  },
  {
    path: 's22018',
    canActivate:[ActiveGuard],  
    component: S22018Page,
  },
  {
    path: 's22019',
    canActivate:[ActiveGuard],  
    component: S22019Page,
  },
  {
    path: 's22020',
    canActivate:[ActiveGuard],  
    component: S22020Page,
  },
  {
    path: 's22021',
    canActivate:[ActiveGuard],  
    component: S22021Page,
  },
  {
    path: 's22021t',
    canActivate:[ActiveGuard],  
    component: S22021tPage,
  },
  {
    path: 's22022',
    canActivate:[ActiveGuard],  
    component: S22022Page,
  },
  {
    path: 's22022p1',
    canActivate:[ActiveGuard],  
    component: S22022p1Page,
  },
  {
    path: 's22022p2',
    canActivate:[ActiveGuard],  
    component: S22022p2Page,
  },
  {
    path: 's22022p3',
    canActivate:[ActiveGuard],  
    component: S22022p3Page,
  },
  {
    path: 's22022p4',
    canActivate:[ActiveGuard],  
    component: S22022p4Page,
  },
  {
    path: 's22022p5',
    canActivate:[ActiveGuard],  
    component: S22022p5Page,
  },
  {
    path: 's22022p6',
    canActivate:[ActiveGuard],  
    component: S22022p6Page,
  },
  {
    path: 's22022p7',
    canActivate:[ActiveGuard],  
    component: S22022p7Page,
  },
  {
    path: 's22022p8',
    canActivate:[ActiveGuard],  
    component: S22022p8Page,
  },
  {
    path: 's22022p9',
    canActivate:[ActiveGuard],  
    component: S22022p9Page,
  },
  {
    path: 's22022p10',
    canActivate:[ActiveGuard],  
    component: S22022p10Page,
  },
  {
    path: 's22022p11',
    canActivate:[ActiveGuard],  
    component: S22022p11Page,
  },
  {
    path: 's22023',
    canActivate:[ActiveGuard],  
    component: S22023Page,
  },
  {
    path: 's22024',
    canActivate:[ActiveGuard],  
    component: S22024Page,
  },
  {
    path: 's22024p1',
    canActivate:[ActiveGuard],  
    component: S22024p1Page,
  },
  {
    path: 's22024p2',
    canActivate:[ActiveGuard],  
    component: S22024p2Page,
  },
  {
    path: 's22024p3',
    canActivate:[ActiveGuard],  
    component: S22024p3Page,
  },
  {
    path: 's22024p4',
    canActivate:[ActiveGuard],  
    component: S22024p4Page,
  },
  {
    path: 's22024p5',
    canActivate:[ActiveGuard],  
    component: S22024p5Page,
  },
  {
    path: 's22025',
    canActivate:[ActiveGuard],  
    component: S22025Page,
  },
  {
    path: 's22026',
    canActivate:[ActiveGuard],  
    component: S22026Page,
  },
  {
    path: 's22027',
    canActivate:[ActiveGuard],  
    component: S22027Page,
  },
  {
    path: 's22027p1',
    canActivate:[ActiveGuard],  
    component: S22027p1Page,
  },
  {
    path: 's22027p2',
    canActivate:[ActiveGuard],  
    component: S22027p2Page,
  },
  {
    path: 's22027p3',
    canActivate:[ActiveGuard],  
    component: S22027p3Page,
  },
  {
    path: 's22027p4',
    canActivate:[ActiveGuard],  
    component: S22027p4Page,
  },
  {
    path: 's22027p5',
    canActivate:[ActiveGuard],  
    component: S22027p5Page,
  },
  {
    path: 's22028',
    canActivate:[ActiveGuard],  
    component: S22028Page,
  },
  {
    path: 's22029',
    canActivate:[ActiveGuard],  
    component: S22029Page,
  },
  {
    path: 's22030',
    canActivate:[ActiveGuard],  
    component: S22030Page,
  },
  {
    path: 's22031',
    canActivate:[ActiveGuard],  
    component: S22031Page,
  },
  {
    path: 's22031t',
    canActivate:[ActiveGuard],  
    component: S22031tPage,
  },
  {
    path: 's22032',
    canActivate:[ActiveGuard],  
    component: S22032Page,
  },
  {
    path: 's22033',
    canActivate:[ActiveGuard],  
    component: S22033Page,
  },
  {
    path: 's22034',
    canActivate:[ActiveGuard],  
    component: S22034Page,
  },
  {
    path: 's22035',
    canActivate:[ActiveGuard],  
    component: S22035Page,
  },
  {
    path: 's22036',
    canActivate:[ActiveGuard],  
    component: S22036Page,
  },
  {
    path: 's22037',
    canActivate:[ActiveGuard],  
    component: S22037Page,
  },
  {
    path: 's22037t',
    canActivate:[ActiveGuard],  
    component: S22037tPage,
  },
  {
    path: 's22038',
    canActivate:[ActiveGuard],  
    component: S22038Page,
  },
  {
    path: 's22038p1',
    canActivate:[ActiveGuard],  
    component: S22038p1Page,
  },
  {
    path: 's22038p2',
    canActivate:[ActiveGuard],  
    component: S22038p2Page,
  }, 
  {
    path: 's22038p3',
    canActivate:[ActiveGuard],  
    component: S22038p3Page,
  },
  {
    path: 's22038p4',
    canActivate:[ActiveGuard],  
    component: S22038p4Page,
  },
  {
    path: 's22038p5',
    canActivate:[ActiveGuard],  
    component: S22038p5Page,
  },
  {
    path: 's22038p6',
    canActivate:[ActiveGuard],  
    component: S22038p6Page,
  },
  {
    path: 's22038p7',
    canActivate:[ActiveGuard],  
    component: S22038p7Page,
  },
  {
    path: 's22038p8',
    canActivate:[ActiveGuard],  
    component: S22038p8Page,
  },
  {
    path: 's22038p9',
    canActivate:[ActiveGuard],  
    component: S22038p9Page,
  },
  {
    path: 's22038p10',
    canActivate:[ActiveGuard],  
    component: S22038p10Page,
  },
  {
    path: 's22039',
    canActivate:[ActiveGuard],  
    component: S22039Page,
  },
  {
    path: 's22040',
    canActivate:[ActiveGuard],  
    component: S22040Page,
  },
  {
    path: 's22041',
    canActivate:[ActiveGuard],  
    component: S22041Page,
  },
  {
    path: 's22042',
    canActivate:[ActiveGuard],  
    component: S22042Page,
  },
  {
    path: 's22042t',
    canActivate:[ActiveGuard],  
    component: S22042tPage,
  },
  {
    path: 's22043',
    canActivate:[ActiveGuard],  
    component: S22043Page,
  },
  {
    path: 's22044',
    canActivate:[ActiveGuard],  
    component: S22044Page,
  },
  {
    path: 's22045',
    canActivate:[ActiveGuard],  
    component: S22045Page,
  },
  {
    path: 's22046',
    canActivate:[ActiveGuard],  
    component: S22046Page,
  },
  {
    path: 's22047',
    canActivate:[ActiveGuard],  
    component: S22047Page,
  },
  {
    path: 's22048',
    canActivate:[ActiveGuard],  
    component: S22048Page,
  },
  {
    path: 's22049',
    canActivate:[ActiveGuard],  
    component: S22049Page,
  },
  {
    path: 's22050',
    canActivate:[ActiveGuard],  
    component: S22050Page,
  },
  {
    path: 's22051',
    canActivate:[ActiveGuard],  
    component: S22051Page,
  },
  {
    path: 's22052',
    canActivate:[ActiveGuard],  
    component: S22052Page,
  },
  {
    path: 's22053',
    canActivate:[ActiveGuard],  
    component: S22053Page,
  },
  {
    path: 's22054',
    canActivate:[ActiveGuard],  
    component: S22054Page,
  },
  {
    path: 's22055',
    canActivate:[ActiveGuard],  
    component: S22055Page,
  },
  {
    path: 's22056',
    canActivate:[ActiveGuard],  
    component: S22056Page,
  },
  {
    path: 's22057',
    canActivate:[ActiveGuard],  
    component: S22057Page,
  },
  {
    path: 's22058',
    canActivate:[ActiveGuard],  
    component: S22058Page,
  },
  {
    path: 's22059',
    canActivate:[ActiveGuard],  
    component: S22059Page,
  },
  {
    path: 's22060',
    canActivate:[ActiveGuard],  
    component: S22060Page,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeditationRoutingModule { }
