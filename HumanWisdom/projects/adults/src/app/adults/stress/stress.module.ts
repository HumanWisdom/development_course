import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

import { S44001Page } from './s44001/s44001.page';  
import { S44002Page } from './s44002/s44002.page';  
import { S44003Page } from './s44003/s44003.page';  
import { S44004Page } from './s44004/s44004.page';  
import { S44005Page } from './s44005/s44005.page';  
import { S44006Page } from './s44006/s44006.page';  
import { S44007Page } from './s44007/s44007.page'; 
import { S44007tPage } from './s44007t/s44007t.page';  
import { S44008Page } from './s44008/s44008.page';  
import { S44009Page } from './s44009/s44009.page';  
import { S44010Page } from './s44010/s44010.page';  
import { S44011Page } from './s44011/s44011.page';  
import { S44011tPage } from './s44011t/s44011t.page';  
import { S44012Page } from './s44012/s44012.page';  
import { S44013Page } from './s44013/s44013.page';  
import { S44013tPage } from './s44013t/s44013t.page';  
import { S44014Page } from './s44014/s44014.page';  
import { S44015Page } from './s44015/s44015.page';  
import { S44016Page } from './s44016/s44016.page';  
import { S44017Page } from './s44017/s44017.page';  
import { S44018Page } from './s44018/s44018.page';  
import { S44019Page } from './s44019/s44019.page';  
import { S44020Page } from './s44020/s44020.page';  
import { S44021Page } from './s44021/s44021.page';  
import { S44022Page } from './s44022/s44022.page';  
import { S44023Page } from './s44023/s44023.page';  
import { S44024Page } from './s44024/s44024.page';  
import { S44025Page } from './s44025/s44025.page';  
import { S44026Page } from './s44026/s44026.page';  
import { S44027Page } from './s44027/s44027.page';  
import { S44028Page } from './s44028/s44028.page';  
import { S44029Page } from './s44029/s44029.page';  
import { S44030Page } from './s44030/s44030.page';  
import { S44031Page } from './s44031/s44031.page';  
import { S44032Page } from './s44032/s44032.page';  
import { S44033Page } from './s44033/s44033.page';  
import { S44034Page } from './s44034/s44034.page';  
import { S44035Page } from './s44035/s44035.page';  
import { S44036Page } from './s44036/s44036.page';  
import { S44037Page } from './s44037/s44037.page';  
import { S44038Page } from './s44038/s44038.page';  
import { S44039Page } from './s44039/s44039.page';  
import { S44040Page } from './s44040/s44040.page';  
import { S44040tPage } from './s44040t/s44040t.page';  
import { S44041Page } from './s44041/s44041.page';  
import { S44042Page } from './s44042/s44042.page';  
import { S44043Page } from './s44043/s44043.page';  
import { S44043tPage } from './s44043t/s44043t.page';  
import { S44044Page } from './s44044/s44044.page';  
import { S44045Page } from './s44045/s44045.page';  
import { S44046Page } from './s44046/s44046.page';  
import { S44047Page } from './s44047/s44047.page';
import { S44047tPage } from './s44047t/s44047t.page';  
import { S44048Page } from './s44048/s44048.page';  
import { S44049Page } from './s44049/s44049.page';  
import { S44050Page } from './s44050/s44050.page';  
import { S44051Page } from './s44051/s44051.page';  
import { S44051tPage } from './s44051t/s44051t.page';  
import { S44052Page } from './s44052/s44052.page';  
import { S44053Page } from './s44053/s44053.page';  
import { S44054Page } from './s44054/s44054.page';  
import { S44055Page } from './s44055/s44055.page';  
import { S44056Page } from './s44056/s44056.page';  
import { S44057Page } from './s44057/s44057.page';  
import { S44058Page } from './s44058/s44058.page';  
import { S44059Page } from './s44059/s44059.page';  
import { S44059tPage } from './s44059t/s44059t.page';  
import { S44060Page } from './s44060/s44060.page';  
import { S44060tPage } from './s44060t/s44060t.page';  
import { S44061Page } from './s44061/s44061.page';  
import { S44062Page } from './s44062/s44062.page';  
import { S44063Page } from './s44063/s44063.page';  
import { S44063tPage } from './s44063t/s44063t.page';  
import { S44064Page } from './s44064/s44064.page';  
import { S44065Page } from './s44065/s44065.page';  
import { S44066Page } from './s44066/s44066.page'; 
import { S44066tPage } from './s44066t/s44066t.page';  
import { S44067Page } from './s44067/s44067.page';  
import { S44068Page } from './s44068/s44068.page'; 
import { S44068tPage } from './s44068t/s44068t.page';  
import { S44069Page } from './s44069/s44069.page';  
import { S44070Page } from './s44070/s44070.page';  
import { S44071Page } from './s44071/s44071.page';  
import { S44071tPage } from './s44071t/s44071t.page';  
import { S44072Page } from './s44072/s44072.page';  
import { S44073Page } from './s44073/s44073.page';  
import { S44074Page } from './s44074/s44074.page';  
import { S44074tPage } from './s44074t/s44074t.page';  
import { S44075Page } from './s44075/s44075.page';  
import { S44076Page } from './s44076/s44076.page'; 
import { S44077Page } from './s44077/s44077.page';  
import { S44078Page } from './s44078/s44078.page';  
import { S44079Page } from './s44079/s44079.page';  
import { S44080Page } from './s44080/s44080.page'; 
import { S44081Page } from './s44081/s44081.page';  
import { S44082Page } from './s44082/s44082.page';  
import { S44083Page } from './s44083/s44083.page';  
import { S44084Page } from './s44084/s44084.page';  
import { S44084tPage } from './s44084t/s44084t.page';  
import { S44085Page } from './s44085/s44085.page'; 
import { S44086Page } from './s44086/s44086.page';  
import { S44087Page } from './s44087/s44087.page';  
import { S44087tPage } from './s44087t/s44087t.page';  
import { S44088Page } from './s44088/s44088.page';
import { S44088tPage } from './s44088t/s44088t.page';    
import { S44089Page } from './s44089/s44089.page';  
import { S44090Page } from './s44090/s44090.page';  
import { S44091Page } from './s44091/s44091.page'; 
import { S44091tPage } from './s44091t/s44091t.page';  
import { S44092Page } from './s44092/s44092.page';  
import { S44093Page } from './s44093/s44093.page';  
import { S44094Page } from './s44094/s44094.page';  
import { S44094tPage } from './s44094t/s44094t.page';  
import { S44095Page } from './s44095/s44095.page';  
import { S44096Page } from './s44096/s44096.page'; 
import { S44097Page } from './s44097/s44097.page'; 
import { S44097tPage } from './s44097t/s44097t.page';  
import { S44098Page } from './s44098/s44098.page';  
import { S44099Page } from './s44099/s44099.page';  
import { S44100Page } from './s44100/s44100.page';
import { S44100tPage } from './s44100t/s44100t.page';  
import { S44101Page } from './s44101/s44101.page';  
import { S44102Page } from './s44102/s44102.page';  
import { S44103Page } from './s44103/s44103.page'; 
import { S44103tPage } from './s44103t/s44103t.page';  
import { S44104Page } from './s44104/s44104.page';  
import { S44105Page } from './s44105/s44105.page';  
import { S44106Page } from './s44106/s44106.page'; 
import { S44106tPage } from './s44106t/s44106t.page';  
import { S44107Page } from './s44107/s44107.page';  
import { S44108Page } from './s44108/s44108.page';  
import { S44109Page } from './s44109/s44109.page';  
import { S44109tPage } from './s44109t/s44109t.page';  
import { S44110Page } from './s44110/s44110.page';  
import { S44111Page } from './s44111/s44111.page';  
import { S44112Page } from './s44112/s44112.page';  
import { S44112tPage } from './s44112t/s44112t.page';  
import { S44113Page } from './s44113/s44113.page';  
import { S44114Page } from './s44114/s44114.page';  
import { S44115Page } from './s44115/s44115.page';  
import { S44116Page } from './s44116/s44116.page';  
import { S44116tPage } from './s44116t/s44116t.page';  
import { S44117Page } from './s44117/s44117.page';  
import { S44118Page } from './s44118/s44118.page';  
import { S44119Page } from './s44119/s44119.page';  
import { S44119tPage } from './s44119t/s44119t.page';  
import { S44120Page } from './s44120/s44120.page';  
import { S44121Page } from './s44121/s44121.page';  
import { S44122Page } from './s44122/s44122.page';  
import { S44122tPage } from './s44122t/s44122t.page';  
import { S44123Page } from './s44123/s44123.page';  
import { S44124Page } from './s44124/s44124.page';  
import { S44125Page } from './s44125/s44125.page';  
import { S44125tPage } from './s44125t/s44125t.page';  
import { S44126Page } from './s44126/s44126.page';  
import { S44127Page } from './s44127/s44127.page';  
import { S44128Page } from './s44128/s44128.page';  
import { S44128tPage } from './s44128t/s44128t.page';  
import { S44129Page } from './s44129/s44129.page';  
import { S44130Page } from './s44130/s44130.page';  
import { S44131Page } from './s44131/s44131.page';  
import { S44132Page } from './s44132/s44132.page';  
import { S44133Page } from './s44133/s44133.page';  
import { S44134Page } from './s44134/s44134.page';  
import { S44135Page } from './s44135/s44135.page';  
import { S44136Page } from './s44136/s44136.page';  
import { S44137Page } from './s44137/s44137.page';  
import { S44138Page } from './s44138/s44138.page';  
import { S44138tPage } from './s44138t/s44138t.page';  
import { S44139Page } from './s44139/s44139.page';  
import { S44140Page } from './s44140/s44140.page';  
import { S44140tPage } from './s44140t/s44140t.page';  
import { S44141Page } from './s44141/s44141.page';  
import { S44142Page } from './s44142/s44142.page';  
import { S44142tPage } from './s44142t/s44142t.page';  
import { S44143Page } from './s44143/s44143.page';  
import { S44144Page } from './s44144/s44144.page'; 
import { S44144tPage } from './s44144t/s44144t.page';  
import { S44145Page } from './s44145/s44145.page';  
import { S44146Page } from './s44146/s44146.page'; 
import { S44146tPage } from './s44146t/s44146t.page';  
import { S44147Page } from './s44147/s44147.page';  
import { S44148Page } from './s44148/s44148.page';  
import { S44149Page } from './s44149/s44149.page';  
import { S44149tPage } from './s44149t/s44149t.page';  
import { S44150Page } from './s44150/s44150.page';  
import { S44151Page } from './s44151/s44151.page';  
import { S44152Page } from './s44152/s44152.page';  
import { S44153Page} from './s44153/s44153.page';  
import { S44154Page } from './s44154/s44154.page'; 
import { S44155Page } from './s44155/s44155.page';  
import { S44156Page } from './s44156/s44156.page';  
import { S44156tPage } from './s44156t/s44156t.page';  
import { S44157Page } from './s44157/s44157.page';
import { S44157tPage } from './s44157t/s44157t.page';    
import { S44158Page } from './s44158/s44158.page';  
import { S44159Page } from './s44159/s44159.page';  
import { S44159tPage } from './s44159t/s44159t.page';  
import { S44160Page } from './s44160/s44160.page';  
import { S44161Page } from './s44161/s44161.page';  
import { S44161tPage } from './s44161t/s44161t.page';  
import { S44162Page } from './s44162/s44162.page';  
import { S44163Page } from './s44163/s44163.page';  
import { S44164Page } from './s44164/s44164.page';  
import { S44165Page } from './s44165/s44165.page';  
import { S44166Page } from './s44166/s44166.page'; 
import { S44167Page } from './s44167/s44167.page';  
import { S44167tPage } from './s44167t/s44167t.page';  
import { S44168Page } from './s44168/s44168.page'; 
import { S44169Page } from './s44169/s44169.page';  
import { S44170Page } from './s44170/s44170.page'; 
import { S44170tPage } from './s44170t/s44170t.page'; 
import { S44171Page } from './s44171/s44171.page';  
import { S44172Page } from './s44172/s44172.page'; 
import { S44173Page } from './s44173/s44173.page'; 
import { S44173tPage } from './s44173t/s44173t.page'; 
import { S44174Page } from './s44174/s44174.page'; 
import { S44175Page } from './s44175/s44175.page';  
import { S44175tPage } from './s44175t/s44175t.page';  
import { S44176Page } from './s44176/s44176.page';  
import { S44177Page } from './s44177/s44177.page';  
import { S44178Page } from './s44178/s44178.page';  
import { S44178tPage } from './s44178t/s44178t.page';  
import { S44179Page } from './s44179/s44179.page';  
import { S44180Page } from './s44180/s44180.page';
import { S44180tPage } from './s44180t/s44180t.page';  
import { S44181Page } from './s44181/s44181.page';  
import { S44182Page } from './s44182/s44182.page';  
import { S44183Page } from './s44183/s44183.page';  
import { S44184Page } from './s44184/s44184.page';  
import { S44185Page } from './s44185/s44185.page';  
import { S44186Page } from './s44186/s44186.page';  
import { S44187Page } from './s44187/s44187.page';  
import { S44188Page } from './s44188/s44188.page';  
import { S44188tPage } from './s44188t/s44188t.page';  
import { S44189Page } from './s44189/s44189.page';
import { S44189tPage } from './s44189t/s44189t.page';    
import { S44190Page } from './s44190/s44190.page';  
import { S44191Page } from './s44191/s44191.page';  
import { S44192Page } from './s44192/s44192.page';  
import { S44192tPage } from './s44192t/s44192t.page';  
import { S44193Page } from './s44193/s44193.page';  
import { S44194Page } from './s44194/s44194.page';  
import { S44194tPage } from './s44194t/s44194t.page';  
import { S44195Page } from './s44195/s44195.page'; 
import { S44196Page } from './s44196/s44196.page';  
import { S44197Page } from './s44197/s44197.page';
import { S44197tPage } from './s44197t/s44197t.page';  
import { S44198Page } from './s44198/s44198.page';  
import { S44199Page } from './s44199/s44199.page'; 
import { S44200Page } from './s44200/s44200.page';
import { S44200tPage } from './s44200t/s44200t.page';  
import { S44201Page } from './s44201/s44201.page';  
import { S44202Page } from './s44202/s44202.page';  
import { S44203Page } from './s44203/s44203.page';  
import { S44204Page } from './s44204/s44204.page';  
import { S44204tPage } from './s44204t/s44204t.page';  
import { S44205Page } from './s44205/s44205.page';  
import { S44206Page } from './s44206/s44206.page';  
import { S44207Page } from './s44207/s44207.page'; 
import { S44207tPage } from './s44207t/s44207t.page';  
import { S44208Page } from './s44208/s44208.page';  
import { S44209Page } from './s44209/s44209.page';  
import { S44210Page } from './s44210/s44210.page'; 
import { S44210tPage } from './s44210t/s44210t.page';  
import { S44211Page } from './s44211/s44211.page';  
import { S44212Page } from './s44212/s44212.page';  
import { S44213Page } from './s44213/s44213.page'; 
import { S44213tPage } from './s44213t/s44213t.page';  
import { S44214Page } from './s44214/s44214.page';  
import { S44215Page } from './s44215/s44215.page';  
import { S44216Page } from './s44216/s44216.page'; 
import { S44216tPage } from './s44216t/s44216t.page';  
import { S44217Page } from './s44217/s44217.page';  
import { S44218Page } from './s44218/s44218.page';  
import { S44219Page } from './s44219/s44219.page';
import { S44219tPage } from './s44219t/s44219t.page';
import { S44220Page } from './s44220/s44220.page';  
import { S44221Page } from './s44221/s44221.page';  
import { S44222Page } from './s44222/s44222.page'; 
import { S44222tPage } from './s44222t/s44222t.page';  
import { S44223Page } from './s44223/s44223.page';  
import { S44224Page } from './s44224/s44224.page';  
import { S44225Page } from './s44225/s44225.page';  
import { S44225tPage } from './s44225t/s44225t.page';  
import { S44226Page } from './s44226/s44226.page'; 
import { S44227Page } from './s44227/s44227.page';  
import { S44228Page } from './s44228/s44228.page';  
import { S44228tPage } from './s44228t/s44228t.page';  
import { S44229Page } from './s44229/s44229.page';  
import { S44230Page } from './s44230/s44230.page'; 
import { S44233Page } from './s44233/s44233.page';  
import { S44234Page } from './s44234/s44234.page';  
import { S44235Page } from './s44235/s44235.page';  
import { S44236Page } from './s44236/s44236.page';  
import { S44237Page } from './s44237/s44237.page';  
import { S44238Page } from './s44238/s44238.page';  
import { S44239Page } from './s44239/s44239.page';  
import { S44240Page } from './s44240/s44240.page';  

