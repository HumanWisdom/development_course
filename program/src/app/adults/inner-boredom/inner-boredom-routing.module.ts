import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S56001Page } from './s56001/s56001.page';  
import { S56002Page } from './s56002/s56002.page';  
import { S56003Page } from './s56003/s56003.page';  
import { S56003tPage } from './s56003t/s56003t.page';  
import { S56004Page } from './s56004/s56004.page';  
import { S56005Page } from './s56005/s56005.page';  
import { S56006Page } from './s56006/s56006.page'; 
import { S56006tPage } from './s56006t/s56006t.page';  
import { S56007Page } from './s56007/s56007.page';  
import { S56008Page } from './s56008/s56008.page';  
import { S56009Page } from './s56009/s56009.page';
import { S56010Page } from './s56010/s56010.page';  
import { S56011Page } from './s56011/s56011.page'; 
import { S56012Page } from './s56012/s56012.page';  
import { S56013Page } from './s56013/s56013.page';  
import { S56014Page } from './s56014/s56014.page';  
import { S56015Page } from './s56015/s56015.page';  
import { S56016Page } from './s56016/s56016.page';  
import { S56017Page } from './s56017/s56017.page';  
import { S56017tPage } from './s56017t/s56017t.page';  
import { S56018Page } from './s56018/s56018.page'; 
import { S56019Page } from './s56019/s56019.page';  
import { S56020Page } from './s56020/s56020.page';  
import { S56021Page } from './s56021/s56021.page';  
import { S56022Page } from './s56022/s56022.page';  
import { S56023Page } from './s56023/s56023.page';  
import { S56024Page } from './s56024/s56024.page';  
import { S56025Page } from './s56025/s56025.page';  
import { S56025tPage } from './s56025t/s56025t.page';  
import { S56026Page } from './s56026/s56026.page';  
import { S56027Page } from './s56027/s56027.page';  
import { S56028Page } from './s56028/s56028.page';  
import { S56029Page } from './s56029/s56029.page';  
import { S56030Page } from './s56030/s56030.page';  
import { S56031Page } from './s56031/s56031.page';  
import { S56032Page } from './s56032/s56032.page';  
import { S56033Page } from './s56033/s56033.page';  
import { S56033tPage } from './s56033t/s56033t.page';  
import { S56034Page } from './s56034/s56034.page';  
import { S56035Page } from './s56035/s56035.page';  
import { S56035tPage } from './s56035t/s56035t.page';  
import { S56036Page } from './s56036/s56036.page';  
import { S56037Page } from './s56037/s56037.page';
import { S56037tPage } from './s56037t/s56037t.page';  
import { S56038Page } from './s56038/s56038.page';  
import { S56039Page } from './s56039/s56039.page';  
import { S56040Page } from './s56040/s56040.page';  
import { S56040tPage } from './s56040t/s56040t.page';  
import { S56041Page } from './s56041/s56041.page';  
import { S56042Page } from './s56042/s56042.page';  
import { S56043Page } from './s56043/s56043.page';  
import { S56044Page } from './s56044/s56044.page';  
import { S56045Page } from './s56045/s56045.page';  
import { S56046Page } from './s56046/s56046.page';  
import { S56047Page } from './s56047/s56047.page';  
import { S56048Page } from './s56048/s56048.page';  
import { S56049Page } from './s56049/s56049.page'; 
import { S56050Page } from './s56050/s56050.page';  
import { S56051Page } from './s56051/s56051.page';  
import { S56052Page } from './s56052/s56052.page';  
import { S56053Page } from './s56053/s56053.page';  
import { S56054Page } from './s56054/s56054.page';  

