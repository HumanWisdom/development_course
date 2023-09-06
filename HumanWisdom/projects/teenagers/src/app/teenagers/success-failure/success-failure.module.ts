import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'

import { SuccessFailureRoutingModule } from './success-failure-routing.module';
import { TeenagersService } from '../teenagers.service';
import { S141001Page } from './s141001/s141001.page';
import { S141002Page } from './s141002/s141002.page';
import { S141003Page } from './s141003/s141003.page';
import { S141003tPage } from './s141003t/s141003t.page';
import { S141004Page } from './s141004/s141004.page';
import { S141005Page } from './s141005/s141005.page';
import { S141006Page } from './s141006/s141006.page';
import { S141006tPage } from './s141006t/s141006t.page';
import { S141007Page } from './s141007/s141007.page';
import { S141008Page } from './s141008/s141008.page';
import { S141009Page } from './s141009/s141009.page';
import { S141010Page } from './s141010/s141010.page';
import { S141011Page } from './s141011/s141011.page';
import { S141012Page } from './s141012/s141012.page';
import { S141013Page } from './s141013/s141013.page';
import { S141014Page } from './s141014/s141014.page';
import { S141015Page } from './s141015/s141015.page';
import { S141016Page } from './s141016/s141016.page';
import { S141017Page } from './s141017/s141017.page';
import { S141018Page } from './s141018/s141018.page';
import { S141019Page } from './s141019/s141019.page';
import { S141019tPage } from './s141019t/s141019t.page';
import { S141020Page } from './s141020/s141020.page';
import { S141021Page } from './s141021/s141021.page';
import { S141022Page } from './s141022/s141022.page';
import { S141023Page } from './s141023/s141023.page';
import { S141024Page } from './s141024/s141024.page';
import { S141025Page } from './s141025/s141025.page';
import { S141026Page } from './s141026/s141026.page';
import { S141027Page } from './s141027/s141027.page';
import { S141027tPage } from './s141027t/s141027t.page';
import { S141028Page } from './s141028/s141028.page';
import { S141029Page } from './s141029/s141029.page';
import { S141030Page } from './s141030/s141030.page';
import { S141031Page } from './s141031/s141031.page';
import { S141032Page } from './s141032/s141032.page';
import { S141033Page } from './s141033/s141033.page';
import { S141033tPage } from './s141033t/s141033t.page';
import { S141034Page } from './s141034/s141034.page';
import { S141035Page } from './s141035/s141035.page';
import { S141036Page } from './s141036/s141036.page';
import { S141037Page } from './s141037/s141037.page';
import { S141038Page } from './s141038/s141038.page';
import { S141039Page } from './s141039/s141039.page';
import { S141040Page } from './s141040/s141040.page';
import { S141041Page } from './s141041/s141041.page';
import { S141042Page } from './s141042/s141042.page';
import { S141043Page } from './s141043/s141043.page';
import { S141044Page } from './s141044/s141044.page';
import { S141045Page } from './s141045/s141045.page';
import { S141046Page } from './s141046/s141046.page';
import { S141047Page } from './s141047/s141047.page';
import { S141048Page } from './s141048/s141048.page';
import { S141049Page } from './s141049/s141049.page';
import { S141050Page } from './s141050/s141050.page';
import { S141051Page } from './s141051/s141051.page';
import { S141051tPage } from './s141051t/s141051t.page';
import { S141052Page } from './s141052/s141052.page';
import { S141052tPage } from './s141052t/s141052t.page';
import { S141053Page } from './s141053/s141053.page';
import { S141054Page } from './s141054/s141054.page';
import { S141055Page } from './s141055/s141055.page';
import { S141056Page } from './s141056/s141056.page';
import { S141057Page } from './s141057/s141057.page';
import { S141058Page } from './s141058/s141058.page';
import { S141059Page } from './s141059/s141059.page';
import { S141059tPage } from './s141059t/s141059t.page';
import { S141060Page } from './s141060/s141060.page';
import { S141061Page } from './s141061/s141061.page';
import { S141062Page } from './s141062/s141062.page';
import { S141062tPage } from './s141062t/s141062t.page';
import { S141063Page } from './s141063/s141063.page';
import { S141064Page } from './s141064/s141064.page';
import { S141064tPage } from './s141064t/s141064t.page';
import { S141065Page } from './s141065/s141065.page';
import { S141066Page } from './s141066/s141066.page';
import { S141066tPage } from './s141066t/s141066t.page';
import { S141067Page } from './s141067/s141067.page';
import { S141068Page } from './s141068/s141068.page';
import { S141069Page } from './s141069/s141069.page';
import { S141069tPage } from './s141069t/s141069t.page';
import { S141070Page } from './s141070/s141070.page';
import { S141071Page } from './s141071/s141071.page';
import { S141072Page } from './s141072/s141072.page';
import { S141072tPage } from './s141072t/s141072t.page';
import { S141073Page } from './s141073/s141073.page';
import { S141074Page } from './s141074/s141074.page';
import { S141074tPage } from './s141074t/s141074t.page';
import { S141075Page } from './s141075/s141075.page';
import { S141076Page } from './s141076/s141076.page';
import { S141076tPage } from './s141076t/s141076t.page';
import { S141077Page } from './s141077/s141077.page';
import { S141078Page } from './s141078/s141078.page';
import { S141078tPage } from './s141078t/s141078t.page';
import { S141079Page } from './s141079/s141079.page';
import { S141080Page } from './s141080/s141080.page';
import { S141081Page } from './s141081/s141081.page';
import { S141082Page } from './s141082/s141082.page';
import { S141083Page } from './s141083/s141083.page';
import { S141084Page } from './s141084/s141084.page';
import { S141085Page } from './s141085/s141085.page';
import { S141086Page } from './s141086/s141086.page';
import { S141087Page } from './s141087/s141087.page';
import { S141087tPage } from './s141087t/s141087t.page';
import { S141088Page } from './s141088/s141088.page';
import { S141089Page } from './s141089/s141089.page';
import { S141090Page } from './s141090/s141090.page';
import { S141090tPage } from './s141090t/s141090t.page';
import { S141091Page } from './s141091/s141091.page';
import { S141092Page } from './s141092/s141092.page';
import { S141093Page } from './s141093/s141093.page';
import { S141094Page } from './s141094/s141094.page';
import { S141094tPage } from './s141094t/s141094t.page';
import { S141095Page } from './s141095/s141095.page';
import { S141096Page } from './s141096/s141096.page';
import { S141097Page } from './s141097/s141097.page';
import { S141098Page } from './s141098/s141098.page';
import { S141099Page } from './s141099/s141099.page';
import { S141100Page } from './s141100/s141100.page';
import { S141100tPage } from './s141100t/s141100t.page';
import { S141101Page } from './s141101/s141101.page';
import { S141102Page } from './s141102/s141102.page';
import { S141103Page } from './s141103/s141103.page';
import { S141104Page } from './s141104/s141104.page';
import { S141105Page } from './s141105/s141105.page';
import { S141106Page } from './s141106/s141106.page';
import { S141107Page } from './s141107/s141107.page';
import { S141108Page } from './s141108/s141108.page';
import { S141109Page } from './s141109/s141109.page';
import { S141110Page } from './s141110/s141110.page';
import { S141111Page } from './s141111/s141111.page';
import { S141112Page } from './s141112/s141112.page';