import { StressRoutingModule } from './stress-routing.module';

@NgModule({
  declarations: [
    S44001Page ,
    S44002Page ,
    S44003Page ,
    S44004Page ,    
    S44005Page ,
    S44006Page ,
    S44007Page ,
    S44007tPage ,
    S44008Page ,
    S44009Page ,
    S44010Page ,
    S44011Page ,
    S44011tPage ,
    S44012Page ,
    S44013Page ,
    S44013tPage ,
    S44014Page ,
    S44015Page ,
    S44016Page ,
    S44017Page ,   
    S44018Page ,    
    S44019Page ,
    S44020Page ,
    S44021Page ,
    S44022Page ,
    S44023Page ,
    S44024Page ,
    S44025Page ,
    S44026Page ,
    S44027Page ,
    S44028Page ,
    S44029Page ,
    S44030Page ,
    S44031Page ,
    S44032Page ,
    S44033Page ,   
    S44034Page ,
    S44035Page ,    
    S44036Page ,
    S44037Page ,   
    S44038Page ,    
    S44039Page ,
    S44040Page ,
    S44040tPage ,
    S44041Page ,
    S44042Page ,
    S44043Page ,
    S44043tPage ,
    S44044Page ,
    S44045Page ,
    S44046Page ,
    S44047Page ,
    S44047tPage ,
    S44048Page ,
    S44049Page ,
    S44050Page ,
    S44051Page ,
    S44051tPage ,
    S44052Page ,
    S44053Page ,
    S44054Page ,
    S44055Page ,
    S44056Page ,
    S44057Page ,
    S44058Page ,
    S44059Page ,
    S44059tPage ,
    S44060Page ,
    S44060tPage ,
    S44061Page ,
    S44062Page ,
    S44063Page ,
    S44063tPage ,
    S44064Page ,
    S44065Page ,
    S44066Page ,
    S44066tPage ,
    S44067Page ,
    S44068Page ,
    S44068tPage ,
    S44069Page ,
    S44070Page ,
    S44071Page ,
    S44071tPage ,
    S44072Page ,
    S44073Page ,
    S44074Page ,
    S44074tPage ,
    S44075Page ,
    S44076Page ,    
    S44077Page ,
    S44078Page ,
    S44079Page ,
    S44080Page ,   
    S44081Page ,
    S44082Page ,
    S44083Page ,
    S44084Page ,
    S44084tPage ,
    S44085Page ,   
    S44086Page ,
    S44087Page ,
    S44087tPage ,
    S44088Page ,
    S44088tPage ,
    S44089Page ,
    S44090Page ,
    S44091Page ,
    S44091tPage ,
    S44092Page ,
    S44093Page ,
    S44094Page ,
    S44094tPage ,
    S44095Page ,
    S44096Page ,   
    S44097Page ,
    S44097tPage ,
    S44098Page ,
    S44099Page ,    
    S44100Page ,
    S44100tPage ,
    S44101Page ,
    S44102Page ,
    S44103Page ,
    S44103tPage ,
    S44104Page ,    
    S44105Page ,
    S44106Page ,
    S44106tPage ,
    S44107Page ,   
    S44108Page ,
    S44109Page ,
    S44109tPage ,
    S44110Page ,
    S44111Page ,
    S44112Page ,
    S44112tPage ,
    S44113Page ,
    S44114Page ,
    S44115Page ,
    S44116Page ,
    S44116tPage ,
    S44117Page ,
    S44118Page ,
    S44119Page ,
    S44119tPage ,
    S44120Page ,
    S44121Page ,    
    S44122Page ,
    S44122tPage ,
    S44123Page ,
    S44124Page ,   
    S44125Page ,
    S44125tPage ,
    S44126Page ,
    S44127Page ,
    S44128Page ,
    S44128tPage ,
    S44129Page ,
    S44130Page ,
    S44131Page ,
    S44132Page ,
    S44133Page ,
    S44134Page ,
    S44135Page ,
    S44136Page ,
    S44137Page ,
    S44138Page ,
    S44138tPage ,
    S44139Page ,
    S44140Page ,
    S44140tPage ,
    S44141Page ,
    S44142Page ,
    S44142tPage ,
    S44143Page ,   
    S44144Page ,
    S44144tPage ,
    S44145Page ,
    S44146Page ,
    S44146tPage ,
    S44147Page ,
    S44148Page ,
    S44149Page ,
    S44149tPage ,
    S44150Page ,
    S44151Page ,
    S44152Page ,
    S44153Page ,
    S44154Page ,   
    S44155Page ,
    S44156Page ,
    S44156tPage ,
    S44157Page ,
    S44157tPage ,
    S44158Page ,
    S44159Page ,
    S44159tPage ,
    S44160Page ,
    S44161Page ,
    S44161tPage ,
    S44162Page ,
    S44163Page ,
    S44164Page ,
    S44165Page ,
    S44166Page ,   
    S44167Page ,
    S44167tPage ,
    S44168Page ,   
    S44169Page ,
    S44170Page , 
    S44170tPage ,     
    S44171Page ,
    S44172Page ,   
    S44173Page ,
    S44173tPage ,
    S44174Page ,    
    S44175Page ,
    S44175tPage ,
    S44176Page ,
    S44177Page ,
    S44178Page ,
    S44178tPage ,
    S44179Page ,
    S44180Page ,
    S44180tPage ,
    S44181Page ,   
    S44182Page ,
    S44183Page ,
    S44184Page ,
    S44185Page ,
    S44186Page ,   
    S44187Page ,
    S44188Page ,
    S44188tPage ,
    S44189Page ,
    S44189tPage ,
    S44190Page ,
    S44191Page ,
    S44192Page ,
    S44192tPage ,
    S44193Page ,
    S44194Page ,
    S44194tPage ,
    S44195Page ,    
    S44196Page ,
    S44197Page ,
    S44197tPage ,
    S44198Page ,
    S44199Page ,    
    S44200Page ,
    S44200tPage ,
    S44201Page ,
    S44202Page ,
    S44203Page ,
    S44204Page ,
    S44204tPage ,
    S44205Page ,
    S44206Page ,
    S44207Page ,
    S44207tPage ,
    S44208Page ,
    S44209Page ,
    S44210Page ,
    S44210tPage ,
    S44211Page ,
    S44212Page ,
    S44213Page ,
    S44213tPage ,
    S44214Page ,
    S44215Page ,
    S44216Page ,
    S44216tPage ,
    S44217Page ,
    S44218Page ,    
    S44219Page ,
    S44219tPage ,
    S44220Page ,
    S44221Page ,
    S44222Page ,
    S44222tPage ,
    S44223Page ,
    S44224Page ,
    S44225Page ,
    S44225tPage ,
    S44226Page ,    
    S44227Page ,
    S44228Page ,
    S44228tPage ,
    S44229Page ,
    S44230Page ,    
    S44233Page ,
    S44234Page ,
    S44235Page ,
    S44236Page ,
    S44237Page ,
    S44238Page ,
    S44239Page ,
    S44240Page ,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    StressRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class StressModule { }