const routes: Routes = [
  {
    path: '',   
    component: S56001Page,
  },
  {
    path: 's56001',   
    canActivate:[ActiveGuard],  
    component: S56001Page,
  },
  {
    path: 's56002',   
    canActivate:[ActiveGuard],  
    component: S56002Page,
  },
  {
    path: 's56003',   
    canActivate:[ActiveGuard],  
    component: S56003Page,
  },
  {
    path: 's56003t',   
    canActivate:[ActiveGuard],  
    component: S56003tPage,
  }, 
  {
    path: 's56004',   
    canActivate:[ActiveGuard],  
    component: S56004Page,
  },  
  {
    path: 's56005',   
    canActivate:[ActiveGuard],  
    component: S56005Page,
  },
  {
    path: 's56006',   
    canActivate:[ActiveGuard],  
    component: S56006Page,
  },
  {
    path: 's56006t',   
    canActivate:[ActiveGuard],  
    component: S56006tPage,
  },
  {
    path: 's56007',   
    canActivate:[ActiveGuard],  
    component: S56007Page,
  },
  {
    path: 's56008',   
    canActivate:[ActiveGuard],  
    component: S56008Page,
  },
  {
    path: 's56009',   
    canActivate:[ActiveGuard],  
    component: S56009Page,
  }, 
  {
    path: 's56010',   
    canActivate:[ActiveGuard],  
    component: S56010Page,
  },  
  {
    path: 's56011',   
    canActivate:[ActiveGuard],  
    component: S56011Page,
  },
  {
    path: 's56012',   
    canActivate:[ActiveGuard],  
    component: S56012Page,
  }, 
  {
    path: 's56013',   
    canActivate:[ActiveGuard],  
    component: S56013Page,
  },
  {
    path: 's56014',   
    canActivate:[ActiveGuard],  
    component: S56014Page,
  }, 
  {
    path: 's56015',   
    canActivate:[ActiveGuard],  
    component: S56015Page,
  },
  {
    path: 's56016',   
    canActivate:[ActiveGuard],  
    component: S56016Page,
  },
  {
    path: 's56017',   
    canActivate:[ActiveGuard],  
    component: S56017Page,
  },
  {
    path: 's56017t',   
    canActivate:[ActiveGuard],  
    component: S56017tPage,
  },
  {
    path: 's56018',   
    canActivate:[ActiveGuard],  
    component: S56018Page,
  }, 
  {
    path: 's56019',   
    canActivate:[ActiveGuard],  
    component: S56019Page,
  },
  {
    path: 's56020',   
    canActivate:[ActiveGuard],  
    component: S56020Page,
  },
  {
    path: 's56021',   
    canActivate:[ActiveGuard],  
    component: S56021Page,
  },
  {
    path: 's56022',   
    canActivate:[ActiveGuard],  
    component: S56022Page,
  },
  {
    path: 's56023',   
    canActivate:[ActiveGuard],  
    component: S56023Page,
  },
  {
    path: 's56024',   
    canActivate:[ActiveGuard],  
    component: S56024Page,
  },
  {
    path: 's56025',   
    canActivate:[ActiveGuard],  
    component: S56025Page,
  },
  {
    path: 's56025t',   
    canActivate:[ActiveGuard],  
    component: S56025tPage,
  },
  {
    path: 's56026',   
    canActivate:[ActiveGuard],  
    component: S56026Page,
  },
  {
    path: 's56027',   
    canActivate:[ActiveGuard],  
    component: S56027Page,
  },
  {
    path: 's56028',   
    canActivate:[ActiveGuard],  
    component: S56028Page,
  },
  {
    path: 's56029',   
    canActivate:[ActiveGuard],  
    component: S56029Page,
  },
  {
    path: 's56030',   
    canActivate:[ActiveGuard],  
    component: S56030Page,
  },
  {
    path: 's56031',   
    canActivate:[ActiveGuard],  
    component: S56031Page,
  },
  {
    path: 's56032',   
    canActivate:[ActiveGuard],  
    component: S56032Page,
  },
  {
    path: 's56033',   
    canActivate:[ActiveGuard],  
    component: S56033Page,
  },
  {
    path: 's56033t',   
    canActivate:[ActiveGuard],  
    component: S56033tPage,
  },  
  {
    path: 's56034',   
    canActivate:[ActiveGuard],  
    component: S56034Page,
  },  
  {
    path: 's56035',   
    canActivate:[ActiveGuard],  
    component: S56035Page,
  },
  {
    path: 's56035t',   
    canActivate:[ActiveGuard],  
    component: S56035tPage,
  }, 
  {
    path: 's56036',   
    canActivate:[ActiveGuard],  
    component: S56036Page,
  },
  {
    path: 's56037',   
    canActivate:[ActiveGuard],  
    component: S56037Page,
  },
  {
    path: 's56037t',   
    canActivate:[ActiveGuard],  
    component: S56037tPage,
  }, 
  {
    path: 's56038',   
    canActivate:[ActiveGuard],  
    component: S56038Page,
  },  
  {
    path: 's56039',   
    canActivate:[ActiveGuard],  
    component: S56039Page,
  },
  {
    path: 's56040',   
    canActivate:[ActiveGuard],  
    component: S56040Page,
  },
  {
    path: 's56040t',   
    canActivate:[ActiveGuard],  
    component: S56040tPage,
  },
  {
    path: 's56041',   
    canActivate:[ActiveGuard],  
    component: S56041Page,
  },
  {
    path: 's56042',   
    canActivate:[ActiveGuard],  
    component: S56042Page,
  },
  {
    path: 's56043',   
    canActivate:[ActiveGuard],  
    component: S56043Page,
  },
  {
    path: 's56044',   
    canActivate:[ActiveGuard],  
    component: S56044Page,
  },
  {
    path: 's56045',   
    canActivate:[ActiveGuard],  
    component: S56045Page,
  },
  {
    path: 's56046',   
    canActivate:[ActiveGuard],  
    component: S56046Page,
  },
  {
    path: 's56047',   
    canActivate:[ActiveGuard],  
    component: S56047Page,
  },
  {
    path: 's56048',   
    canActivate:[ActiveGuard],  
    component: S56048Page,
  },
  {
    path: 's56049',   
    canActivate:[ActiveGuard],  
    component: S56049Page,
  }, 
  {
    path: 's56050',   
    canActivate:[ActiveGuard],  
    component: S56050Page,
  },
  {
    path: 's56051',   
    canActivate:[ActiveGuard],  
    component: S56051Page,
  },  
  {
    path: 's56052',   
    canActivate:[ActiveGuard],  
    component: S56052Page,
  },
  {
    path: 's56053',   
    canActivate:[ActiveGuard],  
    component: S56053Page,
  },
  {
    path: 's56054',   
    canActivate:[ActiveGuard],  
    component: S56054Page,
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnerBoredomRoutingModule { }
