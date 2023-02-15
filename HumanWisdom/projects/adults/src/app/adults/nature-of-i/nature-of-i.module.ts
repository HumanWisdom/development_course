import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

import { S57001Page } from './s57001/s57001.page';  
import { S57002Page } from './s57002/s57002.page';  
import { S57003Page } from './s57003/s57003.page';  
import { S57004Page } from './s57004/s57004.page'; 
import { S57004tPage } from './s57004t/s57004t.page';  
import { S57005Page } from './s57005/s57005.page';  
import { S57005tPage } from './s57005t/s57005t.page';  
import { S57006Page } from './s57006/s57006.page';  
import { S57007Page } from './s57007/s57007.page'; 
import { S57007p1Page } from './s57007p1/s57007p1.page';  
import { S57007p2Page } from './s57007p2/s57007p2.page';  
import { S57007p3Page } from './s57007p3/s57007p3.page';  
import { S57007p4Page } from './s57007p4/s57007p4.page';  
import { S57007p5Page } from './s57007p5/s57007p5.page';  
import { S57007p6Page } from './s57007p6/s57007p6.page'; 
import { S57007tPage } from './s57007t/s57007t.page';   
import { S57008Page } from './s57008/s57008.page';  
import { S57009Page } from './s57009/s57009.page';  
import { S57009tPage } from './s57009t/s57009t.page';  
import { S57010Page } from './s57010/s57010.page';  
import { S57011Page } from './s57011/s57011.page'; 
import { S57011tPage } from './s57011t/s57011t.page'; 
import { S57012Page } from './s57012/s57012.page';  
import { S57013Page } from './s57013/s57013.page';  
import { S57013tPage } from './s57013t/s57013t.page';  
import { S57014Page } from './s57014/s57014.page';  
import { S57015Page } from './s57015/s57015.page';  
import { S57016Page } from './s57016/s57016.page'; 
import { S57016tPage } from './s57016t/s57016t.page';   
import { S57017Page } from './s57017/s57017.page';  
import { S57018Page } from './s57018/s57018.page'; 
import { S57019Page } from './s57019/s57019.page';  
import { S57019tPage } from './s57019t/s57019t.page';  
import { S57020Page } from './s57020/s57020.page';  
import { S57021Page } from './s57021/s57021.page';  
import { S57022Page } from './s57022/s57022.page';  
import { S57023Page } from './s57023/s57023.page';  
import { S57023tPage } from './s57023t/s57023t.page';  
import { S57024Page } from './s57024/s57024.page';  
import { S57025Page } from './s57025/s57025.page';  
import { S57026Page } from './s57026/s57026.page';  
import { S57026tPage } from './s57026t/s57026t.page';  
import { S57027Page } from './s57027/s57027.page';  
import { S57028Page } from './s57028/s57028.page';  
import { S57029Page } from './s57029/s57029.page';  
import { S57030Page } from './s57030/s57030.page';  
import { S57031Page } from './s57031/s57031.page';  
import { S57031tPage } from './s57031t/s57031t.page';  
import { S57032Page } from './s57032/s57032.page';  
import { S57033Page } from './s57033/s57033.page';  
import { S57033tPage } from './s57033t/s57033t.page';  
import { S57034Page } from './s57034/s57034.page';  
import { S57035Page } from './s57035/s57035.page';  
import { S57036Page } from './s57036/s57036.page';  
import { S57037Page } from './s57037/s57037.page';  
import { S57038Page } from './s57038/s57038.page';  
import { S57039Page } from './s57039/s57039.page';  
import { S57040Page } from './s57040/s57040.page';  
import { S57041Page } from './s57041/s57041.page';  
import { S57042Page } from './s57042/s57042.page';  
import { S57043Page } from './s57043/s57043.page';  
import { S57043tPage } from './s57043t/s57043t.page';  
import { S57044Page } from './s57044/s57044.page';  
import { S57045Page } from './s57045/s57045.page';  
import { S57046Page } from './s57046/s57046.page';  
import { S57047Page } from './s57047/s57047.page'; 
import { S57048Page } from './s57048/s57048.page';  
import { S57049Page } from './s57049/s57049.page';  
import { S57050Page } from './s57050/s57050.page';  
import { S57051Page } from './s57051/s57051.page';  
import { S57052Page } from './s57052/s57052.page';  
import { S57053Page } from './s57053/s57053.page';  
import { S57054Page } from './s57054/s57054.page';  
import { S57055Page } from './s57055/s57055.page';  
import { S57055tPage } from './s57055t/s57055t.page';  
import { S57056Page } from './s57056/s57056.page';  
import { S57057Page } from './s57057/s57057.page';  
import { S57058Page } from './s57058/s57058.page';  
import { S57059Page } from './s57059/s57059.page';  
import { S57060Page } from './s57060/s57060.page';  
import { S57061Page } from './s57061/s57061.page';  
import { S57062Page } from './s57062/s57062.page';  
import { S57063Page } from './s57063/s57063.page';  
import { S57064Page } from './s57064/s57064.page';  
import { S57065Page } from './s57065/s57065.page';  
import { S57065tPage } from './s57065t/s57065t.page';  
import { S57066Page } from './s57066/s57066.page';  
import { S57067Page } from './s57067/s57067.page';  
import { S57068Page } from './s57068/s57068.page';  
import { S57069Page } from './s57069/s57069.page';  
import { S57070Page } from './s57070/s57070.page';  
import { S57071Page } from './s57071/s57071.page';  
import { S57072Page } from './s57072/s57072.page';  
import { S57073Page } from './s57073/s57073.page';  
import { S57074Page } from './s57074/s57074.page'; 

