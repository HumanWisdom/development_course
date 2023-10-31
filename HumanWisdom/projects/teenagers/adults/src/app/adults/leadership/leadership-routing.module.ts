import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S59001Page } from './s59001/s59001.page';  
import { S59002Page } from './s59002/s59002.page';  
import { S59003Page } from './s59003/s59003.page'; 
import { S59003tPage } from './s59003t/s59003t.page';   
import { S59004Page } from './s59004/s59004.page';  
import { S59005Page } from './s59005/s59005.page';  
import { S59005tPage } from './s59005t/s59005t.page';  
import { S59006Page } from './s59006/s59006.page';  
import { S59007Page } from './s59007/s59007.page';  
import { S59008Page } from './s59008/s59008.page';  
import { S59009Page } from './s59009/s59009.page';  
import { S59010Page } from './s59010/s59010.page';  
import { S59011Page } from './s59011/s59011.page';  
import { S59012Page } from './s59012/s59012.page';  
import { S59013Page } from './s59013/s59013.page';  
import { S59014Page } from './s59014/s59014.page';  
import { S59015Page } from './s59015/s59015.page';  
import { S59016Page } from './s59016/s59016.page';  
import { S59017Page } from './s59017/s59017.page';  
import { S59018Page } from './s59018/s59018.page'; 
import { S59019Page } from './s59019/s59019.page';  
import { S59020Page } from './s59020/s59020.page';  
import { S59021Page } from './s59021/s59021.page'; 
import { S59021p0Page } from './s59021p0/s59021p0.page';   
import { S59022Page } from './s59022/s59022.page';  
import { S59023Page } from './s59023/s59023.page';  
import { S59024Page } from './s59024/s59024.page';  
import { S59025Page } from './s59025/s59025.page';  
import { S59025tPage } from './s59025t/s59025t.page';  
import { S59026Page } from './s59026/s59026.page';  
import { S59027Page } from './s59027/s59027.page';  
import { S59028Page } from './s59028/s59028.page';  
import { S59029Page } from './s59029/s59029.page';  
import { S59030Page } from './s59030/s59030.page';  
import { S59030tPage } from './s59030t/s59030t.page';  
import { S59031Page } from './s59031/s59031.page';  
import { S59032Page } from './s59032/s59032.page';  
import { S59033Page } from './s59033/s59033.page';  
import { S59034Page } from './s59034/s59034.page';  
import { S59035Page } from './s59035/s59035.page';  
import { S59036Page } from './s59036/s59036.page';  
import { S59037Page } from './s59037/s59037.page';  
import { S59038Page } from './s59038/s59038.page';  
import { S59038tPage } from './s59038t/s59038t.page';  
import { S59039Page } from './s59039/s59039.page';  
import { S59040Page } from './s59040/s59040.page';  
import { S59040tPage } from './s59040t/s59040t.page';  
import { S59041Page } from './s59041/s59041.page';  
import { S59042Page } from './s59042/s59042.page';
import { S59042tPage } from './s59042t/s59042t.page';    
import { S59043Page } from './s59043/s59043.page';  
import { S59044Page } from './s59044/s59044.page';  
import { S59045Page } from './s59045/s59045.page';  
import { S59046Page } from './s59046/s59046.page';  
import { S59047Page } from './s59047/s59047.page';  
import { S59048Page } from './s59048/s59048.page';  
import { S59048tPage } from './s59048t/s59048t.page';  
import { S59049Page } from './s59049/s59049.page';  
import { S59050Page } from './s59050/s59050.page';  
import { S59051Page } from './s59051/s59051.page';  
import { S59051tPage } from './s59051t/s59051t.page';  
import { S59052Page } from './s59052/s59052.page';  
import { S59053Page } from './s59053/s59053.page';  
import { S59054Page } from './s59054/s59054.page';  
import { S59055Page } from './s59055/s59055.page';  
import { S59055tPage } from './s59055t/s59055t.page';  
import { S59056Page } from './s59056/s59056.page';  
import { S59057Page } from './s59057/s59057.page';  
import { S59058Page } from './s59058/s59058.page';  
import { S59059Page } from './s59059/s59059.page';  
import { S59060Page } from './s59060/s59060.page';  
import { S59061Page } from './s59061/s59061.page';  
import { S59062Page } from './s59062/s59062.page';  
import { S59063Page } from './s59063/s59063.page';  
import { S59064Page } from './s59064/s59064.page';  
import { S59065Page } from './s59065/s59065.page';  
import { S59065tPage } from './s59065t/s59065t.page';  
import { S59066Page } from './s59066/s59066.page';  
import { S59067Page } from './s59067/s59067.page';  
import { S59068Page } from './s59068/s59068.page';  
import { S59068tPage } from './s59068t/s59068t.page';  
import { S59069Page } from './s59069/s59069.page';  
import { S59070Page } from './s59070/s59070.page';  
import { S59071Page } from './s59071/s59071.page';  
import { S59072Page } from './s59072/s59072.page';  
import { S59073Page } from './s59073/s59073.page';  
import { S59073tPage } from './s59073t/s59073t.page';  
import { S59074Page } from './s59074/s59074.page';  
import { S59075Page } from './s59075/s59075.page';  
import { S59076Page } from './s59076/s59076.page';  
import { S59077Page } from './s59077/s59077.page';  
import { S59077tPage } from './s59077t/s59077t.page';  
import { S59078Page } from './s59078/s59078.page';  
import { S59079Page } from './s59079/s59079.page';  
import { S59080Page } from './s59080/s59080.page';  
import { S59080tPage } from './s59080t/s59080t.page';  
import { S59081Page } from './s59081/s59081.page';  
import { S59082Page } from './s59082/s59082.page';  
import { S59083Page } from './s59083/s59083.page';  
import { S59084Page } from './s59084/s59084.page';  
import { S59085Page } from './s59085/s59085.page';  
import { S59086Page } from './s59086/s59086.page';  
import { S59087Page } from './s59087/s59087.page';  
import { S59088Page } from './s59088/s59088.page';  
import { S59088tPage } from './s59088t/s59088t.page';  
import { S59089Page } from './s59089/s59089.page';  
import { S59090Page } from './s59090/s59090.page'; 
import { S59090tPage } from './s59090t/s59090t.page';  
import { S59091Page } from './s59091/s59091.page';  
import { S59092Page } from './s59092/s59092.page';  
import { S59093Page } from './s59093/s59093.page';  
import { S59094Page } from './s59094/s59094.page';  
import { S59095Page } from './s59095/s59095.page';
import { S59095tPage } from './s59095t/s59095t.page';  
import { S59096Page } from './s59096/s59096.page';  
import { S59097Page } from './s59097/s59097.page';  
import { S59098Page } from './s59098/s59098.page';  
import { S59099Page } from './s59099/s59099.page';  
import { S59099tPage } from './s59099t/s59099t.page';  
import { S59100Page } from './s59100/s59100.page';  
import { S59101Page } from './s59101/s59101.page';  
import { S59102Page } from './s59102/s59102.page';  
import { S59103Page } from './s59103/s59103.page';  
import { S59104Page } from './s59104/s59104.page';  
import { S59104tPage } from './s59104t/s59104t.page';  
import { S59105Page } from './s59105/s59105.page';  
import { S59106Page } from './s59106/s59106.page';  
import { S59107Page } from './s59107/s59107.page';  
import { S59108tPage } from './s59108t/s59108t.page';  
import { S59108Page } from './s59108/s59108.page';  
import { S59109Page } from './s59109/s59109.page';  
import { S59110Page } from './s59110/s59110.page';  
import { S59111Page } from './s59111/s59111.page';  
import { S59112Page } from './s59112/s59112.page';  
import { S59113Page } from './s59113/s59113.page';  
import { S59114Page } from './s59114/s59114.page';  
import { S59115Page } from './s59115/s59115.page';  
import { S59116Page } from './s59116/s59116.page';
import { S59116tPage } from './s59116t/s59116t.page';  
import { S59117Page } from './s59117/s59117.page';  
import { S59118Page } from './s59118/s59118.page';  
import { S59119Page } from './s59119/s59119.page';  
import { S59120Page } from './s59120/s59120.page';  
import { S59121Page } from './s59121/s59121.page';  
import { S59121tPage } from './s59121t/s59121t.page';  
import { S59122Page } from './s59122/s59122.page';  
import { S59123Page } from './s59123/s59123.page';  
import { S59124Page } from './s59124/s59124.page';  
import { S59125Page } from './s59125/s59125.page';  
import { S59126Page } from './s59126/s59126.page';  
import { S59127Page } from './s59127/s59127.page';  
import { S59128Page } from './s59128/s59128.page';  
import { S59129Page } from './s59129/s59129.page';  
import { S59130Page } from './s59130/s59130.page';  
import { S59131Page } from './s59131/s59131.page';  
import { S59132Page } from './s59132/s59132.page';  
import { S59133Page } from './s59133/s59133.page';  
import { S59134Page } from './s59134/s59134.page';  
import { S59135Page } from './s59135/s59135.page';  
import { S59136Page } from './s59136/s59136.page';  
import { S59137Page } from './s59137/s59137.page';  
import { S59138Page } from './s59138/s59138.page';  
import { S59139Page } from './s59139/s59139.page';  
import { S59140Page } from './s59140/s59140.page';  
import { S59141Page } from './s59141/s59141.page';  
import { S59142Page } from './s59142/s59142.page';  
import { S59143Page } from './s59143/s59143.page';  
import { S59144Page } from './s59144/s59144.page';  
import { S59145Page } from './s59145/s59145.page';  
import { S59146Page } from './s59146/s59146.page';  
import { S59147Page } from './s59147/s59147.page'; 
import { S59147tPage } from './s59147t/s59147t.page';  
import { S59148Page } from './s59148/s59148.page';  
import { S59149Page } from './s59149/s59149.page';  
import { S59150Page } from './s59150/s59150.page';  
import { S59151Page } from './s59151/s59151.page';  
import { S59152Page } from './s59152/s59152.page'; 
import { S59152tPage } from './s59152t/s59152t.page';  
import { S59153Page } from './s59153/s59153.page';  
import { S59154Page } from './s59154/s59154.page';  
import { S59155Page } from './s59155/s59155.page';  
import { S59156Page } from './s59156/s59156.page';  
import { S59157Page } from './s59157/s59157.page';  
import { S59158Page } from './s59158/s59158.page';  
import { S59159Page } from './s59159/s59159.page';  
import { S59160Page } from './s59160/s59160.page';  
import { S59161Page } from './s59161/s59161.page';  
import { S59162Page } from './s59162/s59162.page';  
import { S59163Page } from './s59163/s59163.page';  
import { S59164Page } from './s59164/s59164.page';  
import { S59165Page } from './s59165/s59165.page';  
import { S59166Page } from './s59166/s59166.page'; 
import { S59167Page } from './s59167/s59167.page';  
import { S59168Page } from './s59168/s59168.page';  
import { S59169Page } from './s59169/s59169.page';  
import { S59170Page } from './s59170/s59170.page'; 
import { S59170p1Page } from './s59170p1/s59170p1.page';  
import { S59170p2Page } from './s59170p2/s59170p2.page';  
import { S59171Page } from './s59171/s59171.page';  

