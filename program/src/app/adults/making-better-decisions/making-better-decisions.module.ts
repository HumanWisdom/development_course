import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module'
import { AdultsService } from '../adults.service';

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

import { MakingBetterDecisionsRoutingModule } from './making-better-decisions-routing.module';

@NgModule({
  declarations: [
    S77001Page,
    S77002Page,
    S77003Page,
    S77003tPage,
    S77004Page,
    S77005Page,
    S77006Page,
    S77007Page,
    S77008Page,
    S77009Page,
    S77009tPage,
    S77010Page,
    S77011Page,
    S77012Page,
    S77013Page,
    S77014Page,
    S77015Page,
    S77016Page,
    S77017Page,
    S77018Page,
    S77019Page,
    S77020Page,
    S77021Page,
    S77022Page,
    S77023Page,
    S77024Page,
    S77025Page,
    S77026Page,
    S77027Page,
    S77027tPage,
    S77028Page,
    S77029Page,
    S77030Page,
    S77031Page,
    S77032Page,
    S77033Page,
    S77034Page,
    S77035Page,
    S77036Page,
    S77037Page,
    S77038Page,
    S77039Page,
    S77039tPage,
    S77040Page,
    S77041Page,
    S77042Page,
    S77043Page,
    S77044Page,
    S77045Page,
    S77045tPage,
    S77046Page,
    S77047Page,
    S77047tPage,
    S77048Page,
    S77049Page,
    S77049tPage,
    S77050Page,
    S77051Page,
    S77052Page,
    S77052tPage,
    S77053Page,
    S77054Page,
    S77055Page,
    S77056Page,
    S77056tPage,
    S77057Page,
    S77058Page,
    S77059Page,
    S77059tPage,
    S77060Page,
    S77061Page,
    S77061tPage,
    S77062Page,
    S77063Page,
    S77064Page,
    S77065Page,
    S77065tPage,
    S77066Page,
    S77067Page,
    S77067tPage,
    S77068Page,
    S77069Page,
    S77070Page,
    S77071Page,
    S77072Page,
    S77073Page,
    S77074Page,
    S77075Page,
    S77076Page,
    S77076tPage,
    S77077Page,
    S77078Page,
    S77078tPage,
    S77079Page,
    S77080Page,
    S77080tPage,
    S77081Page,
    S77082Page,
    S77082tPage,
    S77083Page,
    S77084Page,
    S77084tPage,
    S77085Page,
    S77085tPage,
    S77086Page,
    S77087Page,
    S77087tPage,
    S77088Page,
    S77089Page,
    S77089tPage,
    S77090Page,
    S77091Page,
    S77091tPage,
    S77092Page,
    S77093Page,
    S77093tPage,
    S77094Page,
    S77095Page,
    S77095tPage,
    S77096Page,
    S77097Page,
    S77098Page,
    S77099Page,
    S77100Page,
    S77101Page,
    S77102Page,
    S77103Page,
    S77104Page,
    S77105Page,
    S77106Page,
    S77107Page,
    S77108Page,
    S77109Page,
    S77110Page,
    S77111Page,
    S77112Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MakingBetterDecisionsRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class MakingBetterDecisionsModule { }