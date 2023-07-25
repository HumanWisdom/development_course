import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S133001Page } from './s133001/s133001.page';  
import { S133002Page } from './s133002/s133002.page';  
import { S133003Page } from './s133003/s133003.page';  
import { S133004Page } from './s133005/s133005.page';  
import { S133004tPage } from './s133005t/s133005t.page';  
import { S133005Page } from './s133006/s133006.page';  
import { S133006Page } from './s133007/s133006.page';  
import { S133007Page } from './s133008/s133008.page'; 
import { S133008Page } from './s133009/s133009.page';  
import { S133009Page } from './s133010/s133010.page';  
import { S133010Page } from './s133011/s133011.page';  
import { S133011Page } from './s133012/s133012.page';  
import { S133012Page } from './s133013/s133013.page';  
import { S133013Page } from './s133014/s133014.page';  
import { S133014Page } from './s133015/s133015.page';  
import { S133015Page } from './s133015/s133015.page';  
import { S133015tPage } from './s133015t/s133015t.page';  
import { S133016Page } from './s133016/s133016.page';  
import { S133017Page } from './s133018/s133018.page';  
import { S133018Page } from './s133019/s133019.page'; 
import { S133019Page } from './s133020/s133020.page';  
import { S133019tPage } from './s133020t/s133020t.page';  
import { S133020Page } from './s133021/s133021.page';  
import { S133021Page } from './s133022/s133022.page';  
import { S133022Page } from './s1330133/s1330133.page'; 
import { S133022tPage } from './s1330133t/s1330133t.page';  
import { S1330133Page } from './s133024/s133024.page';  
import { S133024Page } from './s133025/s133025.page';  
import { S133025Page } from './s133026/s133026.page'; 
import { S133025tPage } from './s133026t/s133026t.page';  
import { S133026Page } from './s133027/s133027.page';  
import { S133027Page } from './s133028/s133028.page';  
import { S133028Page } from './s133029/s133029.page';  
import { S133029Page } from './s133031/s133031.page';  
import { S133030Page } from './s133032/s133032.page';  
import { S133031Page } from './s133033/s133033.page';
import { S133032Page } from './s133034/s133032.page';  
import { S133032tPage } from './s133034t/s133034t.page';  
import { S133033Page } from './s133035/s133035.page';  
import { S133034Page } from './s133036/s133036.page';  
import { S133035Page } from './s133037/s133037.page';  
import { S133036Page } from './s133038/s133038.page';  
import { S133037Page } from './s133039/s133039.page';  
import { S133038Page } from './s133040/s133040.page';  
import { S133039Page } from './s133041/s133041.page';  
import { S133040Page } from './s133042/s133042.page';  
import { S133041Page } from './s133043/s133043.page';  
import { S133042Page } from './s133044/s133044.page';  
import { S133043Page } from './s133045/s133045.page';  
import { S133044Page } from './s133046/s133046.page';  
import { S133045Page } from './s133047/s133047.page';  
import { S133046Page } from './s133048/s133048.page';  
import { S133047Page } from './s133049/s133049.page';
import { S133047tPage } from './s133049t/s133049t.page';
import { S133048Page } from './s133050/s133050.page';  
import { S133049Page } from './s133051/s133051.page';  
import { S133049tPage } from './s133051t/s133051t.page';  
import { S133050Page } from './s133052/s133052.page';  
import { S133051Page } from './s133053/s133053.page';  
import { S133052Page } from './s133054/s133054.page';  
import { S133053Page } from './s133055/s133055.page';  
import { S133054Page } from './s133056/s133056.page';  
import { S133055Page } from './s133057/s133057.page';  
import { S133056Page } from './s133058/s133058.page';  
import { S133057Page } from './s133059/s133059.page';  
import { S133058Page } from './s133060/s133060.page';  
import { S133059Page } from './s133061/s133061.page';  
import { S133060Page } from './s133062/s133062.page';  
import { S133060tPage } from './s133062t/s133062t.page';  
import { S133061Page } from './s133063/s133063.page';  
import { S133062Page } from './s133064/s133064.page';  
import { S133063Page } from './s133065/s133065.page';  
import { S133064Page } from './s133066/s133066.page';  
import { S133065Page } from './s133067/s133067.page';  
import { S133066Page } from './s133068/s133068.page'; 
import { S133067Page } from './s133069/s133069.page';  
import { S133068Page } from './s133070/s133070.page'; 
import { S133069Page } from './s133069/s133069.page';  
import { S133070Page } from './s133070/s133070.page';  
import { S133071Page } from './s133071/s133071.page';  
import { S133072Page } from './s133072/s133072.page';  
import { S133073Page } from './s133073/s133073.page';  
import { S133074Page } from './s133074/s133074.page';  
import { S133075Page } from './s133075/s133075.page';  
import { S133076Page } from './s133076/s133076.page';  
import { S133077Page } from './s133077/s133077.page';  
import { S133078Page } from './s133078/s133078.page';  
import { S133079Page } from './s133079/s133079.page';  
import { S133080Page } from './s133080/s133080.page';  
import { S133081Page } from './s133081/s133081.page';  
import { S133081tPage } from './s133081t/s133081t.page';  
import { S133082Page } from './s133082/s133082.page';  
import { S133083Page } from './s133091/s133083.page'; 
import { S133083tPage } from './s133091t/s133083t.page';   
import { S133084Page } from './s133092/s133084.page';  
import { S133085Page } from './s133093/s133085.page';  
import { S133086Page } from './s133094/s133086.page';  
import { S133087Page } from './s133095/s133087.page';  
import { S133088Page } from './s133088/s133088.page';
import { S133089Page } from './s133089/s133089.page';  
import { S133090Page } from './s133090/s133090.page';  
import { S133091Page } from './s133091/s133091.page'; 
import { S133092Page } from './s133092/s133092.page';  
import { S133093Page } from './s133093/s133093.page';  
import { S133094Page } from './s133094/s133094.page';  
import { S133095Page } from './s133095/s133095.page';  
import { S133096Page } from './s133096/s133096.page';  
import { S133097Page } from './s133097/s133097.page'; 
import { S133097tPage } from './s133097t/s133097t.page'; 
import { S133098Page } from './s133098/s133098.page';  
import { S133099Page } from './s133099/s133099.page';  
import { S133100Page } from './s133100/s133100.page';
import { S133101Page } from './s133101/s133101.page';  
import { S133102Page } from './s133102/s133102.page';  
import { S133102tPage } from './s133102t/s133102t.page';  
import { S133103Page } from './s133103/s133103.page'; 
import { S133104Page } from './s133104/s133104.page';  
import { S133105Page } from './s133105/s133105.page'; 
import { S133106Page } from './s133116/s133106.page'; 
import { S133107Page } from './s133117/s133107.page';  
import { S133108Page } from './s133108/s133108.page';  
import { S133109Page } from './s133109/s133109.page';  
import { S133110Page } from './s133110/s133110.page';  
import { S133111Page } from './s133111/s133111.page';  
import { S133112Page } from './s133112/s133112.page';  
import { S133113Page } from './s133113/s133113.page';  
import { S133114Page } from './s133114/s133114.page';  
import { S133115Page } from './s133115/s133115.page';  
import { S133116Page } from './s133116/s133116.page';  
import { S133117Page } from './s133117/s133117.page';  
import { S133118Page } from './s133129/s133118.page';  
import { S133119Page } from './s133130/s133119.page';  
import { S133119tPage } from './s133130t/s133119t.page';  
import { S133120Page } from './s133131/s133120.page';  
import { S133121Page } from './s133132/s133121.page';  
import { S133122Page } from './s133133/s133122.page';  
import { S133122tPage } from './s133133t/s133122t.page';  
import { S1331133Page } from './s133134/s1331133.page';  
import { S133124Page } from './s133135/s133124.page';  
import { S133125Page } from './s133136/s133125.page'; 
import { S133125tPage } from './s133136t/s133125t.page';   
import { S133126Page } from './s133137/s133126.page';  
import { S133127Page } from './s133138/s133127.page';  
import { S133128Page } from './s133139/s133128.page';  
import { S133129Page } from './s133140/s133140.page';
import { S133129tPage } from './s133140t/s133140t.page';    
import { S133130Page } from './s133142/s133142.page';  
import { S133131Page } from './s133143/s133143.page';  
import { S133132Page } from './s133144/s133144.page';  
import { S133133Page } from './s133145/s133145.page'; 
import { S133134Page } from './s133146/s133146.page';  
import { S133135Page } from './s133147/s133147.page';  
import { S133136Page } from './s133148/s133148.page';  
import { S133137Page } from './s133149/s133149.page';  
import { S133137tPage } from './s133149t/s133149t.page';  
import { S133138Page } from './s133150/s133150.page';  
import { S133139Page } from './s133152/s133152.page';  
import { S133140Page } from './s133154/s133154.page';  
import { S133141Page } from './s133155/s133155.page';  
import { S133142Page } from './s133156/s133156.page';  
import { S133143Page } from './s133157/s133157.page';  
import { S133144Page } from './s133158/s133158.page'; 
import { S133144tPage } from './s133158t/s133158t.page';  
import { S133145Page } from './s133159/s133159.page';  
import { S133146Page } from './s133160/s133160.page';
import { S133146tPage } from './s133160t/s133160t.page'; 
import { S133147Page } from './s133161/s133161.page';  
import { S133148Page } from './s133162/s133162.page';  
import { S133149Page } from './s133163/s133163.page';  
import { S133150Page } from './s133164/s133164.page';  
import { S133151Page } from './s133165/s133165.page';  
import { S133152Page } from './s133166/s133166.page';  
import { S133153Page } from './s133167/s133167.page';  
import { S133154Page } from './s133168/s133168.page';  
import { S133155Page } from './s133169/s133169.page';  
import { S133156Page } from './s133170/s133170.page';  
import { S133157Page } from './s133171/s133171.page';
import { S133158Page } from './s133172/s133172.page';  
import { S133159Page } from './s133173/s133173.page';  
import { S133160Page } from './s133175/s133175.page';  
import { S133161Page } from './s133176/s133176.page';  
import { S133161tPage } from './s133176t/s133176t.page';  
import { S133162Page } from './s133177/s133177.page';  
import { S133163Page } from './s133178/s133178.page';  
import { S133164Page } from './s133179/s133179.page';
import { S133164tPage } from './s133179t/s133179t.page';    
import { S133165Page } from './s133180/s133180.page';  
import { S133166Page } from './s133181/s133181.page'; 
import { S133167Page } from './s133181/s133181.page';  
import { S133168Page } from './s133182/s133182.page';  
import { S133169Page } from './s133183/s133169.page';  
import { S133170Page } from './s133184/s133170.page'; 
import { S133171Page } from './s133185/s133171.page';  
import { S133172Page } from './s133182/s133172.page';  
import { S133173Page } from './s133183/s133173.page'; 
import { S133174Page } from './s133184/s133174.page';  
import { S133175Page } from './s133185/s133175.page';  
import { S133176Page } from './s133186/s133176.page';  
import { S133177Page } from './s133186/s133177.page';  
import { S133178Page } from './s133182/s133182.page';  
import { S133179Page } from './s133183/s133183.page'; 
import { S133180Page } from './s133184/s133184.page';
import { S133181Page } from './s133181/s133181.page';  
import { S133181p1Page } from './s133181p1/s133181p1.page';  
import { S133181p2Page } from './s133181p2/s133181p2.page';  
import { S133181p3Page } from './s133181p3/s133181p3.page';  
import { S133181p4Page } from './s133181p4/s133181p4.page';  
import { S133182Page } from './s133185/s133185.page';  
import { S133183Page } from './s133186/s133186.page';  
import { S133184Page } from './s133184/s133184.page';   

