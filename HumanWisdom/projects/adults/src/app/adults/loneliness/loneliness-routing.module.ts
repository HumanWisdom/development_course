import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S61001Page } from './s61001/s61001.page';  
import { S61002Page } from './s61002/s61002.page';  
import { S61003Page } from './s61003/s61003.page';  
import { S61004Page } from './s61004/s61004.page';  
import { S61004tPage } from './s61004t/s61004t.page';  
import { S61005Page } from './s61005/s61005.page';  
import { S61006Page } from './s61006/s61006.page';  
import { S61006tPage } from './s61006t/s61006t.page';  
import { S61007Page } from './s61007/s61007.page';  
import { S61008Page } from './s61008/s61008.page';  
import { S61009Page } from './s61009/s61009.page';  
import { S61010Page } from './s61010/s61010.page';  
import { S61011Page } from './s61011/s61011.page';  
import { S61012Page } from './s61012/s61012.page';  
import { S61013Page } from './s61013/s61013.page';  
import { S61014Page } from './s61014/s61014.page';  
import { S61015Page } from './s61015/s61015.page';  
import { S61016Page } from './s61016/s61016.page';  
import { S61017Page } from './s61017/s61017.page';  
import { S61018Page } from './s61018/s61018.page'; 
import { S61019Page } from './s61019/s61019.page';  
import { S61020Page } from './s61020/s61020.page';  
import { S61021Page } from './s61021/s61021.page';  
import { S61022Page } from './s61022/s61022.page';  
import { S61023Page } from './s61023/s61023.page';  
import { S61024Page } from './s61024/s61024.page';  
import { S61024tPage } from './s61024t/s61024t.page';  
import { S61025Page } from './s61025/s61025.page';  
import { S61026Page } from './s61026/s61026.page';  
import { S61027Page } from './s61027/s61027.page';
import { S61027tPage } from './s61027t/s61027t.page';    
import { S61028Page } from './s61028/s61028.page';  
import { S61029Page } from './s61029/s61029.page';  
import { S61030Page } from './s61030/s61030.page';  
import { S61030tPage } from './s61030t/s61030t.page';  
import { S61031Page } from './s61031/s61031.page';  
import { S61032Page } from './s61032/s61032.page';  
import { S61033Page } from './s61033/s61033.page'; 
import { S61034Page } from './s61034/s61034.page';  
import { S61035Page } from './s61035/s61035.page';  
import { S61036Page } from './s61036/s61036.page';  
import { S61036tPage } from './s61036t/s61036t.page';  
import { S61037Page } from './s61037/s61037.page';  
import { S61038Page } from './s61038/s61038.page';  
import { S61039Page } from './s61039/s61039.page';  
import { S61040Page } from './s61040/s61040.page';  
import { S61041Page } from './s61041/s61041.page';  
import { S61042Page } from './s61042/s61042.page';  
import { S61043Page } from './s61043/s61043.page';  
import { S61044Page } from './s61044/s61044.page';  
import { S61045Page } from './s61045/s61045.page';  
import { S61045tPage } from './s61045t/s61045t.page';  
import { S61046Page } from './s61046/s61046.page';  
import { S61047Page } from './s61047/s61047.page';  
import { S61048Page } from './s61048/s61048.page';  
import { S61049Page } from './s61049/s61049.page';  
import { S61050Page } from './s61050/s61050.page';  
import { S61051Page } from './s61051/s61051.page';  
import { S61051tPage } from './s61051t/s61051t.page';  
import { S61052Page } from './s61052/s61052.page';  
import { S61053Page } from './s61053/s61053.page';  
import { S61054Page } from './s61054/s61054.page';  
import { S61055Page } from './s61055/s61055.page';  
import { S61056Page } from './s61056/s61056.page';  
import { S61057Page } from './s61057/s61057.page';
import { S61057tPage } from './s61057t/s61057t.page';  
import { S61058Page } from './s61058/s61058.page';  
import { S61059Page } from './s61059/s61059.page';  
import { S61060Page } from './s61060/s61060.page';  
import { S61061Page } from './s61061/s61061.page';  
import { S61062Page } from './s61062/s61062.page';  
import { S61063Page } from './s61063/s61063.page';  
import { S61064Page } from './s61064/s61064.page';  
import { S61065Page } from './s61065/s61065.page';  
import { S61065tPage } from './s61065t/s61065t.page';  
import { S61066Page } from './s61066/s61066.page';  
import { S61067Page } from './s61067/s61067.page';  
import { S61067tPage } from './s61067t/s61067t.page';  
import { S61068Page } from './s61068/s61068.page';  
import { S61069Page } from './s61069/s61069.page';  
import { S61070Page } from './s61070/s61070.page';  
import { S61071Page } from './s61071/s61071.page';  
import { S61072Page } from './s61072/s61072.page';  
import { S61073Page } from './s61073/s61073.page';  
import { S61074Page } from './s61074/s61074.page';  
import { S61074tPage } from './s61074t/s61074t.page';  
import { S61075Page } from './s61075/s61075.page';  
import { S61076Page } from './s61076/s61076.page';  
import { S61076tPage } from './s61076t/s61076t.page';  
import { S61077Page } from './s61077/s61077.page';  
import { S61078Page } from './s61078/s61078.page';  
import { S61079Page } from './s61079/s61079.page';  
import { S61080Page } from './s61080/s61080.page';  
import { S61080tPage } from './s61080t/s61080t.page';  
import { S61081Page } from './s61081/s61081.page';  
import { S61082Page } from './s61082/s61082.page';  
import { S61083Page } from './s61083/s61083.page';  
import { S61084Page } from './s61084/s61084.page';  
import { S61085Page } from './s61085/s61085.page';  
import { S61086Page } from './s61086/s61086.page';  
import { S61086tPage } from './s61086t/s61086t.page';  
import { S61087Page } from './s61087/s61087.page';  
import { S61088Page } from './s61088/s61088.page';  
import { S61089Page } from './s61089/s61089.page';  
import { S61090Page } from './s61090/s61090.page';  
import { S61090tPage } from './s61090t/s61090t.page';  
import { S61091Page } from './s61091/s61091.page';  
import { S61092Page } from './s61092/s61092.page';  
import { S61093Page } from './s61093/s61093.page';  
import { S61094Page } from './s61094/s61094.page'; 
import { S61095Page } from './s61095/s61095.page';  
import { S61095tPage } from './s61095t/s61095t.page';  
import { S61096Page } from './s61096/s61096.page'; 
import { S61097Page } from './s61097/s61097.page';  
import { S61098Page } from './s61098/s61098.page';  
import { S61099Page } from './s61099/s61099.page'; 
import { S61100Page } from './s61100/s61100.page';  
import { S61101Page } from './s61101/s61101.page';  
import { S61102Page } from './s61102/s61102.page';  
import { S61103Page } from './s61103/s61103.page';  
import { S61104Page } from './s61104/s61104.page';  
import { S61104tPage } from './s61104t/s61104t.page';  
import { S61105Page } from './s61105/s61105.page';  
import { S61106Page } from './s61106/s61106.page';  
import { S61107Page } from './s61107/s61107.page';  
import { S61108Page } from './s61108/s61108.page';  
import { S61109Page } from './s61109/s61109.page';  
import { S61110Page } from './s61110/s61110.page';  
import { S61111Page } from './s61111/s61111.page';  
import { S61112Page } from './s61112/s61112.page';  
import { S61113Page } from './s61113/s61113.page';  

const routes: Routes = [
  {
    path: '',   
      component: S61001Page,
  },
  {
    path: 's61001',   
    canActivate:[ActiveGuard],  
    component: S61001Page,
  },
  {
    path: 's61002',   
    canActivate:[ActiveGuard],  
    component: S61002Page,
  },
  {
    path: 's61003',   
    canActivate:[ActiveGuard],  
    component: S61003Page,
  },
  {
    path: 's61004',   
    canActivate:[ActiveGuard],  
    component: S61004Page,
  },
  {
    path: 's61004t',   
    canActivate:[ActiveGuard],  
    component: S61004tPage,
  },
  {
    path: 's61005',   
    canActivate:[ActiveGuard],  
    component: S61005Page,
  },
  {
    path: 's61006',   
    canActivate:[ActiveGuard],  
    component: S61006Page,
  },
  {
    path: 's61006t',   
    canActivate:[ActiveGuard],  
    component: S61006tPage,
  },
  {
    path: 's61007',   
    canActivate:[ActiveGuard],  
    component: S61007Page,
  },
  {
    path: 's61008',   
    canActivate:[ActiveGuard],  
    component: S61008Page,
  },
  {
    path: 's61009',   
    canActivate:[ActiveGuard],  
    component: S61009Page,
  },
  {
    path: 's61010',   
    canActivate:[ActiveGuard],  
    component: S61010Page,
  },
  {
    path: 's61011',   
    canActivate:[ActiveGuard],  
    component: S61011Page,
  },
  {
    path: 's61012',   
    canActivate:[ActiveGuard],  
    component: S61012Page,
  },
  {
    path: 's61013',   
    canActivate:[ActiveGuard],  
    component: S61013Page,
  },
  {
    path: 's61014',   
    canActivate:[ActiveGuard],  
    component: S61014Page,
  },  
  {
    path: 's61015',   
    canActivate:[ActiveGuard],  
    component: S61015Page,
  },
  {
    path: 's61016',   
    canActivate:[ActiveGuard],  
    component: S61016Page,
  },
  {
    path: 's61017',   
    canActivate:[ActiveGuard],  
    component: S61017Page,
  },
  {
    path: 's61018',   
    canActivate:[ActiveGuard],  
    component: S61018Page,
  }, 
  {
    path: 's61019',   
    canActivate:[ActiveGuard],  
    component: S61019Page,
  },
  {
    path: 's61020',   
    canActivate:[ActiveGuard],  
    component: S61020Page,
  },
  {
    path: 's61021',   
    canActivate:[ActiveGuard],  
    component: S61021Page,
  },
  {
    path: 's61022',   
    canActivate:[ActiveGuard],  
    component: S61022Page,
  },
  {
    path: 's61023',   
    canActivate:[ActiveGuard],  
    component: S61023Page,
  },
  {
    path: 's61024',   
    canActivate:[ActiveGuard],  
    component: S61024Page,
  },
  {
    path: 's61024t',   
    canActivate:[ActiveGuard],  
    component: S61024tPage,
  },
  {
    path: 's61025',   
    canActivate:[ActiveGuard],  
    component: S61025Page,
  },
  {
    path: 's61026',   
    canActivate:[ActiveGuard],  
    component: S61026Page,
  },
  {
    path: 's61027',   
    canActivate:[ActiveGuard],  
    component: S61027Page,
  },
  {
    path: 's61027t',   
    canActivate:[ActiveGuard],  
    component: S61027tPage,
  },
  {
    path: 's61028',   
    canActivate:[ActiveGuard],  
    component: S61028Page,
  },
  {
    path: 's61029',   
    canActivate:[ActiveGuard],  
    component: S61029Page,
  },
  {
    path: 's61030',   
    canActivate:[ActiveGuard],  
    component: S61030Page,
  },
  {
    path: 's61030t',   
    canActivate:[ActiveGuard],  
    component: S61030tPage,
  },
  {
    path: 's61031',   
    canActivate:[ActiveGuard],  
    component: S61031Page,
  },
  {
    path: 's61032',   
    canActivate:[ActiveGuard],  
    component: S61032Page,
  },
  {
    path: 's61033',   
    canActivate:[ActiveGuard],  
    component: S61033Page,
  },  
  {
    path: 's61034',   
    canActivate:[ActiveGuard],  
    component: S61034Page,
  },  
  {
    path: 's61035',   
    canActivate:[ActiveGuard],  
    component: S61035Page,
  }, 
  {
    path: 's61036',   
    canActivate:[ActiveGuard],  
    component: S61036Page,
  },
  {
    path: 's61036t',   
    canActivate:[ActiveGuard],  
    component: S61036tPage,
  },
  {
    path: 's61037',   
    canActivate:[ActiveGuard],  
    component: S61037Page,
  }, 
  {
    path: 's61038',   
    canActivate:[ActiveGuard],  
    component: S61038Page,
  }, 
  {
    path: 's61039',   
    canActivate:[ActiveGuard],  
    component: S61039Page,
  },
  {
    path: 's61040',   
    canActivate:[ActiveGuard],  
    component: S61040Page,
  },
  {
    path: 's61041',   
    canActivate:[ActiveGuard],  
    component: S61041Page,
  },
  {
    path: 's61042',   
    canActivate:[ActiveGuard],  
    component: S61042Page,
  },
  {
    path: 's61043',   
    canActivate:[ActiveGuard],  
    component: S61043Page,
  },
  {
    path: 's61044',   
    canActivate:[ActiveGuard],  
    component: S61044Page,
  },
  {
    path: 's61045',   
    canActivate:[ActiveGuard],  
    component: S61045Page,
  },
  {
    path: 's61045t',   
    canActivate:[ActiveGuard],  
    component: S61045tPage,
  },
  {
    path: 's61046',   
    canActivate:[ActiveGuard],  
    component: S61046Page,
  },
  {
    path: 's61047',   
    canActivate:[ActiveGuard],  
    component: S61047Page,
  },
  
  {
    path: 's61048',   
    canActivate:[ActiveGuard],  
    component: S61048Page,
  },
  {
    path: 's61049',   
    canActivate:[ActiveGuard],  
    component: S61049Page,
  },
  {
    path: 's61050',   
    canActivate:[ActiveGuard],  
    component: S61050Page,
  },
  {
    path: 's61051',   
    canActivate:[ActiveGuard],  
    component: S61051Page,
  },
  {
    path: 's61051t',   
    canActivate:[ActiveGuard],  
    component: S61051tPage,
  },
  {
    path: 's61052',   
    canActivate:[ActiveGuard],  
    component: S61052Page,
  },
  {
    path: 's61053',   
    canActivate:[ActiveGuard],  
    component: S61053Page,
  },
  {
    path: 's61054',   
    canActivate:[ActiveGuard],  
    component: S61054Page,
  },
  {
    path: 's61055',   
    canActivate:[ActiveGuard],  
    component: S61055Page,
  },
  {
    path: 's61056',   
    canActivate:[ActiveGuard],  
    component: S61056Page,
  },
  {
    path: 's61057',   
    canActivate:[ActiveGuard],  
    component: S61057Page,
  },
  {
    path: 's61057t',   
    canActivate:[ActiveGuard],  
    component: S61057tPage,
  },
  {
    path: 's61058',   
    canActivate:[ActiveGuard],  
    component: S61058Page,
  },
  {
    path: 's61059',   
    canActivate:[ActiveGuard],  
    component: S61059Page,
  },
  {
    path: 's61060',   
    canActivate:[ActiveGuard],  
    component: S61060Page,
  },
  {
    path: 's61061',   
    canActivate:[ActiveGuard],  
    component: S61061Page,
  },
  {
    path: 's61062',   
    canActivate:[ActiveGuard],  
    component: S61062Page,
  },
  {
    path: 's61063',   
    canActivate:[ActiveGuard],  
    component: S61063Page,
  },
  {
    path: 's61064',   
    canActivate:[ActiveGuard],  
    component: S61064Page,
  },
  {
    path: 's61065',   
    canActivate:[ActiveGuard],  
    component: S61065Page,
  },
  {
    path: 's61065t',   
    canActivate:[ActiveGuard],  
    component: S61065tPage,
  },
  {
    path: 's61066',   
    canActivate:[ActiveGuard],  
    component: S61066Page,
  },
  {
    path: 's61067',   
    canActivate:[ActiveGuard],  
    component: S61067Page,
  },
  {
    path: 's61067t',   
    canActivate:[ActiveGuard],  
    component: S61067tPage,
  },
  {
    path: 's61068',   
    canActivate:[ActiveGuard],  
    component: S61068Page,
  },  
  {
    path: 's61069',   
    canActivate:[ActiveGuard],  
    component: S61069Page,
  },
  {
    path: 's61070',   
    canActivate:[ActiveGuard],  
    component: S61070Page,
  },
  {
    path: 's61071',   
    canActivate:[ActiveGuard],  
    component: S61071Page,
  },
  {
    path: 's61072',   
    canActivate:[ActiveGuard],  
    component: S61072Page,
  },
  {
    path: 's61073',   
    canActivate:[ActiveGuard],  
    component: S61073Page,
  },
  {
    path: 's61074',   
    canActivate:[ActiveGuard],  
    component: S61074Page,
  },
  {
    path: 's61074t',   
    canActivate:[ActiveGuard],  
    component: S61074tPage,
  },
  {
    path: 's61075',   
    canActivate:[ActiveGuard],  
    component: S61075Page,
  },
  {
    path: 's61076',   
    canActivate:[ActiveGuard],  
    component: S61076Page,
  },
  {
    path: 's61076t',   
    canActivate:[ActiveGuard],  
    component: S61076tPage,
  },
  {
    path: 's61077',   
    canActivate:[ActiveGuard],  
    component: S61077Page,
  },
  {
    path: 's61078',   
    canActivate:[ActiveGuard],  
    component: S61078Page,
  },
  {
    path: 's61079',   
    canActivate:[ActiveGuard],  
    component: S61079Page,
  },
  {
    path: 's61080',   
    canActivate:[ActiveGuard],  
    component: S61080Page,
  },
  {
    path: 's61080t',   
    canActivate:[ActiveGuard],  
    component: S61080tPage,
  },
  {
    path: 's61081',   
    canActivate:[ActiveGuard],  
    component: S61081Page,
  },
  {
    path: 's61082',   
    canActivate:[ActiveGuard],  
    component: S61082Page,
  },  
  {
    path: 's61083',   
    canActivate:[ActiveGuard],  
    component: S61083Page,
  },
  {
    path: 's61084',   
    canActivate:[ActiveGuard],  
    component: S61084Page,
  },
  {
    path: 's61085',   
    canActivate:[ActiveGuard],  
    component: S61085Page,
  }, 
  {
    path: 's61086',   
    canActivate:[ActiveGuard],  
    component: S61086Page,
  },
  {
    path: 's61086t',   
    canActivate:[ActiveGuard],  
    component: S61086tPage,
  },
  {
    path: 's61087',   
    canActivate:[ActiveGuard],  
    component: S61087Page,
  },
  {
    path: 's61088',   
    canActivate:[ActiveGuard],  
    component: S61088Page,
  },
  {
    path: 's61089',   
    canActivate:[ActiveGuard],  
    component: S61089Page,
  },
  {
    path: 's61090',   
    canActivate:[ActiveGuard],  
    component: S61090Page,
  },
  {
    path: 's61090t',   
    canActivate:[ActiveGuard],  
    component: S61090tPage,
  },
  {
    path: 's61091',   
    canActivate:[ActiveGuard],  
    component: S61091Page,
  },
  {
    path: 's61092',   
    canActivate:[ActiveGuard],  
    component: S61092Page,
  },
  {
    path: 's61093',   
    canActivate:[ActiveGuard],  
    component: S61093Page,
  },
  {
    path: 's61094',   
    canActivate:[ActiveGuard],  
    component: S61094Page,
  }, 
  {
    path: 's61095',   
    canActivate:[ActiveGuard],  
    component: S61095Page,
  },
  {
    path: 's61095t',   
    canActivate:[ActiveGuard],  
    component: S61095tPage,
  },
  {
    path: 's61096',   
    canActivate:[ActiveGuard],  
    component: S61096Page,
  },  
  {
    path: 's61097',   
    canActivate:[ActiveGuard],  
    component: S61097Page,
  },
  {
    path: 's61098',   
    canActivate:[ActiveGuard],  
    component: S61098Page,
  },
  {
    path: 's61099',   
    canActivate:[ActiveGuard],  
    component: S61099Page,
  }, 
  {
    path: 's61100',   
    canActivate:[ActiveGuard],  
    component: S61100Page,
  },  
  {
    path: 's61101',   
    canActivate:[ActiveGuard],  
    component: S61101Page,
  },
  {
    path: 's61102',   
    canActivate:[ActiveGuard],  
    component: S61102Page,
  },
  {
    path: 's61103',   
    canActivate:[ActiveGuard],  
    component: S61103Page,
  },
  {
    path: 's61104',   
    canActivate:[ActiveGuard],  
    component: S61104Page,
  },
  {
    path: 's61104t',   
    canActivate:[ActiveGuard],  
    component: S61104tPage,
  },
  {
    path: 's61105',   
    canActivate:[ActiveGuard],  
    component: S61105Page,
  },
  {
    path: 's61106',   
    canActivate:[ActiveGuard],  
    component: S61106Page,
  },
  {
    path: 's61107',   
    canActivate:[ActiveGuard],  
    component: S61107Page,
  }, 
  {
    path: 's61108',   
    canActivate:[ActiveGuard],  
    component: S61108Page,
  },
  {
    path: 's61109',   
    canActivate:[ActiveGuard],  
    component: S61109Page,
  },
  {
    path: 's61110',   
    canActivate:[ActiveGuard],  
    component: S61110Page,
  },
  {
    path: 's61111',   
    canActivate:[ActiveGuard],  
    component: S61111Page,
  },
  {
    path: 's61112',   
    canActivate:[ActiveGuard],  
    component: S61112Page,
  },
  {
    path: 's61113',   
    canActivate:[ActiveGuard],  
    component: S61113Page,
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LonelinessRoutingModule { }