import { NatureOfIRoutingModule } from './nature-of-i-routing.module';

import { NgxCircularPlayerModule } from '../../../../../ngx-circular-player';

@NgModule({
  declarations: [
    S57001Page ,
    S57002Page ,
    S57003Page ,    
    S57004Page ,
    S57004tPage ,
    S57005Page ,
    S57005tPage ,
    S57006Page ,
    S57007Page ,
    S57007p1Page ,
    S57007p2Page ,
    S57007p3Page ,
    S57007p4Page ,
    S57007p5Page ,
    S57007p6Page ,
    S57007tPage ,
    S57008Page ,
    S57009Page ,
    S57009tPage ,
    S57010Page ,   
    S57011Page ,
    S57011tPage ,
    S57012Page ,   
    S57013Page ,
    S57013tPage ,
    S57014Page ,   
    S57015Page ,
    S57016Page ,
    S57016tPage ,    
    S57017Page ,
    S57018Page ,
    S57019Page ,
    S57019tPage ,    
    S57020Page ,
    S57021Page ,
    S57022Page ,
    S57023Page ,
    S57023tPage ,    
    S57024Page ,
    S57025Page ,
    S57026Page ,
    S57026tPage ,
    S57027Page ,
    S57028Page ,
    S57029Page ,
    S57030Page ,
    S57031Page ,
    S57031tPage ,
    S57032Page ,
    S57033Page ,
    S57033tPage ,
    S57034Page ,
    S57035Page ,
    S57036Page ,
    S57037Page ,
    S57038Page ,
    S57039Page ,
    S57040Page ,
    S57041Page ,
    S57042Page ,
    S57043Page ,
    S57043tPage ,
    S57044Page ,
    S57045Page ,
    S57046Page ,
    S57047Page ,    
    S57048Page ,
    S57049Page ,
    S57050Page ,
    S57051Page ,
    S57052Page ,
    S57053Page ,
    S57054Page ,
    S57055Page ,
    S57055tPage ,
    S57056Page ,
    S57057Page ,
    S57058Page ,
    S57059Page ,
    S57060Page ,
    S57061Page ,
    S57062Page ,
    S57063Page ,
    S57064Page ,
    S57065Page ,
    S57065tPage ,
    S57066Page ,
    S57067Page ,
    S57068Page ,
    S57069Page ,
    S57070Page ,
    S57071Page ,
    S57072Page ,
    S57073Page ,
    S57074Page ,    
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NatureOfIRoutingModule,
    NgxCircularPlayerModule    
  ],
  providers:[
    AdultsService
  ]
})
export class NatureOfIModule { }
