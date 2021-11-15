import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared/shared.module'
import {AdultsService} from '../adults.service';

import { S18001Page } from './s18001/s18001.page';  
import { S18002Page } from './s18002/s18002.page';  
import { S18003Page } from './s18003/s18003.page';  
import { S18003tPage } from './s18003t/s18003t.page';  
import { S18004Page } from './s18004/s18004.page';  
import { S18005Page } from './s18005/s18005.page';  
import { S18006Page } from './s18006/s18006.page';  
import { S18007Page } from './s18007/s18007.page';  
import { S18008Page } from './s18008/s18008.page';  
import { S18009Page } from './s18009/s18009.page';  
import { S18010Page } from './s18010/s18010.page';  
import { S18011Page } from './s18011/s18011.page';  
import { S18012Page } from './s18012/s18012.page';  
import { S18013Page } from './s18013/s18013.page';  
import { S18014Page } from './s18014/s18014.page';  
import { S18015Page } from './s18015/s18015.page';  
import { S18016Page } from './s18016/s18016.page';  
import { S18017Page } from './s18017/s18017.page';  
import { S18018Page } from './s18018/s18018.page';   
import { S18019Page } from './s18019/s18019.page';  
import { S18019tPage } from './s18019t/s18019t.page';  
import { S18020Page } from './s18020/s18020.page';  
import { S18021Page } from './s18021/s18021.page';  
import { S18022Page } from './s18022/s18022.page';  
import { S18023Page } from './s18023/s18023.page';  
import { S18024Page } from './s18024/s18024.page';  
import { S18025Page } from './s18025/s18025.page';  
import { S18026Page } from './s18026/s18026.page';  
import { S18027Page } from './s18027/s18027.page';  
import { S18028Page } from './s18028/s18028.page';  
import { S18029Page } from './s18029/s18029.page';  
import { S18030Page } from './s18030/s18030.page';  
import { S18031Page } from './s18031/s18031.page';  
import { S18032Page } from './s18032/s18032.page';  
import { S18033Page } from './s18033/s18033.page';  
import { S18033tPage } from './s18033t/s18033t.page';  
import { S18034Page } from './s18034/s18034.page';  
import { S18035Page } from './s18035/s18035.page';  
import { S18036Page } from './s18036/s18036.page';  
import { S18037Page } from './s18037/s18037.page';  
import { S18038Page } from './s18038/s18038.page';  
import { S18039Page } from './s18039/s18039.page';  
import { S18039tPage } from './s18039t/s18039t.page';  
import { S18040Page } from './s18040/s18040.page';  
import { S18041Page } from './s18041/s18041.page';  
import { S18042Page } from './s18042/s18042.page';  
import { S18043Page } from './s18043/s18043.page';  
import { S18044Page } from './s18044/s18044.page';  
import { S18045Page } from './s18045/s18045.page';  
import { S18046Page } from './s18046/s18046.page';  
import { S18047Page } from './s18047/s18047.page';  
import { S18048Page } from './s18048/s18048.page';  
import { S18049Page } from './s18049/s18049.page';  
import { S18050Page } from './s18050/s18050.page';  
import { S18050tPage } from './s18050t/s18050t.page';  
import { S18051Page } from './s18051/s18051.page'; 
import { S18052Page } from './s18052/s18052.page';  
import { S18053Page } from './s18053/s18053.page';  
import { S18054Page } from './s18054/s18054.page';  
import { S18055Page } from './s18055/s18055.page';  
import { S18056Page } from './s18056/s18056.page';  
import { S18057Page } from './s18057/s18057.page';  
import { S18058Page } from './s18058/s18058.page';  
import { S18059Page } from './s18059/s18059.page';  
import { S18060Page } from './s18060/s18060.page';  
import { S18061Page } from './s18061/s18061.page';  
import { S18062Page } from './s18062/s18062.page';  
import { S18063Page } from './s18063/s18063.page';  
import { S18064Page } from './s18064/s18064.page';  
import { S18065Page } from './s18065/s18065.page';  
import { S18066Page } from './s18066/s18066.page';  
import { S18067Page } from './s18067/s18067.page';  
import { S18068Page } from './s18068/s18068.page';  
import { S18069Page } from './s18069/s18069.page';  
import { S18070Page } from './s18070/s18070.page';  
import { S18071Page } from './s18071/s18071.page';  
import { S18071tPage } from './s18071t/s18071t.page';  
import { S18072Page } from './s18072/s18072.page';  
import { S18072tPage } from './s18072t/s18072t.page';  
import { S18073Page } from './s18073/s18073.page';  
import { S18073tPage } from './s18073t/s18073t.page';  
import { S18074Page } from './s18074/s18074.page';  
import { S18075Page } from './s18075/s18075.page';  
import { S18076Page } from './s18076/s18076.page';  
import { S18076tPage } from './s18076t/s18076t.page';  
import { S18077Page } from './s18077/s18077.page';  
import { S18078Page } from './s18078/s18078.page';  
import { S18079Page } from './s18079/s18079.page';  
import { S18080Page } from './s18080/s18080.page';   
import { S18081Page } from './s18081/s18081.page';  
import { S18082Page } from './s18082/s18082.page';  
import { S18083Page } from './s18083/s18083.page';  
import { S18084Page } from './s18084/s18084.page';  
import { S18085Page } from './s18085/s18085.page'; 
import { S18086Page } from './s18086/s18086.page';  
import { S18086tPage } from './s18086t/s18086t.page';  
import { S18087Page } from './s18087/s18087.page';  
import { S18088Page } from './s18088/s18088.page';  
import { S18089Page } from './s18089/s18089.page';  
import { S18090Page } from './s18090/s18090.page';  
import { S18091Page } from './s18091/s18091.page';  
import { S18092Page } from './s18092/s18092.page';  
import { S18093Page } from './s18093/s18093.page';  
import { S18094Page } from './s18094/s18094.page'; 
import { S18095Page } from './s18095/s18095.page';  
import { S18096Page } from './s18096/s18096.page'; 
import { S18097Page } from './s18097/s18097.page';  
import { S18098Page } from './s18098/s18098.page';  
import { S18099Page } from './s18099/s18099.page'; 
import { S18100Page } from './s18100/s18100.page';  
import { S18101Page } from './s18101/s18101.page';  
import { S18102Page } from './s18102/s18102.page';  
import { S18103Page } from './s18103/s18103.page';  
import { S18104Page } from './s18104/s18104.page'; 
import { S18105Page } from './s18105/s18105.page';  
import { S18106Page } from './s18106/s18106.page';  
import { S18107Page } from './s18107/s18107.page'; 
import { S18108Page } from './s18108/s18108.page';  

