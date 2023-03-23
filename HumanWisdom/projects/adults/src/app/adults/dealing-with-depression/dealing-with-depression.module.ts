import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../../shared/shared.module';
import { AdultsService } from '../adults.service';

import { DealingWithDepressionRoutingModule } from './dealing-with-depression-routing.module';

import { S92001Page } from './s92001/s92001.page';
import { S92002Page } from './s92002/s92002.page';
import { S92003Page } from './s92003/s92003.page';
import { S92004Page } from './s92004/s92004.page';
import { S92005Page } from './s92005/s92005.page';
import { S92006Page } from './s92006/s92006.page';
import { S92007Page } from './s92007/s92007.page';
import { S92008Page } from './s92008/s92008.page';
import { S92009Page } from './s92009/s92009.page';
import { S92010Page } from './s92010/s92010.page';
import { S92011Page } from './s92011/s92011.page';
import { S92011tPage } from './s92011t/s92011t.page';
import { S92012Page } from './s92012/s92012.page';
import { S92013Page } from './s92013/s92013.page';
import { S92014Page } from './s92014/s92014.page';
import { S92015Page } from './s92015/s92015.page';
import { S92016Page } from './s92016/s92016.page';
import { S92017Page } from './s92017/s92017.page';
import { S92018Page } from './s92018/s92018.page';
import { S92019Page } from './s92019/s92019.page';
import { S92019tPage } from './s92019t/s92019t.page';
import { S92020Page } from './s92020/s92020.page';
import { S92021Page } from './s92021/s92021.page';
import { S92022Page } from './s92022/s92022.page';
import { S92023Page } from './s92023/s92023.page';
import { S92023tPage } from './s92023t/s92023t.page';
import { S92024Page } from './s92024/s92024.page';
import { S92025Page } from './s92025/s92025.page';
import { S92026Page } from './s92026/s92026.page';
import { S92027Page } from './s92027/s92027.page';
import { S92028Page } from './s92028/s92028.page';
import { S92029Page } from './s92029/s92029.page';
import { S92030Page } from './s92030/s92030.page';
import { S92031Page } from './s92031/s92031.page';
import { S92032Page } from './s92032/s92032.page';
import { S92033Page } from './s92033/s92033.page';
import { S92034Page } from './s92034/s92034.page';
import { S92035Page } from './s92035/s92035.page';
import { S92036Page } from './s92036/s92036.page';
import { S92037Page } from './s92037/s92037.page';
import { S92038Page } from './s92038/s92038.page';
import { S92039Page } from './s92039/s92039.page';
import { S92040Page } from './s92040/s92040.page';
import { S92041Page } from './s92041/s92041.page';
import { S92042Page } from './s92042/s92042.page';
import { S92043Page } from './s92043/s92043.page';
import { S92043tPage } from './s92043t/s92043t.page';
import { S92044Page } from './s92044/s92044.page';
import { S92045Page } from './s92045/s92045.page';
import { S92046Page } from './s92046/s92046.page';
import { S92047Page } from './s92047/s92047.page';
import { S92048Page } from './s92048/s92048.page';
import { S92049Page } from './s92049/s92049.page';
import { S92050Page } from './s92050/s92050.page';
import { S92051Page } from './s92051/s92051.page';
import { S92052Page } from './s92052/s92052.page';
import { S92053Page } from './s92053/s92053.page';
import { S92054Page } from './s92054/s92054.page';
import { S92055Page } from './s92055/s92055.page';
import { S92056Page } from './s92056/s92056.page';
import { S92057Page } from './s92057/s92057.page';
import { S92058Page } from './s92058/s92058.page';
import { S92059Page } from './s92059/s92059.page';
import { S92060Page } from './s92060/s92060.page';
import { S92061Page } from './s92061/s92061.page';
import { S92062Page } from './s92062/s92062.page';
import { S92063Page } from './s92063/s92063.page';
import { S92064Page } from './s92064/s92064.page';
import { S92065Page } from './s92065/s92065.page';
import { S92066Page } from './s92066/s92066.page';
import { S92067Page } from './s92067/s92067.page';
import { S92068Page } from './s92068/s92068.page';
import { S92069Page } from './s92069/s92069.page';
import { S92070Page } from './s92070/s92070.page';
import { S92071Page } from './s92071/s92071.page';
import { S92072Page } from './s92072/s92072.page';
import { S92073Page } from './s92073/s92073.page';
import { S92074Page } from './s92074/s92074.page';
import { S92074tPage } from './s92074t/s92074t.page';
import { S92075Page } from './s92075/s92075.page';
import { S92076Page } from './s92076/s92076.page';
import { S92077Page } from './s92077/s92077.page';
import { S92078Page } from './s92078/s92078.page';
import { S92079Page } from './s92079/s92079.page';
import { S92080Page } from './s92080/s92080.page';
import { S92081Page } from './s92081/s92081.page';
import { S92082Page } from './s92082/s92082.page';
import { S92083Page } from './s92083/s92083.page';
import { S92084Page } from './s92084/s92084.page'; 
import { S92085Page } from './s92085/s92085.page';
import { S92086Page } from './s92086/s92086.page';
import { S92087Page } from './s92087/s92087.page';
import { S92088Page } from './s92088/s92088.page';
import { S92088tPage } from './s92088t/s92088t.page';
import { S92089Page } from './s92089/s92089.page';
import { S92090Page } from './s92090/s92090.page';
import { S92091Page } from './s92091/s92091.page';
import { S92091tPage } from './s92091t/s92091t.page';
import { S92092Page } from './s92092/s92092.page';
import { S92092tPage } from './s92092t/s92092t.page';
import { S92093Page } from './s92093/s92093.page';
import { S92094Page } from './s92094/s92094.page';
import { S92095Page } from './s92095/s92095.page';
import { S92096Page } from './s92096/s92096.page';
import { S92097Page } from './s92097/s92097.page';
import { S92097tPage } from './s92097t/s92097t.page';
import { S92098Page } from './s92098/s92098.page';
import { S92099Page } from './s92099/s92099.page';
import { S92100Page } from './s92100/s92100.page';
import { S92101Page } from './s92101/s92101.page';
import { S92101tPage } from './s92101t/s92101t.page';
import { S92102Page } from './s92102/s92102.page';
import { S92103Page } from './s92103/s92103.page';
import { S92104Page } from './s92104/s92104.page';
import { S92105Page } from './s92105/s92105.page';
import { S92106Page } from './s92106/s92106.page';
import { S92106tPage } from './s92106t/s92106t.page';
import { S92107Page } from './s92107/s92107.page';
import { S92108Page } from './s92108/s92108.page';
import { S92109Page } from './s92109/s92109.page';
import { S92110Page } from './s92110/s92110.page';
import { S92110tPage } from './s92110t/s92110t.page';
import { S92111Page } from './s92111/s92111.page';
import { S92112Page } from './s92112/s92112.page';
import { S92113Page } from './s92113/s92113.page';
import { S92114Page } from './s92114/s92114.page';
import { S92115Page } from './s92115/s92115.page';
import { S92116Page } from './s92116/s92116.page';
import { S92117Page } from './s92117/s92117.page';
import { S92117tPage } from './s92117t/s92117t.page';
import { S92118Page } from './s92118/s92118.page';
import { S92119Page } from './s92119/s92119.page';
import { S92120Page } from './s92120/s92120.page';
import { S92120tPage } from './s92120t/s92120t.page';
import { S92121Page } from './s92121/s92121.page';
import { S92122Page } from './s92122/s92122.page';
import { S92123Page } from './s92123/s92123.page';
import { S92123tPage } from './s92123t/s92123t.page';
import { S92124Page } from './s92124/s92124.page';
import { S92124tPage } from './s92124t/s92124t.page';
import { S92125Page } from './s92125/s92125.page';
import { S92125tPage } from './s92125t/s92125t.page';
import { S92126Page } from './s92126/s92126.page';
import { S92127Page } from './s92127/s92127.page';
import { S92128Page } from './s92128/s92128.page';
import { S92129Page } from './s92129/s92129.page';
import { S92129tPage } from './s92129t/s92129t.page';
import { S92130Page } from './s92130/s92130.page';
import { S92131Page } from './s92131/s92131.page';
import { S92131tPage } from './s92131t/s92131t.page';
import { S92132Page } from './s92132/s92132.page';
import { S92133Page } from './s92133/s92133.page';
import { S92134Page } from './s92134/s92134.page';
import { S92135Page } from './s92135/s92135.page';
import { S92136Page } from './s92136/s92136.page';
import { S92137Page } from './s92137/s92137.page';
import { S92137tPage } from './s92137t/s92137t.page';
import { S92138Page } from './s92138/s92138.page';
import { S92139Page } from './s92139/s92139.page';
import { S92140Page } from './s92140/s92140.page';
import { S92141Page } from './s92141/s92141.page';
import { S92141tPage } from './s92141t/s92141t.page';
import { S92142Page } from './s92142/s92142.page';
import { S92143Page } from './s92143/s92143.page';
import { S92144Page } from './s92144/s92144.page';
import { S92144tPage } from './s92144t/s92144t.page';
import { S92145Page } from './s92145/s92145.page';
import { S92146Page } from './s92146/s92146.page';
import { S92147Page } from './s92147/s92147.page';
import { S92148Page } from './s92148/s92148.page';
import { S92149Page } from './s92149/s92149.page';
import { S92150Page } from './s92150/s92150.page';
import { S92151Page } from './s92151/s92151.page';
import { S92152Page } from './s92152/s92152.page';
import { S92152tPage } from './s92152t/s92152t.page';
import { S92153Page } from './s92153/s92153.page';
import { S92154Page } from './s92154/s92154.page';
import { S92155Page } from './s92155/s92155.page';
import { S92156Page } from './s92156/s92156.page';
import { S92157Page } from './s92157/s92157.page';
import { S92157tPage } from './s92157t/s92157t.page';
import { S92158Page } from './s92158/s92158.page';
import { S92159Page } from './s92159/s92159.page';
import { S92160Page } from './s92160/s92160.page';
import { S92160tPage } from './s92160t/s92160t.page';
import { S92161Page } from './s92161/s92161.page';
import { S92162Page } from './s92162/s92162.page';
import { S92163Page } from './s92163/s92163.page';
import { S92164Page } from './s92164/s92164.page';
import { S92164tPage } from './s92164t/s92164t.page';
import { S92165Page } from './s92165/s92165.page';
import { S92166Page } from './s92166/s92166.page';
import { S92167Page } from './s92167/s92167.page';
import { S92168Page } from './s92168/s92168.page';
import { S92168tPage } from './s92168t/s92168t.page';
import { S92169Page } from './s92169/s92169.page';
import { S92170Page } from './s92170/s92170.page';
import { S92170tPage } from './s92170t/s92170t.page';
import { S92171Page } from './s92171/s92171.page';
import { S92172Page } from './s92172/s92172.page';
import { S92172tPage } from './s92172t/s92172t.page';
import { S92173Page } from './s92173/s92173.page';
import { S92174Page } from './s92174/s92174.page';
import { S92175Page } from './s92175/s92175.page';
import { S92176Page } from './s92176/s92176.page';
import { S92177Page } from './s92177/s92177.page';
import { S92178Page } from './s92178/s92178.page';
import { S92179Page } from './s92179/s92179.page';
import { S92179tPage } from './s92179t/s92179t.page';
import { S92180Page } from './s92180/s92180.page';
import { S92181Page } from './s92181/s92181.page';
import { S92182Page } from './s92182/s92182.page';
import { S92183Page } from './s92183/s92183.page';
import { S92184Page } from './s92184/s92184.page';
import { S92185Page } from './s92185/s92185.page';
import { S92186Page } from './s92186/s92186.page';
import { S92187Page } from './s92187/s92187.page';
import { S92188Page } from './s92188/s92188.page';
import { S92189Page } from './s92189/s92189.page';
import { S92190Page } from './s92190/s92190.page';
import { S92191Page } from './s92191/s92191.page';
import { S92192Page } from './s92192/s92192.page';
import { S92193Page } from './s92193/s92193.page';
import { S92194Page } from './s92194/s92194.page';
import { S92195Page } from './s92195/s92195.page';
import { S92196Page } from './s92196/s92196.page';
import { S92196tPage } from './s92196t/s92196t.page';
import { S92197Page } from './s92197/s92197.page';
import { S92198Page } from './s92198/s92198.page';
import { S92199Page } from './s92199/s92199.page';
import { S92200Page } from './s92200/s92200.page';
import { S92200tPage } from './s92200t/s92200t.page';
import { S92201Page } from './s92201/s92201.page';
import { S92202Page } from './s92202/s92202.page';
import { S92203Page } from './s92203/s92203.page';
import { S92204Page } from './s92204/s92204.page';
import { S92204tPage } from './s92204t/s92204t.page';
import { S92205Page } from './s92205/s92205.page';
import { S92206Page } from './s92206/s92206.page';
import { S92207Page } from './s92207/s92207.page';
import { S92208Page } from './s92208/s92208.page';
import { S92209Page } from './s92209/s92209.page';
import { S92209tPage } from './s92209t/s92209t.page';
import { S92210Page } from './s92210/s92210.page';
import { S92211Page } from './s92211/s92211.page';
import { S92212Page } from './s92212/s92212.page';
import { S92213Page } from './s92213/s92213.page';
import { S92213tPage } from './s92213t/s92213t.page';
import { S92214Page } from './s92214/s92214.page';
import { S92215Page } from './s92215/s92215.page';
import { S92216Page } from './s92216/s92216.page';
import { S92217Page } from './s92217/s92217.page';
import { S92218Page } from './s92218/s92218.page';
import { S92218tPage } from './s92218t/s92218t.page';
import { S92219Page } from './s92219/s92219.page';
import { S92220Page } from './s92220/s92220.page';
import { S92220tPage } from './s92220t/s92220t.page';
import { S92221Page } from './s92221/s92221.page';
import { S92222Page } from './s92222/s92222.page';
import { S92223Page } from './s92223/s92223.page';
import { S92223tPage } from './s92223t/s92223t.page';
import { S92224Page } from './s92224/s92224.page';
import { S92225Page } from './s92225/s92225.page';
import { S92226Page } from './s92226/s92226.page';
import { S92227Page } from './s92227/s92227.page';
import { S92228Page } from './s92228/s92228.page';
import { S92229Page } from './s92229/s92229.page';
import { S92230Page } from './s92230/s92230.page';
import { S92230tPage } from './s92230t/s92230t.page';
import { S92231Page } from './s92231/s92231.page';
import { S92232Page } from './s92232/s92232.page';
import { S92233Page } from './s92233/s92233.page';
import { S92234Page } from './s92234/s92234.page';
import { S92235Page } from './s92235/s92235.page';
import { S92236Page } from './s92236/s92236.page';
import { S92237Page } from './s92237/s92237.page';
import { S92238Page } from './s92238/s92238.page';
import { S92239Page } from './s92239/s92239.page';
import { S92240Page } from './s92240/s92240.page';
import { S92241Page } from './s92241/s92241.page';
import { S92241tPage } from './s92241t/s92241t.page';
import { S92242Page } from './s92242/s92242.page';
import { S92243Page } from './s92243/s92243.page';
import { S92244Page } from './s92244/s92244.page';
import { S92245Page } from './s92245/s92245.page';
import { S92246Page } from './s92246/s92246.page';
import { S92247Page } from './s92247/s92247.page';
import { S92248Page } from './s92248/s92248.page';
import { S92249Page } from './s92249/s92249.page';
import { S92250Page } from './s92250/s92250.page';
import { S92250tPage } from './s92250t/s92250t.page';
import { S92251Page } from './s92251/s92251.page';
import { S92252Page } from './s92252/s92252.page';
import { S92252tPage } from './s92252t/s92252t.page';
import { S92253Page } from './s92253/s92253.page';
import { S92254Page } from './s92254/s92254.page';
import { S92255Page } from './s92255/s92255.page';
import { S92256Page } from './s92256/s92256.page';
import { S92257Page } from './s92257/s92257.page';
import { S92258Page } from './s92258/s92258.page';
import { S92259Page } from './s92259/s92259.page';
import { S92260Page } from './s92260/s92260.page';
import { S92261Page } from './s92261/s92261.page';
import { S92262Page } from './s92262/s92262.page';
import { S92263Page } from './s92263/s92263.page';
import { S92264Page } from './s92264/s92264.page';
import { S92265Page } from './s92265/s92265.page';
import { S92266Page } from './s92266/s92266.page';
import { S92267Page } from './s92267/s92267.page';
import { S92268Page } from './s92268/s92268.page';

@NgModule({
  declarations: [
    S92001Page,
    S92002Page,
    S92003Page,
    S92004Page,
    S92005Page,
    S92006Page,
    S92007Page,
    S92008Page,
    S92009Page,
    S92010Page,
    S92011Page,
    S92011tPage,
    S92012Page,
    S92013Page,
    S92014Page,
    S92015Page,
    S92016Page,
    S92017Page,
    S92018Page,
    S92019Page,
    S92019tPage,
    S92020Page,
    S92021Page,
    S92022Page,
    S92023Page,
    S92023tPage,
    S92024Page,
    S92025Page,
    S92026Page,
    S92027Page,
    S92028Page,
    S92029Page,
    S92030Page,
    S92031Page,
    S92032Page,
    S92033Page,
    S92034Page,
    S92035Page,
    S92036Page,
    S92037Page,
    S92038Page,
    S92039Page,
    S92040Page,
    S92041Page,
    S92042Page,
    S92043Page,
    S92043tPage,
    S92044Page,
    S92045Page,
    S92046Page,
    S92047Page,
    S92048Page,
    S92049Page,
    S92050Page,
    S92051Page,
    S92052Page,
    S92053Page,
    S92054Page,
    S92055Page,
    S92056Page,
    S92057Page,
    S92058Page,
    S92059Page,
    S92060Page,
    S92061Page,
    S92062Page,
    S92063Page,
    S92064Page,
    S92065Page,
    S92066Page,
    S92067Page,
    S92068Page,
    S92069Page,
    S92070Page,
    S92071Page,
    S92072Page,
    S92073Page,
    S92074Page,
    S92074tPage,
    S92075Page,
    S92076Page,
    S92077Page,
    S92078Page,
    S92079Page,
    S92080Page,
    S92081Page,
    S92082Page,
    S92083Page,
    S92084Page,
    S92085Page,
    S92086Page,
    S92087Page,
    S92088Page,
    S92088tPage,
    S92089Page,
    S92090Page,
    S92091Page,
    S92091tPage,
    S92092Page,
    S92092tPage,
    S92093Page,
    S92094Page,
    S92095Page,
    S92096Page,
    S92097Page,
    S92097tPage,
    S92098Page,
    S92099Page,
    S92100Page,
    S92101Page,
    S92101tPage,
    S92102Page,
    S92103Page,
    S92104Page,
    S92105Page,
    S92106Page,
    S92106tPage,
    S92107Page,
    S92108Page,
    S92109Page,    
    S92110Page,
    S92110tPage,
    S92111Page,
    S92112Page,
    S92113Page,
    S92114Page,
    S92115Page,
    S92116Page,
    S92117Page,
    S92117tPage,
    S92118Page,
    S92119Page,
    S92120Page,
    S92120tPage,
    S92121Page,
    S92122Page,
    S92123Page,
    S92123tPage,
    S92124Page,
    S92124tPage,
    S92125Page,
    S92125tPage,
    S92126Page,
    S92127Page,
    S92128Page,
    S92129Page,
    S92129tPage,
    S92130Page,
    S92131Page,
    S92131tPage,
    S92132Page,
    S92133Page,
    S92134Page,
    S92135Page,
    S92136Page,
    S92137Page, 
    S92137tPage, 
    S92138Page,
    S92139Page,
    S92140Page,
    S92141Page,
    S92141tPage,
    S92142Page,
    S92143Page,
    S92144Page,
    S92144tPage,
    S92145Page,
    S92146Page,
    S92147Page,
    S92148Page,
    S92149Page,
    S92150Page,
    S92151Page,
    S92152Page,
    S92152tPage,
    S92153Page,
    S92154Page,
    S92155Page,
    S92156Page,
    S92157Page,
    S92157tPage,
    S92158Page,
    S92159Page,
    S92160Page,
    S92160tPage,
    S92161Page,
    S92162Page,
    S92163Page,
    S92164Page,
    S92164tPage,
    S92165Page,
    S92166Page,
    S92167Page,
    S92168Page,
    S92168tPage,
    S92169Page,
    S92170Page,
    S92170tPage,
    S92171Page,
    S92172Page,
    S92172tPage,
    S92173Page,
    S92174Page,
    S92175Page,
    S92176Page,
    S92177Page,
    S92178Page,
    S92179Page,
    S92179tPage,
    S92180Page,
    S92181Page,
    S92182Page,
    S92183Page,
    S92184Page,
    S92185Page,
    S92186Page,
    S92187Page,
    S92188Page,
    S92189Page,
    S92190Page,
    S92191Page,
    S92192Page,
    S92193Page,
    S92194Page,
    S92195Page,
    S92196Page,
    S92196tPage,
    S92197Page,
    S92198Page,
    S92199Page,
    S92200Page,
    S92200tPage,
    S92201Page,
    S92202Page,
    S92203Page,
    S92204Page,
    S92205Page,
    S92206Page,
    S92207Page,
    S92208Page,
    S92209Page,
    S92210Page,
    S92211Page,
    S92212Page,
    S92213Page,
    S92214Page,
    S92215Page,
    S92216Page,
    S92217Page,
    S92218Page,
    S92219Page,
    S92220Page,
    S92221Page,
    S92222Page,
    S92223Page,
    S92223tPage,
    S92224Page,
    S92225Page,
    S92226Page,
    S92227Page,
    S92228Page,
    S92229Page,
    S92230Page,
    S92230tPage,
    S92231Page,
    S92232Page,
    S92233Page,
    S92234Page,
    S92235Page,
    S92236Page,
    S92237Page,
    S92238Page,
    S92239Page,
    S92240Page,
    S92241Page,
    S92241tPage,
    S92242Page,
    S92243Page,
    S92244Page,
    S92245Page,
    S92246Page,
    S92247Page,
    S92248Page,
    S92249Page,
    S92250Page,
    S92250tPage,
    S92251Page,
    S92252Page,
    S92252tPage,
    S92253Page,
    S92254Page,
    S92255Page,
    S92256Page,
    S92257Page,
    S92258Page,
    S92259Page,
    S92260Page,
    S92261Page,
    S92262Page,
    S92263Page,
    S92264Page,
    S92265Page,
    S92266Page,
    S92267Page,
    S92268Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    DealingWithDepressionRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class DealingWithDepressionModule { }