@NgModule({
  declarations: [
    S141001Page,
    S141002Page,
    S141003Page,
    S141003tPage,
    S141004Page,    
    S141005Page,
    S141006Page,
    S141006tPage,
    S141007Page,
    S141008Page,
    S141009Page,
    S141010Page,
    S141011Page,
    S141012Page,
    S141013Page,
    S141014Page,
    S141015Page,
    S141016Page,    
    S141017Page,
    S141018Page,
    S141019Page,
    S141019tPage,
    S141020Page,
    S141021Page,
    S141022Page,
    S141023Page,
    S141024Page,
    S141025Page,
    S141026Page,
    S141027Page,
    S141027tPage,
    S141028Page,
    S141029Page,
    S141030Page,
    S141031Page,
    S141032Page,
    S141033Page,
    S141033tPage,
    S141034Page,
    S141035Page,
    S141036Page,
    S141037Page,
    S141038Page,
    S141039Page,
    S141040Page,
    S141041Page,
    S141042Page,
    S141043Page,
    S141044Page,
    S141045Page,
    S141046Page,
    S141047Page,
    S141048Page,
    S141049Page,
    S141050Page,
    S141051Page,
    S141051tPage,
    S141052Page,
    S141052tPage,
    S141053Page,
    S141054Page,
    S141055Page,
    S141056Page,
    S141057Page,
    S141058Page,
    S141059Page,
    S141059tPage,
    S141060Page,    
    S141061Page,
    S141062Page,
    S141062tPage,
    S141063Page,
    S141064Page,
    S141064tPage,
    S141065Page,
    S141066Page,
    S141066tPage,    
    S141067Page,    
    S141068Page,
    S141069Page,
    S141069tPage,
    S141070Page,
    S141071Page,
    S141072Page,
    S141072tPage,
    S141073Page,
    S141074Page,
    S141074tPage,
    S141075Page,
    S141076Page,
    S141076tPage,
    S141077Page,
    S141078Page,
    S141078tPage,
    S141079Page,
    S141080Page,    
    S141081Page,
    S141082Page,
    S141083Page,
    S141084Page,
    S141085Page,
    S141086Page,
    S141087Page,
    S141087tPage,
    S141088Page,
    S141089Page,
    S141090Page,
    S141090tPage,
    S141091Page,
    S141092Page,
    S141093Page,
    S141094Page,
    S141094tPage,
    S141095Page,
    S141096Page,
    S141097Page,    
    S141098Page,
    S141099Page,
    S141100Page,
    S141100tPage,
    S141101Page,
    S141102Page,
    S141103Page,    
    S141104Page,
    S141105Page,
    S141106Page,
    S141107Page,   
    S141108Page,
    S141109Page,
    S141110Page, 
    S141111Page,
    S141112Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SuccessFailureRoutingModule
  ],
  providers:[
    TeenagersService,
    
  ]
})
export class SuccessFailureModule { }
