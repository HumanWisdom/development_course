import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import { CareerSuccessRoutingModule } from './career-success-routing.module';
import { TeenagersService } from '../teenagers.service';
import { S160001Page } from './s160001/s160001.page';
import { S160002Page } from './s160002/s160002.page';
import { S160003Page } from './s160003/s160003.page';
import { S160004Page } from './s160004/s160004.page';
import { S160004tPage } from './s160004t/s160004t.page';
import { S160005Page } from './s160005/s160005.page';
import { S160006Page } from './s160006/s160006.page';
import { S160007Page } from './s160007/s160007.page';
import { S160008Page } from './s160008/s160008.page';
import { S160009Page } from './s160009/s160009.page';
import { S160010Page } from './s160010/s160010.page';
import { S160012Page } from './s160012/s160012.page';
import { S160013Page } from './s160013/s160013.page';
import { S160014Page } from './s160014/s160014.page';
import { S160015Page } from './s160015/s160015.page';
import { S160016Page } from './s160016/s160016.page';
import { S160017Page } from './s160017/s160017.page';
import { S160018Page } from './s160018/s160018.page';
import { S160011Page } from './s160011/s160011.page';
import { S160019Page } from './s160019/s160019.page';
import { S160020Page } from './s160020/s160020.page';
import { S160021Page } from './s160021/s160021.page';
import { S160022Page } from './s160022/s160022.page';
import { S160023Page } from './s160023/s160023.page';
import { S160024Page } from './s160024/s160024.page';
import { S160025Page } from './s160025/s160025.page';
import { S160026Page } from './s160026/s160026.page';
import { S160026tPage } from './s160026t/s160026t.page';
import { S160027Page } from './s160027/s160027.page';
import { S160028Page } from './s160028/s160028.page';
import { S160029Page } from './s160029/s160029.page';
import { S160030Page } from './s160030/s160030.page';
import { S160031Page } from './s160031/s160031.page';
import { S160032Page } from './s160032/s160032.page';
import { S160033Page } from './s160033/s160033.page';
import { S160034Page } from './s160034/s160034.page';
import { S160035Page } from './s160035/s160035.page';
import { S160036Page } from './s160036/s160036.page';
import { S160037Page } from './s160037/s160037.page';
import { S160038Page } from './s160038/s160038.page';
import { S160039Page } from './s160039/s160039.page';
import { S160040Page } from './s160040/s160040.page';
import { S160041Page } from './s160041/s160041.page';
import { S160042Page } from './s160042/s160042.page';
import { S160043Page } from './s160043/s160043.page';
import { S160044Page } from './s160044/s160044.page';
import { S160044tPage } from './s160044t/s160044t.page';
import { S160045Page } from './s160045/s160045.page';
import { S160046Page } from './s160046/s160046.page';
import { S160047Page } from './s160047/s160047.page';
import { S160048Page } from './s160048/s160048.page';
import { S160048tPage } from './s160048t/s160048t.page';
import { S160049Page } from './s160049/s160049.page';
import { S160050Page } from './s160050/s160050.page';
import { S160051Page } from './s160051/s160051.page';
import { S160051tPage } from './s160051t/s160051t.page';
import { S160052Page } from './s160052/s160052.page';
import { S160053Page } from './s160053/s160053.page';
import { S160054Page } from './s160054/s160054.page';
import { S160055Page } from './s160055/s160055.page';
import { S160056Page } from './s160056/s160056.page';
import { S160057Page } from './s160057/s160057.page';
import { S160057tPage } from './s160057t/s160057t.page';
import { S160058Page } from './s160058/s160058.page';
import { S160059Page } from './s160059/s160059.page';
import { S160060Page } from './s160060/s160060.page';
import { S160061Page } from './s160061/s160061.page';
import { S160061tPage } from './s160061t/s160061t.page';
import { S160062Page } from './s160062/s160062.page';
import { S160063Page } from './s160063/s160063.page';
import { S160064Page } from './s160064/s160064.page';
import { S160065Page } from './s160065/s160065.page';
import { S160066Page } from './s160066/s160066.page';
import { S160066tPage } from './s160066t/s160066t.page';
import { S160067Page } from './s160067/s160067.page';
import { S160068Page } from './s160068/s160068.page';
import { S160069Page } from './s160069/s160069.page';
import { S160070Page } from './s160070/s160070.page';
import { S160070tPage } from './s160070t/s160070t.page';
import { S160071Page } from './s160071/s160071.page';
import { S160072Page } from './s160072/s160072.page';
import { S160073Page } from './s160073/s160073.page';
import { S160074Page } from './s160074/s160074.page';
import { S160075Page } from './s160075/s160075.page';
import { S160076Page } from './s160076/s160076.page';
import { S160077Page } from './s160077/s160077.page';
import { S160078Page } from './s160078/s160078.page';
import { S160079Page } from './s160079/s160079.page';
import { S160080Page } from './s160080/s160080.page';
import { S160081Page } from './s160081/s160081.page';
import { S160081tPage } from './s160081t/s160081t.page';
import { S160082Page } from './s160082/s160082.page';
import { S160083Page } from './s160083/s160083.page';
import { S160083tPage } from './s160083t/s160083t.page';
import { S160084Page } from './s160084/s160084.page';
import { S160085Page } from './s160085/s160085.page';
import { S160086Page } from './s160086/s160086.page';
import { S160087Page } from './s160087/s160087.page';
import { S160088Page } from './s160088/s160088.page';
import { S160088tPage } from './s160088t/s160088t.page';
import { S160089Page } from './s160089/s160089.page';
import { S160090Page } from './s160090/s160090.page';
import { S160091Page } from './s160091/s160091.page';
import { S160092Page } from './s160092/s160092.page';
import { S160093Page } from './s160093/s160093.page';
import { S160094Page } from './s160094/s160094.page';
import { S160095Page } from './s160095/s160095.page';
import { S160096Page } from './s160096/s160096.page';
import { S160096tPage } from './s160096t/s160096t.page';
import { S160097Page } from './s160097/s160097.page';
import { S160098Page } from './s160098/s160098.page';
import { S160099Page } from './s160099/s160099.page';
import { S160100Page } from './s160100/s160100.page';
import { S160101Page } from './s160101/s160101.page';
import { S160101tPage } from './s160101t/s160101t.page';
import { S160103Page } from './s160103/s160103.page';
import { S160104Page } from './s160104/s160104.page';
import { S160105Page } from './s160105/s160105.page';
import { S160106Page } from './s160106/s160106.page';
import { S160107Page } from './s160107/s160107.page';
import { S160107tPage } from './s160107t/s160107t.page';
import { S160108Page } from './s160108/s160108.page';
import { S160109Page } from './s160109/s160109.page';
import { S160110Page } from './s160110/s160110.page';
import { S160111Page } from './s160111/s160111.page';
import { S160112Page } from './s160112/s160112.page';
import { S160113Page } from './s160113/s160113.page';
import { S160114Page } from './s160114/s160114.page';
import { S160115Page } from './s160115/s160115.page';
import { S160116Page } from './s160116/s160116.page';
import { S160117Page } from './s160117/s160117.page';
import { S160118Page } from './s160118/s160118.page';
import { S160118tPage } from './s160118t/s160118t.page';
import { S160119Page } from './s160119/s160119.page';
import { S160120Page } from './s160120/s160120.page';
import { S160121Page } from './s160121/s160121.page';
import { S160122Page } from './s160122/s160122.page';
import { S160123Page } from './s160123/s160123.page';
import { S160123tPage } from './s160123t/s160123t.page';
import { S160124Page } from './s160124/s160124.page';
import { S160125Page } from './s160125/s160125.page';
import { S160126Page } from './s160126/s160126.page';
import { S160127Page } from './s160127/s160127.page';
import { S160128Page } from './s160128/s160128.page';
import { S160129Page } from './s160129/s160129.page';
import { S160129tPage } from './s160129t/s160129t.page';
import { S160130Page } from './s160130/s160130.page';
import { S160131Page } from './s160131/s160131.page';
import { S160133Page } from './s160133/s160133.page';
import { S160134Page } from './s160134/s160134.page';
import { S160134tPage } from './s160134t/s160134t.page';
import { S160135Page } from './s160135/s160135.page';
import { S160136Page } from './s160136/s160136.page';
import { S160137Page } from './s160137/s160137.page';
import { S160138Page } from './s160138/s160138.page';
import { S160139Page } from './s160139/s160139.page';
import { S160140Page } from './s160140/s160140.page';
import { S160140tPage } from './s160140t/s160140t.page';
import { S160141Page } from './s160141/s160141.page';
import { S160142Page } from './s160142/s160142.page';
import { S160143Page } from './s160143/s160143.page';
import { S160144Page } from './s160144/s160144.page';
import { S160145Page } from './s160145/s160145.page';
import { S160146Page } from './s160146/s160146.page';
import { S160147Page } from './s160147/s160147.page';
import { S160148Page } from './s160148/s160148.page';
import { S160149Page } from './s160149/s160149.page';
import { S160150Page } from './s160150/s160150.page';
import { S160151Page } from './s160151/s160151.page';
import { S160152Page } from './s160152/s160152.page';
import { S160153Page } from './s160153/s160153.page';
import { S160154Page } from './s160154/s160154.page';
import { S160155Page } from './s160155/s160155.page';
import { S160156Page } from './s160156/s160156.page';
import { S160157Page } from './s160157/s160157.page';
import { S160158Page } from './s160158/s160158.page';
import { S160159Page } from './s160159/s160159.page';
import { S160160Page } from './s160160/s160160.page';
import { S160161Page } from './s160161/s160161.page';
import { S160162Page } from './s160162/s160162.page';
import { S160163Page } from './s160163/s160163.page';
import { S160164Page } from './s160164/s160164.page';
import { S160165Page } from './s160165/s160165.page';
import { S160166Page } from './s160166/s160166.page';
import { S160167Page } from './s160167/s160167.page';
import { S160168Page } from './s160168/s160168.page';
import { S160102Page } from './s160102/s160102.page';
import { S160132Page } from './s160132/s160132.page';

