import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

import { LoveRoutingModule } from './love-routing.module';

import { S62001Page } from './s62001/s62001.page';
import { S62002Page } from './s62002/s62002.page';
import { S62003Page } from './s62003/s62003.page';
import { S62004Page } from './s62004/s62004.page';
import { S62004tPage } from './s62004t/s62004t.page';
import { S62005Page } from './s62005/s62005.page';
import { S62006Page } from './s62006/s62006.page';
import { S62007Page } from './s62007/s62007.page';
import { S62008Page } from './s62008/s62008.page';
import { S62009Page } from './s62009/s62009.page';
import { S62010Page } from './s62010/s62010.page';
import { S62011Page } from './s62011/s62011.page';
import { S62012Page } from './s62012/s62012.page';
import { S62013Page } from './s62013/s62013.page';
import { S62014Page } from './s62014/s62014.page';
import { S62015Page } from './s62015/s62015.page';
import { S62016Page } from './s62016/s62016.page';
import { S62016p1Page } from './s62016p1/s62016p1.page';
import { S62016p1tPage } from './s62016p1t/s62016p1t.page';
import { S62017Page } from './s62017/s62017.page';
import { S62018Page } from './s62018/s62018.page';
import { S62019Page } from './s62019/s62019.page';
import { S62020Page } from './s62020/s62020.page';
import { S62021Page } from './s62021/s62021.page';
import { S62022Page } from './s62022/s62022.page';
import { S62023Page } from './s62023/s62023.page';
import { S62024Page } from './s62024/s62024.page';
import { S62025Page } from './s62025/s62025.page';
import { S62026Page } from './s62026/s62026.page';
import { S62027Page } from './s62027/s62027.page';
import { S62028Page } from './s62028/s62028.page';
import { S62029Page } from './s62029/s62029.page';
import { S62030Page } from './s62030/s62030.page';
import { S62031Page } from './s62031/s62031.page';
import { S62032Page } from './s62032/s62032.page';
import { S62033Page } from './s62033/s62033.page';
import { S62034Page } from './s62034/s62034.page';
import { S62035Page } from './s62035/s62035.page';
import { S62036Page } from './s62036/s62036.page';
import { S62037Page } from './s62037/s62037.page';
import { S62038Page } from './s62038/s62038.page';
import { S62039Page } from './s62039/s62039.page';
import { S62040Page } from './s62040/s62040.page';
import { S62041Page } from './s62041/s62041.page';
import { S62042Page } from './s62042/s62042.page';
import { S62043Page } from './s62043/s62043.page';
import { S62044Page } from './s62044/s62044.page';
import { S62045Page } from './s62045/s62045.page';
import { S62046Page } from './s62046/s62046.page';
import { S62047Page } from './s62047/s62047.page';
import { S62048Page } from './s62048/s62048.page';
import { S62049Page } from './s62049/s62049.page';
import { S62050Page } from './s62050/s62050.page';
import { S62051Page } from './s62051/s62051.page';
import { S62052Page } from './s62052/s62052.page';
import { S62053Page } from './s62053/s62053.page';
import { S62054Page } from './s62054/s62054.page';
import { S62055Page } from './s62055/s62055.page';
import { S62056Page } from './s62056/s62056.page';
import { S62057Page } from './s62057/s62057.page';
import { S62058Page } from './s62058/s62058.page';
import { S62059Page } from './s62059/s62059.page';
import { S62060Page } from './s62060/s62060.page';
import { S62060tPage } from './s62060t/s62060t.page';
import { S62061Page } from './s62061/s62061.page';
import { S62062Page } from './s62062/s62062.page';
import { S62063Page } from './s62063/s62063.page';
import { S62064Page } from './s62064/s62064.page';
import { S62065Page } from './s62065/s62065.page';
import { S62065tPage } from './s62065t/s62065t.page';
import { S62066Page } from './s62066/s62066.page';
import { S62066tPage } from './s62066t/s62066t.page';
import { S62067Page } from './s62067/s62067.page';
import { S62067tPage } from './s62067t/s62067t.page';
import { S62068Page } from './s62068/s62068.page';
import { S62069Page } from './s62069/s62069.page';
import { S62070Page } from './s62070/s62070.page';
import { S62071Page } from './s62071/s62071.page';
import { S62072Page } from './s62072/s62072.page';
import { S62073Page } from './s62073/s62073.page';
import { S62074Page } from './s62074/s62074.page';
import { S62075Page } from './s62075/s62075.page';
import { S62076Page } from './s62076/s62076.page';
import { S62077Page } from './s62077/s62077.page';
import { S62078Page } from './s62078/s62078.page';
import { S62079Page } from './s62079/s62079.page';
import { S62080Page } from './s62080/s62080.page';
import { S62080tPage } from './s62080t/s62080t.page';
import { S62081Page } from './s62081/s62081.page';
import { S62082Page } from './s62082/s62082.page';
import { S62083Page } from './s62083/s62083.page';
import { S62084Page } from './s62084/s62084.page';
import { S62085Page } from './s62085/s62085.page';
import { S62086Page } from './s62086/s62086.page';
import { S62087Page } from './s62087/s62087.page';
import { S62087tPage } from './s62087t/s62087t.page';
import { S62088Page } from './s62088/s62088.page';
import { S62089Page } from './s62089/s62089.page';
import { S62090Page } from './s62090/s62090.page';
import { S62091Page } from './s62091/s62091.page';
import { S62092Page } from './s62092/s62092.page';
import { S62093Page } from './s62093/s62093.page';
import { S62094Page } from './s62094/s62094.page';
import { S62095Page } from './s62095/s62095.page';
import { S62096Page } from './s62096/s62096.page';
import { S62096tPage } from './s62096t/s62096t.page';
import { S62097Page } from './s62097/s62097.page';
import { S62098Page } from './s62098/s62098.page';
import { S62099Page } from './s62099/s62099.page';
import { S62100Page } from './s62100/s62100.page';
import { S62101Page } from './s62101/s62101.page';
import { S62102Page } from './s62102/s62102.page';
import { S62102tPage } from './s62102t/s62102t.page';
import { S62103Page } from './s62103/s62103.page';
import { S62104Page } from './s62104/s62104.page';
import { S62105Page } from './s62105/s62105.page';
import { S62106Page } from './s62106/s62106.page';
import { S62107Page } from './s62107/s62107.page';
import { S62108Page } from './s62108/s62108.page';
import { S62109Page } from './s62109/s62109.page';
import { S62110Page } from './s62110/s62110.page';
import { S62111Page } from './s62111/s62111.page';
import { S62112Page } from './s62112/s62112.page';
import { S62113Page } from './s62113/s62113.page';
import { S62114Page } from './s62114/s62114.page';
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
import { S62152Page } from './s62152/s62152.page';
import { S62153Page } from './s62153/s62153.page';
import { S62153tPage } from './s62153t/s62153t.page';
import { S62154Page } from './s62154/s62154.page';
import { S62155Page } from './s62155/s62155.page';
import { S62156Page } from './s62156/s62156.page';
import { S62157Page } from './s62157/s62157.page';
import { S62158Page } from './s62158/s62158.page';
import { S62159Page } from './s62159/s62159.page';
import { S62159tPage } from './s62159t/s62159t.page';
import { S62160Page } from './s62160/s62160.page';
import { S62161Page } from './s62161/s62161.page';
import { S62162Page } from './s62162/s62162.page';
import { S62163Page } from './s62163/s62163.page';
import { S62163tPage } from './s62163t/s62163t.page';
import { S62164Page } from './s62164/s62164.page';
import { S62165Page } from './s62165/s62165.page';
import { S62166Page } from './s62166/s62166.page';
import { S62166tPage } from './s62166t/s62166t.page';
import { S62167Page } from './s62167/s62167.page';
import { S62168Page } from './s62168/s62168.page';
import { S62169Page } from './s62169/s62169.page';
import { S62170Page } from './s62170/s62170.page';
import { S62170tPage } from './s62170t/s62170t.page';
import { S62171Page } from './s62171/s62171.page';
import { S62172Page } from './s62172/s62172.page';
import { S62172tPage } from './s62172t/s62172t.page';
import { S62173Page } from './s62173/s62173.page';
import { S62174Page } from './s62174/s62174.page';
import { S62175Page } from './s62175/s62175.page';
import { S62176Page } from './s62176/s62176.page';
import { S62177Page } from './s62177/s62177.page';
import { S62178Page } from './s62178/s62178.page';
import { S62179Page } from './s62179/s62179.page';
import { S62180Page } from './s62180/s62180.page';
import { S62181Page } from './s62181/s62181.page';
import { S62182Page } from './s62182/s62182.page';
import { S62183Page } from './s62183/s62183.page';
import { S62184Page } from './s62184/s62184.page';
import { S62184tPage } from './s62184t/s62184t.page';
import { S62185Page } from './s62185/s62185.page';
import { S62186Page } from './s62186/s62186.page';
import { S62187Page } from './s62187/s62187.page';
import { S62187tPage } from './s62187t/s62187t.page';
import { S62188Page } from './s62188/s62188.page';
import { S62189Page } from './s62189/s62189.page';
import { S62190Page } from './s62190/s62190.page';
import { S62191Page } from './s62191/s62191.page';
import { S62192Page } from './s62192/s62192.page';
import { S62193Page } from './s62193/s62193.page';
import { S62193tPage } from './s62193t/s62193t.page';
import { S62194Page } from './s62194/s62194.page';
import { S62195Page } from './s62195/s62195.page';
import { S62196Page } from './s62196/s62196.page';
import { S62197Page } from './s62197/s62197.page';
import { S62198Page } from './s62198/s62198.page';
import { S62199Page } from './s62199/s62199.page';
import { S62200Page } from './s62200/s62200.page';
import { S62201Page } from './s62201/s62201.page';
import { S62202Page } from './s62202/s62202.page';
import { S62203Page } from './s62203/s62203.page';
import { S62204Page } from './s62204/s62204.page';
import { S62205Page } from './s62205/s62205.page';
import { S62206Page } from './s62206/s62206.page';
import { S62207Page } from './s62207/s62207.page';
import { S62208Page } from './s62208/s62208.page';
import { S62209Page } from './s62209/s62209.page';

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
