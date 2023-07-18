import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

import { S53001Page } from './132002/s53001.page';  
import { S53002Page } from './s132002/s132002.page';  
import { S53003Page } from './s132003/s132003.page';  
import { S53004Page } from './s132004/s53004.page';  
import { S53004tPage } from './s132004t/s132004t.page';  
import { S53005Page } from './s132005/s132005.page';  
import { S53006Page } from './s132006/s132006.page';  
import { S53007Page } from './s132007/s132007.page';  
import { S53008Page } from './s132008/s132008.page';  
import { S53009Page } from './s132009/s53009.page';  
import { S53010Page } from './s132010/s132010.page';  
import { S53011Page } from './s132011/s132011.page';  
import { S53012Page } from './s132012/s132012.page';  
import { S53013Page } from './s132013/s132013.page';  
import { S53014Page } from './s132014/s132014.page';  
import { S53015Page } from './s132015/s132015.page';  
import { S53016Page } from './s132016/s132016.page';  
import { S53017Page } from './s132017/s132017.page';  
import { S53018Page } from './s132018/s132018.page'; 
import { S53018tPage } from './s132018t/s132018t.page';  
import { S53019Page } from './s132019/s132019.page';  
import { S53020Page } from './s132020/s132020.page';  
import { S53021Page } from './s132021/s132021.page';  
import { S53022Page } from './s53022/s53022.page';  
import { S53023Page } from './s53023/s53023.page';  
import { S53024Page } from './s53024/s53024.page';  
import { S53025Page } from './s53025/s53025.page';  
import { S53026Page } from './s53026/s53026.page';  
import { S53027Page } from './s53027/s53027.page';  
import { S53028Page } from './s53028/s53028.page';  
import { S53029Page } from './s53029/s53029.page';  
import { S53030Page } from './s53030/s53030.page';  
import { S53031Page } from './s53031/s53031.page';  
import { S53032Page } from './s53032/s53032.page';  
import { S53033Page } from './s53034/s53033.page';  
import { S53033tPage } from './s53034t/s53033t.page';  
import { S53034Page } from './s53035/s53034.page';  
import { S53035Page } from './s53036/s53035.page';  
import { S53035tPage } from './s53036t/s53035t.page';  
import { S53036Page } from './s53037/s53036.page';  
import { S53037Page } from './s53038/s53037.page';  
import { S53037tPage } from './s53038t/s53037t.page';  
import { S53038Page } from './s53039/s53038.page';  
import { S53038tPage } from './s53039t/s53038t.page';  
import { S53039Page } from './s53040/s53039.page';  
import { S53040Page } from './s53041/s53040.page';  
import { S53041Page } from './s53042/s53041.page';  
import { S53042Page } from './s53043/s53042.page';  
import { S53043Page } from './s53044/s53043.page';  
import { S53044Page } from './s53045/s53044.page';  
import { S53045Page } from './s53047/s53045.page';  
import { S53046Page } from './s53048/s53046.page';  
import { S53047Page } from './s53049/s53047.page';  
import { S53048Page } from './s53050/s53048.page';  
import { S53049Page } from './s53051/s53049.page';  
import { S53050Page } from './s53052/s53050.page';  
import { S53051Page } from './s53053/s53051.page';  
import { S53051tPage } from './s53053t/s53051t.page';  
import { S53052Page } from './s53054/s53052.page';  
import { S53053Page } from './s53053/s53053.page';  
import { S53054Page } from './s53054/s53054.page';  
import { S53055Page } from './s53055/s53055.page';  
import { S53056Page } from './s53056/s53056.page';  
import { S53057Page } from './s53057/s53057.page';  
import { S53058Page } from './s53058/s53058.page';  
import { S53059Page } from './s53059/s53059.page';  
import { S53060Page } from './s53060/s53060.page';  
import { S53061Page } from './s132063/s132063.page';  
import { S53062Page } from './s132064/s132064.page';  
import { S53063Page } from './s132065/s132065.page';  
import { S53064Page } from './s132066/s132066.page';  
import { S53065Page } from './s132067/s132067.page';  
import { S53066Page } from './s132068/s132068.page';  
import { S53067Page } from './s132069/s132069.page';  
import { S53068Page } from './s132070/s132070.page';  
import { S53069Page } from './s132071/s132071.page';  
import { S53070Page } from './s132072/s132072.page';  
import { S53071Page } from './s132073/s132073.page';  
import { S53072Page } from './s132074/s132074.page';  
import { S53073Page } from './s132075/s132075.page';  
import { S53074Page } from './s132076/s132076.page';  
import { S53075Page } from './s132077/s132077.page';  
import { S53076Page } from './s132078/s132078.page';  
import { S53076tPage } from './s132078t/s132078t.page';  
import { S53077Page } from './s132079/s53077.page';  
import { S53078Page } from './s132080/s132080.page';  
import { S53079Page } from './s132081/s132081.page';  
import { S53080Page } from './s132082/s132082.page';  
import { S53080tPage } from './s132082t/s132082t.page';  
import { S53081Page } from './s132083/s132083.page';  
import { S53082Page } from './s132084/s132084.page';  
import { S53083Page } from './s132085/s132085.page';  
import { S53084Page } from './s132086/s132086.page';  
import { S53085Page } from './s132087/s132087.page';  
import { S53085tPage } from './s132087t/s132087t.page';  
import { S53086Page } from './s132088/s132088.page';  
import { S53087Page } from './s132089/s132089.page';  
import { S53088Page } from './s132090/s132090.page';  
import { S53089Page } from './s132091/s132091.page';  
import { S53090Page } from './s132092/s132092.page';  
import { S53091Page } from './s132093/s132093.page';  
import { S53092Page } from './s132094/s132094.page';  
import { S53093Page } from './s132095/s132095.page';  
import { S53094Page } from './s132096/s132096.page';  
import { S53094tPage } from './s132096t/s132096t.page';  
import { S53095Page } from './s132097/s132097.page';  
import { S53096Page } from './s132098/s132098.page';  
import { S53096tPage } from './s132098t/s132098t.page';  
import { S53097Page } from './s132099/s132099.page';  
import { S53098Page } from './s132100/s132100.page';  
import { S53099Page } from './s132101/s132101.page';  
import { S53099tPage } from './s132101t/s132101t.page';  
import { S53100Page } from './s132102/s132102.page';  
import { S53101Page } from './s132103/s132103.page';  
import { S53102Page } from './s132104/s53102.page';  
import { S53103Page } from './s132105/s132105.page';  
import { S53104Page } from './s132106/s132106.page';  
import { S53104tPage } from './s132106t/s132106t.page';  
import { S53105Page } from './s132107/s132107.page';  
import { S53106Page } from './s132108/s132108.page';  
import { S53107Page } from './s132109/s132109.page';  
import { S53107tPage } from './s132109t/s132109t.page';  
import { S53108Page } from './s132110/s132110.page';  
import { S53109Page } from './s132111/s132111.page';  
import { S53110Page } from './s132112/s132112.page';  
import { S53111Page } from './s132113/s132113.page';  
import { S53112Page } from './s132114/s132114.page';  
import { S53113Page } from './s132115/s132115.page';  
import { S53114Page } from './s132116/s132116.page';  
import { S53115Page } from './s132117/s132117.page';  
import { S53116Page } from './s132118/s132118.page';  
import { S53117Page } from './s132119/s132119.page';  
import { S53118Page } from './s132120/s132120.page';  
import { S53119Page } from './s132121/s132121.page';  
import { S53119tPage } from './s132121t/s132121t.page';  
import { S53120Page } from './s132122/s132122.page';  
import { S53121Page } from './s132123/s132123.page';  
import { S53121tPage } from './s132123t/s132123t.page';  
import { S53122Page } from './s132124/s132124.page';  
import { S53123Page } from './s132125/s132125.page';  
import { S53124Page } from './s132126/s132126.page';  
import { S53124tPage } from './s132126t/s132126t.page';  
import { S53125Page } from './s132127/s132127.page';  
import { S53126Page } from './s132128/s132128.page';  
import { S53127Page } from './s132129/s132129.page';  
import { S53128Page } from './s132130/s132130.page';  
import { S53129Page } from './s132131/s132131.page';  
import { S53130Page } from './s132132/s132132.page';  
import { S53131Page } from './s132133/s132133.page';  
import { S53132Page } from './s132134/s132134.page';  
import { S53133Page } from './s132135/s132135.page';  
import { S53134Page } from './s132135/s132135.page';  
import { S53135Page } from './s132136/s132136.page';  
import { S53136Page } from './s132137/s132137.page';  
import { S53137Page } from './s132138/s132138.page';  
import { S53138Page } from './s132139/s132139.page';  
import { S53139Page } from './s132140/s132140.page';  
import { S53140Page } from './s53141/s53140.page';  
import { S53140tPage } from './s53141t/s53140t.page';  
import { S53141Page } from './s53142/s53141.page';  
import { S53142Page } from './s53143/s53142.page';  
import { S53143Page } from './s53144/s53143.page';  
import { S53143tPage } from './s53144t/s53143t.page';  
import { S53144Page } from './s53144/s53144.page';  
import { S53145Page } from './s53145/s53145.page';  
import { S53146Page } from './s53146/s53146.page';  
import { S53147Page } from './s53147/s53147.page';  
import { S53148Page } from './s53148/s53148.page';  
import { S53149Page } from './s53149/s53149.page';  
import { S53150Page } from './s53150/s53150.page';  
import { S53151Page } from './s53151/s53151.page';  
import { S53152Page } from './s53152/s53152.page';  
import { S53153Page } from './s53154/s53153.page';  
import { S53154Page } from './s53156/s53154.page';  
import { S53154tPage } from './s53156t/s53154t.page';  
import { S53155Page } from './s53157/s53155.page';  
import { S53156Page } from './s53158/s53156.page';  
import { S53157Page } from './s53159/s53157.page';  
import { S53158Page } from './s53160/s53158.page';  
import { S53159Page } from './s53161/s53159.page';  
import { S53160Page } from './s53161/s53160.page';  
import { S53161Page } from './s53162/s53161.page';  
import { S53161tPage } from './s53162t/s53161t.page';  
import { S53162Page } from './s53163/s53162.page';  
import { S53163Page } from './s53164/s53163.page';  
import { S53164Page } from './s53165/s53164.page';  
import { S53165Page } from './s53166/s53165.page';  
import { S53166Page } from './s53167/s53166.page';  
import { S53166tPage } from './s53167t/s53166t.page';  
import { S53167Page } from './s53168/s53167.page';  
import { S53168Page } from './s53169/s53168.page';  
import { S53168tPage } from './s53169t/s53168t.page';  
import { S53169Page } from './s53170/s53169.page';  
import { S53170Page } from './s53171/s53170.page';  
import { S53171Page } from './s53172/s53171.page';  
import { S53172Page } from './s53173/s53172.page';  
import { S53172tPage } from './s53173t/s53172t.page';  
import { S53173Page } from './s53174/s53173.page';  
import { S53174Page } from './s53175/s53174.page';  
import { S53174tPage } from './s53175t/s53174t.page';  
import { S53175Page } from './s53176/s53175.page';  
import { S53176Page } from './s53177/s53176.page';  
import { S53177Page } from './s53178/s53177.page';  
import { S53178Page } from './s53179/s53178.page';  
import { S53178tPage } from './s53179t/s53178t.page';  
import { S53179Page } from './s132181/s53179.page';  
import { S53180Page } from './s53180-1/s53180.page';  
import { S53181Page } from './s132182/s132182.page';  
import { S53181tPage } from './s132182t/s132182t.page';  
import { S53182Page } from './s132183/s132183.page';  
import { S53183Page } from './s132184/s132184.page';  
import { S53184Page } from './s132185/s132185.page';  
import { S53185Page } from './s132186/s132186.page';  
import { S53186Page } from './s132187/s132187.page';  
import { S53186tPage } from './s132187t/s132187t.page';  
import { S53187Page } from './s132188/s132188.page';  
import { S53188Page } from './s132189/s132189.page';  
import { S53189Page } from './s132190/s132190.page';  
import { S53190Page } from './s132191/s132191.page';  
import { S53191Page } from './s132192/s132192.page';  
import { S53192Page } from './s132193/s132193.page';  
import { S53193Page } from './s132194/s132194.page';  
import { S53194Page } from './s132195/s132195.page';  
import { S53195Page } from './s132196/s132196.page';  
import { S53195tPage } from './s132196t/s132196t.page';  
import { S53196Page } from './s132197/s132197.page';  
import { S53197Page } from './s132198/s132198.page';  
import { S53198Page } from './s132199/s132199.page';  
import { S53199Page } from './s132200/s132200.page'; 
import { S53199tPage } from './s132200t/s132200t.page';  
import { S53200Page } from './s132201/s132201.page';  
import { S53201Page } from './s132202/s132202.page';  
import { S53202Page } from './s132203/s132203.page';  
import { S53203Page } from './s132204/s132204.page';  
import { S53204Page } from './s132205/s132205.page';  
import { S53204tPage } from './s132205t/s132205t.page';  
import { S53205Page } from './s132206/s132206.page';  
import { S53206Page } from './s132207/s132207.page';  
import { S53207Page } from './s132208/s132208.page';  
import { S53208Page } from './s132209/s132209.page';  
import { S53209Page } from './s132210/s53209.page';  
import { S53210Page } from './s132211/s132211.page';  
import { S53211Page } from './s132212/s132212.page';  
import { S53212Page } from './s132213/s132213.page';  
import { S53213Page } from './s132214/s132214.page';  
import { S53214Page } from './s132215/s132215.page';  
import { S53215Page } from './s132216/s132216.page';  
import { S53216Page } from './s132217/s132217.page';  
import { S53217Page } from './s132218/s132219.page';  
import { S53218Page } from './s132219/s132219.page';  
import { S53218tPage } from './s132219t/s132219t.page';  
import { S53219Page } from './s132220/s132220.page';
import { S53220Page } from './s132221/s132221.page';  
import { S53221Page } from './s132222/s132222.page';  
import { S53222Page } from './s132223/s132223.page';  
import { S53223Page } from './s132224/s132224.page';  
import { S53224Page } from './s132225/s132225.page';  
import { S53225Page } from './s132226/s132226.page';  
import { S53226Page } from './s132227/s132227.page';  
import { S53226tPage } from './s132227t/s132227t.page';  
import { S53227Page } from './s132228/s132228.page';  
import { S53228Page } from './s132229/s132229.page';  
import { S53229Page } from './s132230/s132230.page';  
import { S53230Page } from './s132231/s132231.page';  
import { S53231Page } from './s132232/s132232.page';  
import { S53232Page } from './s132233/s132233.page';  
import { S53233Page } from './s132234/s132234.page';  
import { S53234Page } from './s132235/s132235.page';  
import { S53235Page } from './s132236/s132236.page';  
import { S53236Page } from './s132237/s132237.page';  
import { S53237Page } from './s132238/s132238.page';  
import { S53238Page } from './s132239/s132239.page';  
import { S53239Page } from './s132240/s132240.page';  
import { S53240Page } from './s53240/s53240.page';  
import { S53240tPage } from './s53240t/s53240t.page';  
import { S53241Page } from './s53241/s53241.page';  
import { S53242Page } from './s53242/s53242.page';  
import { S53242tPage } from './s53242t/s53242t.page';  
import { S53243Page } from './s53243/s53243.page';  
import { S53244Page } from './s53244/s53244.page';  
import { S53245Page } from './s53245/s53245.page';  
import { S53246Page } from './s53246/s53246.page'; 
import { S53247Page } from './s53247/s53247.page';  
import { S53248Page } from './s53248/s53248.page';  
import { S53249Page } from './s53249/s53249.page';  
import { S53250Page } from './s53250/s53250.page';  
import { S53251Page } from './s53251/s53251.page';  
import { S53252Page } from './s53252/s53252.page';  
import { S53253Page } from './s53253/s53253.page';  
import { S53254Page } from './s53254/s53254.page';  
import { S53255Page } from './s53255/s53255.page';  
import { S53256Page } from './s53256/s53256.page';  

import { CommunicationRoutingModule } from './communication-routing.module';

@NgModule({
  declarations: [
    S53001Page ,
    S53002Page ,
    S53003Page ,
    S53004Page ,
    S53004tPage ,
    S53005Page ,
    S53006Page ,
    S53007Page ,
    S53008Page ,
    S53009Page ,
    S53010Page ,
    S53011Page ,
    S53012Page ,
    S53013Page ,
    S53014Page ,
    S53015Page ,
    S53016Page ,
    S53017Page ,
    S53017Page ,
    S53018Page ,
    S53018tPage ,
    S53019Page ,
    S53020Page ,
    S53021Page ,
    S53022Page ,
    S53023Page ,
    S53024Page ,
    S53025Page ,
    S53026Page ,
    S53027Page ,
    S53028Page ,
    S53029Page ,
    S53030Page ,
    S53031Page ,
    S53032Page ,
    S53033Page ,
    S53033tPage ,
    S53034Page ,
    S53035Page ,
    S53035tPage ,
    S53036Page ,
    S53037Page ,
    S53037tPage ,
    S53038Page ,
    S53038tPage ,
    S53039Page ,
    S53040Page ,
    S53041Page ,
    S53042Page ,
    S53043Page ,
    S53044Page ,
    S53045Page ,
    S53046Page ,
    S53047Page ,
    S53048Page ,
    S53049Page ,
    S53050Page ,
    S53051Page ,
    S53051tPage ,
    S53052Page ,
    S53053Page ,
    S53054Page ,
    S53055Page ,
    S53056Page ,
    S53057Page ,
    S53058Page ,
    S53059Page ,
    S53060Page ,
    S53061Page ,
    S53062Page ,
    S53063Page ,
    S53064Page ,
    S53065Page ,
    S53066Page ,
    S53067Page ,
    S53068Page ,
    S53069Page ,
    S53070Page ,
    S53071Page ,
    S53072Page ,
    S53073Page ,
    S53074Page ,
    S53075Page ,
    S53076Page ,
    S53076tPage ,
    S53077Page ,
    S53078Page ,
    S53079Page ,
    S53080Page ,
    S53080tPage ,
    S53081Page ,
    S53082Page ,
    S53083Page ,
    S53084Page ,
    S53085Page ,
    S53085tPage ,
    S53086Page ,
    S53087Page ,
    S53088Page ,
    S53089Page ,
    S53090Page ,
    S53091Page ,
    S53092Page ,
    S53093Page ,
    S53094Page ,
    S53094tPage ,
    S53095Page ,
    S53096Page ,
    S53096tPage ,
    S53097Page ,
    S53098Page ,
    S53099Page ,
    S53099tPage ,
    S53100Page ,
    S53101Page ,
    S53102Page ,
    S53103Page ,
    S53104Page ,
    S53104tPage ,
    S53105Page ,
    S53106Page ,
    S53107Page ,
    S53107tPage ,
    S53108Page ,
    S53109Page ,
    S53110Page ,
    S53111Page ,
    S53112Page ,
    S53113Page ,
    S53114Page ,
    S53115Page ,
    S53116Page ,
    S53117Page ,
    S53118Page ,
    S53119Page ,
    S53119tPage ,
    S53120Page ,
    S53121Page ,
    S53121tPage ,
    S53122Page ,
    S53123Page ,
    S53124Page ,
    S53124tPage ,
    S53125Page ,
    S53126Page ,
    S53127Page ,
    S53128Page ,
    S53129Page ,
    S53130Page ,
    S53131Page ,
    S53132Page ,
    S53133Page ,
    S53134Page ,
    S53135Page ,
    S53136Page ,
    S53137Page ,
    S53138Page ,
    S53139Page ,
    S53140Page ,
    S53140tPage ,
    S53141Page ,
    S53142Page ,
    S53143Page ,
    S53143tPage ,
    S53144Page ,
    S53145Page ,
    S53146Page ,
    S53147Page ,
    S53148Page ,
    S53149Page ,
    S53150Page ,
    S53151Page ,
    S53152Page ,
    S53153Page ,
    S53154Page ,
    S53154tPage ,
    S53155Page ,
    S53156Page ,
    S53157Page ,
    S53158Page ,
    S53159Page ,
    S53160Page ,
    S53161Page ,
    S53161tPage ,
    S53162Page ,
    S53163Page ,
    S53164Page ,
    S53165Page ,
    S53166Page ,
    S53166tPage ,
    S53167Page ,
    S53168Page ,
    S53168tPage ,
    S53169Page ,
    S53170Page ,
    S53171Page ,
    S53172Page ,
    S53172tPage ,
    S53173Page ,
    S53174Page ,
    S53174tPage ,
    S53175Page ,
    S53176Page ,
    S53177Page ,
    S53178Page ,
    S53178tPage ,
    S53179Page ,
    S53180Page ,
    S53181Page ,
    S53181tPage ,
    S53182Page ,
    S53183Page ,
    S53184Page ,
    S53185Page ,
    S53186Page ,
    S53186tPage ,
    S53187Page ,
    S53188Page ,
    S53189Page ,
    S53190Page ,
    S53191Page ,
    S53192Page ,
    S53193Page ,
    S53194Page ,
    S53195Page ,
    S53195tPage ,
    S53196Page ,
    S53197Page ,
    S53198Page ,
    S53199Page ,
    S53199tPage ,
    S53200Page ,
    S53201Page ,
    S53202Page ,
    S53203Page ,
    S53204Page ,
    S53204tPage ,
    S53205Page ,
    S53206Page ,
    S53207Page ,
    S53208Page ,
    S53209Page ,
    S53210Page ,
    S53211Page ,
    S53212Page ,
    S53213Page ,
    S53214Page ,
    S53215Page ,
    S53216Page ,
    S53217Page ,
    S53218Page ,
    S53218tPage ,
    S53219Page ,
    S53220Page ,
    S53221Page ,
    S53222Page ,
    S53223Page ,
    S53224Page ,
    S53225Page ,
    S53226Page ,
    S53226tPage ,
    S53227Page ,
    S53228Page ,
    S53229Page ,
    S53230Page ,
    S53231Page ,
    S53232Page ,
    S53233Page ,
    S53234Page ,
    S53235Page ,
    S53236Page ,
    S53237Page ,
    S53238Page ,
    S53239Page ,
    S53240Page ,
    S53240tPage ,
    S53241Page ,
    S53242Page ,
    S53242tPage ,
    S53243Page ,
    S53244Page ,
    S53245Page ,
    S53246Page ,
    S53247Page ,
    S53248Page ,
    S53249Page ,
    S53250Page ,
    S53251Page ,
    S53252Page ,
    S53253Page ,
    S53254Page ,
    S53255Page ,
    S53256Page ,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CommunicationRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class CommunicationModule { }