const routes: Routes = [ 
  {
    path: '',   
    component: S133001Page,
  },
  {
    path: 's133001',   
    component: S133001Page,
  },
  {
    path: 's133002',   
   canActivate:[ActiveGuard],  
    component: S133002Page,
  }, 
  {
    path: 's133003',   
   canActivate:[ActiveGuard],  
    component: S133003Page,
  },
  {
    path: 's133004',   
   canActivate:[ActiveGuard],  
    component: S133004Page,
  },
  {
    path: 's133004t',   
   canActivate:[ActiveGuard],  
    component: S133004tPage,
  }, 
  {
    path: 's133005',   
   canActivate:[ActiveGuard],  
    component: S133005Page,
  },
  {
    path: 's133006',   
   canActivate:[ActiveGuard],  
    component: S133006Page,
  },
  {
    path: 's133007',   
   canActivate:[ActiveGuard],  
    component: S133007Page,
  }, 
  {
    path: 's133008',   
   canActivate:[ActiveGuard],  
    component: S133008Page,
  },  
  {
    path: 's133009',   
   canActivate:[ActiveGuard],  
    component: S133009Page,
  },
  {
    path: 's133010',   
   canActivate:[ActiveGuard],  
    component: S133010Page,
  },
  {
    path: 's133011',   
   canActivate:[ActiveGuard],  
    component: S133011Page,
  }, 
  {
    path: 's133012',   
   canActivate:[ActiveGuard],  
    component: S133012Page,
  },
  {
    path: 's133013',   
   canActivate:[ActiveGuard],  
    component: S133013Page,
  }, 
  {
    path: 's133014',   
   canActivate:[ActiveGuard],  
    component: S133014Page,
  },  
  {
    path: 's133015',   
   canActivate:[ActiveGuard],  
    component: S133015Page,
  },
  {
    path: 's133015t',   
   canActivate:[ActiveGuard],  
    component: S133015tPage,
  },  
  {
    path: 's133016',   
   canActivate:[ActiveGuard],  
    component: S133016Page,
  },
  {
    path: 's133017',   
   canActivate:[ActiveGuard],  
    component: S133017Page,
  },
  {
    path: 's133018',   
   canActivate:[ActiveGuard],  
    component: S133018Page,
  }, 
  {
    path: 's133019',   
   canActivate:[ActiveGuard],  
    component: S133019Page,
  },
  {
    path: 's133019t',   
   canActivate:[ActiveGuard],  
    component: S133019tPage,
  },
  {
    path: 's133020',   
   canActivate:[ActiveGuard],  
    component: S133020Page,
  },
  {
    path: 's133021',   
   canActivate:[ActiveGuard],  
    component: S133021Page,
  },
  {
    path: 's133022',   
   canActivate:[ActiveGuard],  
    component: S133022Page,
  },
  {
    path: 's133022t',   
   canActivate:[ActiveGuard],  
    component: S133022tPage,
  },
  {
    path: 's1330133',   
   canActivate:[ActiveGuard],  
    component: S1330133Page,
  },
  {
    path: 's133024',   
   canActivate:[ActiveGuard],  
    component: S133024Page,
  },
  {
    path: 's133025',   
   canActivate:[ActiveGuard],  
    component: S133025Page,
  },
  {
    path: 's133025t',   
   canActivate:[ActiveGuard],  
    component: S133025tPage,
  },  
  {
    path: 's133026',   
   canActivate:[ActiveGuard],  
    component: S133026Page,
  },
  {
    path: 's133027',   
   canActivate:[ActiveGuard],  
    component: S133027Page,
  },
  {
    path: 's133028',   
   canActivate:[ActiveGuard],  
    component: S133028Page,
  },
  {
    path: 's133029',   
   canActivate:[ActiveGuard],  
    component: S133029Page,
  },
  {
    path: 's133030',   
   canActivate:[ActiveGuard],  
    component: S133030Page,
  }, 
  {
    path: 's133031',   
   canActivate:[ActiveGuard],  
    component: S133031Page,
  }, 
  {
    path: 's133032',   
   canActivate:[ActiveGuard],  
    component: S133032Page,
  },
  {
    path: 's133032t',   
   canActivate:[ActiveGuard],  
    component: S133032tPage,
  },
  {
    path: 's133033',   
   canActivate:[ActiveGuard],  
    component: S133033Page,
  }, 
  {
    path: 's133034',   
   canActivate:[ActiveGuard],  
    component: S133034Page,
  },
  {
    path: 's133035',   
   canActivate:[ActiveGuard],  
    component: S133035Page,
  },  
  {
    path: 's133036',   
   canActivate:[ActiveGuard],  
    component: S133036Page,
  }, 
  {
    path: 's133037',   
   canActivate:[ActiveGuard],  
    component: S133037Page,
  }, 
  {
    path: 's133038',   
   canActivate:[ActiveGuard],  
    component: S133038Page,
  },  
  {
    path: 's133039',   
   canActivate:[ActiveGuard],  
    component: S133039Page,
  },
  {
    path: 's133040',   
   canActivate:[ActiveGuard],  
    component: S133040Page,
  },  
  {
    path: 's133041',   
   canActivate:[ActiveGuard],  
    component: S133041Page,
  },
  {
    path: 's133042',   
   canActivate:[ActiveGuard],  
    component: S133042Page,
  },
  {
    path: 's133043',   
   canActivate:[ActiveGuard],  
    component: S133043Page,
  }, 
  {
    path: 's133044',   
   canActivate:[ActiveGuard],  
    component: S133044Page,
  },
  {
    path: 's133045',   
   canActivate:[ActiveGuard],  
    component: S133045Page,
  },
  {
    path: 's133046',   
   canActivate:[ActiveGuard],  
    component: S133046Page,
  },
  {
    path: 's133047',   
   canActivate:[ActiveGuard],  
    component: S133047Page,
  },
  {
    path: 's133047t',   
   canActivate:[ActiveGuard],  
    component: S133047tPage,
  }, 
  {
    path: 's133048',   
   canActivate:[ActiveGuard],  
    component: S133048Page,
  },
  {
    path: 's133049',   
   canActivate:[ActiveGuard],  
    component: S133049Page,
  },  
  {
    path: 's133049t',   
   canActivate:[ActiveGuard],  
    component: S133049tPage,
  },
  {
    path: 's133050',   
   canActivate:[ActiveGuard],  
    component: S133050Page,
  },
  {
    path: 's133051',   
   canActivate:[ActiveGuard],  
    component: S133051Page,
  },  
  {
    path: 's133052',   
   canActivate:[ActiveGuard],  
    component: S133052Page,
  },
  {
    path: 's133053',   
   canActivate:[ActiveGuard],  
    component: S133053Page,
  },
  {
    path: 's133054',   
   canActivate:[ActiveGuard],  
    component: S133054Page,
  },
  {
    path: 's133055',   
   canActivate:[ActiveGuard],  
    component: S133055Page,
  },
  {
    path: 's133056',   
   canActivate:[ActiveGuard],  
    component: S133056Page,
  },
  {
    path: 's133057',   
   canActivate:[ActiveGuard],  
    component: S133057Page,
  },
  {
    path: 's133058',   
   canActivate:[ActiveGuard],  
    component: S133058Page,
  },
  {
    path: 's133059',   
   canActivate:[ActiveGuard],  
    component: S133059Page,
  }, 
  {
    path: 's133060',   
   canActivate:[ActiveGuard],  
    component: S133060Page,
  },
  {
    path: 's133060t',   
   canActivate:[ActiveGuard],  
    component: S133060tPage,
  },
  {
    path: 's133061',   
   canActivate:[ActiveGuard],  
    component: S133061Page,
  },
  {
    path: 's133062',   
   canActivate:[ActiveGuard],  
    component: S133062Page,
  },
  {
    path: 's133063',   
   canActivate:[ActiveGuard],  
    component: S133063Page,
  }, 
  {
    path: 's133064',   
   canActivate:[ActiveGuard],  
    component: S133064Page,
  },
  {
    path: 's133065',   
   canActivate:[ActiveGuard],  
    component: S133065Page,
  },
  {
    path: 's133066',   
   canActivate:[ActiveGuard],  
    component: S133066Page,
  }, 
  {
    path: 's133067',   
   canActivate:[ActiveGuard],  
    component: S133067Page,
  },
  {
    path: 's133068',   
   canActivate:[ActiveGuard],  
    component: S133068Page,
  },
  {
    path: 's133069',   
   canActivate:[ActiveGuard],  
    component: S133069Page,
  },
  {
    path: 's133070',   
   canActivate:[ActiveGuard],  
    component: S133070Page,
  },  
  {
    path: 's133071',   
   canActivate:[ActiveGuard],  
    component: S133071Page,
  }, 
  {
    path: 's133072',   
   canActivate:[ActiveGuard],  
    component: S133072Page,
  },
  {
    path: 's133073',   
   canActivate:[ActiveGuard],  
    component: S133073Page,
  },
  {
    path: 's133074',   
   canActivate:[ActiveGuard],  
    component: S133074Page,
  }, 
  {
    path: 's133075',   
   canActivate:[ActiveGuard],  
    component: S133075Page,
  },
  {
    path: 's133076',   
   canActivate:[ActiveGuard],  
    component: S133076Page,
  }, 
  {
    path: 's133077',   
   canActivate:[ActiveGuard],  
    component: S133077Page,
  },
  {
    path: 's133078',   
   canActivate:[ActiveGuard],  
    component: S133078Page,
  }, 
  {
    path: 's133079',   
   canActivate:[ActiveGuard],  
    component: S133079Page,
  },
  {
    path: 's133080',   
   canActivate:[ActiveGuard],  
    component: S133080Page,
  }, 
  {
    path: 's133081',   
   canActivate:[ActiveGuard],  
    component: S133081Page,
  },
  {
    path: 's133081t',   
   canActivate:[ActiveGuard],  
    component: S133081tPage,
  },
  {
    path: 's133082',   
   canActivate:[ActiveGuard],  
    component: S133082Page,
  },  
  {
    path: 's133083',   
   canActivate:[ActiveGuard],  
    component: S133083Page,
  },
  {
    path: 's133083t',   
   canActivate:[ActiveGuard],  
    component: S133083tPage,
  },
  {
    path: 's133084',   
   canActivate:[ActiveGuard],  
    component: S133084Page,
  }, 
  {
    path: 's133085',   
   canActivate:[ActiveGuard],  
    component: S133085Page,
  }, 
  {
    path: 's133086',   
   canActivate:[ActiveGuard],  
    component: S133086Page,
  },
  {
    path: 's133087',   
   canActivate:[ActiveGuard],  
    component: S133087Page,
  }, 
  {
    path: 's133088',   
   canActivate:[ActiveGuard],  
    component: S133088Page,
  }, 
  {
    path: 's133089',   
   canActivate:[ActiveGuard],  
    component: S133089Page,
  },
  {
    path: 's133090',   
   canActivate:[ActiveGuard],  
    component: S133090Page,
  },  
  {
    path: 's133091',   
   canActivate:[ActiveGuard],  
    component: S133091Page,
  }, 
  {
    path: 's133092',   
   canActivate:[ActiveGuard],  
    component: S133092Page,
  },
  {
    path: 's133093',   
   canActivate:[ActiveGuard],  
    component: S133093Page,
  },
  {
    path: 's133094',   
   canActivate:[ActiveGuard],  
    component: S133094Page,
  }, 
  {
    path: 's133095',   
   canActivate:[ActiveGuard],  
    component: S133095Page,
  },
  {
    path: 's133096',   
   canActivate:[ActiveGuard],  
    component: S133096Page,
  }, 
  {
    path: 's133097',   
   canActivate:[ActiveGuard],  
    component: S133097Page,
  },
  {
    path: 's133097t',   
   canActivate:[ActiveGuard],  
    component: S133097tPage,
  },
  {
    path: 's133098',   
   canActivate:[ActiveGuard],  
    component: S133098Page,
  },
  {
    path: 's133099',   
   canActivate:[ActiveGuard],  
    component: S133099Page,
  },
  {
    path: 's133100',   
   canActivate:[ActiveGuard],  
    component: S133100Page,
  },
  {
    path: 's133101',   
   canActivate:[ActiveGuard],  
    component: S133101Page,
  },
  {
    path: 's133102',   
   canActivate:[ActiveGuard],  
    component: S133102Page,
  },
  {
    path: 's133102t',   
   canActivate:[ActiveGuard],  
    component: S133102tPage,
  },
  {
    path: 's133103',   
   canActivate:[ActiveGuard],  
    component: S133103Page,
  }, 
  {
    path: 's133104',   
   canActivate:[ActiveGuard],  
    component: S133104Page,
  }, 
  {
    path: 's133105',   
   canActivate:[ActiveGuard],  
    component: S133105Page,
  },  
  {
    path: 's133106',   
   canActivate:[ActiveGuard],  
    component: S133106Page,
  },  
  {
    path: 's133107',   
   canActivate:[ActiveGuard],  
    component: S133107Page,
  },  
  {
    path: 's133108',   
   canActivate:[ActiveGuard],  
    component: S133108Page,
  },
  {
    path: 's133109',   
   canActivate:[ActiveGuard],  
    component: S133109Page,
  },  
  {
    path: 's133110',   
   canActivate:[ActiveGuard],  
    component: S133110Page,
  },
  {
    path: 's133111',   
   canActivate:[ActiveGuard],  
    component: S133111Page,
  },
  {
    path: 's133112',   
   canActivate:[ActiveGuard],  
    component: S133112Page,
  },
  {
    path: 's133113',   
   canActivate:[ActiveGuard],  
    component: S133113Page,
  },
  {
    path: 's133114',   
   canActivate:[ActiveGuard],  
    component: S133114Page,
  },  
  {
    path: 's133115',   
   canActivate:[ActiveGuard],  
    component: S133115Page,
  },
  {
    path: 's133116',   
   canActivate:[ActiveGuard],  
    component: S133116Page,
  }, 
  {
    path: 's133117',   
   canActivate:[ActiveGuard],  
    component: S133117Page,
  },
  {
    path: 's133118',   
   canActivate:[ActiveGuard],  
    component: S133118Page,
  },
  {
    path: 's133119',   
   canActivate:[ActiveGuard],  
    component: S133119Page,
  },
  {
    path: 's133119t',   
   canActivate:[ActiveGuard],  
    component: S133119tPage,
  }, 
  {
    path: 's133120',   
   canActivate:[ActiveGuard],  
    component: S133120Page,
  },
  {
    path: 's133121',   
   canActivate:[ActiveGuard],  
    component: S133121Page,
  },  
  {
    path: 's133122',   
   canActivate:[ActiveGuard],  
    component: S133122Page,
  },
  {
    path: 's133122t',   
   canActivate:[ActiveGuard],  
    component: S133122tPage,
  }, 
  {
    path: 's1331133',   
   canActivate:[ActiveGuard],  
    component: S1331133Page,
  },
  {
    path: 's133124',   
   canActivate:[ActiveGuard],  
    component: S133124Page,
  }, 
  {
    path: 's133125',   
   canActivate:[ActiveGuard],  
    component: S133125Page,
  },
  {
    path: 's133125t',   
   canActivate:[ActiveGuard],  
    component: S133125tPage,
  }, 
  {
    path: 's133126',   
   canActivate:[ActiveGuard],  
    component: S133126Page,
  },
  {
    path: 's133127',   
   canActivate:[ActiveGuard],  
    component: S133127Page,
  },
  {
    path: 's133128',   
   canActivate:[ActiveGuard],  
    component: S133128Page,
  }, 
  {
    path: 's133129',   
   canActivate:[ActiveGuard],  
    component: S133129Page,
  },
  {
    path: 's133129t',   
   canActivate:[ActiveGuard],  
    component: S133129tPage,
  },
  {
    path: 's133130',   
   canActivate:[ActiveGuard],  
    component: S133130Page,
  },
  {
    path: 's133131',   
   canActivate:[ActiveGuard],  
    component: S133131Page,
  },
  {
    path: 's133132',   
   canActivate:[ActiveGuard],  
    component: S133132Page,
  },
  {
    path: 's133133',   
   canActivate:[ActiveGuard],  
    component: S133133Page,
  }, 
  {
    path: 's133134',   
   canActivate:[ActiveGuard],  
    component: S133134Page,
  },  
  {
    path: 's133135',   
   canActivate:[ActiveGuard],  
    component: S133135Page,
  }, 
  {
    path: 's133136',   
   canActivate:[ActiveGuard],  
    component: S133136Page,
  },
  {
    path: 's133137',   
   canActivate:[ActiveGuard],  
    component: S133137Page,
  },
  {
    path: 's133137t',   
   canActivate:[ActiveGuard],  
    component: S133137tPage,
  },
  {
    path: 's133138',   
   canActivate:[ActiveGuard],  
    component: S133138Page,
  },  
  {
    path: 's133139',   
   canActivate:[ActiveGuard],  
    component: S133139Page,
  }, 
  {
    path: 's133140',   
   canActivate:[ActiveGuard],  
    component: S133140Page,
  }, 
  {
    path: 's133141',   
   canActivate:[ActiveGuard],  
    component: S133141Page,
  },
  {
    path: 's133142',   
   canActivate:[ActiveGuard],  
    component: S133142Page,
  }, 
  {
    path: 's133143',   
   canActivate:[ActiveGuard],  
    component: S133143Page,
  },  
  {
    path: 's133144',   
   canActivate:[ActiveGuard],  
    component: S133144Page,
  },
  {
    path: 's133144t',   
   canActivate:[ActiveGuard],  
    component: S133144tPage,
  },
  {
    path: 's133145',   
   canActivate:[ActiveGuard],  
    component: S133145Page,
  },
  {
    path: 's133146',   
   canActivate:[ActiveGuard],  
    component: S133146Page,
  },
  {
    path: 's133146t',   
   canActivate:[ActiveGuard],  
    component: S133146tPage,
  }, 
  {
    path: 's133147',   
   canActivate:[ActiveGuard],  
    component: S133147Page,
  }, 
  {
    path: 's133148',   
   canActivate:[ActiveGuard],  
    component: S133148Page,
  },  
  {
    path: 's133149',   
   canActivate:[ActiveGuard],  
    component: S133149Page,
  },  
  {
    path: 's133150',   
   canActivate:[ActiveGuard],  
    component: S133150Page,
  },
  {
    path: 's133151',   
   canActivate:[ActiveGuard],  
    component: S133151Page,
  },
  {
    path: 's133152',   
   canActivate:[ActiveGuard],  
    component: S133152Page,
  },
  {
    path: 's133153',   
   canActivate:[ActiveGuard],  
    component: S133153Page,
  },
  {
    path: 's133154',   
   canActivate:[ActiveGuard],  
    component: S133154Page,
  }, 
  {
    path: 's133155',   
   canActivate:[ActiveGuard],  
    component: S133155Page,
  },
  {
    path: 's133156',   
   canActivate:[ActiveGuard],  
    component: S133156Page,
  }, 
  {
    path: 's133157',   
   canActivate:[ActiveGuard],  
    component: S133157Page,
  }, 
  {
    path: 's133158',   
   canActivate:[ActiveGuard],  
    component: S133158Page,
  },
  {
    path: 's133159',   
   canActivate:[ActiveGuard],  
    component: S133159Page,
  }, 
  {
    path: 's133160',   
   canActivate:[ActiveGuard],  
    component: S133160Page,
  },
  {
    path: 's133161',   
   canActivate:[ActiveGuard],  
    component: S133161Page,
  },
  {
    path: 's133161t',   
   canActivate:[ActiveGuard],  
    component: S133161tPage,
  }, 
  {
    path: 's133162',   
   canActivate:[ActiveGuard],  
    component: S133162Page,
  },
  {
    path: 's133163',   
   canActivate:[ActiveGuard],  
    component: S133163Page,
  },
  {
    path: 's133164',   
   canActivate:[ActiveGuard],  
    component: S133164Page,
  },
  {
    path: 's133164t',   
   canActivate:[ActiveGuard],  
    component: S133164tPage,
  },
  {
    path: 's133165',   
   canActivate:[ActiveGuard],  
    component: S133165Page,
  },
  {
    path: 's133166',   
   canActivate:[ActiveGuard],  
    component: S133166Page,
  }, 
  {
    path: 's133167',   
   canActivate:[ActiveGuard],  
    component: S133167Page,
  },  
  {
    path: 's133168',   
   canActivate:[ActiveGuard],  
    component: S133168Page,
  },
  {
    path: 's133169',   
   canActivate:[ActiveGuard],  
    component: S133169Page,
  },
  {
    path: 's133170',   
   canActivate:[ActiveGuard],  
    component: S133170Page,
  }, 
  {
    path: 's133171',   
   canActivate:[ActiveGuard],  
    component: S133171Page,
  },
  {
    path: 's133172',   
   canActivate:[ActiveGuard],  
    component: S133172Page,
  }, 
  {
    path: 's133173',   
   canActivate:[ActiveGuard],  
    component: S133173Page,
  }, 
  {
    path: 's133174',   
   canActivate:[ActiveGuard],  
    component: S133174Page,
  },
  {
    path: 's133175',   
   canActivate:[ActiveGuard],  
    component: S133175Page,
  },  
  {
    path: 's133176',   
   canActivate:[ActiveGuard],  
    component: S133176Page,
  },
  {
    path: 's133177',   
   canActivate:[ActiveGuard],  
    component: S133177Page,
  },
  {
    path: 's133178',   
   canActivate:[ActiveGuard],  
    component: S133178Page,
  },  
  {
    path: 's133179',   
   canActivate:[ActiveGuard],  
    component: S133179Page,
  }, 
  {
    path: 's133180',   
   canActivate:[ActiveGuard],  
    component: S133180Page,
  },
  {
    path: 's133181',   
   canActivate:[ActiveGuard],  
    component: S133181Page,
  },
  {
    path: 's133181p1',   
   canActivate:[ActiveGuard],  
    component: S133181p1Page,
  },
  {
    path: 's133181p2',   
   canActivate:[ActiveGuard],  
    component: S133181p2Page,
  },
  {
    path: 's133181p3',   
   canActivate:[ActiveGuard],  
    component: S133181p3Page,
  },
  {
    path: 's133181p4',   
   canActivate:[ActiveGuard],  
    component: S133181p4Page,
  },
  {
    path: 's133182',   
   canActivate:[ActiveGuard],  
    component: S133182Page,
  },
  {
    path: 's133183',   
   canActivate:[ActiveGuard],  
    component: S133183Page,
  },
  {
    path: 's133184',   
   canActivate:[ActiveGuard],  
    component: S133184Page,
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HappinessRoutingModule { }
