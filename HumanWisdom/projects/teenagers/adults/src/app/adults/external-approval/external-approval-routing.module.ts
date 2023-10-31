import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S91001Page } from './s91001/s91001.page';  
import { S91002Page } from './s91002/s91002.page';  
import { S91003Page } from './s91003/s91003.page';  
import { S91003tPage } from './s91003t/s91003t.page';  
import { S91004Page } from './s91004/s91004.page';  
import { S91005Page } from './s91005/s91005.page';  
import { S91006Page } from './s91006/s91006.page';  
import { S91007Page } from './s91007/s91007.page';  
import { S91008Page } from './s91008/s91008.page';  
import { S91009Page } from './s91009/s91009.page';  
import { S91010Page } from './s91010/s91010.page';  
import { S91011Page } from './s91011/s91011.page';  
import { S91011tPage } from './s91011t/s91011t.page';  
import { S91012Page } from './s91012/s91012.page';  
import { S91013Page } from './s91013/s91013.page';  
import { S91013tPage } from './s91013t/s91013t.page';  
import { S91014Page } from './s91014/s91014.page';  
import { S91015Page } from './s91015/s91015.page';  
import { S91016Page } from './s91016/s91016.page';  
import { S91017Page } from './s91017/s91017.page';  
import { S91018Page } from './s91018/s91018.page';  
import { S91019Page } from './s91019/s91019.page';  
import { S91020Page } from './s91020/s91020.page';  
import { S91021Page } from './s91021/s91021.page';  
import { S91022Page } from './s91022/s91022.page';  
import { S91023Page } from './s91023/s91023.page';  
import { S91024Page } from './s91024/s91024.page';  
import { S91025Page } from './s91025/s91025.page';  
import { S91026Page } from './s91026/s91026.page';  
import { S91027Page } from './s91027/s91027.page';  
import { S91028Page } from './s91028/s91028.page';  
import { S91029Page } from './s91029/s91029.page';  
import { S91029tPage } from './s91029t/s91029t.page';  
import { S91030Page } from './s91030/s91030.page';  
import { S91031Page } from './s91031/s91031.page';  
import { S91032Page } from './s91032/s91032.page';  
import { S91032tPage } from './s91032t/s91032t.page';  
import { S91033Page } from './s91033/s91033.page';  
import { S91034Page } from './s91034/s91034.page';  
import { S91035Page } from './s91035/s91035.page';  
import { S91036Page } from './s91036/s91036.page';  
import { S91036tPage } from './s91036t/s91036t.page';  
import { S91037Page } from './s91037/s91037.page';  
import { S91038Page } from './s91038/s91038.page';  
import { S91039Page } from './s91039/s91039.page';  
import { S91039tPage } from './s91039t/s91039t.page';  
import { S91040Page } from './s91040/s91040.page';  
import { S91041Page } from './s91041/s91041.page';  
import { S91041tPage } from './s91041t/s91041t.page';  
import { S91042Page } from './s91042/s91042.page';  
import { S91043Page } from './s91043/s91043.page';  
import { S91044Page } from './s91044/s91044.page';  
import { S91045Page } from './s91045/s91045.page';  
import { S91045tPage } from './s91045t/s91045t.page';  
import { S91046Page } from './s91046/s91046.page';  
import { S91047Page } from './s91047/s91047.page';  
import { S91048Page } from './s91048/s91048.page';  
import { S91049Page } from './s91049/s91049.page';  
import { S91050Page } from './s91050/s91050.page';  
import { S91051Page } from './s91051/s91051.page';  
import { S91052Page } from './s91052/s91052.page';  
import { S91053Page } from './s91053/s91053.page';  
import { S91053tPage } from './s91053t/s91053t.page';  
import { S91054Page } from './s91054/s91054.page';  
import { S91055Page } from './s91055/s91055.page';  
import { S91056Page } from './s91056/s91056.page';  
import { S91057Page } from './s91057/s91057.page';  
import { S91057tPage } from './s91057t/s91057t.page';  
import { S91058Page } from './s91058/s91058.page';  
import { S91059Page } from './s91059/s91059.page';  
import { S91060Page } from './s91060/s91060.page';  
import { S91060tPage } from './s91060t/s91060t.page';  
import { S91061Page } from './s91061/s91061.page';  
import { S91062Page } from './s91062/s91062.page';  
import { S91062tPage } from './s91062t/s91062t.page';  
import { S91063Page } from './s91063/s91063.page';  
import { S91064Page } from './s91064/s91064.page';  
import { S91065tPage } from './s91065t/s91065t.page';  
import { S91065Page } from './s91065/s91065.page';  
import { S91066Page } from './s91066/s91066.page';  
import { S91067Page } from './s91067/s91067.page';  
import { S91068Page } from './s91068/s91068.page';  
import { S91069Page } from './s91069/s91069.page';  
import { S91070Page } from './s91070/s91070.page';  
import { S91071Page } from './s91071/s91071.page';  
import { S91072Page } from './s91072/s91072.page';  
import { S91073Page } from './s91073/s91073.page';  
import { S91074Page } from './s91074/s91074.page';  
import { S91074tPage } from './s91074t/s91074t.page';  
import { S91075Page } from './s91075/s91075.page';  
import { S91076Page } from './s91076/s91076.page';  
import { S91077Page } from './s91077/s91077.page';  
import { S91078Page } from './s91078/s91078.page';  
import { S91079Page } from './s91079/s91079.page';  
import { S91080Page } from './s91080/s91080.page';  
import { S91081Page } from './s91081/s91081.page';  
import { S91082Page } from './s91082/s91082.page';  
import { S91083Page } from './s91083/s91083.page';  
import { S91084Page } from './s91084/s91084.page';  

const routes: Routes = [
  {
    path: '',   
     component: S91001Page,
  },
  {
    path: 's91001',   
    canActivate:[ActiveGuard],  
    component: S91001Page,
  },
  {
    path: 's91002',   
    canActivate:[ActiveGuard],  
    component: S91002Page,
  },
  {
    path: 's91003',   
    canActivate:[ActiveGuard],  
    component: S91003Page,
  },
  {
    path: 's91003t',   
    canActivate:[ActiveGuard],  
    component: S91003tPage,
  },
  {
    path: 's91004',   
    canActivate:[ActiveGuard],  
    component: S91004Page,
  },
  {
    path: 's91005',   
    canActivate:[ActiveGuard],  
    component: S91005Page,
  },
  {
    path: 's91006',   
    canActivate:[ActiveGuard],  
    component: S91006Page,
  },
  {
    path: 's91007',   
    canActivate:[ActiveGuard],  
    component: S91007Page,
  },
  {
    path: 's91008',   
    canActivate:[ActiveGuard],  
    component: S91008Page,
  },
  {
    path: 's91009',   
    canActivate:[ActiveGuard],  
    component: S91009Page,
  },
  {
    path: 's91010',   
    canActivate:[ActiveGuard],  
    component: S91010Page,
  },
  {
    path: 's91011',   
    canActivate:[ActiveGuard],  
    component: S91011Page,
  },
  {
    path: 's91011t',   
    canActivate:[ActiveGuard],  
    component: S91011tPage,
  },
  {
    path: 's91012',   
    canActivate:[ActiveGuard],  
    component: S91012Page,
  },
  {
    path: 's91013',   
    canActivate:[ActiveGuard],  
    component: S91013Page,
  },
  {
    path: 's91013t',   
    canActivate:[ActiveGuard],  
    component: S91013tPage,
  },
  {
    path: 's91014',   
    canActivate:[ActiveGuard],  
    component: S91014Page,
  },
  {
    path: 's91015',   
    canActivate:[ActiveGuard],  
    component: S91015Page,
  },
  {
    path: 's91016',   
    canActivate:[ActiveGuard],  
    component: S91016Page,
  },
  {
    path: 's91017',   
    canActivate:[ActiveGuard],  
    component: S91017Page,
  },
  {
    path: 's91018',   
    canActivate:[ActiveGuard],  
    component: S91018Page,
  },
  {
    path: 's91019',   
    canActivate:[ActiveGuard],  
    component: S91019Page,
  },
  {
    path: 's91020',   
    canActivate:[ActiveGuard],  
    component: S91020Page,
  },
  {
    path: 's91021',   
    canActivate:[ActiveGuard],  
    component: S91021Page,
  },
  {
    path: 's91022',   
    canActivate:[ActiveGuard],  
    component: S91022Page,
  },
  {
    path: 's91023',   
    canActivate:[ActiveGuard],  
    component: S91023Page,
  },
  {
    path: 's91024',   
    canActivate:[ActiveGuard],  
    component: S91024Page,
  },
  {
    path: 's91025',   
    canActivate:[ActiveGuard],  
    component: S91025Page,
  },
  {
    path: 's91026',   
    canActivate:[ActiveGuard],  
    component: S91026Page,
  },
  {
    path: 's91027',   
    canActivate:[ActiveGuard],  
    component: S91027Page,
  },
  {
    path: 's91028',   
    canActivate:[ActiveGuard],  
    component: S91028Page,
  },
  {
    path: 's91029',   
    canActivate:[ActiveGuard],  
    component: S91029Page,
  },
  {
    path: 's91029t',   
    canActivate:[ActiveGuard],  
    component: S91029tPage,
  },
  {
    path: 's91030',   
    canActivate:[ActiveGuard],  
    component: S91030Page,
  },
  {
    path: 's91031',   
    canActivate:[ActiveGuard],  
    component: S91031Page,
  },
  {
    path: 's91032',   
    canActivate:[ActiveGuard],  
    component: S91032Page,
  },
  {
    path: 's91032t',   
    canActivate:[ActiveGuard],  
    component: S91032tPage,
  },
  {
    path: 's91033',   
    canActivate:[ActiveGuard],  
    component: S91033Page,
  },
  {
    path: 's91034',   
    canActivate:[ActiveGuard],  
    component: S91034Page,
  },
  {
    path: 's91035',   
    canActivate:[ActiveGuard],  
    component: S91035Page,
  },
  {
    path: 's91036',   
    canActivate:[ActiveGuard],  
    component: S91036Page,
  },
  {
    path: 's91036t',   
    canActivate:[ActiveGuard],  
    component: S91036tPage,
  },
  {
    path: 's91037',   
    canActivate:[ActiveGuard],  
    component: S91037Page,
  },
  {
    path: 's91038',   
    canActivate:[ActiveGuard],  
    component: S91038Page,
  },
  {
    path: 's91039',   
    canActivate:[ActiveGuard],  
    component: S91039Page,
  },
  {
    path: 's91039t',   
    canActivate:[ActiveGuard],  
    component: S91039tPage,
  },
  {
    path: 's91040',   
    canActivate:[ActiveGuard],  
    component: S91040Page,
  },
  {
    path: 's91041',   
    canActivate:[ActiveGuard],  
    component: S91041Page,
  },
  {
    path: 's91041t',   
    canActivate:[ActiveGuard],  
    component: S91041tPage,
  },
  {
    path: 's91042',   
    canActivate:[ActiveGuard],  
    component: S91042Page,
  },
  {
    path: 's91043',   
    canActivate:[ActiveGuard],  
    component: S91043Page,
  },
  {
    path: 's91044',   
    canActivate:[ActiveGuard],  
    component: S91044Page,
  },
  {
    path: 's91045',   
    canActivate:[ActiveGuard],  
    component: S91045Page,
  },
  {
    path: 's91045t',   
    canActivate:[ActiveGuard],  
    component: S91045tPage,
  },
  {
    path: 's91046',   
    canActivate:[ActiveGuard],  
    component: S91046Page,
  },
  {
    path: 's91047',   
    canActivate:[ActiveGuard],  
    component: S91047Page,
  },
  {
    path: 's91048',   
    canActivate:[ActiveGuard],  
    component: S91048Page,
  },
  {
    path: 's91049',   
    canActivate:[ActiveGuard],  
    component: S91049Page,
  },
  {
    path: 's91050',   
    canActivate:[ActiveGuard],  
    component: S91050Page,
  },
  {
    path: 's91051',   
    canActivate:[ActiveGuard],  
    component: S91051Page,
  },
  {
    path: 's91052',   
    canActivate:[ActiveGuard],  
    component: S91052Page,
  },
  {
    path: 's91053',   
    canActivate:[ActiveGuard],  
    component: S91053Page,
  },
  {
    path: 's91053t',   
    canActivate:[ActiveGuard],  
    component: S91053tPage,
  },
  {
    path: 's91054',   
    canActivate:[ActiveGuard],  
    component: S91054Page,
  },
  {
    path: 's91055',   
    canActivate:[ActiveGuard],  
    component: S91055Page,
  },
  {
    path: 's91056',
    canActivate:[ActiveGuard],  
    component: S91056Page,
  },
  {
    path: 's91057',   
    canActivate:[ActiveGuard],  
    component: S91057Page,
  },
  {
    path: 's91057t',   
    canActivate:[ActiveGuard],  
    component: S91057tPage,
  },
  {
    path: 's91058',   
    canActivate:[ActiveGuard],  
    component: S91058Page,
  },
  {
    path: 's91059',   
    canActivate:[ActiveGuard],  
    component: S91059Page,
  },
  {
    path: 's91060',   
    canActivate:[ActiveGuard],  
    component: S91060Page,
  },
  {
    path: 's91060t',   
    canActivate:[ActiveGuard],  
    component: S91060tPage,
  },
  {
    path: 's91061',   
    canActivate:[ActiveGuard],  
    component: S91061Page,
  },
  {
    path: 's91062',   
    canActivate:[ActiveGuard],  
    component: S91062Page,
  },
  {
    path: 's91062t',   
    canActivate:[ActiveGuard],  
    component: S91062tPage,
  },
  {
    path: 's91063',   
    canActivate:[ActiveGuard],  
    component: S91063Page,
  },
  {
    path: 's91064',   
    canActivate:[ActiveGuard],  
    component: S91064Page,
  },
  {
    path: 's91065',   
    canActivate:[ActiveGuard],  
    component: S91065Page,
  },
  {
    path: 's91065t',   
    canActivate:[ActiveGuard],  
    component: S91065tPage,
  },
  {
    path: 's91066',   
    canActivate:[ActiveGuard],  
    component: S91066Page,
  },
  {
    path: 's91067',   
    canActivate:[ActiveGuard],  
    component: S91067Page,
  },
  {
    path: 's91068',   
    canActivate:[ActiveGuard],  
    component: S91068Page,
  },
  {
    path: 's91069',   
    canActivate:[ActiveGuard],  
    component: S91069Page,
  },
  {
    path: 's91070',   
    canActivate:[ActiveGuard],  
    component: S91070Page,
  },
  {
    path: 's91071',   
    canActivate:[ActiveGuard],  
    component: S91071Page,
  },
  {
    path: 's91072',   
    canActivate:[ActiveGuard],  
    component: S91072Page,
  },
  {
    path: 's91073',   
    canActivate:[ActiveGuard],  
    component: S91073Page,
  },
  {
    path: 's91074',   
    canActivate:[ActiveGuard],  
    component: S91074Page,
  },
  {
    path: 's91074t',   
    canActivate:[ActiveGuard],  
    component: S91074tPage,
  },
  {
    path: 's91075',   
    canActivate:[ActiveGuard],  
    component: S91075Page,
  },
  {
    path: 's91076',   
    canActivate:[ActiveGuard],  
    component: S91076Page,
  },
  {
    path: 's91077',   
    canActivate:[ActiveGuard],  
    component: S91077Page,
  },
  {
    path: 's91078',   
    canActivate:[ActiveGuard],  
    component: S91078Page,
  },
  {
    path: 's91079',   
    canActivate:[ActiveGuard],  
    component: S91079Page,
  },
  {
    path: 's91080',   
    canActivate:[ActiveGuard],  
    component: S91080Page,
  },
  {
    path: 's91081',   
    canActivate:[ActiveGuard],  
    component: S91081Page,
  },
  {
    path: 's91082',   
    canActivate:[ActiveGuard],  
    component: S91082Page,
  },
  {
    path: 's91083',   
    canActivate:[ActiveGuard],  
    component: S91083Page,
  },
  {
    path: 's91084',   
    canActivate:[ActiveGuard],  
    component: S91084Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExternalApprovalRoutingModule { }
