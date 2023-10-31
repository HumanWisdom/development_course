import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S77001Page } from './s77001/s77001.page';  
import { S77002Page } from './s77002/s77002.page';  
import { S77003Page } from './s77003/s77003.page';  
import { S77003tPage } from './s77003t/s77003t.page';  
import { S77004Page } from './s77004/s77004.page';  
import { S77005Page } from './s77005/s77005.page';  
import { S77006Page } from './s77006/s77006.page';  
import { S77007Page } from './s77007/s77007.page';  
import { S77008Page } from './s77008/s77008.page';  
import { S77009Page } from './s77009/s77009.page';  
import { S77009tPage } from './s77009t/s77009t.page';  
import { S77010Page } from './s77010/s77010.page';  
import { S77011Page } from './s77011/s77011.page'; 
import { S77012Page } from './s77012/s77012.page';  
import { S77013Page } from './s77013/s77013.page'; 
import { S77014Page } from './s77014/s77014.page'; 
import { S77015Page } from './s77015/s77015.page'; 
import { S77016Page } from './s77016/s77016.page';  
import { S77017Page } from './s77017/s77017.page';  
import { S77018Page } from './s77018/s77018.page'; 
import { S77019Page } from './s77019/s77019.page';  
import { S77020Page } from './s77020/s77020.page'; 
import { S77021Page } from './s77021/s77021.page'; 
import { S77022Page } from './s77022/s77022.page'; 
import { S77023Page } from './s77023/s77023.page';  
import { S77024Page } from './s77024/s77024.page';  
import { S77025Page } from './s77025/s77025.page';  
import { S77026Page } from './s77026/s77026.page';
import { S77027Page } from './s77027/s77027.page';  
import { S77027tPage } from './s77027t/s77027t.page';  
import { S77028Page } from './s77028/s77028.page';  
import { S77029Page } from './s77029/s77029.page';  
import { S77030Page } from './s77030/s77030.page';  
import { S77031Page } from './s77031/s77031.page';  
import { S77032Page } from './s77032/s77032.page'; 
import { S77033Page } from './s77033/s77033.page';  
import { S77034Page } from './s77034/s77034.page';  
import { S77035Page } from './s77035/s77035.page';  
import { S77036Page } from './s77036/s77036.page';  
import { S77037Page } from './s77037/s77037.page'; 
import { S77038Page } from './s77038/s77038.page';  
import { S77039Page } from './s77039/s77039.page';  
import { S77039tPage } from './s77039t/s77039t.page';  
import { S77040Page } from './s77040/s77040.page'; 
import { S77041Page } from './s77041/s77041.page';  
import { S77042Page } from './s77042/s77042.page';  
import { S77043Page } from './s77043/s77043.page'; 
import { S77044Page } from './s77044/s77044.page';  
import { S77045Page } from './s77045/s77045.page';  
import { S77045tPage } from './s77045t/s77045t.page';  
import { S77046Page } from './s77046/s77046.page'; 
import { S77047Page } from './s77047/s77047.page';  
import { S77047tPage } from './s77047t/s77047t.page';  
import { S77048Page } from './s77048/s77048.page';  
import { S77049Page } from './s77049/s77049.page';  
import { S77049tPage } from './s77049t/s77049t.page';  
import { S77050Page } from './s77050/s77050.page'; 
import { S77051Page } from './s77051/s77051.page';  
import { S77052Page } from './s77052/s77052.page';  
import { S77052tPage } from './s77052t/s77052t.page';  
import { S77053Page } from './s77053/s77053.page'; 
import { S77054Page } from './s77054/s77054.page';  
import { S77055Page } from './s77055/s77055.page';  
import { S77056Page } from './s77056/s77056.page';  
import { S77056tPage } from './s77056t/s77056t.page';  
import { S77057Page } from './s77057/s77057.page';
import { S77058Page } from './s77058/s77058.page';  
import { S77059Page } from './s77059/s77059.page';  
import { S77059tPage } from './s77059t/s77059t.page';  
import { S77060Page } from './s77060/s77060.page';  
import { S77061Page } from './s77061/s77061.page';  
import { S77061tPage } from './s77061t/s77061t.page';  
import { S77062Page } from './s77062/s77062.page'; 
import { S77063Page } from './s77063/s77063.page';  
import { S77064Page } from './s77064/s77064.page';  
import { S77065Page } from './s77065/s77065.page'; 
import { S77065tPage } from './s77065t/s77065t.page'; 
import { S77066Page } from './s77066/s77066.page';  
import { S77067Page } from './s77067/s77067.page';  
import { S77067tPage } from './s77067t/s77067t.page';  
import { S77068Page } from './s77068/s77068.page';
import { S77069Page } from './s77069/s77069.page'; 
import { S77070Page } from './s77070/s77070.page'; 
import { S77071Page } from './s77071/s77071.page';  
import { S77072Page } from './s77072/s77072.page';  
import { S77073Page } from './s77073/s77073.page';  
import { S77074Page } from './s77074/s77074.page'; 
import { S77075Page } from './s77075/s77075.page';  
import { S77076Page } from './s77076/s77076.page';  
import { S77076tPage } from './s77076t/s77076t.page';  
import { S77077Page } from './s77077/s77077.page';  
import { S77078Page } from './s77078/s77078.page'; 
import { S77078tPage } from './s77078t/s77078t.page'; 
import { S77079Page } from './s77079/s77079.page';  
import { S77080Page } from './s77080/s77080.page'; 
import { S77080tPage } from './s77080t/s77080t.page'; 
import { S77081Page } from './s77081/s77081.page';  
import { S77082Page } from './s77082/s77082.page'; 
import { S77082tPage } from './s77082t/s77082t.page'; 
import { S77083Page } from './s77083/s77083.page';  
import { S77084Page } from './s77084/s77084.page';  
import { S77084tPage } from './s77084t/s77084t.page';  
import { S77085Page } from './s77085/s77085.page';  
import { S77085tPage } from './s77085t/s77085t.page';  
import { S77086Page } from './s77086/s77086.page';  
import { S77087Page } from './s77087/s77087.page';  
import { S77087tPage } from './s77087t/s77087t.page';  
import { S77088Page } from './s77088/s77088.page';  
import { S77089Page } from './s77089/s77089.page';  
import { S77089tPage } from './s77089t/s77089t.page';  
import { S77090Page } from './s77090/s77090.page';  
import { S77091Page } from './s77091/s77091.page';  
import { S77091tPage } from './s77091t/s77091t.page';  
import { S77092Page } from './s77092/s77092.page';  
import { S77093Page } from './s77093/s77093.page';  
import { S77093tPage } from './s77093t/s77093t.page';  
import { S77094Page } from './s77094/s77094.page';  
import { S77095Page } from './s77095/s77095.page';  
import { S77095tPage } from './s77095t/s77095t.page';  
import { S77096Page } from './s77096/s77096.page';  
import { S77097Page } from './s77097/s77097.page';  
import { S77098Page } from './s77098/s77098.page';  
import { S77099Page } from './s77099/s77099.page';  
import { S77100Page } from './s77100/s77100.page';  
import { S77101Page } from './s77101/s77101.page';  
import { S77102Page } from './s77102/s77102.page';  
import { S77103Page } from './s77103/s77103.page';  
import { S77104Page } from './s77104/s77104.page';  
import { S77105Page } from './s77105/s77105.page';  
import { S77106Page } from './s77106/s77106.page';  
import { S77107Page } from './s77107/s77107.page';  
import { S77108Page } from './s77108/s77108.page';  
import { S77109Page } from './s77109/s77109.page';  
import { S77110Page } from './s77110/s77110.page';  
import { S77111Page } from './s77111/s77111.page';  
import { S77112Page } from './s77112/s77112.page';  

const routes: Routes = [
  {
    path: '',   
     component: S77001Page,
  },
  {
    path: 's77001',   
    canActivate:[ActiveGuard],  
    component: S77001Page,
  },
  {
    path: 's77002',   
    canActivate:[ActiveGuard],  
    component: S77002Page,
  },
  {
    path: 's77003',   
    canActivate:[ActiveGuard],  
    component: S77003Page,
  },
  {
    path: 's77003t',   
    canActivate:[ActiveGuard],  
    component: S77003tPage,
  },
  {
    path: 's77004',   
    canActivate:[ActiveGuard],  
    component: S77004Page,
  },
  {
    path: 's77005',   
    canActivate:[ActiveGuard],  
    component: S77005Page,
  },
  {
    path: 's77006',   
    canActivate:[ActiveGuard],  
    component: S77006Page,
  },
  {
    path: 's77007',   
    canActivate:[ActiveGuard],  
    component: S77007Page,
  },
  {
    path: 's77008',   
    canActivate:[ActiveGuard],  
    component: S77008Page,
  },
  {
    path: 's77009',   
    canActivate:[ActiveGuard],  
    component: S77009Page,
  },
  {
    path: 's77009t',   
    canActivate:[ActiveGuard],  
    component: S77009tPage,
  },
  {
    path: 's77009t',   
    canActivate:[ActiveGuard],  
    component: S77009tPage,
  },
  {
    path: 's77010',   
    canActivate:[ActiveGuard],  
    component: S77010Page,
  },
  {
    path: 's77011',   
    canActivate:[ActiveGuard],  
    component: S77011Page,
  },
  {
    path: 's77012',   
    canActivate:[ActiveGuard],  
    component: S77012Page,
  }, 
  {
    path: 's77013',   
    canActivate:[ActiveGuard],  
    component: S77013Page,
  },
  {
    path: 's77014',   
    canActivate:[ActiveGuard],  
    component: S77014Page,
  },
  {
    path: 's77015',   
    canActivate:[ActiveGuard],  
    component: S77015Page,
  },
  {
    path: 's77016',   
    canActivate:[ActiveGuard],  
    component: S77016Page,
  },
  {
    path: 's77017',   
    canActivate:[ActiveGuard],  
    component: S77017Page,
  },
  {
    path: 's77018',   
    canActivate:[ActiveGuard],  
    component: S77018Page,
  }, 
  {
    path: 's77019',   
    canActivate:[ActiveGuard],  
    component: S77019Page,
  },
  {
    path: 's77020',   
    canActivate:[ActiveGuard],  
    component: S77020Page,
  },
  {
    path: 's77021',   
    canActivate:[ActiveGuard],  
    component: S77021Page,
  },
  {
    path: 's77022',   
    canActivate:[ActiveGuard],  
    component: S77022Page,
  },
  {
    path: 's77023',   
    canActivate:[ActiveGuard],  
    component: S77023Page,
  },
  {
    path: 's77024',   
    canActivate:[ActiveGuard],  
    component: S77024Page,
  },
  {
    path: 's77025',   
    canActivate:[ActiveGuard],  
    component: S77025Page,
  },
  {
    path: 's77026',   
    canActivate:[ActiveGuard],  
    component: S77026Page,
  },
  {
    path: 's77027',   
    canActivate:[ActiveGuard],  
    component: S77027Page,
  },
  {
    path: 's77027t',   
    canActivate:[ActiveGuard],  
    component: S77027tPage,
  },
  {
    path: 's77028',   
    canActivate:[ActiveGuard],  
    component: S77028Page,
  },
  {
    path: 's77029',   
    canActivate:[ActiveGuard],  
    component: S77029Page,
  },
  {
    path: 's77030',   
    canActivate:[ActiveGuard],  
    component: S77030Page,
  },
  {
    path: 's77031',   
    canActivate:[ActiveGuard],  
    component: S77031Page,
  },
  {
    path: 's77032',   
    canActivate:[ActiveGuard],  
    component: S77032Page,
  },
  {
    path: 's77033',   
    canActivate:[ActiveGuard],  
    component: S77033Page,
  },  
  {
    path: 's77034',   
    canActivate:[ActiveGuard],  
    component: S77034Page,
  },  
  {
    path: 's77035',   
    canActivate:[ActiveGuard],  
    component: S77035Page,
  }, 
  {
    path: 's77036',   
    canActivate:[ActiveGuard],  
    component: S77036Page,
  },
  {
    path: 's77037',   
    canActivate:[ActiveGuard],  
    component: S77037Page,
  }, 
  {
    path: 's77038',   
    canActivate:[ActiveGuard],  
    component: S77038Page,
  },  
  {
    path: 's77039',   
    canActivate:[ActiveGuard],  
    component: S77039Page,
  },
  {
    path: 's77039t',   
    canActivate:[ActiveGuard],  
    component: S77039tPage,
  },
  {
    path: 's77040',   
    canActivate:[ActiveGuard],  
    component: S77040Page,
  },
  {
    path: 's77041',   
    canActivate:[ActiveGuard],  
    component: S77041Page,
  },
  {
    path: 's77042',   
    canActivate:[ActiveGuard],  
    component: S77042Page,
  },
  {
    path: 's77043',   
    canActivate:[ActiveGuard],  
    component: S77043Page,
  },
  {
    path: 's77044',   
    canActivate:[ActiveGuard],  
    component: S77044Page,
  },
  {
    path: 's77045',   
    canActivate:[ActiveGuard],  
    component: S77045Page,
  },
  {
    path: 's77045t',   
    canActivate:[ActiveGuard],  
    component: S77045tPage,
  },
  {
    path: 's77046',   
    canActivate:[ActiveGuard],  
    component: S77046Page,
  },
  {
    path: 's77047',   
    canActivate:[ActiveGuard],  
    component: S77047Page,
  },
  {
    path: 's77047t',   
    canActivate:[ActiveGuard],  
    component: S77047tPage,
  },
  {
    path: 's77048',   
    canActivate:[ActiveGuard],  
    component: S77048Page,
  },
  {
    path: 's77049',   
    canActivate:[ActiveGuard],  
    component: S77049Page,
  },
  {
    path: 's77049t',   
    canActivate:[ActiveGuard],  
    component: S77049tPage,
  },
  {
    path: 's77050',   
    canActivate:[ActiveGuard],  
    component: S77050Page,
  },
  {
    path: 's77051',   
    canActivate:[ActiveGuard],  
    component: S77051Page,
  },
  {
    path: 's77052',   
    canActivate:[ActiveGuard],  
    component: S77052Page,
  },
  {
    path: 's77052t',   
    canActivate:[ActiveGuard],  
    component: S77052tPage,
  },
  {
    path: 's77053',   
    canActivate:[ActiveGuard],  
    component: S77053Page,
  },
  {
    path: 's77054',   
    canActivate:[ActiveGuard],  
    component: S77054Page,
  },
  {
    path: 's77055',   
    canActivate:[ActiveGuard],  
    component: S77055Page,
  },
  {
    path: 's77056',   
    canActivate:[ActiveGuard],  
    component: S77056Page,
  },
  {
    path: 's77056t',   
    canActivate:[ActiveGuard],  
    component: S77056tPage,
  },
  {
    path: 's77057',   
    canActivate:[ActiveGuard],  
    component: S77057Page,
  },
  {
    path: 's77058',   
    canActivate:[ActiveGuard],  
    component: S77058Page,
  },
  {
    path: 's77059',   
    canActivate:[ActiveGuard],  
    component: S77059Page,
  },
  {
    path: 's77059t',   
    canActivate:[ActiveGuard],  
    component: S77059tPage,
  },
  {
    path: 's77060',   
    canActivate:[ActiveGuard],  
    component: S77060Page,
  },
  {
    path: 's77061',   
    canActivate:[ActiveGuard],  
    component: S77061Page,
  },
  {
    path: 's77061t',   
    canActivate:[ActiveGuard],  
    component: S77061tPage,
  },
  {
    path: 's77062',   
    canActivate:[ActiveGuard],  
    component: S77062Page,
  },
  {
    path: 's77063',   
    canActivate:[ActiveGuard],  
    component: S77063Page,
  },
  {
    path: 's77064',   
    canActivate:[ActiveGuard],  
    component: S77064Page,
  },
  {
    path: 's77065',   
    canActivate:[ActiveGuard],  
    component: S77065Page,
  },
  {
    path: 's77065t',   
    canActivate:[ActiveGuard],  
    component: S77065tPage,
  },
  {
    path: 's77066',   
    canActivate:[ActiveGuard],  
    component: S77066Page,
  },
  {
    path: 's77067',   
    canActivate:[ActiveGuard],  
    component: S77067Page,
  },
  {
    path: 's77067t',   
    canActivate:[ActiveGuard],  
    component: S77067tPage,
  },
  {
    path: 's77068',   
    canActivate:[ActiveGuard],  
    component: S77068Page,
  },
  {
    path: 's77069',   
    canActivate:[ActiveGuard],  
    component: S77069Page,
  },
  {
    path: 's77070',   
    canActivate:[ActiveGuard],  
    component: S77070Page,
  },
  {
    path: 's77071',   
    canActivate:[ActiveGuard],  
    component: S77071Page,
  },
  {
    path: 's77072',   
    canActivate:[ActiveGuard],  
    component: S77072Page,
  },
  {
    path: 's77073',   
    canActivate:[ActiveGuard],  
    component: S77073Page,
  },
  {
    path: 's77074',   
    canActivate:[ActiveGuard],  
    component: S77074Page,
  },  
  {
    path: 's77075',   
    canActivate:[ActiveGuard],  
    component: S77075Page,
  },
  {
    path: 's77076',   
    canActivate:[ActiveGuard],  
    component: S77076Page,
  }, 
  {
    path: 's77076t',   
    canActivate:[ActiveGuard],  
    component: S77076tPage,
  }, 
  {
    path: 's77077',   
    canActivate:[ActiveGuard],  
    component: S77077Page,
  },
  {
    path: 's77078',   
    canActivate:[ActiveGuard],  
    component: S77078Page,
  },
  {
    path: 's77078t',   
    canActivate:[ActiveGuard],  
    component: S77078tPage,
  },
  {
    path: 's77079',   
    canActivate:[ActiveGuard],  
    component: S77079Page,
  },
  {
    path: 's77080',   
    canActivate:[ActiveGuard],  
    component: S77080Page,
  }, 
  {
    path: 's77080t',   
    canActivate:[ActiveGuard],  
    component: S77080tPage,
  }, 
  {
    path: 's77081',   
    canActivate:[ActiveGuard],  
    component: S77081Page,
  },
  {
    path: 's77082',   
    canActivate:[ActiveGuard],  
    component: S77082Page,
  },  
  {
    path: 's77082t',   
    canActivate:[ActiveGuard],  
    component: S77082tPage,
  },  
  {
    path: 's77083',   
    canActivate:[ActiveGuard],  
    component: S77083Page,
  },
  {
    path: 's77084',   
    canActivate:[ActiveGuard],  
    component: S77084Page,
  },
  {
    path: 's77084t',   
    canActivate:[ActiveGuard],  
    component: S77084tPage,
  },
  {
    path: 's77085',   
    canActivate:[ActiveGuard],  
    component: S77085Page,
  },
  {
    path: 's77085t',   
    canActivate:[ActiveGuard],  
    component: S77085tPage,
  },
  {
    path: 's77086',   
    canActivate:[ActiveGuard],  
    component: S77086Page,
  },
  {
    path: 's77087',   
    canActivate:[ActiveGuard],  
    component: S77087Page,
  },
  {
    path: 's77087t',   
    canActivate:[ActiveGuard],  
    component: S77087tPage,
  },
  {
    path: 's77088',   
    canActivate:[ActiveGuard],  
    component: S77088Page,
  },
  {
    path: 's77089',   
    canActivate:[ActiveGuard],  
    component: S77089Page,
  },
  {
    path: 's77089t',   
    canActivate:[ActiveGuard],  
    component: S77089tPage,
  },
  {
    path: 's77090',   
    canActivate:[ActiveGuard],  
    component: S77090Page,
  },
  {
    path: 's77091',   
    canActivate:[ActiveGuard],  
    component: S77091Page,
  },
  {
    path: 's77091t',   
    canActivate:[ActiveGuard],  
    component: S77091tPage,
  },
  {
    path: 's77092',   
    canActivate:[ActiveGuard],  
    component: S77092Page,
  },
  {
    path: 's77093',   
    canActivate:[ActiveGuard],  
    component: S77093Page,
  },
  {
    path: 's77093t',   
    canActivate:[ActiveGuard],  
    component: S77093tPage,
  },
  {
    path: 's77094',   
    canActivate:[ActiveGuard],  
    component: S77094Page,
  },
  {
    path: 's77095',   
    canActivate:[ActiveGuard],  
    component: S77095Page,
  },
  {
    path: 's77095t',   
    canActivate:[ActiveGuard],  
    component: S77095tPage,
  },
  {
    path: 's77096',   
    canActivate:[ActiveGuard],  
    component: S77096Page,
  },
  {
    path: 's77097',   
    canActivate:[ActiveGuard],  
    component: S77097Page,
  },
  {
    path: 's77098',   
    canActivate:[ActiveGuard],  
    component: S77098Page,
  },
  {
    path: 's77099',   
    canActivate:[ActiveGuard],  
    component: S77099Page,
  },
  {
    path: 's77100',   
    canActivate:[ActiveGuard],  
    component: S77100Page,
  },
  {
    path: 's77101',   
    canActivate:[ActiveGuard],  
    component: S77101Page,
  },
  {
    path: 's77102',   
    canActivate:[ActiveGuard],  
    component: S77102Page,
  },
  {
    path: 's77103',   
    canActivate:[ActiveGuard],  
    component: S77103Page,
  },
  {
    path: 's77104',   
    canActivate:[ActiveGuard],  
    component: S77104Page,
  },
  {
    path: 's77105',   
    canActivate:[ActiveGuard],  
    component: S77105Page,
  },
  {
    path: 's77106',   
    canActivate:[ActiveGuard],  
    component: S77106Page,
  },
  {
    path: 's77107',   
    canActivate:[ActiveGuard],  
    component: S77107Page,
  },
  {
    path: 's77108',   
    canActivate:[ActiveGuard],  
    component: S77108Page,
  },
  {
    path: 's77109',   
    canActivate:[ActiveGuard],  
    component: S77109Page,
  },
  {
    path: 's77110',   
    canActivate:[ActiveGuard],  
    component: S77110Page,
  },
  {
    path: 's77111',   
    canActivate:[ActiveGuard],  
    component: S77111Page,
  },
  {
    path: 's77112',   
    canActivate:[ActiveGuard],  
    component: S77112Page,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakingBetterDecisionsRoutingModule { }