import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

import { LoveRoutingModule } from './love-routing.module';

import { S62001Page } from './s134001/s62001.page';
import { S62002Page } from './s134002/s62002.page';
import { S62003Page } from './s134003/s62003.page';
import { S62004Page } from './s134004/s62004.page';
import { S62004tPage } from './s134004t/s62004t.page';
import { S62005Page } from './s134005/s62005.page';
import { S62006Page } from './s62006/s62006.page';
import { S62007Page } from './s62007/s62007.page';
import { S62008Page } from './s62008/s62008.page';
import { S62009Page } from './s62009/s62009.page';
import { S62010Page } from './s62010/s62010.page';
import { S62011Page } from './s134011/s62011.page';
import { S62012Page } from './s134012/s62012.page';
import { S62013Page } from './s134013/s62013.page';
import { S62014Page } from './s134014/s62014.page';
import { S62015Page } from './s134015/s62015.page';
import { S62016Page } from './s134016/s62016.page';
import { S62016p1Page } from './s134017/s62016p1.page';
import { S62016p1tPage } from './s134017t/s62016p1t.page';
import { S62017Page } from './s134018/s62017.page';
import { S62018Page } from './s62018/s62018.page';
import { S62019Page } from './s62019/s62019.page';
import { S62020Page } from './s62020/s62020.page';
import { S62021Page } from './s62021/s62021.page';
import { S62022Page } from './s62022/s62022.page';
import { S62023Page } from './s62023/s62023.page';
import { S62024Page } from './s62024/s62024.page';
import { S62025Page } from './s62025/s62025.page';
import { S62026Page } from './s134027/s62026.page';
import { S62027Page } from './s134028/s62027.page';
import { S62028Page } from './s134029/s62028.page';
import { S62029Page } from './s134030/s62029.page';
import { S62030Page } from './s134031/s62030.page';
import { S62031Page } from './s62031/s62031.page';
import { S62032Page } from './s62032/s62032.page';
import { S62033Page } from './s62033/s62033.page';
import { S62034Page } from './s62034/s62034.page';
import { S62035Page } from './s62035/s62035.page';
import { S62036Page } from './s134037/s62036.page';
import { S62037Page } from './s134038/s62037.page';
import { S62038Page } from './s134039/s62038.page';
import { S62039Page } from './s134040/s62039.page';
import { S62040Page } from './s134041/s62040.page';
import { S62041Page } from './s134043/s62041.page';
import { S62042Page } from './s134044/s62042.page';
import { S62043Page } from './s134045/s62043.page';
import { S62044Page } from './s134046/s62044.page';
import { S62045Page } from './s134047/s62045.page';
import { S62046Page } from './s134048/s134048.page';
import { S62047Page } from './s134049/s134049.page';
import { S62048Page } from './s134050/s134050.page';
import { S62049Page } from './s134051/s134051.page';
import { S62050Page } from './s134052/s134052.page';
import { S62051Page } from './s134053/s134053.page';
import { S62052Page } from './s134055/s134055.page';
import { S62053Page } from './s134056/s134056.page';
import { S62054Page } from './s134057/s134057.page';
import { S62055Page } from './s134058/s134058.page';
import { S62056Page } from './s134059/s134059.page';
import { S62057Page } from './s62057/s62057.page';
import { S62058Page } from './s134061/s134061.page';
import { S62059Page } from './s134062/s134062.page';
import { S62060Page } from './s134063/s134063.page';
import { S62060tPage } from './s134063t/s134063t.page';
import { S62061Page } from './s134064/s134064.page';
import { S62062Page } from './s134065/s134065.page';
import { S62063Page } from './s134066/s134066.page';
import { S62064Page } from './s134067/s134067.page';
import { S62065Page } from './s134068/s134068.page';
import { S62065tPage } from './s134068t/s134068t.page';
import { S62066Page } from './s134069/s134069.page';
import { S62066tPage } from './s134069t/s134069t.page';
import { S62067Page } from './s134070/s134070.page';
import { S62067tPage } from './s134070t/s134070t.page';
import { S62068Page } from './s134071/s134071.page';
import { S62069Page } from './s134072/s134072.page';
import { S62070Page } from './s134073/s134073.page';
import { S62071Page } from './s134074/s134074.page';
import { S62072Page } from './s134075/s134075.page';
import { S62073Page } from './s134076/s134076.page';
import { S62074Page } from './s134077/s134077.page';
import { S62075Page } from './s134078/s134078.page';
import { S62076Page } from './s134079/s134079.page';
import { S62077Page } from './s134080/s62077.page';
import { S62078Page } from './s134081/s62078.page';
import { S62079Page } from './s134082/s62079.page';
import { S62080Page } from './s134083/s62080.page';
import { S62080tPage } from './s134083t/s62080t.page';
import { S62081Page } from './s134084/s62081.page';
import { S62082Page } from './s134085/s62082.page';
import { S62083Page } from './s134086/s62083.page';
import { S62084Page } from './s134087/s62084.page';
import { S62085Page } from './s134088/s62085.page';
import { S62086Page } from './s134089/s62086.page';
import { S62087Page } from './s134090/s62087.page';
import { S62087tPage } from './s134090t/s62087t.page';
import { S62088Page } from './s134091/s62088.page';
import { S62089Page } from './s134092/s62089.page';
import { S62090Page } from './s134093/s62090.page';
import { S62091Page } from './s134094/s62091.page';
import { S62092Page } from './s134095/s62092.page';
import { S62093Page } from './s134096/s62093.page';
import { S62094Page } from './s134097/s62094.page';
import { S62095Page } from './s134098/s62095.page';
import { S62096Page } from './s134099/s62096.page';
import { S62096tPage } from './s134099t/s62096t.page';
import { S62097Page } from './s134100/s62097.page';
import { S62098Page } from './s134101/s62098.page';
import { S62099Page } from './s134102/s62099.page';
import { S62100Page } from './s134103/s62100.page';
import { S62101Page } from './s134104/s62101.page';
import { S62102Page } from './s134105/s62102.page';
import { S62102tPage } from './s134105t/s62102t.page';
import { S62103Page } from './s134106/s62103.page';
import { S62104Page } from './s134107/s62104.page';
import { S62105Page } from './s134108/s62105.page';
import { S62106Page } from './s134109/s62106.page';
import { S62107Page } from './s134110/s62107.page';
import { S62108Page } from './s134111/s62108.page';
import { S62109Page } from './s134112/s62109.page';
import { S62110Page } from './s134113/s62110.page';
import { S62111Page } from './s134114/s62111.page';
import { S62112Page } from './s134115/s62112.page';
import { S62113Page } from './s134116/s62113.page';
import { S62114Page } from './s134117/s62114.page';
import { S62115Page } from './s62115/s62115.page';
import { S62116Page } from './s62116/s62116.page';
import { S62116tPage } from './s62116t/s62116t.page';
import { S62117Page } from './s62117/s62117.page';
import { S62118Page } from './s62118/s62118.page';
import { S62119Page } from './s62119/s62119.page';
import { S62120Page } from './s62120/s62120.page';
import { S62121Page } from './s62121/s62121.page';
import { S62122Page } from './s62122/s62122.page';
import { S62123Page } from './s62123/s62123.page';
import { S62123tPage } from './s62123t/s62123t.page';
import { S62124Page } from './s62124/s62124.page';
import { S62125Page } from './s62125/s62125.page';
import { S62126Page } from './s62126/s62126.page';
import { S62127Page } from './s62127/s62127.page';
import { S62127tPage } from './s62127t/s62127t.page';
import { S62128Page } from './s62128/s62128.page';
import { S62129Page } from './s62129/s62129.page';
import { S62130Page } from './s62130/s62130.page';
import { S62131Page } from './s62131/s62131.page';
import { S62131tPage } from './s62131t/s62131t.page';
import { S62132Page } from './s62132/s62132.page';
import { S62133Page } from './s62133/s62133.page';
import { S62133tPage } from './s62133t/s62133t.page';
import { S62134Page } from './s62134/s62134.page';
import { S62135Page } from './s62135/s62135.page';
import { S62136Page } from './s62136/s62136.page';
import { S62136tPage } from './s62136t/s62136t.page';
import { S62137Page } from './s62137/s62137.page';
import { S62138Page } from './s62138/s62138.page';
import { S62139Page } from './s62139/s62139.page';
import { S62140Page } from './s62140/s62140.page';
import { S62140tPage } from './s62140t/s62140t.page';
import { S62141Page } from './s62141/s62141.page';
import { S62142Page } from './s62142/s62142.page';
import { S62143Page } from './s62143/s62143.page';
import { S62144Page } from './s62144/s62144.page';
import { S62145Page } from './s62145/s62145.page';
import { S62145tPage } from './s62145t/s62145t.page';
import { S62146Page } from './s62146/s62146.page';
import { S62147Page } from './s62147/s62147.page';
import { S62148Page } from './s62148/s62148.page';
import { S62149Page } from './s62149/s62149.page';
import { S62150Page } from './s62150/s62150.page';
import { S62151Page } from './s62151/s62151.page';
import { S62152Page } from './s134155/s134155.page';
import { S62153Page } from './s134156/s134156.page';
import { S62153tPage } from './s134156t/s134156t.page';
import { S62154Page } from './s134157/s134157.page';
import { S62155Page } from './s134158/s134158.page';
import { S62156Page } from './s134159/s134159.page';
import { S62157Page } from './s134160/s134160.page';
import { S62158Page } from './s134161/s134161.page';
import { S62159Page } from './s134162/s134162.page';
import { S62159tPage } from './s134162t/s134162t.page';
import { S62160Page } from './s134163/s134163.page';
import { S62161Page } from './s134164/s134164.page';
import { S62162Page } from './s134165/s134165.page';
import { S62163Page } from './s134166/s134166.page';
import { S62163tPage } from './s134166t/s134166t.page';
import { S62164Page } from './s134167/s134167.page';
import { S62165Page } from './s134168/s134168.page';
import { S62166Page } from './s134169/s134169.page';
import { S62166tPage } from './s134169t/s134169t.page';
import { S62167Page } from './s134170/s134170.page';
import { S62168Page } from './s134171/s134171.page';
import { S62169Page } from './s134172/s134172.page';
import { S62170Page } from './s134173/s134173.page';
import { S62170tPage } from './s134173t/s134173t.page';
import { S62171Page } from './s134174/s134174.page';
import { S62172Page } from './s134175/s134175.page';
import { S62172tPage } from './s134175t/s134175t.page';
import { S62173Page } from './s62173/s62173.page';
import { S62174Page } from './s62174/s62174.page';
import { S62175Page } from './s62175/s62175.page';
import { S62176Page } from './s62176/s62176.page';
import { S62177Page } from './s62177/s62177.page';
import { S62178Page } from './s62178/s62178.page';
import { S62179Page } from './s62179/s62179.page';
import { S62180Page } from './s134184/s134184.page';
import { S62181Page } from './s134185/s134185.page';
import { S62182Page } from './s134186/s134186.page';
import { S62183Page } from './s134187/s134187.page';
import { S62184Page } from './s134188/s134188.page';
import { S62184tPage } from './s134188t/s134188t.page';
import { S62185Page } from './s134189/s134189.page';
import { S62186Page } from './s134190/s134190.page';
import { S62187Page } from './s134191/s134191.page';
import { S62187tPage } from './s134191t/s134191t.page';
import { S62188Page } from './s134192/s62188.page';
import { S62189Page } from './s134193/s134193.page';
import { S62190Page } from './s134194/s134194.page';
import { S62191Page } from './s134195/s134195.page';
import { S62192Page } from './s134196/s134196.page';
import { S62193Page } from './s134197/s134197.page';
import { S62193tPage } from './s134197t/s134197t.page';
import { S62194Page } from './s134198/s134198.page';
import { S62195Page } from './s134199/s134199.page';
import { S62196Page } from './s134200/s134200.page';
import { S62197Page } from './s134201/s134201.page';
import { S62198Page } from './s134203/s134203.page';
import { S62199Page } from './s134204/s134204.page';
import { S62200Page } from './s134204/s62200.page';
import { S62201Page } from './s134205/s62201.page';
import { S62202Page } from './s134206/s62202.page';
import { S62203Page } from './s134207/s62203.page';
import { S62204Page } from './s62204/s62204.page';
import { S62205Page } from './s134209/s62205.page';
import { S62206Page } from './s134210/s62206.page';
import { S62207Page } from './s134212/s134212.page';
import { S62208Page } from './s134213/s134213.page';
import { S62209Page } from './s134214/s134214.page';

@NgModule({
  declarations: [
    S62001Page,
    S62002Page,
    S62003Page,
    S62004Page,
    S62004tPage,
    S62005Page,
    S62006Page,
    S62007Page,
    S62008Page,
    S62009Page,
    S62010Page,
    S62011Page,
    S62012Page,
    S62013Page,
    S62014Page,
    S62015Page,
    S62016Page,
    S62016p1Page,
    S62016p1tPage,
    S62017Page,
    S62018Page,
    S62019Page,
    S62020Page,
    S62021Page,
    S62022Page,
    S62023Page,
    S62024Page,
    S62025Page,
    S62026Page,
    S62027Page,
    S62028Page,
    S62029Page,
    S62030Page,
    S62031Page,
    S62032Page,
    S62033Page,
    S62034Page,
    S62035Page,
    S62036Page,
    S62037Page,
    S62038Page,
    S62039Page,
    S62040Page,
    S62041Page,
    S62042Page,
    S62043Page,
    S62044Page,
    S62045Page,
    S62046Page,
    S62047Page,
    S62048Page,
    S62049Page,
    S62050Page,
    S62051Page,
    S62052Page,
    S62053Page,
    S62054Page,
    S62055Page,
    S62056Page,
    S62057Page,
    S62058Page,
    S62059Page,
    S62060Page,
    S62060tPage,
    S62061Page,
    S62062Page,
    S62063Page,
    S62064Page,
    S62065Page,
    S62065tPage,
    S62066Page,
    S62066tPage,
    S62067Page,
    S62067tPage,
    S62068Page,
    S62069Page,
    S62070Page,
    S62071Page,
    S62072Page,
    S62073Page,
    S62074Page,
    S62075Page,
    S62076Page,
    S62077Page,
    S62078Page,
    S62079Page,
    S62080Page,
    S62080tPage,
    S62081Page,
    S62082Page,
    S62083Page,
    S62084Page,
    S62085Page,
    S62086Page,
    S62087Page,
    S62087tPage,
    S62088Page,
    S62089Page,
    S62090Page,
    S62091Page,
    S62092Page,
    S62093Page,
    S62094Page,
    S62095Page,
    S62096Page,
    S62096tPage,
    S62097Page,
    S62098Page,
    S62099Page,
    S62100Page,
    S62101Page,
    S62102Page,
    S62102tPage,
    S62103Page,
    S62104Page,
    S62105Page,
    S62106Page,   
    S62107Page,
    S62108Page,
    S62109Page,
    S62110Page,
    S62111Page,
    S62112Page,
    S62113Page,
    S62114Page,
    S62115Page,
    S62116Page,
    S62116tPage,
    S62117Page,
    S62118Page,
    S62119Page,
    S62120Page,
    S62121Page,
    S62122Page,
    S62123Page,
    S62123tPage,
    S62124Page,  
    S62125Page,
    S62126Page,
    S62127Page,
    S62127tPage,
    S62128Page,
    S62129Page,
    S62130Page,
    S62131Page,
    S62131tPage,
    S62132Page,
    S62133Page,
    S62133tPage,
    S62134Page,
    S62135Page,
    S62136Page,
    S62136tPage,
    S62137Page,
    S62138Page,
    S62139Page,
    S62140Page,
    S62140tPage,
    S62141Page,
    S62142Page,
    S62143Page,
    S62144Page,
    S62145Page,
    S62145tPage,
    S62146Page,
    S62147Page,
    S62148Page,
    S62149Page,
    S62150Page,
    S62151Page,
    S62152Page,
    S62153Page,
    S62153tPage,
    S62154Page,
    S62155Page,
    S62156Page,
    S62157Page,
    S62158Page,
    S62159Page,
    S62159tPage,
    S62160Page,
    S62161Page,
    S62162Page,
    S62163Page,
    S62163tPage,
    S62164Page,
    S62165Page,
    S62166Page,
    S62166tPage,
    S62167Page,
    S62168Page,
    S62169Page,
    S62170Page,
    S62170tPage,
    S62171Page,
    S62172Page,
    S62172tPage,
    S62173Page,
    S62174Page,
    S62175Page,
    S62176Page,
    S62177Page,
    S62178Page,
    S62179Page,
    S62180Page,
    S62181Page,
    S62182Page,
    S62183Page,
    S62184Page,
    S62184tPage,
    S62185Page,
    S62186Page,
    S62187Page,
    S62187tPage,
    S62188Page,
    S62189Page,
    S62190Page,
    S62191Page,
    S62192Page,
    S62193Page,
    S62193tPage,
    S62194Page,
    S62195Page,
    S62196Page,
    S62197Page,
    S62198Page,
    S62199Page,
    S62200Page,
    S62201Page,
    S62202Page,
    S62203Page,
    S62204Page,
    S62205Page,
    S62206Page,
    S62207Page,
    S62208Page,
    S62209Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    LoveRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class LoveModule { }
