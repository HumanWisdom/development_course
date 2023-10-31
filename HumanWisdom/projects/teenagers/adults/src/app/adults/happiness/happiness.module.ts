import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'

import {AdultsService} from '../adults.service';

import { S23001Page } from './s23001/s23001.page';  
import { S23002Page } from './s23002/s23002.page';  
import { S23003Page } from './s23003/s23003.page';  
import { S23004Page } from './s23004/s23004.page';  
import { S23004tPage } from './s23004t/s23004t.page';  
import { S23005Page } from './s23005/s23005.page';  
import { S23006Page } from './s23006/s23006.page';  
import { S23007Page } from './s23007/s23007.page'; 
import { S23008Page } from './s23008/s23008.page';  
import { S23009Page } from './s23009/s23009.page';  
import { S23010Page } from './s23010/s23010.page';  
import { S23011Page } from './s23011/s23011.page';  
import { S23012Page } from './s23012/s23012.page';  
import { S23013Page } from './s23013/s23013.page';  
import { S23014Page } from './s23014/s23014.page';  
import { S23015Page } from './s23015/s23015.page';  
import { S23015tPage } from './s23015t/s23015t.page';  
import { S23016Page } from './s23016/s23016.page';  
import { S23017Page } from './s23017/s23017.page';  
import { S23018Page } from './s23018/s23018.page'; 
import { S23019Page } from './s23019/s23019.page';  
import { S23019tPage } from './s23019t/s23019t.page';  
import { S23020Page } from './s23020/s23020.page';  
import { S23021Page } from './s23021/s23021.page';  
import { S23022Page } from './s23022/s23022.page'; 
import { S23022tPage } from './s23022t/s23022t.page';  
import { S23023Page } from './s23023/s23023.page';  
import { S23024Page } from './s23024/s23024.page';  
import { S23025Page } from './s23025/s23025.page'; 
import { S23025tPage } from './s23025t/s23025t.page';  
import { S23026Page } from './s23026/s23026.page';  
import { S23027Page } from './s23027/s23027.page';  
import { S23028Page } from './s23028/s23028.page';  
import { S23029Page } from './s23029/s23029.page';  
import { S23030Page } from './s23030/s23030.page';  
import { S23031Page } from './s23031/s23031.page';
import { S23032Page } from './s23032/s23032.page';  
import { S23032tPage } from './s23032t/s23032t.page';  
import { S23033Page } from './s23033/s23033.page';  
import { S23034Page } from './s23034/s23034.page';  
import { S23035Page } from './s23035/s23035.page';  
import { S23036Page } from './s23036/s23036.page';  
import { S23037Page } from './s23037/s23037.page';  
import { S23038Page } from './s23038/s23038.page';  
import { S23039Page } from './s23039/s23039.page';  
import { S23040Page } from './s23040/s23040.page';  
import { S23041Page } from './s23041/s23041.page';  
import { S23042Page } from './s23042/s23042.page';  
import { S23043Page } from './s23043/s23043.page';  
import { S23044Page } from './s23044/s23044.page';  
import { S23045Page } from './s23045/s23045.page';  
import { S23046Page } from './s23046/s23046.page';  
import { S23047Page } from './s23047/s23047.page';
import { S23047tPage } from './s23047t/s23047t.page';
import { S23048Page } from './s23048/s23048.page';  
import { S23049Page } from './s23049/s23049.page';  
import { S23049tPage } from './s23049t/s23049t.page';  
import { S23050Page } from './s23050/s23050.page';  
import { S23051Page } from './s23051/s23051.page';  
import { S23052Page } from './s23052/s23052.page';  
import { S23053Page } from './s23053/s23053.page';  
import { S23054Page } from './s23054/s23054.page';  
import { S23055Page } from './s23055/s23055.page';  
import { S23056Page } from './s23056/s23056.page';  
import { S23057Page } from './s23057/s23057.page';  
import { S23058Page } from './s23058/s23058.page';  
import { S23059Page } from './s23059/s23059.page';  
import { S23060Page } from './s23060/s23060.page';  
import { S23060tPage } from './s23060t/s23060t.page';  
import { S23061Page } from './s23061/s23061.page';  
import { S23062Page } from './s23062/s23062.page';  
import { S23063Page } from './s23063/s23063.page';  
import { S23064Page } from './s23064/s23064.page';  
import { S23065Page } from './s23065/s23065.page';  
import { S23066Page } from './s23066/s23066.page'; 
import { S23067Page } from './s23067/s23067.page';  
import { S23068Page } from './s23068/s23068.page'; 
import { S23069Page } from './s23069/s23069.page';  
import { S23070Page } from './s23070/s23070.page';  
import { S23071Page } from './s23071/s23071.page';  
import { S23072Page } from './s23072/s23072.page';  
import { S23073Page } from './s23073/s23073.page';  
import { S23074Page } from './s23074/s23074.page';  
import { S23075Page } from './s23075/s23075.page';  
import { S23076Page } from './s23076/s23076.page';  
import { S23077Page } from './s23077/s23077.page';  
import { S23078Page } from './s23078/s23078.page';  
import { S23079Page } from './s23079/s23079.page';  
import { S23080Page } from './s23080/s23080.page';  
import { S23081Page } from './s23081/s23081.page';  
import { S23081tPage } from './s23081t/s23081t.page';  
import { S23082Page } from './s23082/s23082.page';  
import { S23083Page } from './s23083/s23083.page'; 
import { S23083tPage } from './s23083t/s23083t.page';   
import { S23084Page } from './s23084/s23084.page';  
import { S23085Page } from './s23085/s23085.page';  
import { S23086Page } from './s23086/s23086.page';  
import { S23087Page } from './s23087/s23087.page';  
import { S23088Page } from './s23088/s23088.page';
import { S23089Page } from './s23089/s23089.page';  
import { S23090Page } from './s23090/s23090.page';  
import { S23091Page } from './s23091/s23091.page'; 
import { S23092Page } from './s23092/s23092.page';  
import { S23093Page } from './s23093/s23093.page';  
import { S23094Page } from './s23094/s23094.page';  
import { S23095Page } from './s23095/s23095.page';  
import { S23096Page } from './s23096/s23096.page';  
import { S23097Page } from './s23097/s23097.page'; 
import { S23097tPage } from './s23097t/s23097t.page'; 
import { S23098Page } from './s23098/s23098.page';  
import { S23099Page } from './s23099/s23099.page';  
import { S23100Page } from './s23100/s23100.page';
import { S23101Page } from './s23101/s23101.page';  
import { S23102Page } from './s23102/s23102.page';  
import { S23102tPage } from './s23102t/s23102t.page';  
import { S23103Page } from './s23103/s23103.page'; 
import { S23104Page } from './s23104/s23104.page';  
import { S23105Page } from './s23105/s23105.page'; 
import { S23106Page } from './s23106/s23106.page'; 
import { S23107Page } from './s23107/s23107.page';  
import { S23108Page } from './s23108/s23108.page';  
import { S23109Page } from './s23109/s23109.page';  
import { S23110Page } from './s23110/s23110.page';  
import { S23111Page } from './s23111/s23111.page';  
import { S23112Page } from './s23112/s23112.page';  
import { S23113Page } from './s23113/s23113.page';  
import { S23114Page } from './s23114/s23114.page';  
import { S23115Page } from './s23115/s23115.page';  
import { S23116Page } from './s23116/s23116.page';  
import { S23117Page } from './s23117/s23117.page';  
import { S23118Page } from './s23118/s23118.page';  
import { S23119Page } from './s23119/s23119.page';  
import { S23119tPage } from './s23119t/s23119t.page';  
import { S23120Page } from './s23120/s23120.page';  
import { S23121Page } from './s23121/s23121.page';  
import { S23122Page } from './s23122/s23122.page';  
import { S23122tPage } from './s23122t/s23122t.page';  
import { S23123Page } from './s23123/s23123.page';  
import { S23124Page } from './s23124/s23124.page';  
import { S23125Page } from './s23125/s23125.page'; 
import { S23125tPage } from './s23125t/s23125t.page';   
import { S23126Page } from './s23126/s23126.page';  
import { S23127Page } from './s23127/s23127.page';  
import { S23128Page } from './s23128/s23128.page';  
import { S23129Page } from './s23129/s23129.page';
import { S23129tPage } from './s23129t/s23129t.page';    
import { S23130Page } from './s23130/s23130.page';  
import { S23131Page } from './s23131/s23131.page';  
import { S23132Page } from './s23132/s23132.page';  
import { S23133Page } from './s23133/s23133.page'; 
import { S23134Page } from './s23134/s23134.page';  
import { S23135Page } from './s23135/s23135.page';  
import { S23136Page } from './s23136/s23136.page';  
import { S23137Page } from './s23137/s23137.page';  
import { S23137tPage } from './s23137t/s23137t.page';  
import { S23138Page } from './s23138/s23138.page';  
import { S23139Page } from './s23139/s23139.page';  
import { S23140Page } from './s23140/s23140.page';  
import { S23141Page } from './s23141/s23141.page';  
import { S23142Page } from './s23142/s23142.page';  
import { S23143Page } from './s23143/s23143.page';  
import { S23144Page } from './s23144/s23144.page'; 
import { S23144tPage } from './s23144t/s23144t.page';  
import { S23145Page } from './s23145/s23145.page';  
import { S23146Page } from './s23146/s23146.page';
import { S23146tPage } from './s23146t/s23146t.page'; 
import { S23147Page } from './s23147/s23147.page';  
import { S23148Page } from './s23148/s23148.page';  
import { S23149Page } from './s23149/s23149.page';  
import { S23150Page } from './s23150/s23150.page';  
import { S23151Page } from './s23151/s23151.page';  
import { S23152Page } from './s23152/s23152.page';  
import { S23153Page } from './s23153/s23153.page';  
import { S23154Page } from './s23154/s23154.page';  
import { S23155Page } from './s23155/s23155.page';  
import { S23156Page } from './s23156/s23156.page';  
import { S23157Page } from './s23157/s23157.page';
import { S23158Page } from './s23158/s23158.page';  
import { S23159Page } from './s23159/s23159.page';  
import { S23160Page } from './s23160/s23160.page';  
import { S23161Page } from './s23161/s23161.page';  
import { S23161tPage } from './s23161t/s23161t.page';  
import { S23162Page } from './s23162/s23162.page';  
import { S23163Page } from './s23163/s23163.page';  
import { S23164Page } from './s23164/s23164.page';
import { S23164tPage } from './s23164t/s23164t.page';    
import { S23165Page } from './s23165/s23165.page';  
import { S23166Page } from './s23166/s23166.page'; 
import { S23167Page } from './s23167/s23167.page';  
import { S23168Page } from './s23168/s23168.page';  
import { S23169Page } from './s23169/s23169.page';  
import { S23170Page } from './s23170/s23170.page'; 
import { S23171Page } from './s23171/s23171.page';  
import { S23172Page } from './s23172/s23172.page';  
import { S23173Page } from './s23173/s23173.page'; 
import { S23174Page } from './s23174/s23174.page';  
import { S23175Page } from './s23175/s23175.page';  
import { S23176Page } from './s23176/s23176.page';  
import { S23177Page } from './s23177/s23177.page';  
import { S23178Page } from './s23178/s23178.page';  
import { S23179Page } from './s23179/s23179.page'; 
import { S23180Page } from './s23180/s23180.page';
import { S23181Page } from './s23181/s23181.page';  
import { S23181p1Page } from './s23181p1/s23181p1.page';  
import { S23181p2Page } from './s23181p2/s23181p2.page';  
import { S23181p3Page } from './s23181p3/s23181p3.page';  
import { S23181p4Page } from './s23181p4/s23181p4.page';  
import { S23182Page } from './s23182/s23182.page';  
import { S23183Page } from './s23183/s23183.page';  
import { S23184Page } from './s23184/s23184.page'; 

