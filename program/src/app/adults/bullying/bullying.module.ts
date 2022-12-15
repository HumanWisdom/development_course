import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared/shared.module'
import {AdultsService} from '../adults.service';

import { S76001Page } from './s76001/s76001.page';  
import { S76002Page } from './s76002/s76002.page';  
import { S76003Page } from './s76003/s76003.page';  
import { S76004Page } from './s76004/s76004.page';  
import { S76005Page } from './s76005/s76005.page';  
import { S76006Page } from './s76006/s76006.page';  
import { S76006tPage } from './s76006t/s76006t.page';  
import { S76007Page } from './s76007/s76007.page';  
import { S76008Page } from './s76008/s76008.page';  
import { S76009Page } from './s76009/s76009.page';  
import { S76009tPage } from './s76009t/s76009t.page';  
import { S76010Page } from './s76010/s76010.page';  
import { S76011Page } from './s76011/s76011.page'; 
import { S76012Page } from './s76012/s76012.page';  
import { S76013Page } from './s76013/s76013.page'; 
import { S76013tPage } from './s76013t/s76013t.page';   
import { S76014Page } from './s76014/s76014.page';  
import { S76014tPage } from './s76014t/s76014t.page';  
import { S76015Page } from './s76015/s76015.page';  
import { S76015tPage } from './s76015t/s76015t.page';  
import { S76015p0Page } from './s76015p0/s76015p0.page';  
import { S76016Page } from './s76016/s76016.page';  
import { S76017Page } from './s76017/s76017.page';  
import { S76018Page } from './s76018/s76018.page'; 
import { S76019Page } from './s76019/s76019.page';  
import { S76020Page } from './s76020/s76020.page';  
import { S76020tPage } from './s76020t/s76020t.page';  
import { S76020p0Page } from './s76020p0/s76020p0.page'; 
import { S76021Page } from './s76021/s76021.page';  
import { S76021tPage } from './s76021t/s76021t.page';  
import { S76022Page } from './s76022/s76022.page';  
import { S76022tPage } from './s76022t/s76022t.page';  
import { S76023Page } from './s76023/s76023.page';  
import { S76024Page } from './s76024/s76024.page';  
import { S76025Page } from './s76025/s76025.page';  
import { S76026Page } from './s76026/s76026.page';
import { S76027Page } from './s76027/s76027.page';  
import { S76028Page } from './s76028/s76028.page';  
import { S76029Page } from './s76029/s76029.page';  
import { S76030Page } from './s76030/s76030.page';  
import { S76031Page } from './s76031/s76031.page';  
import { S76032Page } from './s76032/s76032.page';  
import { S76032tPage } from './s76032t/s76032t.page';  
import { S76033Page } from './s76033/s76033.page';  
import { S76034Page } from './s76034/s76034.page';  
import { S76035Page } from './s76035/s76035.page';  
import { S76036Page } from './s76036/s76036.page';  
import { S76037Page } from './s76037/s76037.page';  
import { S76037tPage } from './s76037t/s76037t.page';  
import { S76038Page } from './s76038/s76038.page';  
import { S76039Page } from './s76039/s76039.page';  
import { S76040Page } from './s76040/s76040.page';  
import { S76040tPage } from './s76040t/s76040t.page';  
import { S76041Page } from './s76041/s76041.page';  
import { S76042Page } from './s76042/s76042.page';  
import { S76043Page } from './s76043/s76043.page';  
import { S76043tPage } from './s76043t/s76043t.page';  
import { S76044Page } from './s76044/s76044.page';  
import { S76045Page } from './s76045/s76045.page';  
import { S76046Page } from './s76046/s76046.page';  
import { S76046tPage } from './s76046t/s76046t.page';  
import { S76047Page } from './s76047/s76047.page';  
import { S76048Page } from './s76048/s76048.page';  
import { S76049Page } from './s76049/s76049.page';  
import { S76050Page } from './s76050/s76050.page';  
import { S76050tPage } from './s76050t/s76050t.page';  
import { S76051Page } from './s76051/s76051.page';  
import { S76052Page } from './s76052/s76052.page';  
import { S76053Page } from './s76053/s76053.page';  
import { S76053tPage } from './s76053t/s76053t.page';  
import { S76054Page } from './s76054/s76054.page';  
import { S76055Page } from './s76055/s76055.page';  
import { S76056Page } from './s76056/s76056.page';  
import { S76057Page } from './s76057/s76057.page';
import { S76058Page } from './s76058/s76058.page';  
import { S76059Page } from './s76059/s76059.page';  
import { S76060Page } from './s76060/s76060.page';  
import { S76061Page } from './s76061/s76061.page';  
import { S76062Page } from './s76062/s76062.page';  
import { S76062tPage } from './s76062t/s76062t.page';  
import { S76063Page } from './s76063/s76063.page';  
import { S76064Page } from './s76064/s76064.page';  
import { S76065Page } from './s76065/s76065.page';  
import { S76065tPage } from './s76065t/s76065t.page';  
import { S76066Page } from './s76066/s76066.page';  
import { S76067Page } from './s76067/s76067.page';  
import { S76068Page } from './s76068/s76068.page';
import { S76069Page } from './s76069/s76069.page';  
import { S76069tPage } from './s76069t/s76069t.page';  
import { S76070Page } from './s76070/s76070.page'; 
import { S76071Page } from './s76071/s76071.page';  
import { S76072Page } from './s76072/s76072.page';  
import { S76073Page } from './s76073/s76073.page';  
import { S76074Page } from './s76074/s76074.page'; 
import { S76075Page } from './s76075/s76075.page';  
import { S76076Page } from './s76076/s76076.page';  
import { S76077Page } from './s76077/s76077.page';  
import { S76078Page } from './s76078/s76078.page';  
import { S76078tPage } from './s76078t/s76078t.page';  
import { S76079Page } from './s76079/s76079.page';  
import { S76080Page } from './s76080/s76080.page';  
import { S76080tPage } from './s76080t/s76080t.page';  
import { S76081Page } from './s76081/s76081.page';  
import { S76082Page } from './s76082/s76082.page';  
import { S76082tPage } from './s76082t/s76082t.page';  
import { S76083Page } from './s76083/s76083.page';  
import { S76084Page } from './s76084/s76084.page';  
import { S76085Page } from './s76085/s76085.page';  
import { S76086Page } from './s76086/s76086.page';  
import { S76087Page } from './s76087/s76087.page';  
import { S76088Page } from './s76088/s76088.page';  
import { S76089Page } from './s76089/s76089.page';  
import { S76090Page } from './s76090/s76090.page';  
import { S76091Page } from './s76091/s76091.page';  
import { S76092Page } from './s76092/s76092.page';  
import { S76093Page } from './s76093/s76093.page';  