import { EmotionalNeedsRoutingModule } from './emotional-needs-routing.module';

@NgModule({
  declarations: [
    S18001Page ,
    S18002Page ,
    S18003Page ,
    S18003tPage ,
    S18004Page ,
    S18005Page ,
    S18006Page ,
    S18007Page ,
    S18008Page ,
    S18009Page ,
    S18010Page ,
    S18011Page ,
    S18012Page ,
    S18013Page ,
    S18014Page ,
    S18015Page ,
    S18016Page ,
    S18017Page ,
    S18017Page ,
    S18018Page ,    
    S18019Page ,
    S18019tPage ,
    S18020Page ,
    S18021Page ,
    S18022Page ,
    S18023Page ,
    S18024Page ,
    S18025Page ,
    S18026Page ,
    S18027Page ,
    S18028Page ,
    S18029Page ,
    S18030Page ,
    S18031Page ,
    S18032Page ,
    S18033Page ,
    S18033tPage ,
    S18034Page ,
    S18035Page ,    
    S18036Page ,
    S18037Page ,    
    S18038Page ,    
    S18039Page ,
    S18039tPage ,
    S18040Page ,
    S18041Page ,
    S18042Page ,
    S18043Page ,
    S18044Page ,
    S18045Page ,
    S18046Page ,
    S18047Page ,
    S18048Page ,
    S18049Page ,
    S18050Page ,
    S18050tPage ,
    S18051Page ,    
    S18052Page ,
    S18053Page ,
    S18054Page ,
    S18055Page ,
    S18056Page ,
    S18057Page ,
    S18058Page ,
    S18059Page ,
    S18060Page ,
    S18061Page ,
    S18062Page ,
    S18063Page ,
    S18064Page ,
    S18065Page ,
    S18066Page ,
    S18067Page ,
    S18068Page ,
    S18069Page ,
    S18070Page ,
    S18071Page ,
    S18071tPage ,
    S18072Page ,
    S18072tPage ,
    S18073Page ,
    S18073tPage ,
    S18074Page ,
    S18075Page ,
    S18076Page ,
    S18076tPage ,
    S18077Page ,
    S18078Page ,
    S18079Page ,
    S18080Page ,    
    S18081Page ,
    S18082Page ,
    S18083Page ,
    S18084Page ,
    S18085Page ,    
    S18086Page ,
    S18086tPage ,
    S18087Page ,
    S18088Page ,
    S18089Page ,
    S18090Page ,
    S18091Page ,
    S18092Page ,
    S18093Page ,
    S18094Page ,    
    S18095Page ,
    S18096Page ,   
    S18097Page ,
    S18098Page ,
    S18099Page ,    
    S18100Page ,
    S18101Page ,
    S18102Page ,
    S18103Page ,
    S18104Page ,   
    S18105Page ,
    S18106Page ,
    S18107Page ,   
    S18108Page ,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    EmotionalNeedsRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class EmotionalNeedsModule { }