@NgModule({
  declarations: [
    S160001Page,
    S160002Page,
    S160003Page,
    S160004Page, 
    S160004tPage,    
    S160005Page,
    S160006Page,
    S160007Page,
    S160008Page,
    S160009Page,
    S160010Page,
    S160011Page,
    S160012Page,
    S160013Page,
    S160014Page,
    S160015Page,
    S160016Page,    
    S160017Page,
    S160018Page,
    S160019Page,
    S160020Page,
    S160021Page,
    S160022Page,
    S160023Page,
    S160024Page,
    S160025Page,
    S160026Page,
    S160026tPage,
    S160027Page,
    S160028Page,
    S160029Page,
    S160030Page,
    S160031Page,
    S160032Page,
    S160033Page,
    S160034Page,
    S160035Page,
    S160036Page,
    S160037Page,
    S160038Page,
    S160039Page,
    S160040Page,
    S160041Page,
    S160042Page,
    S160043Page,
    S160044Page,
    S160044tPage,
    S160045Page,
    S160046Page,
    S160047Page,
    S160048Page,
    S160048tPage,
    S160049Page,
    S160050Page,
    S160051Page,
    S160051tPage,
    S160052Page,
    S160053Page,
    S160054Page,
    S160055Page,
    S160056Page,
    S160057Page,
    S160057tPage,
    S160058Page,
    S160059Page,
    S160060Page,
    S160061Page,
    S160061tPage,
    S160062Page,
    S160063Page,
    S160064Page,
    S160065Page,
    S160066Page,
    S160066tPage,
    S160067Page,    
    S160068Page,
    S160069Page,
    S160070Page,
    S160070tPage,
    S160071Page,
    S160072Page,
    S160073Page,
    S160074Page,
    S160075Page,
    S160076Page,
    S160077Page,
    S160078Page,
    S160079Page,
    S160080Page,    
    S160081Page,
    S160081tPage,
    S160082Page,
    S160083Page,
    S160083tPage,
    S160084Page,
    S160085Page,
    S160086Page,
    S160087Page,
    S160088Page,
    S160088tPage,
    S160089Page,
    S160090Page,
    S160091Page,
    S160092Page,
    S160093Page,
    S160094Page,
    S160095Page,
    S160096Page,
    S160096tPage,
    S160097Page,    
    S160098Page,
    S160099Page,
    S160100Page,
    S160101Page,
    S160101tPage,
    S160102Page,
    S160103Page, 
    S160104Page, 
    S160105Page, 
    S160106Page, 
    S160107Page, 
    S160107tPage, 
    S160108Page, 
    S160109Page, 
    S160110Page, 
    S160111Page, 
    S160112Page, 
    S160113Page, 
    S160114Page, 
    S160115Page, 
    S160116Page, 
    S160117Page, 
    S160118Page, 
    S160118tPage, 
    S160119Page, 
    S160120Page, 
    S160121Page, 
    S160122Page, 
    S160123Page, 
    S160123tPage,
    S160124Page, 
    S160125Page, 
    S160126Page, 
    S160127Page, 
    S160128Page, 
    S160129Page, 
    S160129tPage,
    S160130Page, 
    S160131Page, 
    S160132Page,
    S160133Page, 
    S160134Page, 
    S160134tPage,
    S160135Page, 
    S160136Page, 
    S160137Page, 
    S160138Page, 
    S160139Page, 
    S160140Page, 
    S160140tPage,
    S160141Page, 
    S160142Page, 
    S160143Page, 
    S160144Page, 
    S160145Page, 
    S160146Page, 
    S160147Page, 
    S160148Page,
    S160149Page, 
    S160150Page, 
    S160151Page, 
    S160152Page, 
    S160153Page, 
    S160154Page, 
    S160155Page, 
    S160156Page, 
    S160157Page, 
    S160158Page, 
    S160159Page, 
    S160160Page, 
    S160161Page, 
    S160162Page, 
    S160163Page, 
    S160164Page, 
    S160165Page, 
    S160166Page, 
    S160167Page, 
    S160168Page,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CareerSuccessRoutingModule
  ],
  providers:[
    TeenagersService,
    
  ]
})
export class CareerSuccessModule { }