import { BullyingRoutingModule } from './bullying-routing.module';

@NgModule({
  declarations: [
    S76001Page,
    S76002Page,
    S76003Page,
    S76004Page,
    S76005Page,
    S76006Page,
    S76006tPage,
    S76007Page,
    S76008Page,
    S76009Page,
    S76009tPage,
    S76010Page,
    S76011Page,
    S76012Page,
    S76013Page,
    S76013tPage,
    S76014Page,   
    S76014tPage,   
    S76015Page,
    S76015tPage,
    S76015p0Page,
    S76016Page,    
    S76017Page,
    S76018Page,
    S76019Page,
    S76020Page,
    S76020tPage,
    S76020p0Page,
    S76021Page,
    S76021tPage,
    S76022Page,
    S76022tPage,
    S76023Page,
    S76024Page,
    S76025Page,
    S76026Page,
    S76027Page,
    S76028Page,
    S76029Page,
    S76030Page,
    S76031Page,
    S76032Page,
    S76032tPage,
    S76033Page,
    S76034Page,
    S76035Page,
    S76036Page,
    S76037Page,
    S76037tPage,
    S76038Page,
    S76039Page,
    S76040Page,
    S76040tPage,
    S76041Page,
    S76042Page,
    S76043Page,
    S76043tPage,
    S76044Page,
    S76045Page,
    S76046Page,
    S76046tPage,
    S76047Page,   
    S76048Page,
    S76049Page,
    S76050Page,
    S76050tPage,
    S76051Page,
    S76052Page,
    S76053Page,
    S76053tPage,
    S76054Page,
    S76055Page,
    S76056Page,
    S76057Page,
    S76058Page,
    S76059Page,
    S76060Page,
    S76061Page,
    S76062Page,
    S76062tPage,
    S76063Page,
    S76064Page,
    S76065Page,
    S76065tPage,
    S76066Page,
    S76067Page,
    S76068Page,
    S76069Page,
    S76069tPage,
    S76070Page,
    S76071Page,
    S76072Page,
    S76073Page,
    S76074Page,    
    S76075Page,
    S76076Page,
    S76077Page,
    S76078Page,
    S76078tPage,
    S76079Page,
    S76080Page,
    S76080tPage,
    S76081Page,
    S76082Page,
    S76082tPage,
    S76083Page,
    S76084Page,
    S76085Page,
    S76086Page,
    S76087Page,
    S76088Page, 
    S76089Page, 
    S76090Page, 
    S76091Page, 
    S76092Page, 
    S76093Page, 
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    BullyingRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class BullyingModule { }