const routes: Routes = [
  {
    path: '',   
     component: S59001Page,
  },
  {
    path: 's59001',   
     canActivate:[ActiveGuard],  
    component: S59001Page,
  },
  {
    path: 's59002',   
     canActivate:[ActiveGuard],  
    component: S59002Page,
  },
  {
    path: 's59003',   
     canActivate:[ActiveGuard],  
    component: S59003Page,
  },
  {
    path: 's59003t',   
     canActivate:[ActiveGuard],  
    component: S59003tPage,
  },
  {
    path: 's59004',   
     canActivate:[ActiveGuard],  
    component: S59004Page,
  }, 
  {
    path: 's59005',   
     canActivate:[ActiveGuard],  
    component: S59005Page,
  },
  {
    path: 's59005t',   
     canActivate:[ActiveGuard],  
    component: S59005tPage,
  },
  {
    path: 's59006',   
     canActivate:[ActiveGuard],  
    component: S59006Page,
  },
  {
    path: 's59007',   
     canActivate:[ActiveGuard],  
    component: S59007Page,
  },
  {
    path: 's59008',   
     canActivate:[ActiveGuard],  
    component: S59008Page,
  },
  {
    path: 's59009',   
     canActivate:[ActiveGuard],  
    component: S59009Page,
  },
  {
    path: 's59010',   
     canActivate:[ActiveGuard],  
    component: S59010Page,
  },
  {
    path: 's59011',   
     canActivate:[ActiveGuard],  
    component: S59011Page,
  },
  {
    path: 's59012',   
     canActivate:[ActiveGuard],  
    component: S59012Page,
  },
  {
    path: 's59013',   
     canActivate:[ActiveGuard],  
    component: S59013Page,
  },
  {
    path: 's59014',   
     canActivate:[ActiveGuard],  
    component: S59014Page,
  },  
  {
    path: 's59015',   
     canActivate:[ActiveGuard],  
    component: S59015Page,
  },
  {
    path: 's59016',   
     canActivate:[ActiveGuard],  
    component: S59016Page,
  },
  {
    path: 's59017',   
     canActivate:[ActiveGuard],  
    component: S59017Page,
  },
  {
    path: 's59018',   
     canActivate:[ActiveGuard],  
    component: S59018Page,
  }, 
  {
    path: 's59019',   
     canActivate:[ActiveGuard],  
    component: S59019Page,
  },
  {
    path: 's59020',   
     canActivate:[ActiveGuard],  
    component: S59020Page,
  },
  {
    path: 's59021',   
     canActivate:[ActiveGuard],  
    component: S59021Page,
  },
  {
    path: 's59021p0',   
     canActivate:[ActiveGuard],  
    component: S59021p0Page,
  },
  {
    path: 's59022',   
     canActivate:[ActiveGuard],  
    component: S59022Page,
  },
  {
    path: 's59023',   
     canActivate:[ActiveGuard],  
    component: S59023Page,
  },
  {
    path: 's59024',   
     canActivate:[ActiveGuard],  
    component: S59024Page,
  },
  {
    path: 's59025',   
     canActivate:[ActiveGuard],  
    component: S59025Page,
  },
  {
    path: 's59025t',   
     canActivate:[ActiveGuard],  
    component: S59025tPage,
  },
  {
    path: 's59026',   
     canActivate:[ActiveGuard],  
    component: S59026Page,
  },
  {
    path: 's59027',   
     canActivate:[ActiveGuard],  
    component: S59027Page,
  },
  {
    path: 's59028',   
     canActivate:[ActiveGuard],  
    component: S59028Page,
  },
  {
    path: 's59029',   
     canActivate:[ActiveGuard],  
    component: S59029Page,
  },
  {
    path: 's59030',   
     canActivate:[ActiveGuard],  
    component: S59030Page,
  },
  {
    path: 's59030t',   
     canActivate:[ActiveGuard],  
    component: S59030tPage,
  },
  {
    path: 's59031',   
     canActivate:[ActiveGuard],  
    component: S59031Page,
  },
  {
    path: 's59032',   
     canActivate:[ActiveGuard],  
    component: S59032Page,
  },
  {
    path: 's59033',   
     canActivate:[ActiveGuard],  
    component: S59033Page,
  },  
  {
    path: 's59034',   
     canActivate:[ActiveGuard],  
    component: S59034Page,
  },  
  {
    path: 's59035',   
     canActivate:[ActiveGuard],  
    component: S59035Page,
  }, 
  {
    path: 's59036',   
     canActivate:[ActiveGuard],  
    component: S59036Page,
  },
  {
    path: 's59037',   
     canActivate:[ActiveGuard],  
    component: S59037Page,
  }, 
  {
    path: 's59038',   
     canActivate:[ActiveGuard],  
    component: S59038Page,
  },
  {
    path: 's59038t',   
     canActivate:[ActiveGuard],  
    component: S59038tPage,
  },
  {
    path: 's59039',   
     canActivate:[ActiveGuard],  
    component: S59039Page,
  },
  {
    path: 's59040',   
     canActivate:[ActiveGuard],  
    component: S59040Page,
  },
  {
    path: 's59040t',   
     canActivate:[ActiveGuard],  
    component: S59040tPage,
  },
  {
    path: 's59041',   
     canActivate:[ActiveGuard],  
    component: S59041Page,
  },
  {
    path: 's59042',   
     canActivate:[ActiveGuard],  
    component: S59042Page,
  },
  {
    path: 's59042t',   
     canActivate:[ActiveGuard],  
    component: S59042tPage,
  },
  {
    path: 's59043',   
     canActivate:[ActiveGuard],  
    component: S59043Page,
  },
  {
    path: 's59044',   
     canActivate:[ActiveGuard],  
    component: S59044Page,
  },
  {
    path: 's59045',   
     canActivate:[ActiveGuard],  
    component: S59045Page,
  },
  {
    path: 's59046',   
     canActivate:[ActiveGuard],  
    component: S59046Page,
  },
  {
    path: 's59047',   
     canActivate:[ActiveGuard],  
    component: S59047Page,
  },  
  {
    path: 's59048',   
     canActivate:[ActiveGuard],  
    component: S59048Page,
  },
  {
    path: 's59048t',   
     canActivate:[ActiveGuard],  
    component: S59048tPage,
  },
  {
    path: 's59049',   
     canActivate:[ActiveGuard],  
    component: S59049Page,
  },
  {
    path: 's59050',   
     canActivate:[ActiveGuard],  
    component: S59050Page,
  },
  {
    path: 's59051',   
     canActivate:[ActiveGuard],  
    component: S59051Page,
  },
  {
    path: 's59051t',   
     canActivate:[ActiveGuard],  
    component: S59051tPage,
  },
  {
    path: 's59052',   
     canActivate:[ActiveGuard],  
    component: S59052Page,
  },
  {
    path: 's59053',   
     canActivate:[ActiveGuard],  
    component: S59053Page,
  },
  {
    path: 's59054',   
     canActivate:[ActiveGuard],  
    component: S59054Page,
  },
  {
    path: 's59055',   
     canActivate:[ActiveGuard],  
    component: S59055Page,
  },
  {
    path: 's59055t',   
     canActivate:[ActiveGuard],  
    component: S59055tPage,
  },
  {
    path: 's59056',   
     canActivate:[ActiveGuard],  
    component: S59056Page,
  },
  {
    path: 's59057',   
     canActivate:[ActiveGuard],  
    component: S59057Page,
  },
  {
    path: 's59058',   
     canActivate:[ActiveGuard],  
    component: S59058Page,
  },
  {
    path: 's59059',   
     canActivate:[ActiveGuard],  
    component: S59059Page,
  },
  {
    path: 's59060',   
     canActivate:[ActiveGuard],  
    component: S59060Page,
  },
  {
    path: 's59061',   
     canActivate:[ActiveGuard],  
    component: S59061Page,
  },
  {
    path: 's59062',   
     canActivate:[ActiveGuard],  
    component: S59062Page,
  },
  {
    path: 's59063',   
     canActivate:[ActiveGuard],  
    component: S59063Page,
  },
  {
    path: 's59064',   
     canActivate:[ActiveGuard],  
    component: S59064Page,
  },
  {
    path: 's59065',   
     canActivate:[ActiveGuard],  
    component: S59065Page,
  },
  {
    path: 's59065t',   
     canActivate:[ActiveGuard],  
    component: S59065tPage,
  },
  {
    path: 's59066',   
     canActivate:[ActiveGuard],  
    component: S59066Page,
  },
  {
    path: 's59067',   
     canActivate:[ActiveGuard],  
    component: S59067Page,
  },
  {
    path: 's59068',   
     canActivate:[ActiveGuard],  
    component: S59068Page,
  },
  {
    path: 's59068t',   
     canActivate:[ActiveGuard],  
    component: S59068tPage,
  },  
  {
    path: 's59069',   
     canActivate:[ActiveGuard],  
    component: S59069Page,
  },
  {
    path: 's59070',   
     canActivate:[ActiveGuard],  
    component: S59070Page,
  },
  {
    path: 's59071',   
     canActivate:[ActiveGuard],  
    component: S59071Page,
  },
  {
    path: 's59072',   
     canActivate:[ActiveGuard],  
    component: S59072Page,
  },
  {
    path: 's59073',   
     canActivate:[ActiveGuard],  
    component: S59073Page,
  },
  {
    path: 's59073t',   
     canActivate:[ActiveGuard],  
    component: S59073tPage,
  },
  {
    path: 's59074',   
     canActivate:[ActiveGuard],  
    component: S59074Page,
  },
  {
    path: 's59075',   
     canActivate:[ActiveGuard],  
    component: S59075Page,
  },
  {
    path: 's59076',   
     canActivate:[ActiveGuard],  
    component: S59076Page,
  }, 
  {
    path: 's59077',   
     canActivate:[ActiveGuard],  
    component: S59077Page,
  },
  {
    path: 's59077t',   
     canActivate:[ActiveGuard],  
    component: S59077tPage,
  },
  {
    path: 's59078',   
     canActivate:[ActiveGuard],  
    component: S59078Page,
  },
  {
    path: 's59079',   
     canActivate:[ActiveGuard],  
    component: S59079Page,
  },
  {
    path: 's59080',   
     canActivate:[ActiveGuard],  
    component: S59080Page,
  },
  {
    path: 's59080t',   
     canActivate:[ActiveGuard],  
    component: S59080tPage,
  },
  {
    path: 's59081',   
     canActivate:[ActiveGuard],  
    component: S59081Page,
  },
  {
    path: 's59082',   
     canActivate:[ActiveGuard],  
    component: S59082Page,
  },  
  {
    path: 's59083',   
     canActivate:[ActiveGuard],  
    component: S59083Page,
  },
  {
    path: 's59084',   
     canActivate:[ActiveGuard],  
    component: S59084Page,
  },
  {
    path: 's59085',   
     canActivate:[ActiveGuard],  
    component: S59085Page,
  }, 
  {
    path: 's59086',   
     canActivate:[ActiveGuard],  
    component: S59086Page,
  },
  {
    path: 's59087',   
     canActivate:[ActiveGuard],  
    component: S59087Page,
  },
  {
    path: 's59088',   
     canActivate:[ActiveGuard],  
    component: S59088Page,
  },
  {
    path: 's59088t',   
     canActivate:[ActiveGuard],  
    component: S59088tPage,
  },
  {
    path: 's59089',   
     canActivate:[ActiveGuard],  
    component: S59089Page,
  },
  {
    path: 's59090',   
     canActivate:[ActiveGuard],  
    component: S59090Page,
  },
  {
    path: 's59090t',   
     canActivate:[ActiveGuard],  
    component: S59090tPage,
  },
  {
    path: 's59091',   
     canActivate:[ActiveGuard],  
    component: S59091Page,
  },
  {
    path: 's59092',   
     canActivate:[ActiveGuard],  
    component: S59092Page,
  },
  {
    path: 's59093',   
     canActivate:[ActiveGuard],  
    component: S59093Page,
  },
  {
    path: 's59094',   
     canActivate:[ActiveGuard],  
    component: S59094Page,
  }, 
  {
    path: 's59095',   
     canActivate:[ActiveGuard],  
    component: S59095Page,
  },
  {
    path: 's59095t',   
     canActivate:[ActiveGuard],  
    component: S59095tPage,
  },
  {
    path: 's59096',   
     canActivate:[ActiveGuard],  
    component: S59096Page,
  }, 
  {
    path: 's59097',   
     canActivate:[ActiveGuard],  
    component: S59097Page,
  },
  {
    path: 's59098',   
     canActivate:[ActiveGuard],  
    component: S59098Page,
  },
  {
    path: 's59099',   
     canActivate:[ActiveGuard],  
    component: S59099Page,
  },
  {
    path: 's59099t',   
     canActivate:[ActiveGuard],  
    component: S59099tPage,
  },
  {
    path: 's59100',   
     canActivate:[ActiveGuard],  
    component: S59100Page,
  },  
  {
    path: 's59101',   
     canActivate:[ActiveGuard],  
    component: S59101Page,
  },
  {
    path: 's59102',   
     canActivate:[ActiveGuard],  
    component: S59102Page,
  },
  {
    path: 's59103',   
     canActivate:[ActiveGuard],  
    component: S59103Page,
  },
  {
    path: 's59104',   
     canActivate:[ActiveGuard],  
    component: S59104Page,
  },
  {
    path: 's59104t',   
     canActivate:[ActiveGuard],  
    component: S59104tPage,
  },
  {
    path: 's59105',   
     canActivate:[ActiveGuard],  
    component: S59105Page,
  },
  {
    path: 's59106',   
     canActivate:[ActiveGuard],  
    component: S59106Page,
  },
  {
    path: 's59107',   
     canActivate:[ActiveGuard],  
    component: S59107Page,
  }, 
  {
    path: 's59108',   
     canActivate:[ActiveGuard],  
    component: S59108Page,
  },
  {
    path: 's59108t',   
     canActivate:[ActiveGuard],  
    component: S59108tPage,
  },
  {
    path: 's59109',   
     canActivate:[ActiveGuard],  
    component: S59109Page,
  },
  {
    path: 's59110',   
     canActivate:[ActiveGuard],  
    component: S59110Page,
  },
  {
    path: 's59111',   
     canActivate:[ActiveGuard],  
    component: S59111Page,
  },
  {
    path: 's59112',   
     canActivate:[ActiveGuard],  
    component: S59112Page,
  },
  {
    path: 's59113',   
     canActivate:[ActiveGuard],  
    component: S59113Page,
  },
  {
    path: 's59114',   
     canActivate:[ActiveGuard],  
    component: S59114Page,
  },  
  {
    path: 's59115',   
     canActivate:[ActiveGuard],  
    component: S59115Page,
  },
  {
    path: 's59116',   
     canActivate:[ActiveGuard],  
    component: S59116Page,
  },
  {
    path: 's59116t',   
     canActivate:[ActiveGuard],  
    component: S59116tPage,
  },
  {
    path: 's59117',   
     canActivate:[ActiveGuard],  
    component: S59117Page,
  },
  {
    path: 's59118',   
     canActivate:[ActiveGuard],  
    component: S59118Page,
  },
  {
    path: 's59119',   
     canActivate:[ActiveGuard],  
    component: S59119Page,
  }, 
  {
    path: 's59120',   
     canActivate:[ActiveGuard],  
    component: S59120Page,
  },
  {
    path: 's59121',   
     canActivate:[ActiveGuard],  
    component: S59121Page,
  },
  {
    path: 's59121t',   
     canActivate:[ActiveGuard],  
    component: S59121tPage,
  },
  {
    path: 's59122',   
     canActivate:[ActiveGuard],  
    component: S59122Page,
  },
  {
    path: 's59123',   
     canActivate:[ActiveGuard],  
    component: S59123Page,
  },
  {
    path: 's59124',   
     canActivate:[ActiveGuard],  
    component: S59124Page,
  }, 
  {
    path: 's59125',   
     canActivate:[ActiveGuard],  
    component: S59125Page,
  },
  {
    path: 's59126',   
     canActivate:[ActiveGuard],  
    component: S59126Page,
  },
  {
    path: 's59127',   
     canActivate:[ActiveGuard],  
    component: S59127Page,
  },
  {
    path: 's59128',   
     canActivate:[ActiveGuard],  
    component: S59128Page,
  },
  {
    path: 's59129',   
     canActivate:[ActiveGuard],  
    component: S59129Page,
  },
  {
    path: 's59130',   
     canActivate:[ActiveGuard],  
    component: S59130Page,
  },
  {
    path: 's59131',   
     canActivate:[ActiveGuard],  
    component: S59131Page,
  },
  {
    path: 's59132',   
     canActivate:[ActiveGuard],  
    component: S59132Page,
  },
  {
    path: 's59133',   
     canActivate:[ActiveGuard],  
    component: S59133Page,
  }, 
  {
    path: 's59134',   
     canActivate:[ActiveGuard],  
    component: S59134Page,
  },  
  {
    path: 's59135',   
     canActivate:[ActiveGuard],  
    component: S59135Page,
  },
  {
    path: 's59136',   
     canActivate:[ActiveGuard],  
    component: S59136Page,
  },
  {
    path: 's59137',   
     canActivate:[ActiveGuard],  
    component: S59137Page,
  },
  {
    path: 's59138',   
     canActivate:[ActiveGuard],  
    component: S59138Page,
  },
  {
    path: 's59139',   
     canActivate:[ActiveGuard],  
    component: S59139Page,
  },
  {
    path: 's59140',   
     canActivate:[ActiveGuard],  
    component: S59140Page,
  }, 
  {
    path: 's59141',   
     canActivate:[ActiveGuard],  
    component: S59141Page,
  },
  {
    path: 's59142',   
     canActivate:[ActiveGuard],  
    component: S59142Page,
  },
  {
    path: 's59143',   
     canActivate:[ActiveGuard],  
    component: S59143Page,
  },  
  {
    path: 's59144',   
     canActivate:[ActiveGuard],  
    component: S59144Page,
  },
  {
    path: 's59145',   
     canActivate:[ActiveGuard],  
    component: S59145Page,
  },
  {
    path: 's59146',   
     canActivate:[ActiveGuard],  
    component: S59146Page,
  },
  {
    path: 's59147',   
     canActivate:[ActiveGuard],  
    component: S59147Page,
  },
  {
    path: 's59147t',   
     canActivate:[ActiveGuard],  
    component: S59147tPage,
  },
  {
    path: 's59148',   
     canActivate:[ActiveGuard],  
    component: S59148Page,
  },  
  {
    path: 's59149',   
     canActivate:[ActiveGuard],  
    component: S59149Page,
  },
  {
    path: 's59150',   
     canActivate:[ActiveGuard],  
    component: S59150Page,
  },
  {
    path: 's59151',   
     canActivate:[ActiveGuard],  
    component: S59151Page,
  },
  {
    path: 's59152',   
     canActivate:[ActiveGuard],  
    component: S59152Page,
  },
  {
    path: 's59152t',   
     canActivate:[ActiveGuard],  
    component: S59152tPage,
  },
  {
    path: 's59153',   
     canActivate:[ActiveGuard],  
    component: S59153Page,
  },
  {
    path: 's59154',   
     canActivate:[ActiveGuard],  
    component: S59154Page,
  },  
  {
    path: 's59155',   
     canActivate:[ActiveGuard],  
    component: S59155Page,
  },
  {
    path: 's59156',   
     canActivate:[ActiveGuard],  
    component: S59156Page,
  },
  {
    path: 's59157',   
     canActivate:[ActiveGuard],  
    component: S59157Page,
  },
  {
    path: 's59158',   
     canActivate:[ActiveGuard],  
    component: S59158Page,
  },
  {
    path: 's59159',   
     canActivate:[ActiveGuard],  
    component: S59159Page,
  },
  {
    path: 's59160',   
     canActivate:[ActiveGuard],  
    component: S59160Page,
  },
  {
    path: 's59161',   
     canActivate:[ActiveGuard],  
    component: S59161Page,
  }, 
  {
    path: 's59162',   
     canActivate:[ActiveGuard],  
    component: S59162Page,
  },
  {
    path: 's59163',   
     canActivate:[ActiveGuard],  
    component: S59163Page,
  },
  {
    path: 's59164',   
     canActivate:[ActiveGuard],  
    component: S59164Page,
  },
  {
    path: 's59165',   
     canActivate:[ActiveGuard],  
    component: S59165Page,
  },
  {
    path: 's59166',   
     canActivate:[ActiveGuard],  
    component: S59166Page,
  }, 
  {
    path: 's59167',   
     canActivate:[ActiveGuard],  
    component: S59167Page,
  },
  {
    path: 's59168',   
     canActivate:[ActiveGuard],  
    component: S59168Page,
  },
  {
    path: 's59169',   
     canActivate:[ActiveGuard],  
    component: S59169Page,
  },
  {
    path: 's59170',   
     canActivate:[ActiveGuard],  
    component: S59170Page,
  },
  {
    path: 's59170p1',   
     canActivate:[ActiveGuard],  
    component: S59170p1Page,
  },
  {
    path: 's59170p2',   
     canActivate:[ActiveGuard],  
    component: S59170p2Page,
  },
  {
    path: 's59171',   
     canActivate:[ActiveGuard],  
    component: S59171Page,
  },  
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadershipRoutingModule { }
