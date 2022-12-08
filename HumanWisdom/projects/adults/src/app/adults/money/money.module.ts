import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

import { S73001Page } from './s73001/s73001.page';  
import { S73002Page } from './s73002/s73002.page';  
import { S73003Page } from './s73003/s73003.page';  
import { S73004Page } from './s73004/s73004.page'; 
import { S73004tPage } from './s73004t/s73004t.page';  
import { S73005Page } from './s73005/s73005.page';  
import { S73006Page } from './s73006/s73006.page';  
import { S73007Page } from './s73007/s73007.page'; 
import { S73008Page } from './s73008/s73008.page';  
import { S73009Page } from './s73009/s73009.page';  
import { S73010Page } from './s73010/s73010.page';  
import { S73011Page } from './s73011/s73011.page';  
import { S73012Page } from './s73012/s73012.page';  
import { S73013Page } from './s73013/s73013.page';  
import { S73014Page } from './s73014/s73014.page';  
import { S73015Page } from './s73015/s73015.page';  
import { S73016Page } from './s73016/s73016.page';  
import { S73017Page } from './s73017/s73017.page';  
import { S73018Page } from './s73018/s73018.page'; 
import { S73019Page } from './s73019/s73019.page';  
import { S73020Page } from './s73020/s73020.page';  
import { S73021Page } from './s73021/s73021.page';  
import { S73022Page } from './s73022/s73022.page';  
import { S73023Page } from './s73023/s73023.page';  
import { S73024Page } from './s73024/s73024.page';  
import { S73024tPage } from './s73024t/s73024t.page';  
import { S73025Page } from './s73025/s73025.page';  
import { S73026Page } from './s73026/s73026.page';  
import { S73027Page } from './s73027/s73027.page';  
import { S73028Page } from './s73028/s73028.page';
import { S73028tPage } from './s73028t/s73028t.page';    
import { S73029Page } from './s73029/s73029.page';  
import { S73030Page } from './s73030/s73030.page';  
import { S73031Page } from './s73031/s73031.page';  
import { S73031tPage } from './s73031t/s73031t.page';  
import { S73032Page } from './s73032/s73032.page';  
import { S73033Page } from './s73033/s73033.page';  
import { S73034Page } from './s73034/s73034.page';  
import { S73035Page } from './s73035/s73035.page';  
import { S73036Page } from './s73036/s73036.page';  
import { S73037Page } from './s73037/s73037.page'; 
import { S73037tPage } from './s73037t/s73037t.page';   
import { S73038Page } from './s73038/s73038.page';  
import { S73039Page } from './s73039/s73039.page';  
import { S73040Page } from './s73040/s73040.page';  
import { S73041Page } from './s73041/s73041.page';  
import { S73042Page } from './s73042/s73042.page';  
import { S73043Page } from './s73043/s73043.page';  
import { S73044Page } from './s73044/s73044.page';  
import { S73045Page } from './s73045/s73045.page';  
import { S73045tPage } from './s73045t/s73045t.page';  
import { S73046Page } from './s73046/s73046.page';  
import { S73047Page } from './s73047/s73047.page';
import { S73048Page } from './s73048/s73048.page';  
import { S73049Page } from './s73049/s73049.page';  
import { S73050Page } from './s73050/s73050.page';  
import { S73050tPage } from './s73050t/s73050t.page';  
import { S73051Page } from './s73051/s73051.page';  
import { S73052Page } from './s73052/s73052.page'; 
import { S73052tPage } from './s73052t/s73052t.page';   
import { S73053Page } from './s73053/s73053.page';  
import { S73054Page } from './s73054/s73054.page';  
import { S73055Page } from './s73055/s73055.page';  
import { S73056Page } from './s73056/s73056.page';  
import { S73057Page } from './s73057/s73057.page';  
import { S73058Page } from './s73058/s73058.page';  
import { S73058tPage } from './s73058t/s73058t.page';  
import { S73059Page } from './s73059/s73059.page';  
import { S73060Page } from './s73060/s73060.page';  
import { S73060tPage } from './s73060t/s73060t.page';  
import { S73061Page } from './s73061/s73061.page';  
import { S73062Page } from './s73062/s73062.page';  
import { S73063Page } from './s73063/s73063.page';  
import { S73064Page } from './s73064/s73064.page';  
import { S73065Page } from './s73065/s73065.page';  
import { S73066Page } from './s73066/s73066.page'; 
import { S73066tPage } from './s73066t/s73066t.page';  
import { S73067Page } from './s73067/s73067.page';  
import { S73068Page } from './s73068/s73068.page'; 
import { S73069Page } from './s73069/s73069.page'; 
import { S73069tPage } from './s73069t/s73069t.page';  
import { S73070Page } from './s73070/s73070.page';  
import { S73071Page } from './s73071/s73071.page';  
import { S73072Page } from './s73072/s73072.page';  
import { S73072tPage } from './s73072t/s73072t.page';  
import { S73073Page } from './s73073/s73073.page';  
import { S73074Page } from './s73074/s73074.page';  
import { S73075Page } from './s73075/s73075.page';  
import { S73076Page } from './s73076/s73076.page';  
import { S73077Page } from './s73077/s73077.page';  
import { S73078Page } from './s73078/s73078.page'; 
import { S73078tPage } from './s73078t/s73078t.page';  
import { S73079Page } from './s73079/s73079.page';  
import { S73080Page } from './s73080/s73080.page';  
import { S73081Page } from './s73081/s73081.page';  
import { S73081tPage } from './s73081t/s73081t.page';  
import { S73082Page } from './s73082/s73082.page';  
import { S73083Page } from './s73083/s73083.page';  
import { S73084Page } from './s73084/s73084.page';  
import { S73084tPage } from './s73084t/s73084t.page';  
import { S73085Page } from './s73085/s73085.page';  
import { S73086Page } from './s73086/s73086.page';
import { S73086tPage } from './s73086t/s73086t.page';    
import { S73087Page } from './s73087/s73087.page';  
import { S73088Page } from './s73088/s73088.page';
import { S73089Page } from './s73089/s73089.page'; 
import { S73089tPage } from './s73089t/s73089t.page';   
import { S73090Page } from './s73090/s73090.page';  
import { S73091Page } from './s73091/s73091.page'; 
import { S73091tPage } from './s73091t/s73091t.page';  
import { S73092Page } from './s73092/s73092.page';  
import { S73093Page } from './s73093/s73093.page';  
import { S73094Page } from './s73094/s73094.page';  
import { S73095Page } from './s73095/s73095.page'; 
import { S73095tPage } from './s73095t/s73095t.page';  
import { S73096Page } from './s73096/s73096.page';  
import { S73097Page } from './s73097/s73097.page'; 
import { S73097tPage } from './s73097t/s73097t.page';  
import { S73098Page } from './s73098/s73098.page';  
import { S73099Page } from './s73099/s73099.page';  
import { S73100Page } from './s73100/s73100.page';
import { S73101Page } from './s73101/s73101.page';  
import { S73102Page } from './s73102/s73102.page';  
import { S73103Page } from './s73103/s73103.page'; 
import { S73104Page } from './s73104/s73104.page';  
import { S73105Page } from './s73105/s73105.page';  
import { S73106Page } from './s73106/s73106.page'; 
import { S73107Page } from './s73107/s73107.page';  

import { MoneyRoutingModule } from './money-routing.module';

@NgModule({
  declarations: [
    S73001Page ,
    S73002Page ,
    S73003Page ,
    S73004Page ,
    S73004tPage ,
    S73005Page ,
    S73006Page ,
    S73007Page ,    
    S73008Page ,
    S73009Page ,
    S73010Page ,
    S73011Page ,    
    S73012Page ,
    S73013Page ,    
    S73014Page ,
    S73015Page ,
    S73016Page ,
    S73017Page ,   
    S73018Page ,    
    S73019Page ,
    S73020Page ,
    S73021Page ,
    S73022Page ,
    S73023Page ,
    S73024Page ,
    S73024tPage ,
    S73025Page ,
    S73026Page ,
    S73027Page ,
    S73028Page ,
    S73028tPage ,
    S73029Page ,
    S73030Page ,
    S73031Page ,
    S73031tPage ,
    S73032Page ,
    S73033Page ,   
    S73034Page ,
    S73035Page ,    
    S73036Page ,
    S73037Page ,
    S73037tPage ,
    S73038Page ,    
    S73039Page ,
    S73040Page ,    
    S73041Page ,
    S73042Page ,
    S73043Page ,    
    S73044Page ,
    S73045Page ,
    S73045tPage ,
    S73046Page ,
    S73047Page ,    
    S73048Page ,
    S73049Page ,
    S73050Page ,
    S73050tPage ,
    S73051Page ,
    S73052Page ,
    S73052tPage ,
    S73053Page ,
    S73054Page ,
    S73055Page ,
    S73056Page ,
    S73057Page ,
    S73058Page ,
    S73058tPage ,
    S73059Page ,    
    S73060Page ,
    S73060tPage ,
    S73061Page ,
    S73062Page ,
    S73063Page ,    
    S73064Page ,
    S73065Page ,
    S73066Page ,
    S73066tPage ,
    S73067Page ,
    S73068Page ,   
    S73069Page ,
    S73069tPage ,
    S73070Page ,
    S73071Page ,
    S73072Page ,
    S73072tPage ,
    S73073Page ,
    S73074Page ,   
    S73075Page ,
    S73076Page ,    
    S73077Page ,
    S73078Page ,
    S73078tPage ,
    S73079Page ,
    S73080Page ,
    S73081Page ,
    S73081tPage ,
    S73082Page ,
    S73083Page ,
    S73084Page ,
    S73084tPage ,
    S73085Page ,
    S73086Page ,
    S73086tPage ,
    S73087Page ,   
    S73088Page ,
    S73089Page ,
    S73089tPage ,
    S73090Page ,
    S73091Page ,
    S73091tPage ,
    S73092Page ,
    S73093Page ,
    S73094Page ,
    S73095Page ,
    S73095tPage ,
    S73096Page ,   
    S73097Page ,
    S73097tPage ,
    S73098Page ,
    S73099Page ,    
    S73100Page ,    
    S73101Page ,
    S73102Page ,
    S73103Page ,   
    S73104Page ,    
    S73105Page ,
    S73106Page ,   
    S73107Page ,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MoneyRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class MoneyModule { }