import { HappinessRoutingModule } from './happiness-routing.module';

@NgModule({
  declarations: [    
    S23001Page ,
    S23002Page ,
    S23003Page ,
    S23004Page ,
    S23004tPage ,
    S23005Page ,
    S23006Page ,
    S23007Page ,
    S23008Page ,    
    S23009Page ,
    S23010Page ,
    S23011Page ,
    S23012Page ,
    S23013Page ,   
    S23014Page ,
    S23015Page ,
    S23015tPage ,
    S23016Page ,
    S23017Page ,
    S23018Page ,
    S23019Page ,
    S23019tPage ,
    S23020Page ,
    S23021Page ,
    S23022Page ,
    S23022tPage ,
    S23023Page ,
    S23024Page ,
    S23025Page ,
    S23025tPage ,
    S23026Page ,
    S23027Page ,
    S23028Page ,
    S23029Page ,
    S23030Page ,   
    S23031Page ,
    S23032Page ,
    S23032tPage ,
    S23033Page ,
    S23034Page ,    
    S23035Page ,
    S23036Page ,   
    S23037Page ,
    S23038Page ,
    S23039Page ,
    S23040Page ,
    S23041Page ,
    S23042Page ,
    S23043Page ,
    S23044Page ,
    S23045Page ,
    S23046Page ,
    S23047Page ,
    S23047tPage ,
    S23048Page ,
    S23049Page ,
    S23049tPage ,
    S23050Page ,
    S23051Page ,
    S23052Page ,
    S23053Page ,
    S23054Page ,
    S23055Page ,
    S23056Page ,
    S23057Page ,
    S23058Page ,
    S23059Page ,    
    S23060Page ,
    S23060tPage ,
    S23061Page ,
    S23062Page ,
    S23063Page ,
    S23064Page ,
    S23065Page ,
    S23066Page ,
    S23067Page ,
    S23068Page ,
    S23069Page ,
    S23070Page ,    
    S23071Page ,
    S23072Page ,
    S23073Page ,
    S23074Page ,
    S23075Page ,
    S23076Page ,
    S23077Page ,
    S23078Page ,   
    S23079Page ,
    S23080Page ,
    S23081Page ,
    S23081tPage ,
    S23082Page ,
    S23083Page ,
    S23083tPage ,
    S23084Page ,
    S23085Page ,
    S23086Page ,
    S23087Page ,
    S23088Page ,
    S23089Page ,
    S23090Page ,   
    S23091Page ,
    S23092Page ,
    S23093Page ,
    S23094Page ,
    S23095Page ,
    S23096Page ,
    S23097Page ,
    S23097tPage ,
    S23098Page ,
    S23099Page ,   
    S23100Page ,
    S23101Page ,
    S23102Page ,
    S23102tPage ,
    S23103Page ,
    S23104Page ,
    S23105Page ,    
    S23106Page ,
    S23107Page ,
    S23108Page ,
    S23109Page ,
    S23110Page ,
    S23111Page ,
    S23112Page ,
    S23113Page ,
    S23114Page ,
    S23115Page ,
    S23116Page ,
    S23117Page ,
    S23118Page ,
    S23119Page ,
    S23119tPage ,
    S23120Page ,
    S23121Page ,
    S23122Page ,
    S23122tPage ,
    S23123Page ,
    S23124Page ,
    S23125Page ,
    S23125tPage ,
    S23126Page ,
    S23127Page ,
    S23128Page ,
    S23129Page ,
    S23129tPage ,
    S23130Page ,
    S23131Page ,
    S23132Page ,
    S23133Page ,    
    S23134Page ,
    S23135Page ,   
    S23136Page ,
    S23137Page ,
    S23137tPage ,
    S23138Page ,
    S23139Page ,    
    S23140Page ,
    S23141Page ,
    S23142Page ,    
    S23143Page ,
    S23144Page ,
    S23144tPage ,   
    S23145Page ,
    S23146Page ,
    S23146tPage ,
    S23147Page ,
    S23148Page ,
    S23149Page ,
    S23150Page ,
    S23151Page ,
    S23152Page ,
    S23153Page ,
    S23154Page ,
    S23155Page ,
    S23156Page ,
    S23157Page ,
    S23158Page ,
    S23159Page ,
    S23160Page ,
    S23161Page ,
    S23161tPage ,
    S23162Page ,
    S23163Page ,
    S23164Page ,
    S23164tPage ,
    S23165Page ,
    S23166Page ,
    S23167Page ,
    S23168Page ,
    S23169Page ,
    S23170Page ,
    S23171Page ,
    S23172Page ,
    S23173Page ,
    S23174Page ,   
    S23175Page ,
    S23176Page ,
    S23177Page ,
    S23178Page ,
    S23179Page ,   
    S23180Page ,
    S23181Page ,
    S23181p1Page ,
    S23181p2Page ,
    S23181p3Page ,
    S23181p4Page ,
    S23182Page ,
    S23183Page ,
    S23184Page ,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HappinessRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class HappinessModule { }
