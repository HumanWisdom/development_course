import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

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
import { S59171Page } from './s59171/s59171.page';  

import { LeadershipRoutingModule } from './leadership-routing.module';

@NgModule({
  declarations: [
    S59001Page ,
    S59002Page ,
    S59003Page ,
    S59003tPage ,
    S59004Page ,   
    S59005Page ,
    S59005tPage ,
    S59006Page ,
    S59007Page ,
    S59008Page ,
    S59009Page ,
    S59010Page ,
    S59011Page ,
    S59012Page ,
    S59013Page ,
    S59014Page ,
    S59015Page ,
    S59016Page ,
    S59017Page ,
    S59017Page ,
    S59018Page ,    
    S59019Page ,
    S59020Page ,
    S59021Page ,
    S59021p0Page ,
    S59022Page ,
    S59023Page ,
    S59024Page ,
    S59025Page ,
    S59025tPage ,
    S59026Page ,
    S59027Page ,
    S59028Page ,
    S59029Page ,
    S59030Page ,
    S59030tPage ,
    S59031Page ,
    S59032Page ,
    S59033Page ,    
    S59034Page ,
    S59035Page ,    
    S59036Page ,
    S59037Page ,    
    S59038Page ,
    S59038tPage ,
    S59039Page ,
    S59040Page ,
    S59040tPage ,
    S59041Page ,
    S59042Page ,
    S59042tPage ,
    S59043Page ,
    S59044Page ,
    S59045Page ,
    S59046Page ,
    S59047Page ,
    S59048Page ,
    S59048tPage ,
    S59049Page ,
    S59050Page ,
    S59051Page ,
    S59051tPage ,
    S59052Page ,
    S59053Page ,
    S59054Page ,
    S59055Page ,
    S59055tPage ,
    S59056Page ,
    S59057Page ,
    S59058Page ,
    S59059Page ,
    S59060Page ,
    S59061Page ,
    S59062Page ,
    S59063Page ,
    S59064Page ,
    S59065Page ,
    S59065tPage ,
    S59066Page ,
    S59067Page ,
    S59068Page ,
    S59068tPage ,
    S59069Page ,
    S59070Page ,
    S59071Page ,
    S59072Page ,
    S59073Page ,
    S59073tPage ,
    S59074Page ,
    S59075Page ,
    S59076Page ,
    S59077Page ,
    S59077tPage ,
    S59078Page ,
    S59079Page ,
    S59080Page ,
    S59080tPage ,
    S59081Page ,
    S59082Page ,
    S59083Page ,
    S59084Page ,
    S59085Page ,
    S59086Page ,
    S59087Page ,
    S59088Page ,
    S59088tPage ,
    S59089Page ,
    S59090Page ,
    S59090tPage ,
    S59091Page ,
    S59092Page ,
    S59093Page ,
    S59094Page ,
    S59095Page ,
    S59095tPage ,
    S59096Page ,   
    S59097Page ,
    S59098Page ,
    S59099Page ,
    S59099tPage ,
    S59100Page ,
    S59101Page ,
    S59102Page ,
    S59103Page ,
    S59104Page ,
    S59104tPage ,
    S59105Page ,
    S59106Page ,
    S59107Page ,
    S59108Page ,
    S59108tPage ,
    S59109Page ,
    S59110Page ,
    S59111Page ,
    S59112Page ,
    S59113Page ,
    S59114Page ,
    S59115Page ,
    S59116Page ,
    S59116tPage ,
    S59117Page ,
    S59118Page ,
    S59119Page ,   
    S59120Page ,
    S59121Page ,
    S59121tPage ,
    S59121tPage ,
    S59122Page ,
    S59123Page ,
    S59124Page ,   
    S59125Page ,
    S59126Page ,
    S59127Page ,
    S59128Page ,
    S59129Page ,
    S59130Page ,
    S59131Page ,
    S59132Page ,
    S59133Page ,
    S59134Page ,
    S59135Page ,
    S59136Page ,
    S59137Page ,
    S59138Page ,
    S59139Page ,
    S59140Page ,    
    S59141Page ,
    S59142Page ,
    S59143Page ,    
    S59144Page ,
    S59145Page ,
    S59146Page ,
    S59147Page ,
    S59147tPage ,
    S59148Page ,
    S59149Page ,
    S59150Page ,
    S59151Page ,
    S59152Page ,
    S59152tPage ,
    S59153Page ,
    S59154Page ,   
    S59155Page ,
    S59156Page ,
    S59157Page ,
    S59158Page ,
    S59159Page ,
    S59160Page ,
    S59161Page ,    
    S59162Page ,
    S59163Page ,
    S59164Page ,
    S59165Page ,
    S59166Page ,    
    S59167Page ,
    S59168Page ,   
    S59169Page ,
    S59170Page ,
    S59171Page ,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    LeadershipRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class LeadershipModule { }
