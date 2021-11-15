import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared/shared.module'
import {AdultsService} from '../adults.service';

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

import { LonelinessRoutingModule } from './loneliness-routing.module';

@NgModule({
  declarations: [
    S61001Page ,
    S61002Page ,
    S61003Page ,
    S61004Page ,
    S61004tPage ,
    S61005Page ,
    S61006Page ,
    S61006tPage ,
    S61007Page ,
    S61008Page ,
    S61009Page ,
    S61010Page ,
    S61011Page ,
    S61012Page ,
    S61013Page ,
    S61014Page ,
    S61015Page ,
    S61016Page ,
    S61017Page ,
    S61017Page ,
    S61018Page ,    
    S61019Page ,
    S61020Page ,
    S61021Page ,
    S61022Page ,
    S61023Page ,
    S61024Page ,
    S61024tPage ,
    S61025Page ,
    S61026Page ,
    S61027Page ,
    S61027tPage ,
    S61028Page ,
    S61029Page ,
    S61030Page ,
    S61030tPage ,
    S61031Page ,
    S61032Page ,
    S61033Page ,    
    S61034Page ,
    S61035Page ,   
    S61036Page ,
    S61036tPage ,
    S61037Page ,   
    S61038Page ,    
    S61039Page ,
    S61040Page ,
    S61041Page ,
    S61042Page ,
    S61043Page ,
    S61044Page ,
    S61045Page ,
    S61045tPage ,
    S61046Page ,
    S61047Page ,
    S61048Page ,
    S61049Page ,
    S61050Page ,
    S61051Page ,
    S61051tPage ,
    S61052Page ,
    S61053Page ,
    S61054Page ,
    S61055Page ,
    S61056Page ,
    S61057Page ,
    S61057tPage ,
    S61058Page ,
    S61059Page ,
    S61060Page ,
    S61061Page ,
    S61062Page ,
    S61063Page ,
    S61064Page ,
    S61065Page ,
    S61065tPage ,
    S61066Page ,
    S61067Page ,
    S61067tPage ,
    S61068Page ,
    S61069Page ,
    S61070Page ,
    S61071Page ,
    S61072Page ,
    S61073Page ,
    S61074Page ,
    S61074tPage ,
    S61075Page ,
    S61076Page ,
    S61076tPage ,
    S61077Page ,
    S61078Page ,
    S61079Page ,
    S61080Page ,
    S61080tPage ,
    S61081Page ,
    S61082Page ,
    S61083Page ,
    S61084Page ,
    S61085Page ,    
    S61086Page ,
    S61086tPage ,
    S61087Page ,
    S61088Page ,
    S61089Page ,
    S61090Page ,
    S61090tPage ,
    S61091Page ,
    S61092Page ,
    S61093Page ,
    S61094Page ,   
    S61095Page ,
    S61095tPage ,
    S61096Page ,    
    S61097Page ,
    S61098Page ,
    S61099Page ,   
    S61100Page ,
    S61101Page ,
    S61102Page ,
    S61103Page ,
    S61104Page ,
    S61104tPage ,
    S61105Page ,
    S61106Page ,
    S61107Page ,   
    S61108Page ,
    S61109Page ,
    S61110Page ,
    S61111Page ,
    S61112Page ,
    S61113Page ,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    LonelinessRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class LonelinessModule { }
