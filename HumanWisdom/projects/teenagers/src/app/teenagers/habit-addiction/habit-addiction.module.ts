import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

import { HabitAddictionRoutingModule } from './habit-addiction-routing.module';

import { S45001Page } from './s127001/s45001.page';
import { S45002Page } from './s127002/s45002.page';
import { S45003Page } from './s127003/s45003.page';
import { S45003tPage } from './s127003t/s45003t.page';
import { S45004Page } from './s127004/s45004.page';
import { S45005Page } from './s127005/s45005.page';
import { S45006Page } from './s127006/s45006.page';
import { S45007Page } from './s127007/s45007.page';
import { S45008Page } from './s127008/s45008.page';
import { S45009Page } from './s127009/s45009.page';
import { S45009tPage } from './s127009t/s45009t.page';
import { S45010Page } from './s127010/s45010.page';
import { S45011Page } from './s127011/s45011.page';
import { S45012Page } from './s127012/s45012.page';
import { S45013Page } from './s127013/s45013.page';
import { S45014Page } from './s127014/s45014.page';
import { S45015Page } from './s127015/s45015.page';
import { S45016Page } from './s127016/s45016.page';
import { S45016tPage } from './s127016t/s45016t.page';
import { S45017Page } from './s127017/s45017.page';
import { S45018Page } from './s127018/s45018.page';
import { S45019Page } from './s127019/s45019.page';
import { S45020Page } from './s127020/s45020.page';
import { S45021Page } from './s127021/s45021.page';
import { S45022Page } from './s127022/s45022.page';
import { S45023Page } from './s127023/s45023.page';
import { S45024Page } from './s127024/s45024.page';
import { S45025Page } from './s127025/s45025.page';
import { S45026Page } from './s127026/s45026.page';
import { S45027Page } from './s127027/s45027.page';
import { S45028Page } from './s127028/s45028.page';
import { S45029Page } from './s127029/s45029.page';
import { S45030Page } from './s127030/s45030.page';
import { S45031Page } from './s127031/s45031.page';
import { S45032Page } from './s127032/s45032.page';
import { S45033Page } from './s127033/s45033.page';
import { S45034Page } from './s127034/s45034.page';
import { S45035Page } from './s127035/s45035.page';
import { S45036Page } from './s127036/s45036.page';
import { S45037Page } from './s127037/s45037.page';
import { S45038Page } from './s127038/s45038.page';
import { S45039Page } from './s127039/s45039.page';
import { S45039tPage } from './s127039t/s45039t.page';
import { S45040Page } from './s127040/s45040.page';
import { S45041Page } from './s127041/s45041.page';
import { S45042Page } from './s127042/s45042.page';
import { S45043Page } from './s127043/s45043.page';
import { S45044Page } from './s127044/s45044.page';
import { S45045Page } from './s127045/s45045.page';
import { S45046Page } from './s127046/s45046.page';
import { S45047Page } from './s127047/s45047.page';
import { S45048Page } from './s127048/s45048.page';
import { S45049Page } from './s127049/s45049.page';
import { S45050Page } from './s127050/s45050.page';
import { S45051Page } from './s127051/s45051.page';
import { S45051tPage } from './s127051t/s45051t.page';
import { S45052Page } from './s127052/s45052.page';
import { S45053Page } from './s127053/s45053.page';
import { S45054Page } from './s127054/s45054.page';
import { S45055Page } from './s127055/s45055.page';
import { S45056Page } from './s127056/s45056.page';
import { S45057Page } from './s127057/s45057.page';
import { S45058Page } from './s127058/s45058.page';
import { S45058tPage } from './s127058t/s45058t.page';
import { S45059Page } from './s127059/s45059.page';
import { S45060Page } from './s127060/s45060.page';
import { S45061Page } from './s127061/s45061.page';
import { S45062Page } from './s127062/s45062.page';
import { S45062tPage } from './s127062t/s45062t.page';
import { S45063Page } from './s127063/s45063.page';
import { S45064Page } from './s127064/s45064.page';
import { S45065Page } from './s127065/s45065.page';
import { S45065tPage } from './s127065t/s45065t.page';
import { S45066Page } from './s127066/s45066.page';
import { S45067Page } from './s127067/s45067.page';
import { S45068Page } from './s127068/s45068.page';
import { S45068tPage } from './s127068t/s45068t.page';
import { S45069Page } from './s127069/s45069.page';
import { S45069tPage } from './s127069t/s45069t.page';
import { S45070Page } from './s127070/s45070.page';
import { S45071Page } from './s127071/s45071.page';
import { S45072Page } from './s127072/s45072.page';
import { S45073Page } from './s127073/s45073.page';
import { S45074Page } from './s127074/s45074.page';
import { S45075Page } from './s127075/s45075.page';
import { S45075tPage } from './s127075t/s45075t.page';
import { S45076Page } from './s127076/s45076.page';
import { S45077Page } from './s127077/s45077.page';
import { S45078Page } from './s127078/s45078.page';
import { S45079Page } from './s127079/s45079.page';
import { S45079tPage } from './s127079t/s45079t.page';
import { S45080Page } from './s127080/s45080.page';
import { S45081Page } from './s127081/s45081.page';
import { S45082Page } from './s127082/s45082.page';
import { S45082tPage } from './s127082t/s45082t.page';
import { S45083Page } from './s127083/s45083.page';
import { S45084Page } from './s127084/s45084.page';
import { S45085Page } from './s127085/s45085.page';
import { S45086Page } from './s127086/s45086.page';
import { S45087Page } from './s127087/s45087.page';
import { S45088Page } from './s127088/s45088.page';
import { S45089Page } from './s127089/s45089.page';
import { S45090Page } from './s127091/s45090.page';
import { S45091Page } from './s127092/s45091.page';
import { S45092Page } from './s127093/s45092.page';
import { S45093Page } from './s127094/s45093.page';
import { S45094Page } from './s127095/s45094.page';
import { S45095Page } from './s127096/s45095.page';
import { S45096Page } from './s127097/s45096.page';
import { S45097Page } from './s127098/s45097.page';
import { S45098Page } from './s127099/s45098.page';
import { S45099Page } from './s127100/s45099.page';
import { S45100Page } from './s127101/s45100.page';
import { S45100tPage } from './s127101t/s45100t.page';
import { S45101Page } from './s127102t/s45101.page';
import { S45101tPage } from './s127102t/s45101t.page';
import { S45102Page } from './s127103/s45102.page';
import { S45102tPage } from './s127103t/s45102t.page';
import { S45103Page } from './s127104/s45103.page';
import { S45103tPage } from './s127104t/s45103t.page';
import { S45104Page } from './s127105/s45104.page';
import { S45104tPage } from './s127105t/s45104t.page';
import { S45105Page } from './s127106/s45105.page';
import { S45105tPage } from './s127106t/s45105t.page';
import { S45106Page } from './s127107/s45106.page';
import { S45106tPage } from './s127107t/s45106t.page';
import { S45107Page } from './s127108/s45107.page';
import { S45107tPage } from './s127108t/s45107t.page';
import { S45108Page } from './s127109/s45108.page';
import { S45109Page } from './s127110/s45109.page';
import { S45110Page } from './s127111/s45110.page';
import { S45111Page } from './s127112/s45111.page';
import { S45112Page } from './s127113/s45112.page';
import { S45113Page } from './s127114/s45113.page';
import { S45114Page } from './s127115/s45114.page';
import { S45115Page } from './s127116/s45115.page';
import { S45116Page } from './s127117/s45116.page';
import { S45117Page } from './s127118/s45117.page';
import { S45118Page } from './s127119/s45118.page';
import { S45119Page } from './s127120/s45119.page';
import { S45120Page } from './s127121/s45120.page';
import { S45121Page } from './s127122/s45121.page';
import { S45122Page } from './s127123/s45122.page';
import { S45123Page } from './s127124/s45123.page';
import { S45124Page } from './s127125/s45124.page';
import { S45125Page } from './s127126/s45125.page';
import { S45126Page } from './s127127/s45126.page';
import { S45127Page } from './s127128/s45127.page';
import { S45128Page } from './s127129/s45128.page';
import { S45129Page } from './s127130/s45129.page';
import { S45130Page } from './s127131/s45130.page';
import { S45131Page } from './s127132/s45131.page';
import { S45132Page } from './s127133/s45132.page';
import { S45133Page } from './s127134/s45133.page';
import { S45134Page } from './s127135/s45134.page';
import { S45135Page } from './s127136/s45135.page';
import { S45136Page } from './s127137/s45136.page';
import { S45137Page } from './s127138/s45137.page';
import { S45138Page } from './s127139/s45138.page';
import { S45139Page } from './s127140/s45139.page';
import { S45140Page } from './s127141/s45140.page';
import { S45141Page } from './s127142/s45141.page';
import { S45142Page } from './s127143/s45142.page';
import { S45142tPage } from './s127143t/s45142t.page';
import { S45143Page } from './s127144/s45143.page';
import { S45144Page } from './s127145/s45144.page';
import { S45145Page } from './s127146/s45145.page';
import { S45146Page } from './s127147/s45146.page';
import { S45147Page } from './s127148/s45147.page';
import { S45148Page } from './s127149/s45148.page';
import { S45149Page } from './s127150/s45149.page';
import { S45150Page } from './s127151/s45150.page';
import { S45151Page } from './s127152/s45151.page';
import { S45152Page } from './s127153/s45152.page';
import { S45153Page } from './s127154/s45153.page';
import { S45154Page } from './s127155/s45154.page';
import { S45155Page } from './s127156/s45155.page';
import { S45156Page } from './s127157/s45156.page';
import { S45157Page } from './s127158/s45157.page';
import { S45158Page } from './s127159/s45158.page';

@NgModule({
  declarations: [
    S45001Page,
    S45002Page,
    S45003Page,
    S45003tPage,
    S45004Page,   
    S45005Page,
    S45006Page,
    S45007Page,
    S45008Page,
    S45009Page,
    S45009tPage,
    S45010Page,
    S45011Page,
    S45012Page,
    S45013Page,
    S45014Page,
    S45015Page,
    S45016Page,
    S45016tPage,
    S45017Page,
    S45018Page,
    S45019Page,
    S45020Page,
    S45021Page,
    S45022Page,
    S45023Page,
    S45024Page,
    S45025Page,
    S45026Page,
    S45027Page,
    S45028Page,
    S45029Page,
    S45030Page,
    S45031Page,
    S45032Page,
    S45033Page,
    S45034Page,
    S45035Page,
    S45036Page,
    S45037Page,
    S45038Page,
    S45039Page,
    S45039tPage,
    S45040Page,
    S45041Page,
    S45042Page,
    S45043Page,
    S45044Page,
    S45045Page,
    S45046Page,
    S45047Page,
    S45048Page,
    S45049Page,
    S45050Page,
    S45051Page,
    S45051tPage,
    S45052Page,
    S45053Page,
    S45054Page,
    S45055Page,
    S45056Page,
    S45057Page,
    S45058Page,
    S45058tPage,
    S45059Page,
    S45060Page,    
    S45061Page,
    S45062Page,
    S45062tPage,
    S45063Page,
    S45064Page,
    S45065Page,
    S45065tPage,
    S45066Page,   
    S45067Page,   
    S45068Page,
    S45068tPage,
    S45069Page,
    S45069tPage,
    S45070Page,
    S45071Page,
    S45072Page,
    S45073Page,
    S45074Page,
    S45075Page,
    S45075tPage,
    S45076Page,
    S45077Page,
    S45078Page,
    S45079Page,
    S45079tPage,
    S45080Page,    
    S45081Page,
    S45082Page,
    S45082tPage,
    S45083Page,
    S45084Page,
    S45085Page,
    S45086Page,
    S45087Page,    
    S45088Page,
    S45089Page,
    S45090Page,
    S45091Page,
    S45092Page,
    S45093Page,
    S45094Page,
    S45095Page,
    S45096Page,    
    S45097Page,
    S45098Page,
    S45099Page,
    S45100Page,
    S45100tPage,
    S45101Page,
    S45101tPage,
    S45102Page,
    S45102tPage,
    S45103Page,
    S45103tPage,
    S45104Page,
    S45104tPage,
    S45105Page,
    S45105tPage,
    S45106Page,   
    S45106tPage,   
    S45107Page,
    S45107tPage,
    S45108Page,
    S45109Page,
    S45110Page,
    S45111Page,
    S45112Page,
    S45113Page,
    S45114Page,
    S45115Page,
    S45116Page,    
    S45117Page,
    S45118Page,
    S45119Page,
    S45120Page,
    S45121Page,
    S45122Page,
    S45123Page,    
    S45124Page,  
    S45125Page,
    S45126Page,
    S45127Page,    
    S45128Page,
    S45129Page,
    S45130Page,
    S45131Page,   
    S45132Page,
    S45133Page,   
    S45134Page,
    S45135Page,
    S45136Page,    
    S45137Page,
    S45138Page,
    S45139Page,
    S45140Page,   
    S45141Page,
    S45142Page,
    S45142tPage,
    S45143Page,
    S45144Page,
    S45145Page,    
    S45146Page,
    S45147Page,
    S45148Page,
    S45149Page,
    S45150Page,
    S45151Page,
    S45152Page,
    S45153Page,    
    S45154Page,
    S45155Page,
    S45156Page,
    S45157Page,
    S45158Page,   
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HabitAddictionRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class HabitAddictionModule { }
